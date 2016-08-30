(function () {
    'use strict';
    angular.module('employeeManager').controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [
        '$state'
    ];

    function MainCtrl($state) {
        $state.go('home');
    }
})();
