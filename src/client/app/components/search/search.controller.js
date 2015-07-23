(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchCtrl', SearchController);

  SearchController.$inject = ['userdata', 'reposdata'];

  function SearchController(userdata, reposdata) {
    var vm = this;
    vm.user = null;
    vm.repos = null;
    vm.title = 'Github accounts finder: ';

    ////////

    vm.findUser = function(name) {
      return userdata.userDataGithub(name).then(function(data) {
        vm.user = [];
        vm.user = data;
        return vm.user;
      });
    };

    vm.findRepositories = function(name) {
      return reposdata.reposDataGithub(name).then(function(data) {
        console.log(data);
        vm.repos = data;
        return vm.repos;
      });
    };

  }

}());
