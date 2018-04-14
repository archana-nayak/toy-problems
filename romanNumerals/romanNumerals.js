/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
//input: string. larger literal in front of smaller, additive operation
// if smaller in front of larger literal; subtractive operation
// only one smaller literal in front of a larger literal
var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
  var total = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    var currentVal = DIGIT_VALUES[romanNumeral.charAt(i)];
    var nextVal = DIGIT_VALUES[romanNumeral.charAt(i + 1)];
    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
};


console.log(translateRomanNumeral("MCMXCVII"));

