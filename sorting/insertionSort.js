// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

// Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version[2]
// Efficient for (quite) small data sets, much like other quadratic sorting algorithms
// More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
// Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(nk) when each element in the input is no more than k places away from its sorted position
// Stable; i.e., does not change the relative order of elements with equal keys
// In-place; i.e., only requires a constant amount O(1) of additional memory space
// Online; i.e., can sort a list as it receives it

// function insertionSort(array, comparator) {
//   var n = array.length;
//   if (!Array.isArray(array)) {
//     return [array];
//   } 
//   if (array.length <= 1) {
//     return array;
//   }

//   for (var i = 1; i < n; i++) {
//     for (var j = i; j >= 0; j--) {
//       if (comparator(array[j - 1], array[j])) {//array[j - 1] > array[j]) {
//         [array[j], array[j - 1]] = [array[j - 1], array[j]];
//       }
//     }
//   }
//   return array;
// }

// function comparator(a, b) {
//   (a > b) ? 1 : - 1;
// }

// var array = [8,5,6,2,3,1,4];
// var sortedArray = insertionSort(array);
// console.log(sortedArray);

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];
  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }
  return transform;
};

var insertionSort = function(array, comparator) {
  if (!Array.isArray(array)) {
    return [array];
  }
  var n = array.length;
  //set the comparator so that you do not have to do
  //unnecessary checks each time for comparator
  if (!comparator) {
    comparator = function(a, b) {
      return (a.value < b.value ? -1 : 0);
    }
  }

  for (var i = 1; i < n; i++) {
    for (var j = i; j > 0; j--) {
      if (comparator(array[j], array[j - 1]) < 0) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } 
    }
  }
  return array;
};

var array = [8,5,5,6,2,3,1,4];
var transform = testingTransform(array);
// console.log(transform);
var sortedArray = insertionSort(transform);
console.log(sortedArray);

