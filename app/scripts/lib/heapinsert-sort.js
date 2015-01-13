'use strict';

(function (sorting, undefined) {

// Artículo http://revistas.utp.edu.co/index.php/revistaciencia/article/view/251
// Hugo Humberto Morales Peña, Angel Augusto Agudelo, Jorge Ivan Rios Patiño

// function HeapinsertSort(A)
// 1. BuildHeapMax(A)
// 2. for i <- 1 to floor(lenght(A) / 2)
// 3.   do A[i] <-> A[length[A] − i + 1]
// 4. InsertionSort(A)

// function BuildMaxHeap(A)
// 1.  heapSize[A] <- size[A] // Esta asignación se usa después, es una asignación global.
// 2.  for i <- floor(size[A] / 2) downto 1
// 3.    MaxHeapify(A, i)

// function MaxHeapify(n, i)
// 1.  l <- Left(i)
// 2.  r <- Right(i)
// 3.  if l <= heapSize[A] and A[l] > A[i] then
// 4.    largest <- l
// 5.  else
// 6.    largest <- i
// 7.  if r <= heapSize[A] and A[r] > A[largest] then
// 8.    largest <- r
// 9.  if largest != i then
// 10.   exchange A[i] <-> A[largest]
// 11.   MaxHeapify(A, largest)

  sorting.buildMaxHeap = function (A) {
    var heapSize = A.length;
    for (var i = Math.floor(A.length / 2) ; i >= 0; i--) {
      sorting.maxHeapify(A, i, heapSize);
    };
  };

  var parent = function (n) {
    return Math.floor(n / 2);
  };

  var left = function (n) {
    return 2 * n + 1;
  };

  var right = function (n) {
    return 2 * n + 2;
  };

  sorting.maxHeapify = function (A, i, heapSize) {
    var
      l = left(i),
      r = right(i),
      largest = 0;

    if (l <= heapSize && A[l] > A[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r <= heapSize && A[r] > A[largest]) {
      largest = r;
    }
    if (largest !== i) {
      var tmp = A[i];
      A[i] = A[largest];
      A[largest] = tmp;
      sorting.maxHeapify(A, largest, heapSize);
    }
  };

  sorting.heapinsertSort = function (unsortedArray) {
    var array = unsortedArray.slice();

    // measure of the starting time
    var startTime = performance.now();

    sorting.buildMaxHeap(array);
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      // Se corrige el 0 index accediendo el elemento en [array.length - i - 1]
      var tmp = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = tmp;
    };

    var byInsertion = sorting.byInsertion(array).value;

    // measure of the starting time
    var endTime = performance.now();

    return {
      n: array.length,
      time: endTime - startTime,
      value: byInsertion
    };
  };

}( window.sorting = window.sorting || {} ));
