function validCell(matrix, i, j) {
  return (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length);
}


function getNextMax(matrix, i, j) {
  var nextMax = {row : -1, col : -1, value : matrix[i][j]};
  
  if (validCell(matrix, i, j + 1) && matrix[i][j + 1] > nextMax.value) {
    nextMax.row = i;
    nextMax.col = j + 1;
    nextMax.value = matrix[i][j + 1];
  }
  if (validCell(matrix, i, j - 1) && matrix[i][j - 1] > nextMax.value) {
    nextMax.row = i;
    nextMax.col = j - 1;
    nextMax.value = matrix[i][j - 1];
  }
  if (validCell(matrix, i + 1, j) && matrix[i + 1][j] > nextMax.value) {
    nextMax.row = i + 1;
    nextMax.col = j;
    nextMax.value = matrix[i + 1][j];
  }
  
  if (validCell(matrix, i - 1, j) && matrix[i - 1][j] > nextMax.value) {
    nextMax.row = i - 1;
    nextMax.col = j;
    nextMax.value = matrix[i - 1][j];
  }
  return nextMax;
}

function getMiddle(matrix) {
  var midRow;
  var midCol;
  var m = matrix.length;
  var n = matrix[0].length;
  if ( m % 2 === 0 || n % 2 === 0) {
    midRow = Math.floor(m / 2);
    midCol = Math.floor(n / 2);
    var max = getNextMax(matrix, midRow, midCol);
    return (max.value > matrix[midRow][midCol]) ? max : {row : midRow, col : midCol, value: matrix[midRow][midCol]};
  }
  else {
    var midCell = {};
    midCell.row = m / 2;
    midCell.col = n / 2;
    midCell.value = matrix[midCell.row][midCell.col];
    return midCell;
  }
}


function getMaxCarrots(matrix) {
  var nextCell = getMiddle(matrix);
  console.log('nextCell ', nextCell);
  var count = 0;
  while (validCell(matrix, nextCell.row, nextCell.col)) {
    count += nextCell.value;
    var prevRow = nextCell.row;
    var prevCol = nextCell.col;
    matrix[prevRow][prevCol] = 0;
    nextCell = getNextMax(matrix, nextCell.row, nextCell.col);
    console.log('nextCell ', nextCell);
    if ((nextCell.row === prevRow && nextCell.col === prevCol) && nextCell.value > 0) {
      break;
    }
  }
  return count;
}


var matrix = [
[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]
];
var carrotCount = getMaxCarrots(matrix);
console.log(carrotCount);


//A better way of looking for the next biggest nextCell
// let nearby = [];

// // top
// nearby.push({
//   value: matrix[start.rowIndex - 1][start.index],
//   rowIndex: start.rowIndex - 1, 
//   index: start.index
// });

// // right 
// nearby.push({
//   value: matrix[start.rowIndex][start.index + 1],
//   rowIndex: start.rowIndex,
//   index: start.index + 1
// });

// // bottom
// nearby.push({
//   value: matrix[start.rowIndex + 1][start.index],
//   rowIndex: start.rowIndex + 1, 
//   index: start.index
// });

// // left 
// nearby.push({
//   value: matrix[start.rowIndex][start.index - 1],
//   rowIndex: start.rowIndex,
//   index: start.index - 1
// });

// let nextSquare = nearby.reduce((acc, curr) => { 
//   return acc.value > curr.value ? acc : curr  
// });

//https://medium.com/@internetross/a-particularly-wascally-wabbit-lessons-from-my-annals-of-software-eng-interviews-7fd7574f009b