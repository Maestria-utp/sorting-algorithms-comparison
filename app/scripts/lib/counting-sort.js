'use strict';

(function (sorting, undefined) {

// asume que cada uno de los n elementos de
// entrada es un entero entre el **rango de 0 a K**

// Se requieren dos arreglos: B[1..n] que contiene la salida
// ordenada y el arreglo C[0..k] que permite llevar la cuenta
// de ocurrencias de cada elemento en el vector.

// Vector C es 0 index.

// function CountingSort(array, B, k)
// 1.  for i <- 0 to k do
// 2.    C[i] <- 0
// 3.  for j <- 1 to size[array] do
// 4.    C[array[j]] <- C[array[j]] + 1
// 5.    // C[i] ahora contiene el
// 6.    // número de elementos iguales a i
// 7.  for i <- 1 to k do
// 8.    C[i] <- C[i] + C[i-1]
// 9.    // C[i] ahora contiene el número
// 10.   // de elementos menores o iguales a i
// 11. for j <- size[array] downto 1 do
// 12.   B[C[array[j]]] <- array[j]
// 13.   C[array[j]] <- C[array[j]] - 1

  var countingSortOriginal = function (array, B, k) {
    var C = [];
    for (var i = 0; i < k; i++) {
      C[i] = 0;
    };

    for (var j = 0; j < array.length; j++) {
      C[array[j]] = C[array[j]] + 1;
    };
    // C[i] ahora contiene el número de elementos iguales a i

    for (var i = 1; i < k; i++) {
      C[i] = C[i] + C[i-1];
    };
    // C[i] ahora contiene el número de elementos menores o iguales a i

    for (var j = array.length - 1; j >= 0; j--) {
      // Se resta uno para hacerlo 0 index
      B[C[array[j]] - 1] = array[j];
      C[array[j]] = C[array[j]] - 1;
    };

    return B;
  };

  sorting.countingSort = function (array) {
    // Es de 7 millones porque es el número máximo que puede tener
    // según lo especificado en el planteo del proyecto
    var k = 7000000;
    var B = [];
    return countingSortOriginal(array, B, k);
  };

}( window.sorting = window.sorting || {} ));
