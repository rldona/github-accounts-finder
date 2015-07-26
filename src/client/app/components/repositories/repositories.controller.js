(function() {
  'use strict';

  angular
    .module('app')
    .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['$routeParams', 'githubApi'];

  function RepositoriesCtrl($routeParams, githubApi) {
    var vm = this;
    vm.user = null;
    vm.repos = null;
    vm.title = 'Github accounts finder: ';

    console.log('params: ', $routeParams.param);

    activate();

    ////////

    function activate() {
      console.log('activate');
      return githubApi.reposDataGithub($routeParams.param).then(function(data) {
        vm.repos = data;

        console.log(vm.repos);

        return vm.repos;
      });
    }

  }

}());
