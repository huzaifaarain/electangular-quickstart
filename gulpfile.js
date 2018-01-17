const gulp = require('gulp');
const pump = require('pump');
const plugins = require('gulp-load-plugins')();
gulp.task('appKernel', function (x) {
    pump([
        gulp.src(['src/boot.js','src/models/*.js','src/controllers/*.js']),
        plugins.concat('appKernel.js'),
        plugins.ngAnnotate(),
        plugins.uglify(),
        gulp.dest('build/')
    ],x);
});

gulp.task('views', function (x) {
    pump([
        gulp.src(['src/views/*.html','./index.html']),
        plugins.htmlmin({collapseWhitespace: true}),
        gulp.dest('build/')
    ],x);
});



gulp.task('default', ['appKernel','views']);