'use strict';

/**
* @ngdoc function
* @name sortinAlgorithmsComparisonApp.controller:MainCtrl
* @description
* # NavigationCtrl
* Controller of the sortinAlgorithmsComparisonApp
*/
angular.module('sortinAlgorithmsComparisonApp')
.controller('NavigationCtrl', function ($scope, $location) {

  $scope.isActive = function(route) {
    return route === $location.path();
  };

});
