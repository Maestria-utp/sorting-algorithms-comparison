'use strict';

(function( sorting, undefined ) {

  sorting.testArray = [4, 5, 2, 10, 25, 0, 12, 5];

  /**
  *
  * Sort an array of integers by insertion, this algorithm have an order of O(n^2)
  *
  * @param {array} unsortedArray to be sorted
  * @return {array} sorted array
  */
  sorting.byInsertion = function(unsortedArray) {
    unsortedArray = unsortedArray.slice();

    // measure of the starting time
    var startTime = performance.now();

    var length = unsortedArray.length;
    for(var j = 1; j < length; j++) {
      var key = unsortedArray[j];
      var i = j - 1;

      while(i >= 0 && unsortedArray[i] > key){
        unsortedArray[i + 1] = unsortedArray[i];
        i--;
      }
      unsortedArray[i + 1] = key;
    }

    // measure of the ending time
    var endTime = performance.now();

    return {
      n: length,
      time: endTime - startTime,
      value: unsortedArray
    };
  };
}( window.sorting = window.sorting || {} ));
