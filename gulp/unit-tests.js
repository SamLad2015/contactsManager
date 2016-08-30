'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var bowerDeps = wiredep({
  directory: 'bower_components',
  exclude: ['bootstrap-sass-official'],
  dependencies: true,
  devDependencies: true
});

var testFiles = bowerDeps.js.concat([
  'src/{app,components}/**/*.module.js',
  'src/{app,components}/**/*.js'
]);

var configFile = 'test/karma.conf.js';

gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: configFile,
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

