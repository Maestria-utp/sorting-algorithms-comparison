'use strict';

angular.module('sortinAlgorithmsComparisonApp')
.controller('FileManagerCtrl', function ($scope) {
  $scope.tab = 1;
  $scope.arrays = arrays.loadedArrays;
  $scope.arrayFile;

  $scope.activeTab = function(tab) {
    return tab === $scope.tab;
  };

  $scope.removeArrayAt = function(index) {
    console.log("removiendo arreglo");
    arrays.removeArrayAt(index);
  };

  $scope.loadFile = function() {
    var newArray = JSON.parse($scope.arrayFile);
    arrays.loadedArrays.push(newArray);
    $scope.tab = 1;
    messagesManager.addMessage('info', 'El arreglo ha sido cargado.');
  };

  $scope.setFileContent = function(content) {
    $scope.arrayFile = content;
  };

  $scope.generateArray = function() {
    messagesManager.addMessage('info', 'El arreglo ha sido creado.');
  };
});
