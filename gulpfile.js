var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*').on('change', browserSync.reload);
});

// Compile Sass to CSS
gulp.task('sass', function() {
  gulp.src('scss/**/**/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass']);