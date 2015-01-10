'use strict';

angular.module('sortinAlgorithmsComparisonApp')
.controller('MessagesCtrl', function ($scope) {
  $scope.messages = messagesManager.values;
});
