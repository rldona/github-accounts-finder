(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountCtrl', AccountCtrl);

  AccountCtrl.$inject = ['$routeParams', 'githubApi'];

  function AccountCtrl($routeParams, githubApi) {
    var vm = this;
    vm.user = null;
    vm.title = 'Github accounts finder: ';

    activate();

    ////////

    function activate() {

      return githubApi.userDataGithub($routeParams.param).then(function(data) {
        vm.user = [];
        vm.user = data;
        return vm.user;
      });

    }

  }

}());
