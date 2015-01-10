'use strict';

(function (sorting, undefined) {

// function RandomizedQuickSort(array, pStart, rEnd)
// 1.  if pStart < rEnd then
// 2.    indexPartition <- RandomizedPartition(array, pStart, rEnd)
// 3.    RandomizedQuickSort(array, pStart, indexPartition - 1)
// 4.    RandomizedQuickSort(array, indexPartition + 1, rEnd)

// function RandomizedPartition(array, pStart, rEnd)
// 1.  i <- Random(pStart, rEnd)
// 2.  exchange array[rEnd] <-> array[i]
// 3.  return Partition(array, pStart, rEnd)

// function Partition(array, pStart, rEnd)
// 1.  pivot <- array[rEnd]
// 2.  i <- pStart - 1
// 3.  for j <- pStart to rEnd - 1 do
// 4.    if array[j] <= pivot then
// 5.      i <- i + 1
// 6.      exchange array[i] <-> array[j]
// 7.  exchange array[i+1] <-> array[rEnd]
// 8. return i+1

  var partition = function (array, pStart, rEnd) {
    var
      pivot = array[rEnd],
      i = pStart - 1;
    for (var j = pStart; j < rEnd; j++) {
      if(array[j] <= pivot) {
        i++;
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    };
    var tmp = array[i + 1];
    array[i + 1] = array[rEnd];
    array[rEnd] = tmp;

    return i + 1;
  };

  var random = function(start, end) {
    // + 1 para que se pueda tener el caso inclusivo del end
    var
      difference = end - start + 1,
      advance = Math.floor(Math.random() * difference);
    return start + advance;
  };

  var randomizedPartition = function (array, pStart, rEnd) {
    var i = random(pStart, rEnd);
    var tmp = array[rEnd];
    array[rEnd] = array[i];
    array[i] = tmp;

    return partition(array, pStart, rEnd);
  };

  var randomizedQuickSort = function (array, pStart, rEnd) {
    if (pStart < rEnd) {
      var indexPartition = randomizedPartition(array, pStart, rEnd);
      randomizedQuickSort(array, pStart, indexPartition - 1);
      randomizedQuickSort(array, indexPartition + 1, rEnd);
    }
  };

  sorting.quickSortMejorado = function (unsortedArray) {
    var array = unsortedArray.slice();

    // measure of the starting time
    var startTime = performance.now();

    randomizedQuickSort(array, 0, array.length - 1);

    // measure of the starting time
    var endTime = performance.now();

    return {
      n: array.length,
      time: endTime - startTime,
      value: array
    };
  };

}( window.sorting = window.sorting || {} ));
