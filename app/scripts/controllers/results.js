'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('ResultsCtrl', function($scope) {
    $scope.results = resultsManager.results;

    $scope.showSortedArray = function(index) {
      swal({
        title: 'Arreglo ordenado',
        text: $scope.results[index].value.join(', ')
      });
    };

    $scope.removeResultAt = function(index) {
      console.log('se va a remover el resultado de la posicion: ' + index);
      resultsManager.removeResultAt(index);
      messagesManager.addMessage('info', 'El resultado ha sido removido.');
    };
});
