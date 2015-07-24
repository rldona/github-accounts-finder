(function() {
  'use strict';

  angular
    .module('app')
    .factory('userdata', userdata);

  userdata.$inject = ['$http'];

  function userdata($http) {

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
