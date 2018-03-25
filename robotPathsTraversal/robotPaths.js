var countPathsRecursive = function(n, m){
  if(n == 1 || m == 1){
      return 1;
  }
  return countPathsRecursive(n-1, m) + countPathsRecursive(n, m-1);
}

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