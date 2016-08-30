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
          header: {
            templateUrl: 'app/header/header.html'
          },
          main: {
            templateUrl: 'app/home/home.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
