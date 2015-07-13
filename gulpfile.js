var gulp = require('gulp'),
    jshint = require('gulp-jshint');

// gulp.task('lint', function () {
//   return gulp.src('app/sources/js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });
//
// gulp.task('move', function () {
//   gulp.src('app/sources/js/*.js')
//     .pipe(gulp.dest('./app/build/js/'));
// });
//
// gulp.task('default', [ 'lint', 'move' ]);

gulp.task('lint', function () {
  return gulp.src('app/sources/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// identifies a dependent task must be complete before this one begins
gulp.task('init', [ 'lint' ], function () {

  // copy files
  gulp.src('app/sources/js/*.js')
    .pipe(gulp.dest('app/build/js/'));

});

gulp.task('default', [ 'lint', 'init' ]);
