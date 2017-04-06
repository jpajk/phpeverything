var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');

var mainPaths = {
    libs: './node_modules/',
    src: './assets/'
};

var libs = {
    'bootstrap': 'bootstrap/dist/'
};

var styles = {
    'bootstrap': 'css/*.min.css',
    'global': '**/*.scss',
    'css': '**/*.css'
};

var fonts = {
    'bootstrap': 'fonts/*'
};

var dest = {
    'main': './webroot/',
    'scripts': 'js',
    'styles': 'css',
    'fonts': 'fonts'
};

gulp.task('styles', function () {
    console.log(mainPaths.src + styles.css);
    gulp.src([
        mainPaths.libs + libs.bootstrap + styles.bootstrap,
        mainPaths.src + styles.css,
        mainPaths.src + styles.global
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dest.main + dest.styles));

    console.log((new Date().toString()) + ' :: Recompiled styles');
});

gulp.task('default', ['styles']);