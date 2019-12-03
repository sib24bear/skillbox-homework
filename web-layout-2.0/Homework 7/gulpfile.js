const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const del = require('del');
const rename = require('gulp-rename');

function minimizeCSS() {
  return gulp.src('./styles/css/main.css')
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(gulp.dest('./styles'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: true
    });
  gulp.watch('./styles/css/main.css', minimizeCSS);
  gulp.watch('./*.html', browserSync.reload);
}

function clean() {
  return del(['styles/main.min.css'])
}

function renameCSS() {
  return gulp.src('./styles/css/old_css/*.css')
  .pipe(rename({
    prefix: '_',
    extname: '.scss'
  }))
  .pipe(gulp.dest('./styles/scss/pages'));
}

gulp.task('style', minimizeCSS);
gulp.task('watch', watch);
gulp.task('default', gulp.series(clean, gulp.parallel(minimizeCSS), 'watch'));
gulp.task('rename', renameCSS);
