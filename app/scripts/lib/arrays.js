'use strict';

(function( arrays, undefined ) {

  arrays.loadedArrays = [
    {
      size: 10000000,
      maxNumber: 7000000,
      value: [10,4,2,6,0]
    },
    {
      size: 20000000,
      maxNumber: 5000000,
      value: [10,4,2,6,0]
    },
    {
      size: 30000000,
      maxNumber: 6000000,
      value: [10,4,2,6,0]
    }
  ];

  arrays.removeArrayAt = function(index) {
    arrays.loadedArrays.splice(index, 1);
  };

  arrays.getArrayAt = function(index) {
    return arrays.loadedArrays[index].value;
  };

}( window.arrays = window.arrays || {} ));
