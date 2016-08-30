(function () {
    'use strict';

    angular.module('employeeManager').directive('typeAhead', function () {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                model: '=',
                filterProperty: '=',
                startSearchAfterMilliseconds: '='
            },
            controller: 'typeAheadCtrl',
            templateUrl: 'components/type-ahead/type-ahead.partial.html'
        };
    });
})();
