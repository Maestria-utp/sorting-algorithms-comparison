'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('ResultsCtrl', function($scope) {
    $scope.results = resultsManager.results;
});
