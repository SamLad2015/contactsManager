
'use strict';

describe('HomeCtrl', function () {


  var $rootScope;
  var $scope;
  var HomeCtrl;
  var localStorageReturnMessage;

  beforeEach(module('employeeManager'));

  var fakeLocalStorageService ={
    set: function (){
      localStorageReturnMessage = 'contacts saved';
    }
  };

  beforeEach(inject(function (_$rootScope_, $controller) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    HomeCtrl = $controller('HomeCtrl', {
      'localStorageService': fakeLocalStorageService
    });
  }));


  it('should have controller defined', function () {
     expect(HomeCtrl).toBeDefined();
  });

  it('should be able to add new contacts', function () {
    expect(HomeCtrl.contacts.length).toBe(0);
     var newContact = {
         id:1,
         firstName : 'test firstname',
         lastName : 'test lastname',
         phoneNumber : '100'
     };
     HomeCtrl.tempContact = newContact;
     HomeCtrl.addEditContact();
     expect(HomeCtrl.contacts.length).toBe(1);
     expect(HomeCtrl.contacts[0].firstName).toBe('test firstname');
  });

  it('should be able to edit existing contacts', function () {
     var existingContacts = [{
         id:1,
         firstName : 'test firstname',
         lastName : 'test lastname',
         phoneNumber : '100'
     },{
         id:2,
         firstName : 'test firstname2',
         lastName : 'test lastname2',
         phoneNumber : '200'
     }];
     HomeCtrl.contacts = existingContacts;
     expect(HomeCtrl.contacts[1].firstName).toBe('test firstname2');
     HomeCtrl.editContact(2);
     var changedContact = {
         id:2,
         firstName : 'test new firstname',
         lastName : 'test new last name',
         phoneNumber : '111'
     };
     HomeCtrl.tempContact = changedContact;
     HomeCtrl.addEditContact();
     expect(HomeCtrl.contacts[1].firstName).toBe('test new firstname');
  });

  it('should be able to delete existing contacts', function () {
     var existingContacts = [{
         id:1,
         firstName : 'test firstname',
         lastName : 'test lastname',
         phoneNumber : '100'
     },{
         id:2,
         firstName : 'test firstname2',
         lastName : 'test lastname2',
         phoneNumber : '200'
     }];
     HomeCtrl.contacts = existingContacts;
     expect(HomeCtrl.contacts.length).toBe(2);
     HomeCtrl.deleteContact(2);
     expect(HomeCtrl.contacts.length).toBe(1);
     expect(HomeCtrl.contacts[0].firstName).toBe('test firstname');
  });

  it('should be able to save values to local storage', function(){
     var existingContacts = [{
         id:1,
         firstName : 'test firstname',
         lastName : 'test lastname',
         phoneNumber : '100'
     },{
         id:2,
         firstName : 'test firstname2',
         lastName : 'test lastname2',
         phoneNumber : '200'
     }];
     HomeCtrl.contacts = existingContacts;
     expect(localStorageReturnMessage).toBeUndefined();
     HomeCtrl.saveTolocalStorage();
     expect(localStorageReturnMessage).toBe('contacts saved');
  });
});
