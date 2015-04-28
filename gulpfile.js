var checkpages = require('check-pages');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var webpack = require('gulp-webpack');

var port = process.env.TEST_PORT || 8008;


gulp.task('serve', function (callback) {
  gulp.src('_site/').pipe(webserver({ port: port }));
  callback();
});

gulp.task('checkpages', [ 'serve' ], function (callback) {
    var options = {
      pageUrls:         [ 'http://localhost:' + port ],
      checkLinks:       true,
      onlySameDomain:   true,
      queryHashes:      true,
      noRedirects:      true,
      noLocalLinks:     false,
      noEmptyFragments: true,
      linksToIgnore:    [],
      checkXhtml:       false,
      checkCaching:     true,
      checkCompression: false, // true for prod?
      maxResponseTime:  200,
      userAgent:        'custom-user-agent/1.2.3',
      summary:          false
    };

  checkpages(console, options, callback);
});

gulp.task('webpack', function () {
  return gulp.
    src('assets/js/base.js').
    pipe(webpack({
      module: {
        loaders: []
      },
      output: {
        filename: 'index.js'
      }
    })).
    pipe(gulp.dest('assets/js/bundle/'));
});


gulp.task('default', [], function () {});

gulp.task('check', [ 'serve', 'checkpages' ]);
