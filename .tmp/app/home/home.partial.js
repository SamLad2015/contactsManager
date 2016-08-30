(function(module) {
try {
  module = angular.module('employeeManager');
} catch (e) {
  module = angular.module('employeeManager', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/home/home.partial.html',
    '<div class="table"><div class="header"><div><span>First Name</span></div><div><span>Last Name</span></div></div><div class="row" ng-repeat="contact in vm.contacts track by contact.id"><div>{{::contact.firstName}}</div><div>{{::contact.lastName}}</div></div></div>');
}]);
})();
