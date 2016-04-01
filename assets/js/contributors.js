/**
 * Contributors script
 */

'use strict';

(function () {

  var csvUrl =      '../resources/contributors.csv';
  var contribsUrl = 'http://tooling.numenta.org/contribStats';
  var headings =    [ 'Name', 'Github', 'Committer', 'Reviewer', 'Commits' ];
  var tmpl =        Handlebars.compile($("#contributor-table").html());

  function csvToJson(csv) {
    var contributors = [];
    var lines = csv.trim().split('\n');
    var header = lines.shift().split(',');

    lines.forEach(function(line) {
      var obj = {};
      var person = line.split(',');

      header.forEach(function(key, i) {
        if (person[i] == '0') {
          obj[key] = '';
        } else if (person[i] == '1') {
          obj[key] = '✔';
        } else {
          obj[key] = person[i];
        }
      });
      contributors.push(obj);
    });
    return contributors;
  }

  // Get contributor listing for initial table load.
  $.ajax(csvUrl).done(function(csv) {
    var $commitTable;
    var repoSlugs = [
      'numenta/nupic',
      'numenta/nupic.core',
      'numenta/htm.java',
      'numenta/nupic.research',
      'numenta/NAB'
    ];
    var contribData = [];
    var contribs = csvToJson(csv).map(function(contributor) {
      contributor.Commits = '';
      return contributor;
    });

    // Fill in the contributor count.
    $('#contrib-count').html('(' + contribs.length + ')');

    // Fill HTML template for table structure.
    $('#contributors').html(tmpl({
      headings: headings,
      contributors: contribs
    }));

    // Initialize the tablesorter object.
    $commitTable = $('table');
    $commitTable.tablesorter({
      sortList: [[3,0],[2,0],[0,0]]
    });

    // _.findIndex() clone
    var findIndex = function(arr, cond) {
      var i, x;
      for (i in arr) {
        x = arr[i];
        if (cond(x)) return parseInt(i);
      }
    };

    // Get the commit stats for incremental commit data injection into
    // table.
    function whenDone() {
      var allContributors = [];

      if (contribData.length == repoSlugs.length) {
        // Merge contribData into one list of sums.
        contribData.forEach(function(repoConfigData) {
          repoConfigData.forEach(function(contributor) {
            var existing = findIndex(allContributors, function(loopContrib) {
              return contributor.login == loopContrib.login;
            });
            if (existing > -1) {
              allContributors[existing].commits += contributor.commits;
              allContributors[existing].contributions += contributor.contributions;
            } else {
              allContributors.push(contributor);
            }
          });
        });

        // init for sorting
        $commitTable.find('tr td.commits').html('0');

        // Inject commit stats for each record for committer
        allContributors.forEach(function(contributor) {
          $commitTable.find('#' + contributor.login + ' td.commits')
            .html(contributor.commits);
        });

        // Trigger update on tablesorter for re-sort
        $commitTable.trigger('update');
      }
    }

    // Make a call for each repo we want to get contributor counts for.
    repoSlugs.forEach(function(repoSlug) {
      $.ajax({
        url:      contribsUrl,
        dataType: 'jsonp',
        data:     { repo: repoSlug },
        jsonp:    'callback',
        success:  function(data) {
          contribData.push(data[repoSlug]);
          whenDone();
        }
      });
    });
  });

})();
