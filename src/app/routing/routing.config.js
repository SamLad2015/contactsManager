(function() {
  'use strict';
  angular.module('employeeManager.routing').config(configureRouting);

  configureRouting.$inject = [
    '$stateProvider'
  ];

  function configureRouting(
    $stateProvider
  ) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: 'app/home/home.partial.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
