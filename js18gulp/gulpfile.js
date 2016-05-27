var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

// Concatenate
gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js/'));
});

// Uglify
gulp.task('compress', function () {
    return gulp.src('dist/js/all.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/min'));
});

// Photo optimization 
gulp.task('imgmin', function() {
	return gulp.src('app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
});