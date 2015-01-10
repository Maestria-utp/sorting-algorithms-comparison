'use strict';

angular.module('sortinAlgorithmsComparisonApp')
.controller('messagesCtrl', function ($scope) {
  $scope.messages = messagesManager.values;
});
