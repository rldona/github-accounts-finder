(function() {
  'use strict';

  angular
    .module('app')
    .factory('reposdata', reposdata);

  reposdata.$inject = ['$http'];

  function reposdata($http) {

    return {
      reposDataGithub : reposDataGithub
    };

    ////////

    function reposDataGithub(githubNick) {
      return $http.get('https://api.github.com/users/' + githubNick + '/repos');
    }

  }

}());
