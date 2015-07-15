var gulp = require('gulp'),
    config = require('./gulp.config')();

gulp.task('default', function() {
    console.log('Hello Gulp !!');
    console.log(config);
});
