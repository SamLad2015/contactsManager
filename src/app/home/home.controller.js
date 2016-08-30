(function () {
    'use strict';
    angular.module('employeeManager').controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {
        var vm = this;
        vm.contacts = [];
        vm.showAddEdit = false;
        vm.addEditContact = addEditContact;
        vm.editContact = editContact;
        vm.deleteContact = deleteContact;
        vm.filterProperty = 'firstName';
        generateTempContact();
        activate();

        function activate() {
            vm.contacts.push({ id: 1, firstName: 'Tom', lastName: 'Noname', phoneNumber: '100' });
            vm.contacts.push({ id: 2, firstName: 'John', lastName: 'Doe', phoneNumber: '200' });
            vm.contacts.push({ id: 3, firstName: 'Mary', lastName: 'Moe', phoneNumber: '300' });
        }

        function generateTempContact() {
            vm.tempContact = {
                id: _.max(vm.contacts, function (contact) {
                    return contact.id;
                }),
                firstName: '',
                lastName: '',
                phoneNumber: ''
            };
            delete vm.selectedContact;
        }

        function addEditContact() {
            if (typeof vm.selectedContact !== 'undefined') {
                var selectedContactIndex = vm.contacts.indexOf(vm.selectedContact);
                vm.contacts[selectedContactIndex] = vm.tempContact;
            } else {
                vm.contacts.push(vm.tempContact);
            }
            generateTempContact();
        }

        function editContact(contactId) {
            vm.selectedContact = _.findWhere(vm.contacts, { id: contactId });
            vm.tempContact = angular.copy(vm.selectedContact);
        }

        function deleteContact(contactId){
            vm.contacts = _.filter(vm.contacts, function (contact){ return contact.id !==  contactId;});
        }
    }
})();
