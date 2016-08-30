(function () {
    'use strict';
    angular.module('employeeManager')
        .controller('typeAheadCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
            var unbindModelWatch;
            var filterTextTimeout;
            $scope.allitems = $scope.items;

            $scope.isBeingUsed = function () {
                unbindModelWatch = $scope.$watch('model', function (searchval) {
                    filterTextTimeout = $timeout(function () {
                        var filterProperties = $scope.filterProperty.split(',');
                        if (searchval !== '') {
                            $scope.items = _.filter(angular.copy($scope.allitems), function (item) {
                                return hasValue(item, filterProperties, searchval);
                            });
                        } else {
                            $scope.items = $scope.allitems;
                        }
                    }, $scope.startSearchAfterMilliseconds);
                });
            };

            $scope.outOfUse = function () {
                $scope.focus = false;
                if (typeof unbindModelWatch !== 'undefined') {
                    unbindModelWatch();
                }
            };

            $scope.$on('$destroy', function () {
                if (filterTextTimeout) {
                    $timeout.cancel(filterTextTimeout);
                }
            });

            function hasValue(item, searchProperties, searchValue) {
                var found;
                searchProperties.forEach(function (property) {
                    if (!found && property !== '') {
                        found = item[property].toLowerCase().indexOf(searchValue) === 0;
                    }
                });
                return found;
            }
        }]);
})();
