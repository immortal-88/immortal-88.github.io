/**
 * Created by apple on 02.06.16.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('app/js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});