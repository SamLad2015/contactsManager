(function () {
    'use strict';
    angular.module('employeeManager').controller('HomeCtrl', HomeCtrl);];

    function HomeCtrl() {
        var vm = this;
        vm.contacts = [];
        vm.showAddEdit = false;
        vm.submitNewContact = submitNewContact;
        generateTemContact();
        activate();

        function activate() {
            vm.contacts.push({ id: 1, firstName: 'Tom', lastName: 'Noname', phoneNumber: '100' });
            vm.contacts.push({ id: 2, firstName: 'John', lastName: 'Doe', phoneNumber: '200' });
            vm.contacts.push({ id: 3, firstName: 'Mary', lastName: 'Moe', phoneNumber: '300' });
        }

        function generateTemContact() {
            vm.tempContact = {
                id: _.max(vm.contacts, function (contact) {
                    return contact.id;
                }),
                firstName: '',
                lastName: '',
                phoneNumber: ''
            };
        }

        function submitNewContact() {
            vm.contacts.push(vm.tempContact);
            generateTemContact();
        }
    }
})();
