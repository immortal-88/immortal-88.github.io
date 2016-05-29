/**
 * Created by apple on 28.05.16.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/scss/styles.scss', ['sass']);
});