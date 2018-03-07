/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds = 3,sequences = [], result = []) {
  // TODO: your solution here
  var choices = ['rock', 'paper', 'scissors'];
  if (rounds === 0) {
    sequences.push(result);
    return;
  }
  for (var i = 0; i < choices.length; i++) {
    rockPaperScissors(rounds - 1, sequences, result.concat(choices[i]));
  }

  return sequences;
};

var output = rockPaperScissors();
console.log(output);
console.log(output.length);