
var quickSort = function(array, low = 0, high = array.length - 1) {
  if (low < high) {
    var lp = low;
    var rp = high - 1;
    var pivot = high;
    
    while (lp < rp) {
      while (array[lp] < array[pivot]) {
        lp++;
      }
      while (rp > 0 && array[rp] > array[pivot]) {
        rp--;
      }
      if (lp < rp) {
        [array[lp], array[rp]] = [array[rp], array[lp]]; //swap using ES6 destructuring
      }
    }
    [array[lp], array[pivot]] = [array[pivot], array[lp]];
    quickSort(array, low, lp - 1);//pivot is in right place so avoid it
    quickSort(array, lp + 1, high);
  }
  return array;
}

var sorted = quickSort([3,34,4,12,5,28],0,5);
console.log(sorted);