(function() {
  'use strict';

  angular
    .module('app')
    .factory('userdata', userdata);

  userdata.$inject = ['$http'];

  function userdata($http) {

    // curl -H "Authorization: token 627652760-eLI1brmMaRcvw5Sef5gxgzueJdaHkPW5xZyOCOiu" https://api.github.com/rldona/

    return {
      userDataGithub : userDataGithub
    };

    ////////

    function userDataGithub(githubNick) {
      return $http.get('https://api.github.com/users/' + githubNick);
    }

  }

}());
