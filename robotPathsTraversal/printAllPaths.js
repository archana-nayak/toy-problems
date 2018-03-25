var printAllPaths = function(m, n) {
  var allPaths = [];
  var count = 1;
  var matrix = []; //= Array(m).fill(Array(n));
  for (var i = 0; i < m; i++) {
    matrix[i] = Array(n);
    for (var j = 0; j < n; j++) {
      matrix[i][j] = count++;
    }
  }
  console.log(matrix);

  var printPaths = function(row, col, paths) {
    if (row === m - 1) {
      for (var j = col; j < n; j++) {
        paths.push(matrix[row][j]);
      }
      allPaths.push(paths);
      return;
    }
    if (col === n - 1) {
      for (var i = row; i < m; i++) {
        paths.push(matrix[i][col]);
      }
      allPaths.push(paths);
      return;
    }
    printPaths(row + 1, col, paths.concat(matrix[row][col]));
    printPaths(row, col + 1, paths.concat(matrix[row][col]));
    return;
  }

  printPaths(0, 0, []);
  return allPaths;
};

var allPaths = printAllPaths(4,4);
console.log(allPaths);
