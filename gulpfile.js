const gulp = require('gulp');
const LiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live', function() {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('serve', ['bundle', 'live'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3002",
    port: 3003
  });
});

gulp.task('bundle', function() {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
});

