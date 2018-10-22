//An improvement on the above method would be mark already
//travelled cells that are not valid as failedPoints
//pass the failedPoints array and check if it contains the row
//and columns

function robotPath(array) {
  let solution = [];
  let m = array.length
  let n = array[0].length;

  function findARobotPath (array, row = 0, col = 0, failedPoints = []) {
    if (row < 0 || col < 0 || (row > m - 1) || col > n - 1) {
        return false;
    }

    if (failedPoints.includes([row, col])) {
      return false;
    }

    if ((row === m - 1 && col === n - 1) || findARobotPath(array, row + 1, col) || findARobotPath(array, row, col + 1)) {

        solution.push([row, col]);
        // console.log(solution);
        return true;
    }
    failedPoints.push([row, col]);
    return false;

}  
  findARobotPath(matrix);
  return solution;
}

let m = 3, n = 3;
let matrix = Array(m).fill(Array(n));
for (var i = 0; i < m; i++) {
  for (var j = 0; j < n; j++) {
    matrix[i][j] = 1;
  }
}
// let matrix = [];
// for (var i = 0; i < 3; i++) {
  
//     matrix[i] = [];
//     // matrix[i] = new Array(3);
//    for (var j = 0; j < 3; j++) {
//        matrix[i][j] = 0;
//    }
// }
console.log(matrix);
robotPath(matrix);


