'use strict';

(function( sorting, undefined ) {

  /**
  *
  * Sort an array with the binary heap strategy.
  *
  * @param {unsortedAray} array to be sorted
  *
  */
  sorting.byHeap = function(unsortedArray) {
    var auxiliarArray = unsortedArray.slice();
    heapSort(auxiliarArray);
    return auxiliarArray;
  };

  function heapSort(auxiliarArray) {
    sorting.buildMaxHeap(auxiliarArray);
    var length = auxiliarArray.length;
    var heapSize = length - 1;
    for(var i = length - 1; i > 0; i--) {
      var temp = auxiliarArray[0];
      auxiliarArray[0] = auxiliarArray[i];
      auxiliarArray[i] = temp;

      heapSize--;
      sorting.maxHeapify(auxiliarArray, 0, heapSize);
    }
  }

}( window.sorting = window.sorting || {} ));
