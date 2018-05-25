'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    del = require('del'),
    reload = browserSync.reload;

var vendorJsPaths = [
    'node_modules/jquery/dist/jquery.min.js'
];

var path = {
    prod: {
        html: 'prod/',
        js: 'prod/js/',
        css: 'prod/css/',
        img: 'prod/img/',
        fonts: 'prod/fonts/'
    },
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { 
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000
};

var buildConfig = {
    production : false
}

gulp.task('build-sass', function () {  
    gulp.src('scss/**/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('build-html', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true}));
});

gulp.task('clean', function() {
    return del.sync('build'); // Удаляем папку dist перед сборкой
});

gulp.task('browser-sync', function() {  
    browserSync(config);
});

gulp.task('build-js', function () {
    if(buildConfig.production){
        gulp.src(path.src.js)
            .pipe(rigger())
            .pipe(uglify())
            .pipe(gulp.dest(path.prod.js))
            .pipe(reload({stream: true})); 
    }else{
        gulp.src(path.src.js) //Найдем наш main файл
            .pipe(rigger()) //Прогоним через rigger
            .pipe(sourcemaps.init()) //Инициализируем sourcemap
            .pipe(uglify()) //Сожмем наш js
            .pipe(sourcemaps.write()) //Пропишем карты
            .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
            .pipe(reload({stream: true})); //И перезагрузим сервер
    }
});

gulp.task('build-vendor-js', function () {
    gulp.src(vendorJsPaths)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('build-style', function () {
    if(buildConfig.production){
        gulp.src(path.src.style)
            .pipe(sass())
            .pipe(prefixer())
            .pipe(cssmin())
            .pipe(gulp.dest(path.prod.css))
            .pipe(reload({stream: true}));
    }else{
        gulp.src(path.src.style) //Выберем наш main.scss
            .pipe(sourcemaps.init()) //То же самое что и с js
            .pipe(sass()) //Скомпилируем
            .pipe(prefixer()) //Добавим вендорные префиксы
            .pipe(cssmin()) //Сожмем
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css)) //И в build
            .pipe(reload({stream: true}));
    }
});

gulp.task('build-img', function(){
    var imgmin = gulp.src(path.src.img)
        .pipe(imagemin());
    if(buildConfig.production){
        imgmin.pipe(gulp.dest(path.prod.img));
    }else{
        imgmin.pipe(gulp.dest(path.build.img));
    }
        
});

gulp.task('build-fonts', function(){
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts)) 
        .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
    gulp.watch(path.watch.html, ['build-html']);
    gulp.watch(path.watch.style, ['build-style']);
    gulp.watch(path.watch.js, ['build-js']);
    gulp.watch(path.watch.vendorJs, ['build-vendor-js']);
    gulp.watch(path.watch.img, ['build-img']);
    gulp.watch(path.watch.fonts, ['build-fonts'])
});


gulp.task('build', [
    'clean',
    'build-html',
    'build-js',
    'build-style',
    'build-img',
    'build-fonts',
    'build-vendor-js'
]);

gulp.task('production', function(){
    buildConfig.production = true;
    gulp.start([
        'build-html',
        'build-js',
        'build-style',
        'build-img',
        'build-fonts',
        'build-vendor-js'
    ]);
    
});

gulp.task('default', ['build', 'browser-sync', 'watch']);