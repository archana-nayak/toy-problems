// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var towerHopper = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return true;
  }
  var target = nums.length - 1;
  var max_jump = nums[0];
  for (var i = 1; i <= max_jump; i++) {
    max_jump = Math.max(max_jump, i + nums[i]);
    if (max_jump >= target) {
      return true;
    }
  }
  return false;  
};
// var array = [3,2,1,0,4];//return false
var array = [2,3,1,1,4]; // return true.
var canHop = towerHopper(array);
console.log(canHop);
//Bottom Up Approach without extra space
// function canJump(nums) {
//   var lastPos = nums.length - 1;
//   for (var i = nums.length - 1; i >= 0; i--) {
//       if (i + nums[i] >= lastPos) {
//           lastPos = i;
//       }
//   }
//   return lastPos === 0;
// }

//Bottom Up Approach with extra space(the above eliminates the need
//for extra space)
// "public boolean canJump(int[] nums) {
//   Index[] memo = new Index[nums.length];
//   for (int i = 0; i < memo.length; i++) {
//       memo[i] = Index.UNKNOWN;
//   }
//   memo[memo.length - 1] = Index.GOOD;

//   for (int i = nums.length - 2; i >= 0; i--) {
//       int furthestJump = Math.min(i + nums[i], nums.length - 1);
//       for (int j = i + 1; j <= furthestJump; j++) {
//           if (memo[j] == Index.GOOD) {
//               memo[i] = Index.GOOD;
//               break;
//           }
//       }
//   }

//   return memo[0] == Index.GOOD;
// }"