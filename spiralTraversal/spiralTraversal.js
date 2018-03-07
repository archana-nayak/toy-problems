/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  // TODO: Implement me!
  var startRowIndex = 0;
  var startColIndex = 0;
  var endRowIndex = matrix.length - 1;
  var endColIndex = matrix[0].length - 1;
  var result = [];
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    for (var i = startColIndex; i <= endColIndex; i++) {
      result.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;
    for (var j = startRowIndex; j <= endRowIndex; j++) {
      result.push(matrix[j][endColIndex]);
    }
    endColIndex--;
    if (startRowIndex <= endRowIndex) {
      for (var i = endColIndex; i >= startColIndex; i--) {
        result.push(matrix[endRowIndex][i]);
      }
      endRowIndex--;
    }  
    if (startColIndex <= endColIndex) {
      for (var j = endRowIndex; j >= startRowIndex; j--) {
        result.push(matrix[j][startColIndex]);
      }
      startColIndex++;
    }   
  }
  return result;
};

// var output = spiralTraversal([
//   [1,2,3],
//   [4,5,6],
//   [10, 11, 12],
//   [7,8,9]
// ]);
var matrix = [[1, 2, 3, 4, 5, 6, 7]];
console.log(matrix.length);
var output = spiralTraversal(matrix);
console.log(output);