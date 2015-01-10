'use strict';

angular.module('sortinAlgorithmsComparisonApp')
.controller('FileManagerCtrl', function ($scope) {
  $scope.tab = 1;
  $scope.arrays = arrays.loadedArrays;

  $scope.activeTab = function(tab) {
    return tab === $scope.tab;
  };

  $scope.removeArrayAt = function(index) {
    console.log("removiendo arreglo");
    arrays.removeArrayAt(index);
  };

  $scope.generateArray = function() {
    messagesManager.addMessage('info', 'El arreglo ha sido creado.');
  };
});
