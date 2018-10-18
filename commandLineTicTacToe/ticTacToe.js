var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class TicTacToe {
  constructor() {
    this.board = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    }
    this.currentPiece = 'X';
    this.movesLeft = 9;
  }
  displayBoard() {
    console.log(
      ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] +
      ' \n----------\n' +
      ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] +
      ' \n----------\n' +
      ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9]
     );
  }
  
  checkWinningMoves(num) {
    switch(num) {
      case '1':
        if (
          this.board[2] === this.currentPiece && this.board[3] === this.currentPiece ||
          this.board[5] === this.currentPiece && this.board[9] === this.currentPiece ||
          this.board[4] === this.currentPiece && this.board[7] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '2':
        if (
          this.board[1] === this.currentPiece && this.board[3] === this.currentPiece ||
          this.board[5] === this.currentPiece && this.board[8] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '3':
        if (
          this.board[2] === this.currentPiece && this.board[1] === this.currentPiece ||
          this.board[5] === this.currentPiece && this.board[7] === this.currentPiece ||
          this.board[6] === this.currentPiece && this.board[9] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '4':
        if (
          this.board[1] === this.currentPiece && this.board[7] === this.currentPiece ||
          this.board[5] === this.currentPiece && this.board[6] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '5':
        if (
          this.board[4] === this.currentPiece && this.board[6] === this.currentPiece ||
          this.board[2] === this.currentPiece && this.board[8] === this.currentPiece ||
          this.board[1] === this.currentPiece && this.board[9] === this.currentPiece ||
          this.board[3] === this.currentPiece && this.board[7] === this.currentPiece
          
        ) {
          return true;
        }
        break;
      case '6':
        if (
          this.board[4] === this.currentPiece && this.board[5] === this.currentPiece ||
          this.board[3] === this.currentPiece && this.board[9] === this.currentPiece
        ) {
          return true;
        }
        break;
        case '7':
        if (
          this.board[1] === this.currentPiece && this.board[4] === this.currentPiece ||
          this.board[3] === this.currentPiece && this.board[5] === this.currentPiece ||
          this.board[8] === this.currentPiece && this.board[9] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '8':
        if (
          this.board[7] === this.currentPiece && this.board[9] === this.currentPiece ||
          this.board[2] === this.currentPiece && this.board[5] === this.currentPiece
        ) {
          return true;
        }
        break;
      case '9':
        if (
          this.board[7] === this.currentPiece && this.board[8] === this.currentPiece ||
          this.board[3] === this.currentPiece && this.board[6] === this.currentPiece ||
          this.board[1] === this.currentPiece && this.board[5] === this.currentPiece
        ) {
          return true;
        }
        break;
      default:
        return false;
    }
  }

}

var game = new TicTacToe();
game.displayBoard();
console.log(game.currentPiece, " Pick a Number: ")
rl.on('line', function(move) {
  if (game.movesLeft === 0 && move.toLowerCase() === "yes") {
    game = new TicTacToe();
    game.displayBoard();
    console.log(game.currentPiece, " Pick a Number: ")
  } else if (game.movesLeft === 0 && move.toLowerCase() === "no") {
    rl.close();
  } else if (game.board[move] !== Number(move) || game.movesLeft === 0) {
    game.board[move] = game.currentPiece;
    game.displayBoard();
    console.log("INVALID MOVE ", game.currentPiece);
  } else {
    if (game.checkWinningMoves(move)) {
      game.board[move] = game.currentPiece;
      game.displayBoard();
      console.log(game.currentPiece," wins!!!\n Play again? [Yes or No]");
      game.movesLeft=0;
    } else {
      game.movesLeft--;
      game.board[move] = game.currentPiece;
      if (game.movesLeft === 0) {
        console.log("GAME OVER. NO MOVES LEFT!!!\n Play again? [Yes or No]");
      } else {
        game.displayBoard();
        game.currentPiece === 'X' ? game.currentPiece = 'O' : game.currentPiece = 'X';
        console.log(game.currentPiece, " Pick a Number: ")
      }
    }
  }  
})