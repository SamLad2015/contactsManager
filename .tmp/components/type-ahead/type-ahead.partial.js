(function(module) {
try {
  module = angular.module('employeeManager');
} catch (e) {
  module = angular.module('employeeManager', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/type-ahead/type-ahead.partial.html',
    '<div class="search"><span>Search:</span> <input type="text" pattern="^[a-zA-Z0-9_ -]*$" class="search-box" ng-model="model" ng-change="isBeingUsed()" ng-blur="outOfUse()"><div></div></div>');
}]);
})();
