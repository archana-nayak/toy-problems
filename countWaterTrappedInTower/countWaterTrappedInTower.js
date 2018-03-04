
var countTotalWater = function(towers) {
  var left = 0; //index of left pointer
  var right = towers.length - 1; //index of right pointer
  var max_left = 0; //value of max at left
  var max_right = 0; //value of max at right
  var totalWater = 0;
  while (left < right) {
    if ( towers[left] < towers[right]) {
      if ( towers[left] >= max_left) {
        max_left = towers[left];
      } else {
        totalWater += max_left - towers[left];
      }
      left++;
    } else {
      if (towers[right] >= max_right) {
        max_right = towers[right];
      } else {
        totalWater += max_right -towers[right];
      }
      right--;
    }
  }
  return totalWater;
};


var input = [5,1,3,4];//[5,2,3,2,1,3];//[5,3,1];//[3,1,5,2,4];
var output = countTotalWater(input);
console.log(output);
