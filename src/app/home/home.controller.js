(function () {
    'use strict';
    angular.module('employeeManager').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [
        '$scope'
    ];

    function HomeCtrl($scope) {
        var vm = this;
        vm.contacts = [];
        activate();

        function activate() {
            vm.contacts.push({id: 1, firstName: 'Tom', lastName: 'Noname' });
            vm.contacts.push({id: 2,  firstName: 'John', lastName: 'Doe' });
            vm.contacts.push({id: 3,  firstName: 'Mary', lastName: 'Moe' });
        }
    }
})();
