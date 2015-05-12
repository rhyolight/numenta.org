var checkpages =  require('check-pages');
var gulp =        require('gulp');
var spawn =       require('child_process').spawn;
var webserver =   require('gulp-webserver');

var port = process.env.TEST_PORT || 8008;


// Individual Tasks

gulp.task('checkpages', function (done) {
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

  checkpages(console, options, done);
});

gulp.task('mocha-casperjs', function () {
  var child = spawn('mocha-casperjs');

  child.stdout.on('data', function (data) {
    process.stdout.write(data);
  });

  child.on('close', function (code) {
    var success = code === 0; // Will be 1 in the event of failure
    if(! success) throw new Error('Mocha-Casper: failed!');
    console.log('Mocha-Casper: success!');
  });
});

gulp.task('serve', function () {
  gulp.src('_site/').pipe(webserver({ port: port }));
});


// Task Compositions

gulp.task('default', [], function () {});

gulp.task('linkcheck', [ 'serve', 'checkpages' ]);

gulp.task('webtest', [ 'serve', 'mocha-casperjs' ]);
