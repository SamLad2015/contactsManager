(function () {
    'use strict';
    angular.module('employeeManager').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [
        'localStorageService'
    ];

    function HomeCtrl(localStorageService) {
        var vm = this;
        vm.contacts = [];
        vm.showAddEdit = false;
        vm.addEditContact = addEditContact;
        vm.editContact = editContact;
        vm.deleteContact = deleteContact;
        vm.filterProperty = 'firstName';
        vm.saveTolocalStorage = saveTolocalStorage;
        activate();
        generateTempContact();

        function activate() {

        }

        function generateTempContact() {
            vm.tempContact = {
                id: getCurrentMaxId() + 1,
                firstName: '',
                lastName: '',
                phoneNumber: ''
            };
            delete vm.selectedContact;
        }

        function getCurrentMaxId() {
            var maxId = _.max(vm.contacts, function (contact) {
                return contact.id;
            }).id;
            if (maxId > -1) {
                return maxId;
            }
            return 0;
        }

        function addEditContact() {
            if (typeof vm.selectedContact !== 'undefined') {
                var selectedContactIndex = vm.contacts.indexOf(vm.selectedContact);
                vm.contacts[selectedContactIndex] = angular.copy(vm.tempContact);
            } else {
                if (vm.tempContact.firstName !== '' && vm.tempContact.lastName !== '') {
                    vm.contacts.push(angular.copy(vm.tempContact));
                }
            }
            generateTempContact();
        }

        function editContact(contactId) {
            vm.selectedContact = _.findWhere(vm.contacts, { id: contactId });
            vm.tempContact = angular.copy(vm.selectedContact);
        }

        function deleteContact(contactId) {
            vm.contacts = _.filter(vm.contacts, function (contact) { return contact.id !== contactId; });
        }

        function saveTolocalStorage() {
            var strToSave='';
             vm.contacts.forEach(function (contact){
                strToSave += JSON.stringify(contact);
             });
            localStorageService.set('allContacts', strToSave);
        }
    }
})();
