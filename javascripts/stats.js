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

    $.getJSON(dataUrl, function(data) {
        var mlStats = {};
        data.mailingLists.forEach(function(ml) {
            mlStats[ml.name] = convertMailingListDataToDygraphFormat(ml);
        });
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
