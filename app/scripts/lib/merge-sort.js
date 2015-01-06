'use strict';

(function( sorting, undefined ) {

  var auxiliarArray;

  /**
  * Sort an array of integers by a merge technice, this algorithm have an order of O(n.log(n))
  * @param {array} unsortedArray to be sorted
  * @return {array} sorted array
  */
  sorting.byMerge = function(unsortedArray) {
    var p = 0;
    var r = unsortedArray.length;
    auxiliarArray = unsortedArray;
    mergeSort(p, r);
    return auxiliarArray;
  };

  function mergeSort(p, r) {
    if(p < r) {
      var q = Math.floor((p + r) / 2);
    }

    mergeSort(p, q);
    mergeSort(q + 1, r);
    merge(p, q, r);
  }

  function merge(p, q, r) {

  }
}( window.sorting = window.sorting || {} ));
