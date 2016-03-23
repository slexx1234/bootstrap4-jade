var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('documentation', function () {
    gulp.src('documentation/src/**/[^_]*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('documentation/'));
});

gulp.task('watch', function() {
    gulp.watch('documentation/**/*.jade', ['documentation']);
});

gulp.task('default', ['watch', 'documentation']);