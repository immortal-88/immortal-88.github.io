///**
// * Created by apple on 09.07.16.
// */
//
//'use strict';
//
//// R E Q U I R E
//var gulp = require('gulp'),
//    watch = require('gulp-watch'),
//    prefixer = require('gulp-autoprefixer'),
//    uglify = require('gulp-uglify'),
//    sass = require('gulp-sass'),
//    sourcemaps = require('gulp-sourcemaps'),
//    rigger = require('gulp-rigger'),
//    imagemin = require('gulp-imagemin'),
//    pngquant = require('imagemin-pngquant'),
//    rimraf = require('rimraf'),
//    browserSync = require("browser-sync"),
//    reload = browserSync.reload;
//
//// P A T H
//var path = {
//    build: { //Тут мы укажем куда складывать готовые после сборки файлы
//        html: 'build/',
//        js: 'build/js/',
//        css: 'build/css/',
//        img: 'build/img/',
//        fonts: 'build/fonts/'
//    },
//    src: { //Пути откуда брать исходники
//        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
//        js: 'src/js/main.js', //В стилях и скриптах нам понадобятся только main файлы
//        style: 'src/style/main.scss',
//        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
//        fonts: 'src/fonts/**/*.*'
//    },
//    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
//        html: 'src/**/*.html',
//        js: 'src/js/**/*.js',
//        style: 'src/style/**/*.scss',
//        img: 'src/img/**/*.*',
//        fonts: 'src/fonts/**/*.*'
//    },
//    clean: './build'
//};
//
//// S E R V E R
//var config = {
//    server: {
//        baseDir: "./build"
//    },
//    tunnel: true,
//    host: 'localhost',
//    port: 9000,
//    logPrefix: "Sanchez"
//};
//
//// T A S K S
//gulp.task('html:build', function () {
//    gulp.src(path.src.html) //Выберем файлы по нужному пути
//        .pipe(rigger()) //Прогоним через rigger
//        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
//        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
//});
//
//gulp.task('js:build', function () {
//    gulp.src(path.src.js) //Найдем наш main файл
//        .pipe(rigger()) //Прогоним через rigger
//        .pipe(sourcemaps.init()) //Инициализируем sourcemap
//        .pipe(uglify()) //Сожмем наш js
//        .pipe(sourcemaps.write()) //Пропишем карты
//        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//        .pipe(reload({stream: true})); //И перезагрузим сервер
//});
//
//gulp.task('style:build', function () {
//    gulp.src(path.src.style) //Выберем наш main.scss
//        .pipe(sourcemaps.init()) //То же самое что и с js
//        .pipe(sass()) //Скомпилируем
//        .pipe(prefixer()) //Добавим вендорные префиксы
//        //.pipe(cssmin()) //Сожмем
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest(path.build.css)) //И в build
//        .pipe(reload({stream: true}));
//});
//
//gulp.task('image:build', function () {
//    gulp.src(path.src.img) //Выберем наши картинки
//        .pipe(imagemin({ //Сожмем их
//            progressive: true,
//            svgoPlugins: [{removeViewBox: false}],
//            use: [pngquant()],
//            interlaced: true
//        }))
//        .pipe(gulp.dest(path.build.img)) //И бросим в build
//        .pipe(reload({stream: true}));
//});
//
//gulp.task('fonts:build', function() {
//    gulp.src(path.src.fonts)
//        .pipe(gulp.dest(path.build.fonts))
//});
//
//// T O T A L   T A S K
//gulp.task('build', [
//    'html:build',
//    'js:build',
//    'style:build',
//    'fonts:build',
//    'image:build'
//]);
//
//// W A T C H
//gulp.task('watch', function(){
//    watch([path.watch.html], function(event, cb) {
//        gulp.start('html:build');
//    });
//    watch([path.watch.style], function(event, cb) {
//        gulp.start('style:build');
//    });
//    watch([path.watch.js], function(event, cb) {
//        gulp.start('js:build');
//    });
//    watch([path.watch.img], function(event, cb) {
//        gulp.start('image:build');
//    });
//    watch([path.watch.fonts], function(event, cb) {
//        gulp.start('fonts:build');
//    });
//});
//
//// S T A R T   S E R V E R
//gulp.task('webserver', function () {
//    browserSync(config);
//});
//
//// C L E A N
//gulp.task('clean', function (cb) {
//    rimraf(path.clean, cb);
//});
//
//// P R O J E C T  C O M P I L A T I O N
//gulp.task('default', ['build', 'webserver', 'watch']);
//

var gulp = require('gulp');

var cssDev = jsDev = htmlDev = 'src/';
var cssProd = jsProd = htmlProd = 'app/';


/* CSS */
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');
var browserSync = require("browser-sync");
var fileinclude = require('gulp-file-include');
//var reload = browserSync.reload;

// S E R V E R
var config = {
    server: {
        baseDir: "./app"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Sanchez"
};

gulp.task('build-css', function () {
    return gulp.src([
            cssDev + '*/*/*/*.scss',
            cssDev + '*/*/*.scss',
            cssDev + '*/*.scss',
            cssDev + '*.scss',
            cssDev + '*/*/*/*.css',
            cssDev + '*/*/*.css',
            cssDev + '*/*.css',
            cssDev + '*.css'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cssClean({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssProd));
    //.pipe(reload({stream: true}));
});


gulp.task('build-ts', function () {
    return gulp.src([
            jsDev + '*/*/*/*.js',
            jsDev + '*/*/*.js',
            jsDev + '*/*.js',
            jsDev + '*.js'
        ])
        //.pipe(rigger())
        .pipe(gulp.dest(jsProd));
    //.pipe(reload({stream: true}));
});


gulp.task('watch', function () {
    gulp.watch([
        jsDev + '*/*/*/*.js',
        jsDev + '*/*/*.js',
        jsDev + '*/*.js',
        jsDev + '*.js'
    ], ['build-ts']);
    gulp.watch([
        cssDev + '*/*/*/*.scss',
        cssDev + '*/*/*.scss',
        cssDev + '*/*.scss',
        cssDev + '*.scss',
        cssDev + '*/*/*/*.css',
        cssDev + '*/*/*.css',
        cssDev + '*/*.css',
        cssDev + '*.css'
    ], ['build-css']);
    gulp.watch([
        htmlDev + '*/*/*/*.html',
        htmlDev + '*/*/*.html',
        htmlDev + '*/*.html',
        htmlDev + '*.html'
    ], ['html-dest']);
});

gulp.task('html-dest', function () {
    gulp.src([
            htmlDev + '*/*/*/*.html',
            htmlDev + '*/*/*.html',
            htmlDev + '*/*.html',
            htmlDev + '*.html'
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        //.pipe(rigger())
        .pipe(gulp.dest(htmlProd));
    //.pipe(reload({stream: true}));
});

// S T A R T   S E R V E R
gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['watch', 'build-ts', 'webserver', 'build-css', 'html-dest']);