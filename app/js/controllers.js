'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 'Phone',
    function ($scope, $http, Phone) {
        $scope.phones = Phone.query();

        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);
