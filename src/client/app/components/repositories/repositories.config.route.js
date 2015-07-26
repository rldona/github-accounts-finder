(function() {
  'use strict';

  console.log('repositories');

  angular.module('app.repositories', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/repositories/:param', {
      templateUrl: '/app/components/repositories/repositories.html',
      controller: 'RepositoriesCtrl'
    });

  }]);

}());
