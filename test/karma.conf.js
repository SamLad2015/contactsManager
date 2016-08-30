'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular/angular-route.js',
      'src/bower_components/angular-resource/angular-resource.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/{app,components}/** /*.js',
      'test/unit/** /*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    debugInfoEnabled:true,

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-json2js-preprocessor',
      'karma-coverage'
    ],

    preprocessors: {
      '**/*.json': ['ng-json2js'],
      'src/**/!(*spec).js': 'coverage'
    },

    reporters: [
      'progress', 'coverage'
    ],

    coverageReporter: {
      type: "html",
      dir: "coverage/"
    },

    ngJson2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'test/fixture/',
      // prepend this to the path
      prependPrefix: 'served/'
    }
  });
};
