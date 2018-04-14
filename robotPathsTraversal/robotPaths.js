
//recursive solution to robot paths
// var countPathsRecursive = function(n, m){
//   if(n == 1 || m == 1){
//       return 1;
//   }
//   return countPathsRecursive(n-1, m) + countPathsRecursive(n, m-1);
// }

// solved using dynamic program. Using an additional 2D matrix
// with initial values of 0 to solve the problem. All values in the
// 0th row and all values in the 0th column are set to 0.
// Then you start from there.
var robotPaths = function(m, n) {
  var matrix = Array(m).fill(Array(n));
  // var matrix = Array(m).fill(Array(n).fill(0));
  // console.log(matrix.join('\n'));
  // var matrix = Array(m);
  // for (var i = 0; i < m; i++) {
  //   matrix[i] = Array(n);
  // }

  for (var i = 0; i < m; i++) {
    matrix[i][0] = 1;
  }

  for (var j = 0; j < n; j++) {
    matrix[0][j] = 1;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
 };

var count = robotPaths(3, 3);
console.log(count);

// var robotPaths = function(n, board = makeBoard(n), i = 0, j = 0) {


//   board.togglePiece(i, j);

//   var result = 0;
//   if (!outOfRange(i - 1, j, n) && !board.hasBeenVisited(i - 1, j)) {
//     result += robotPaths(n, board, i - 1, j);
//   }
//   if (i + 1 === n - 1 && j === n - 1) {
//     result += 1;
//   } else if (!outOfRange(i + 1, j, n) && !board.hasBeenVisited(i + 1, j)) {
//     result += robotPaths(n, board, i + 1, j);
//   }
//   if (!outOfRange(i, j - 1, n) && !board.hasBeenVisited(i, j - 1)) {
//     result += robotPaths(n, board, i, j - 1);
//   }
//   if (i === n - 1 && j + 1 === n - 1) {
//     result += 1;
//   } else if (!outOfRange(i, j + 1, n) && !board.hasBeenVisited(i, j + 1)) {
//     result += robotPaths(n, board, i, j + 1);
//   }

//   board.togglePiece(i, j);
//   return result;
// };
