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

  $scope.generateArray = function() {
    // validation of the inputs
    if(typeof $scope.size != 'number' || typeof $scope.max != 'number') {
      messagesManager.addMessage('danger', 'Las entradas para generar el arreglo no son válidas.');
      return;
    }

    // initialize the loading screen
    window.loadingScreen = window.pleaseWait({
      logo: "images/yeoman.png",
      backgroundColor: '#5bc0de',
      loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><p class="white"><b>Generando arreglo...</b> por favor espere.</p>'
    });

    var newArray = [];
    console.log('inicio de generacion de arreglo, size: ' + $scope.size + ', maxNumber: ' + $scope.max);
    for (var i = 0; i < $scope.size; i++) {
      newArray.push(Math.floor(Math.random() * $scope.max));
    }
    console.log('fin de la generacion del arreglo');
    var object = {
      size: $scope.size,
      maxNumber: $scope.max,
      value: newArray
    };

    arrays.loadedArrays.push(object);
    $scope.tab = 1;
    messagesManager.addMessage('info', 'El arreglo ha sido creado.');

    // dispose the loading screen
    window.loadingScreen.finish();
  };
});
