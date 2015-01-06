'use strict';

(function( sorting, undefined ) {

  sorting.testArray = [4, 5, 2, 10, 25, 0, 12, 5];

  /**
  * Sort an array of integers by insertion, this algorithm have an order of O(n^2)
  * @param {array} unsortedArray to be sorted
  * @return {array} sorted array
  */
  sorting.byInsertion = function(unsortedArray) {
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

    return unsortedArray;
  };

  //Private Property
  var isHot = true;

  //Public Property
  sorting.ingredient = "Bacon Strips";

  //Public Method
  sorting.fry = function() {
    var oliveOil;

    addItem( "\t\n Butter \n\t" );
    addItem( oliveOil );
    console.log( "Frying " + sorting.ingredient );
  };

  //Private Method
  function addItem( item ) {
    if ( item !== undefined ) {
      console.log( "Adding " + $.trim(item) );
    }
  }
}( window.sorting = window.sorting || {} ));
