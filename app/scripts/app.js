'use strict';

/**
 * @ngdoc overview
 * @name restapicodeApp
 * @description
 * # restapicodeApp
 *
 * Main module of the application.
 */
angular
  .module('restapicodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/temp', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/restapi', {
        templateUrl: 'views/restapi.html',
        controller: 'RestapiCtrl',
        controllerAs: 'restapi'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
