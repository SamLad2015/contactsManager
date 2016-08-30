'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser, extraOptions) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var options = {
      startPath: '/index.html',
      server: {
          baseDir: baseDir,
          middleware: middleware,
          routes: routes
      },
      browser: browser
  };

  for (var optionKey in extraOptions) {
      options[optionKey] = extraOptions[optionKey];
  }

  browserSync.instance = browserSync.init(files, options);

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'src',
    '.tmp'
  ], [
    '.tmp/{app,components}/**/*.css',
    'src/assets/images/**/*',
    'src/*.html',
    'src/{app,components}/**/*.html',
    'src/{app,components}/**/*.js',
    '!src/{app,components}/**/*.spec.js'
  ]);
});

