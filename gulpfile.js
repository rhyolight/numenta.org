var checkpages = require('check-pages');
var gulp = require('gulp');
var webserver = require('gulp-webserver');


gulp.task('serve', function (callback) {
  gulp.
    src('_site/').
    pipe(webserver({
      port: 8008
    }));

  callback();
});

gulp.task('checkpages', [ 'serve' ], function (callback) {
    var options = {
      pageUrls: [ 'http://localhost:8008/' ],
      checkLinks: true,
      onlySameDomain: true,
      queryHashes: true,
      noRedirects: true,
      noLocalLinks: false,
      noEmptyFragments: true,
      linksToIgnore: [],
      checkXhtml: false,
      checkCaching: true,
      checkCompression: true,
      maxResponseTime: 200,
      userAgent: 'custom-user-agent/1.2.3',
      summary: true
    };

  checkpages(console, options, callback);
});


gulp.task('default');

gulp.task('check', [ 'serve', 'checkpages' ]);
