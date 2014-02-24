'use strict';

angular.module('testyoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partials/main',
        controller: 'MainCtrl'
      })
      .when('/message', {
        templateUrl: 'views/partials/message',
        controller: 'MessageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });
