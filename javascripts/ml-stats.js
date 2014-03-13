(function() {
    var dataUrl = 'http://issues.numenta.org:8081/maillist.json?callback=?',
        $statsDiv = $('#stats');
    
    function convertMailingListDataToDygraphFormat(data) {
        var sum = 0;
        return data.messages.byMonth.map(function(monthData) {
            sum += monthData.number;
            return [
                new Date(monthData.year, monthData.month), 
                monthData.number,
                sum
            ];
        });
    }

    function getEarliestDate(graphData) {
        var earliestDate = new Date();
        Object.keys(graphData).forEach(function(listName) {
            var earliestDateInThisList = graphData[listName][0][0];
            if (earliestDateInThisList < earliestDate) {
                earliestDate = earliestDateInThisList;
            }
        });
        return earliestDate;
    }

    function getDateOneMonthEarlierThan(date) {
        var currentMonth = date.getMonth(),
            currentYear = date.getFullYear(),
            currentDay = date.getDate(),
            oneMonthEarlierDate = undefined;
        if (currentMonth == 0) {
            oneMonthEarlierDate 
                = new Date(currentYear - 1, 11, currentDay);
        } else {
            oneMonthEarlierDate 
                = new Date(currentYear, currentMonth - 1, currentDay);
        }
        return oneMonthEarlierDate;
    }

    function padGraphDataStartingAt(date, graphData) {
        var dataCopy = graphData.slice(0);
        console.log(date);
        console.log(dataCopy);
        var earliestDate = dataCopy[0][0];
        while (earliestDate >= date) {
            // Add another month to the data with nothing in it, immediately 
            // preceding the earliest month in the data.
            earliestDate = getDateOneMonthEarlierThan(earliestDate);
            dataCopy.unshift([earliestDate, 0, 0]);
        }
        return dataCopy;
    }

    function normalizeGraphDataTimeframes(graphData) {
        var outputGraphData = {};
        console.log(graphData);
        var earliestDate = getEarliestDate(graphData);
        console.log('Earliest Date: ' + earliestDate);
        Object.keys(graphData).forEach(function(listName) {
            outputGraphData[listName] 
                = padGraphDataStartingAt(earliestDate, graphData[listName]);
        });
        return outputGraphData;
    }

    $.getJSON(dataUrl, function(data) {
        var mlStats = {};
        data.mailingLists.forEach(function(ml) {
            mlStats[ml.name] = convertMailingListDataToDygraphFormat(ml);
        });
        mlStats = normalizeGraphDataTimeframes(mlStats);
        $statsDiv.html('');
        Object.keys(mlStats).forEach(function(name) {
            var divName = name.replace(' ', '-'),
                data = mlStats[name];
            $statsDiv.append('<div id="' + divName + '"></div>');
            new Dygraph(
                document.getElementById(divName),
                data,
                {
                    title: name + ' Statistics By Month',
                    labels: ['Date', 'Month', 'Cumulative']
                }
            );
        });
    });
}());
