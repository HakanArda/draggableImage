'use strict';

var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload

var config = {
    dest: 'dist'
}

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: config.dest
        },
        notify: false,
        logPrefix: 'Work Space'
    })
})

gulp.task('reloadSite', reload)
gulp.watch('dist/**/*', ['reloadSite'])
