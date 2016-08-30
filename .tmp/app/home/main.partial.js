(function(module) {
try {
  module = angular.module('employeeManager');
} catch (e) {
  module = angular.module('employeeManager', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/home/main.partial.html',
    '');
}]);
})();
