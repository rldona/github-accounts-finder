var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp.config')(),
    del = require('del'),
    taskListing = require('gulp-task-listing'),
    $ = require('gulp-load-plugins')({lazy: true});

// -----------------------------------------------
//  Styles: SASS, fonts, images, etc...
// -----------------------------------------------

gulp.task('sass', function() {
    // log('Compile & compressed sass');
    return gulp
        .src('src/client/styles/scss/app.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sass({outputStyle: 'compressed'}))
        .pipe($.if(args.verbose, $.print(function(filepath) {
            return 'built file: ' + filepath;
        })))
        .pipe(gulp.dest('src/client/styles/css/'));
});

// -----------------------------------------------
//  SCSS Watcher
// -----------------------------------------------

gulp.task('watch', function() {
    gulp.watch([config.scss, config.js], ['sass']);
});

// -----------------------------------------------
//  Dependency injection
// -----------------------------------------------

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

gulp.task('default', ['sass', 'watch']);

// -----------------------------------------------
//  Add a task to render the output
// -----------------------------------------------

gulp.task('help', taskListing);
