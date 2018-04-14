function findPivot(arr, low = 0, high = arr.length - 1) {

  if (high < low) {
    return -1;
  }
  if (high === low) {
    return low;
  }
  var mid = Math.floor((low + high)/2);
  if ( mid < high && arr[mid] > arr[mid + 1]) {
    return mid;
  }
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }
  if (arr[low] >= arr[mid]) {
    return findPivot(arr, low, mid - 1);
  }
  return findPivot(arr, mid + 1, high);
}

function findKeyInPivotedArray(arr, key) {
  var n = arr.length;
  var pivot = findPivot(arr);
  if (pivot === -1) {
    return binarySearch(arr, 0, n - 1, key);
  }
  if (arr[pivot] === key) {
    return pivot;
  }

  if (arr[0] <= key) {
    return binarySearch(arr, 0, pivot - 1, key);
  }
  return binarySearch(arr, pivot + 1, n - 1 , key);
}

function binarySearch(arr, low, high, key) {
  if (high < low) {
    return -1;
  }
  var mid = Math.floor((low + high)/2);
  if (arr[mid] === key) {
    return mid;
  }
  if (arr[mid] < key) {
    return binarySearch(arr, mid + 1, high, key);
  }
  return binarySearch(arr, low, mid - 1, key);
}

// var array = [3,4,5,1,2];
// var array = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// console.log(findPivot(array));
// var array = [5, 6, 7, 8, 9, 10, 1, 2, 3];
var array = [30, 40, 50, 10, 20];
console.log(findKeyInPivotedArray(array, 10));
