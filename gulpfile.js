var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

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

gulp.task('init', [ 'lint' ], function () {

  // concat js files
  gulp.src('app/sources/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/build/js/'));

  // copy files to directory
  // gulp.src('app/sources/js/*.js')
  //   .pipe(gulp.dest('app/build/js/'));

});

gulp.task('default', [ 'lint', 'init' ]);
