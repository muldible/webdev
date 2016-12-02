// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch("dist/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("dist/**/*.html").on('change', browserSync.reload);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch(['dist/css/**/*.css'], function () {
        reload("dist/css/**/*.css")
    });
});

// Default Task
gulp.task('default', ['sass', 'watch', 'browser-sync']);