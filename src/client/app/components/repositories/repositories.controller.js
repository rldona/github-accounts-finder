(function() {
  'use strict';

  angular
    .module('app')
    .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$routeParams', 'githubApi'];

  function RepositoriesCtrl($routeParams, githubApi) {
    var vm = this;
    vm.repos = null;

    activate();

    ////////

    function activate() {

      return githubApi.reposDataGithub($routeParams.param).then(function(data) {
        vm.repos = data;
        return vm.repos;
      });

    }

  }

}());
