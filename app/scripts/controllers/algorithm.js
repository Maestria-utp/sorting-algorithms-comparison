'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('AlgorithmCrtl', function($scope) {
    $scope.arrays = arrays.loadedArrays;
    $scope.algorithms = [
      {
        name: "Insertion Sort",
        function: sorting.byInsertion,
      }, 
      {
        name: "Heap insert sort"
      }, 
      {
        name: "Merge sort"
      }, 
      {
        name: "Merge sort mejorado"
      }, 
      {
        name: "Heap sort"
      }, 
      {
        name: "Quick sort"
      }, 
      {
        name: "Quick sort aleatorio"
      }, 
      {
        name: "Counting sort"
      }
    ];
    $scope.algorithm = $scope.algorithms[0];

    $scope.executeAlgorithm = function() {
        console.log("Ejecucion de algoritmo: " 
          + $scope.algorithm.name
          + ", con el arreglo de tamaño: "
          + $scope.array.size
        );
    };
});
