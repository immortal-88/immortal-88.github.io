/**
 * Created by apple on 14.06.16.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// S A S S
gulp.task('sass', function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

// S A S S : W A T C H
gulp.task('sass:watch', function () {
    gulp.watch('app/scss/styles.scss', ['sass']);
});