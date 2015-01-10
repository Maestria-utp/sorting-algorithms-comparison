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

  $scope.loadFile = function() {
    var newArray = JSON.parse($scope.arrayFile);
    arrays.loadedArrays.push(newArray);
    $scope.tab = 1;
    $scope.arrayFile = undefined;
    messagesManager.addMessage('info', 'El arreglo ha sido cargado.');
  };

  $scope.setFileContent = function(content) {
    $scope.arrayFile = content;
  };

  $scope.generateArray = function(size, max) {
    var newArray = [];
    console.log('inicio de generacion de arreglo, size: ' + size + ', maxNumber: ' + max);
    for (var i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * max));
    }
    console.log('fin de la generacion del arreglo');
    var object = {
      size: size,
      maxNumber: max,
      value: newArray
    };

    arrays.loadedArrays.push(object);
    $scope.tab = 1;
    messagesManager.addMessage('info', 'El arreglo ha sido creado.');
  };
});
