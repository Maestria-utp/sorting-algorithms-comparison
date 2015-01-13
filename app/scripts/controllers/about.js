'use strict';

/**
* @ngdoc function
* @name sortinAlgorithmsComparisonApp.controller:MainCtrl
* @description
* # AboutCtrl
* Controller of the sortinAlgorithmsComparisonApp
*/
angular.module('sortinAlgorithmsComparisonApp')
.controller('AboutCtrl', function ($scope) {

  $scope.creators = [
    {
      name: 'Juan Pablo',
      lastName: 'Ramirez',
      githubUsername: 'juanprq',
      gitHubProfileUrl: 'https://github.com/juanprq',
      identification: '1094.891.516',
      email: 'juan.ramirez.q@gmail.com',
      proffesion: 'Ingeniero de sistemas y computación',
      gravatarUrl: 'http://www.gravatar.com/avatar/3fa4f3cc976eb3d3a0200cb465d59ebb?s=150'
    },
    {
      name: 'Santiago',
      lastName: 'Rodriguez',
      identification: '',
      email: 'sanrodari@gmail.com',
      proffesion: 'Ingeniero de sistemas y computación',
      gravatarUrl: 'http://www.gravatar.com/avatar/7fb5a36640b1af1de3ac788c888f55fe?s=150'
    },
  ];
});
