function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  
  var set = new Set(arr); // O(n) 
  
  var result = [];
  
  for (var i = 0; i < arr.length; i++) { 
    if (set.has(arr[i] + k)) { 
      result.push([arr[i] + k, arr[i]]);
    }
  }
  
  return result;
}
