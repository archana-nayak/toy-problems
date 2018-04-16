function BinaryHeap (comparator) {
  this.heap = [];
  this.comparator = comparator || function(a, b) {
    return a - b; //default is min heap
  };
}

BinaryHeap.prototype.insert = function (value) {
  this.heap.push(value);
  this.bubbleUp(this.heap.length - 1);
};

BinaryHeap.prototype.removeRoot = function () {
  this.swap(0, this.heap.length - 1);
  let top = this.heap.pop();
  this.bubbleDown(0);
  return top;
};

BinaryHeap.prototype.swap = function (index1, index2) {
  [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
};

BinaryHeap.prototype.bubbleUp = function(node) {
  let parent = Math.floor((node - 1) / 2);
  while (node > 0 && (this.comparator(this.heap[node], this.heap[parent]) < 0)){
    // console.log('in bubbleUP ', node, parent);
    // console.log('comparator ', this.comparator(this.heap[node], this.heap[parent]));
    this.swap(node, parent);
    node = parent;
    parent = Math.floor((node - 1) / 2);
  }
}

BinaryHeap.prototype.bubbleDown = function (parent) {
  let child = this.findChildToSwap(parent);
  console.log('child, parent, heap ', this.heap[parent],this.heap[child], this.heap);
  while (child < this.heap.length && (this.comparator(this.heap[child], this.heap[parent]) < 0)) {
    this.swap(child, parent);
    parent = child;
    child = this.findChildToSwap(parent);
  }
}

BinaryHeap.prototype.findChildToSwap = function(parent) {
  let left = parent * 2 + 1;
  let right = parent * 2 + 2;
  let childIndices = [left, right].filter((index) => {
    return index < this.heap.length;
  });
  if (childIndices.length === 1) {
    return childIndices[0];
  }
  let childToSwap = (this.comparator(this.heap[childIndices[0]], this.heap[childIndices[1]]) < 0 ) ? childIndices[0] : childIndices[1];
  // let childToSwap = (this.comparator(this.heap[left], this.heap[right]) < 0 ) ? left : right;
  console.log('childIndices childToSwap ', childIndices, childToSwap);
  return childToSwap;  
}

function heapSort(array) {
  var minHeap = new BinaryHeap();
  var sortedArray = [];
  array.forEach((value) => {
    minHeap.insert(value);
  });
  console.log(minHeap);
  for (var i = 0; i < array.length; i++) {
    sortedArray.push(minHeap.removeRoot());
  }
  return sortedArray;
}

function sortKMessedArray(arr, k) {
  let n = arr.length;
  if (n < k) {
    return arr;
  }
  
  var minHeap = new BinaryHeap();
  for (let i = 0; i <= k; i++) {
    minHeap.insert(arr[i]);
  }
  
  for (i = k + 1; i < n; i++) {
    console.log('minHeap with elements ', minHeap);
    arr[i - (k + 1)] = minHeap.removeRoot();
    minHeap.insert(arr[i]);
    
  }
  for (i = 0; i <= k; i++) {
    arr[n - k - 1 + i] = minHeap.removeRoot();
  }
  console.log(arr);
  console.log(minHeap);
  return arr;
};



// let minHeap = new BinaryHeap();
// console.log(minHeap);
// minHeap.insert(7);
// let root = minHeap.removeRoot();
// console.log('minHeap ', minHeap);
// console.log('root ', root);


// let minHeap = new BinaryHeap();
// [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(function (value) {
//   //console.log(value);
//   minHeap.insert(value);
// });

// console.log(minHeap);
// var sorted = heapSort([10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]);
// console.log(sorted);

sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2);
//output = [1,2,3,4,5,6,7,8,9,10];

let maxHeap = new BinaryHeap(function (a, b) {
  return b - a;
});
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(function (value) {
  //console.log(value);
  maxHeap.insert(value);
});
console.log(maxHeap);
let sortedDesc = [];
for (var i = 0; i < 11; i++) {
 sortedDesc.push(maxHeap.removeRoot()); 
}
console.log(sortedDesc);