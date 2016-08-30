(function () {
  'use strict';
  angular.module('employeeManager').controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$scope'
  ];

  function MainCtrl($scope, $state, authService) {
    var vm = this; 

    
    activate();

    function activate() {
    }
  }
})();
