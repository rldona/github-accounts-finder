(function() {
  'use strict';

  console.log('about');

  angular.module('app.about', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/about', {
      templateUrl: '/app/components/about/about.html'
    });

  }]);

}());
