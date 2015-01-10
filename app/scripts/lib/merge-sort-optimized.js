'use strict';

(function( sorting, undefined ) {

  /**
  *
  * Sort an array of integers by a merge technice, this algorithm have an order of O(n.log(n)),
  * this is the optimized version og the merge sort, it reuses the instance arrays leftArray
  * and rightArray to improve the memory consuption.
  *
  * @param {array} unsortedArray to be sorted
  * @return {array} sorted array
  */
  sorting.byMergeOptimized = function(unsortedArray) {
    var low = 0;
    var high = unsortedArray.length - 1;
    var auxiliarArray = unsortedArray.slice();

    // measure of the starting time
    var startTime = performance.now();

    mergeSortOptimized(auxiliarArray, low, high);

    // measure of the ending time
    var endTime = performance.now();
    return {
      n: auxiliarArray.length,
      time: endTime - startTime,
      value: auxiliarArray
    };
  };

  function mergeSortOptimized(auxiliarArray, low, high) {
    if(low < high) {
      var leftArray = [];
      var rightArray = [];

      mergeSortAux(auxiliarArray,leftArray, rightArray, low, high);
    }
  }

  function mergeSortAux(auxiliarArray, leftArray, rightArray, low, high) {
    if (low < high) {
      var mid = Math.floor((low + high) / 2);

      mergeSortAux(auxiliarArray, leftArray, rightArray, low, mid);
      mergeSortAux(auxiliarArray, leftArray, rightArray, mid + 1, high);
      mergeAux(auxiliarArray, leftArray, rightArray, low, mid, high);
    }
  }

  function mergeAux(auxiliarArray, leftArray, rightArray, low, mid, high) {
    var leftN = mid - low + 1;
    var rightN = high - mid;

    // copy the values in the arrays
    for(var i = 0; i < leftN; i++) {
      leftArray[i] = auxiliarArray[low + i];
    }
    for(var j = 0; j < rightN; j++) {
      rightArray[j] = auxiliarArray[mid + j + 1];
    }

    // use a max value for comparation
    leftArray[leftN] = Infinity;
    rightArray[rightN] = Infinity;

    var leftIndex = 0;
    var rightIndex = 0;

    for(var k = low; k <= high; k++) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        auxiliarArray[k] = leftArray[leftIndex];
        leftIndex++;
      } else{
        auxiliarArray[k] = rightArray[rightIndex];
        rightIndex++;
      }
    }
  }
}( window.sorting = window.sorting || {} ));
