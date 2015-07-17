var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp.config')(),
    del = require('del'),
    taskListing = require('gulp-task-listing'),
    $ = require('gulp-load-plugins')({lazy: true});

// add a task to render the output
gulp.task('help', taskListing);

// dependency injection
gulp.task('inject', function() {
    var wiredep = require('wiredep').stream,
        options = config.getWiredepDefaultOptions();

    return gulp
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
