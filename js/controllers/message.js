'use strict';

angular.module('testyoApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('/api/message').success(function(awesomeThings) {
      $scope.message = awesomeThings;
    });
  });
