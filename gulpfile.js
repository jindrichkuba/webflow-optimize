var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

gulp.task('fonts', function(){
  return gulp.src('fonts/*')
    .pipe(gulp.dest('build/fonts'))
});

gulp.task('css', function(){
  return gulp.src(['css/normalize.css', 'css/webflow.css', 'yourstyle.webflow.css'])
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('images', function(){
  return gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
});

gulp.task('javascript', function(){
    return gulp.src('js/*')
      .pipe(minify())
      .pipe(gulp.dest('build/js'))
});

gulp.task('html', ['javascript', 'css', 'fonts', 'images'], function(){
  return gulp.src('*.html')
    .pipe(replace('<link href="css/normalize.css" rel="stylesheet" type="text/css">',''))
    .pipe(replace('<link href="css/webflow.css" rel="stylesheet" type="text/css">',''))
    .pipe(replace('css/yourstyle.webflow.css','css/style.min.css'))
    .pipe(replace('<script src="js/modernizr.js','<script async src="js/modernizr-min.js'))
    .pipe(replace('js/webflow.js','js/webflow-min.js'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
});

gulp.task('browser-sync', ['html'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('default', ['fonts', 'css', 'images', 'javascript', 'html', 'browser-sync']);
