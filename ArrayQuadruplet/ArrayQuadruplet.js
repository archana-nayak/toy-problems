/*
inputs: array of unsorted integers
output: array of integers that add up to sum
in ascending order
sum = 20
input :[2, 7, 4, 0, 9, 5,1,3]
sortArray [0, 1, 2, 3, 4, 5, 7, 9]; n log n
[0, 1, , ]
*/
/*
function findArrayQuadruplet(arr, s) {
  // your code goes here
  var solution = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  
  console.log('arr ', arr);
  
  function findQuadruplet (arr, currentSum, result) {
    
    if (result.length === 4) {
      if (currentSum === 0) {
        //console.log(result);
        solution = [...result];
        return ;
      }
    }
    
    for (var i = 0; i < arr.length; i++) {
      
      findQuadruplet(arr.slice(0, i).concat(arr.slice(i + 1)) , currentSum - arr[i], result.concat(arr[i])); 
    } 
  }
  
  findQuadruplet (arr, s, []);
  console.log('solution ', solution);
  solution.sort(function (a, b) {
    return a - b;
  });
  return solution;
}
*/
// O(n2) solution along with sorting complexity of O(nlogn)
function findArrayQuadruplet(arr, s) {
  arr.sort();
  let farLeft = 0;
  let farRight = arr.length - 1;
  let hash = {};
  while (farLeft < farRight) {
    let outerSum = arr[farLeft] + arr[farRight];
    let t = s - outerSum;
    hash[t] = [arr[farLeft], arr[farRight]];
    let left = farLeft + 1;
    let right = farRight - 1;
    while (left < right) {
      let innerSum = arr[left] + arr[right];
      if (innerSum === t) {
        return (hash[t].concat([arr[left], arr[right]])).sort( function (a, b) {
          return a - b;
        });
      } else if (innerSum < t) {
        left++;
      } else if (innerSum > t) {
        right--;
      }
    }
    if (left === farLeft + 1 && right === farRight - 1) {
      break;
    }
    if ( arr[farLeft] + arr[farRight] + 2 * arr[left] < s) {
      farLeft++;
    } else if (arr[farLeft] + arr[farRight] + 2 * arr[left] > s) {
      farRight--;
    }
  }
  return [];
}


var array = [2, 7, 4, 0, 9, 5,1,3];

console.log(findArrayQuadruplet(array, 20));
/*
[2, 7, 4, 0, 9, 5, 1, 3]
[0, 1, 2, 3, 4, 5, 7, 9]
    ^                 ^
        ^           ^
{
11: []



}

*/

/*
Test Case #1
Input:
 
[], 12
Expected:
 
[]
Actual:
 
[]
Test Case #2
Input: [4,4,4], 12,Expected: [],Actual:  []
Test Case #3
Input: [4,4,4,2], 16,Expected: [],Actual:  []
Test Case #4
Input: [4,4,4,4], 16,Expected: [4,4,4,4],Actual:  [ 4, 4, 4, 4 ]
Test Case #5
Input: [2,7,4,0,9,5,1,3], 20,Expected: [0,4,7,9],Actual:  [ 0, 4, 7, 9 ]
Test Case #6
Input: [2,7,4,0,9,5,1,3], 120,Expected: [],Actual:  []
Test Case #7
Input: [1,2,3,4,5,9,19,12,12,19], 40,Expected: [4,5,12,19],Actual:  [ 4, 5, 12, 19 ]
 */