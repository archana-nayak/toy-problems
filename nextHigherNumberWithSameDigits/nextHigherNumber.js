// Given a number n, find the smallest number that has same set of digits as n
// and is greater than n. If x is the greatest possible number with 
// its set of digits, then print “not possible”.
// Input:  n = "218765"
// Output: "251678"
// Input:  n = "1234"
// Output: "1243"
// Input: n = "4321"
// Output: "Not Possible"
// Input: n = "534976"
// Output: "536479"

//questions to ask (negative numbers?, numbers with 
//all digits same, less than two digits)
var nextPermutation = function(nums) {
  var i;
  var smallest;
  // if (nums.length <= 1) {
  //   return nums;
  // }
  for (i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      break;
    }
  }
  if (i > 0) {
   
    smallest = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i - 1] && nums[j] < nums[smallest]) {
        smallest = j;
      }
    }
    swap (nums, i - 1, smallest);
    reverse(nums, i, nums.length - 1);
  }
  console.log(nums.join(''));
};

function reverse(nums, start , end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

function swap (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
var n = "218765";
var nums = n.split("").map(Number);
console.log(nums);
console.log(nextPermutation(nums));
