(function() {
  'use strict';

  console.log('app');

  angular
    .module('app', [

      // angular modules
      'ngRoute',

      // angular services
      'core.services',

      // app components
      'app.search',
      'app.account',
      'app.repositories',
      'app.about'

    ])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({ redirectTo: '/search' });
    }]);

}());
