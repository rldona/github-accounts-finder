var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp.config')(),
    del = require('del'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream,
        options = config.getWiredepDefaultOptions();

    gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.css)))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

// -----------------------------------------------
//  Gulp Start
// -----------------------------------------------

gulp.task('default', function() {
    console.log('Hello Gulp !!');
});
