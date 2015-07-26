(function() {
  'use strict';

  console.log('account');

  angular.module('app.account', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/account/:param', {
      templateUrl: '/app/components/account/account.html',
      controller: 'AccountCtrl'
    });

  }]);

}());
