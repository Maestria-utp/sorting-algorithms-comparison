'use strict';

(function( arrays, undefined ) {

  arrays.loadedArrays = [];

  arrays.removeArrayAt = function(index) {
    arrays.loadedArrays.splice(index, 1);
  };

  arrays.getArrayAt = function(index) {
    return arrays.loadedArrays[index].value;
  };

}( window.arrays = window.arrays || {} ));
