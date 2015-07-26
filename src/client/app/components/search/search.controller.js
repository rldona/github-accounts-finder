(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchCtrl', SearchController);

  SearchController.$inject = ['githubApi'];

  function SearchController(githubApi) {
    var vm = this;
    vm.user = null;
    vm.repos = null;
    vm.title = 'Busca una cuenta de Github';

    ////////

    vm.findUser = function(name) {
      return githubApi.userDataGithub(name).then(function(data) {
        vm.user = [];
        vm.user = data;
        return vm.user;
      });
    };

    vm.findRepositories = function(name) {
      return githubApi.reposDataGithub(name).then(function(data) {
        vm.repos = data;
        return vm.repos;
      });
    };

  }

}());
