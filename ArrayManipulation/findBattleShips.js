/**
 * @param {character[][]} board
 * @return {number}
 */
// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
//https://leetcode.com/problems/battleships-in-a-board/description/
//Explanation:
//A head of a battleship means the top most or left most cell with value ‘X’.
// Thus, we only need to count those heads.

// There are three rules to tell if a cell is a ‘head’:

// The cell is a ‘X’ (board[i][j] == 'X')
// No top side neighbor, or the left neighbor is a ‘.’ (i == 0 || board[i - 1][j] == '.')
// No left side neighbor, or the right neighbor is a ‘.’ (j == 0 || board[i][j - 1] == '.')

var countBattleships = function(board) {
 
  var count = 0;
   
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X' && (row === 0 || board[row - 1][col] === '.') && (col === 0 || board[row][col - 1] === '.')) {
        count++;
      }
    }
  }
    return count;
  }
  