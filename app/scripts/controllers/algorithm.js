'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('AlgorithmCrtl', function($scope) {
    $scope.arrays = arrays.loadedArrays;
    $scope.algorithms = [
      {
        name: "Insertion Sort",
        execute: sorting.byInsertion,
        bigO: 'n^2',
        calculateComplexity: function(n) {
          return n*n;
        }
      }, 
      {
        name: "Heap insert sort",
        execute: sorting.heapinsertSort,
      }, 
      {
        name: "Merge sort",
        execute: sorting.byMerge,
      }, 
      {
        name: "Merge sort mejorado",
        execute: sorting.byMergeOptimized
      }, 
      {
        name: "Heap sort",
        execute: sorting.byHeap
      }, 
      {
        name: "Quick sort",
        execute: sorting.quickSort
      }, 
      {
        name: "Quick sort aleatorio",
        execute: sorting.quickSortMejorado
      }, 
      {
        name: "Counting sort",
        execute: sorting.countingSort
      }
    ];
    $scope.algorithm = $scope.algorithms[0];

    $scope.executeAlgorithm = function() {
        console.log("Ejecucion de algoritmo: " 
          + $scope.algorithm.name
          + ", con el arreglo de tamaño: "
          + $scope.array.size
        );

        // execution of algorithm
        var result = $scope.algorithm.execute($scope.array.value);
        console.log("Fin de la ejecucion del algoritmo");

        // complete the other properties
        result.name = $scope.algorithm.name;
        result.bigO = $scope.algorithm.bigO;
        result.complexity = $scope.algorithm.calculateComplexity(result.n);
        result.constantFactor = result.time / result.complexity;

        // add new result to the table of results
        resultsManager.addResult(result);
        messagesManager.addMessage('info', 'El arreglo ha sido ordenado.');
    };
});
