'use strict';

(function( sorting, undefined ) {

  // auxiliar array to use in the sorting
  var auxiliarArray;

  sorting.cleanMergeVariable = function() {
    auxiliarArray = [];
  };

  /**
  * Sort an array of integers by a merge technice, this algorithm have an order of O(n.log(n))
  * @param {array} unsortedArray to be sorted
  * @return {array} sorted array
  */
  sorting.byMerge = function(unsortedArray) {
    var low = 0;
    var high = unsortedArray.length - 1;
    auxiliarArray = unsortedArray.slice();
    mergeSort(low, high);
    return auxiliarArray;
  };

  function mergeSort(low, high) {
    if(low < high) {
      var mid = Math.floor((low + high) / 2);

      mergeSort(low, mid);
      mergeSort(mid + 1, high);
      merge(low, mid, high);
    }
  }

  function merge(low, mid, high) {
    // calculate the lengths of the arrays
    var leftN = mid - low + 1;
    var rightN = high - mid;

    // initialize the variables
    var leftArray = [];
    var rightArray = [];

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
