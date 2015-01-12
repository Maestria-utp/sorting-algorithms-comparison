'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('ChartCtrl', function ($scope) {
    $scope.results = resultsManager.results;
  });
