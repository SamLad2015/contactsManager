'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch([
    'src/{app,components}/**/*.js',
    '!src/{app,components}/**/*.spec.js'
  ], ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
