(function() {
  'use strict';

  console.log('githubApi');

  angular
    .module('core.services')
    .factory('githubApi', githubApi);

  githubApi.$inject = ['$http'];

  function githubApi($http) {

    return {
      userDataGithub : userDataGithub,
      reposDataGithub : reposDataGithub
    };

    ////////

    function userDataGithub(githubNick) {
      return $http.get('https://api.github.com/users/' + githubNick);
    }

    function reposDataGithub(githubNick) {
      return $http.get('https://api.github.com/users/' + githubNick + '/repos');
    }

  }

}());
