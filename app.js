(function() {
    'use strict';
    angular.module('SinglePageWebApplication', [])
    .controller('MainController', function($scope) {

        $scope.companyName = 'Prospecta Private Limited';
        $scope.search = 'Seach the any company related';

    });
})();