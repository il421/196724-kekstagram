'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();
var mqpacker = require('css-mqpacker');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var run = require('run-sequence');
var del = require('del');
var minify = require('gulp-csso');

gulp.task('style', function () {
  gulp.src('css/main.css')
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 1 version',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Opera versions',
        'last 2 Edge versions'
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(rename('main.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('scripts', function () {
  gulp.src('js/*.js')
  .pipe(gulp.dest('build/js'))
  .pipe(server.stream());
});

gulp.task('serve', function () {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['style']);
  gulp.watch('*.html').on('change', server.reload);
});

gulp.task('build', function (Fn) {
  run('clean', 'copy', 'style', Fn);
});

gulp.task('copy', function () {
  return gulp.src([
    'js/**',
    '*.html',
    '*.json',
    'img/**',
    'photos/**'
  ], {
    base: '.'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return del('build');
});
