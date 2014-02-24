'use strict';

angular.module('testyoApp')
  .controller('MainCtrl',['$scope','Calc', function ($scope, Calc) {
    $scope.model = Calc;
  }]);
