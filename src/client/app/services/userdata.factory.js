(function() {
  'use strict';

  angular
    .module('app')
    .factory('userdata', userdata);

  userdata.$inject = ['$http'];

  function userdata($http) {

    return {
      userDataGithub : userDataGithub
    };

    ////////

    function userDataGithub(githubNick) {
      return $http.get('https://api.github.com/users/' + githubNick);
    }

  }

}());
