(function () {
  'use strict';
  angular.module('employeeManager').controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$scope'
  ];

  function MainCtrl($scope) {
    var vm = this; 
    vm.contacts = [];
    
    activate();

    function activate() {
        
    }
  }
})();
