(function(module) {
try {
  module = angular.module('employeeManager');
} catch (e) {
  module = angular.module('employeeManager', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/type-ahead/type-ahead.partial.html',
    '<span><input type="text" pattern="^[a-zA-Z0-9_ -]*$" class="search-box" ng-model="model" ng-click="isInUse()" ng-change="isBeingUsed()" ng-blur="outOfUse()" placeholder="{{prompt}}"> <button class="close-icon" ng-click="model=\'\'" type="reset"><span class="close-x">X</span></button> <span></span></span>');
}]);
})();
