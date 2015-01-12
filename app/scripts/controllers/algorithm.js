'use strict';

angular.module('sortinAlgorithmsComparisonApp')
  .controller('AlgorithmCrtl', function($scope) {
    var quadraticOrder = function(n) {
      return n*n;
    };

    var nlognOrder = function(n) {
      return n * Math.log(n);
    };

    $scope.arrays = arrays.loadedArrays;
    $scope.algorithms = [
      {
        name: 'Insertion Sort',
        execute: sorting.byInsertion,
        bigO: 'n^2',
        calculateComplexity: quadraticOrder
      },
      {
        name: 'Heap insert sort',
        execute: sorting.heapinsertSort,
        bigO: 'n^2',
        calculateComplexity: quadraticOrder
      },
      {
        name: 'Merge sort',
        execute: sorting.byMerge,
        bigO: 'n log(n)',
        calculateComplexity: nlognOrder
      },
      {
        name: 'Merge sort mejorado',
        execute: sorting.byMergeOptimized,
        bigO: 'n log(n)',
        calculateComplexity: nlognOrder
      },
      {
        name: 'Heap sort',
        execute: sorting.byHeap,
        bigO: 'n log(n)',
        calculateComplexity: nlognOrder
      },
      {
        name: 'Quick sort',
        execute: sorting.quickSort,
        bigO: 'n log(n)',
        calculateComplexity: nlognOrder
      },
      {
        name: 'Quick sort aleatorio',
        execute: sorting.quickSortMejorado,
        bigO: 'n log(n)',
        calculateComplexity: nlognOrder
      },
      {
        name: 'Counting sort',
        execute: sorting.countingSort,
        bigO: 'n',
        calculateComplexity: function(n) {
          return n;
        }
      }
    ];
    $scope.algorithm = $scope.algorithms[0];

    $scope.executeAlgorithm = function() {
      // validation of inputs
      if($scope.array === undefined) {
        messagesManager.addMessage('danger', 'Por favor seleccione un arreglo de entrada.');
        return;
      }

      // open the loading screen
      window.loadingScreen = window.pleaseWait({
        logo: "images/yeoman.png",
        backgroundColor: '#5bc0de',
        loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><p class="white"><b>Ordenando el arreglo...</b> Por favor espere.</p>'
      });

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

      //dispose the loading screen
      window.loadingScreen.finish();
    };
});
