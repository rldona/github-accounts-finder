(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchCtrl', SearchController);

  SearchController.$inject = ['userdata'];

  function SearchController(userdata) {
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
      return userdata.reposDataGithub(name).then(function(data) {
        vm.repos = data;
        return vm.repos;
      });
    };

  }

}());
