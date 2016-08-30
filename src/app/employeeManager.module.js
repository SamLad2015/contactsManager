(function() {
  'use strict';

  angular.module('employeeManager', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'employeeManager.routing',
    'angular-underscore',
    'LocalStorageModule',
    'ui.sortable'
  ])
  .constant('angularMomentConfig', {
      timezone: 'GMT' // Default timezone: GMT
    });
})();
