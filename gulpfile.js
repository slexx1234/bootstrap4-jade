var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('examples', function () {
    gulp.src('examples/**/[^_]*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist/examples/'));
});

gulp.task('watch', function() {
    gulp.watch('examples/**/*.jade', ['examples']);
});

gulp.task('default', ['watch', 'examples']);