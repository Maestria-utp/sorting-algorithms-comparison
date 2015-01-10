'use strict';

(function (sorting, undefined) {

// function QuickSort(array, pStart, rEnd)
// 1.  if pStart < rEnd then
// 2.    indexPartition <- Partition(array, pStart, rEnd)
// 3.    QuickSort(array, pStart, indexPartition - 1)
// 4.    QuickSort(array, indexPartition + 1, rEnd)

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

  var quickSortOriginal = function (array, pStart, rEnd) {
    if (pStart < rEnd) {
      var indexPartition = partition(array, pStart, rEnd);
      quickSortOriginal(array, pStart, indexPartition - 1);
      quickSortOriginal(array, indexPartition + 1, rEnd);
    }
  };

  sorting.quickSort = function (unsortedArray) {
    var array = unsortedArray.slice();

    // measure of the starting time
    var startTime = performance.now();

    quickSortOriginal(array, 0, array.length - 1);

    // measure of the starting time
    var endTime = performance.now();
    
    return {
      n: array.length,
      time: endTime - startTime,
      value: array
    };
  };

}( window.sorting = window.sorting || {} ));
