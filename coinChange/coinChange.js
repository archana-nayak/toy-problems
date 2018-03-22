/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!coins.length) {
    return -1;
  }
  
  var minCoinsForSum = [];
  minCoinsForSum[0] = 0;
  for (var i = 1; i <= amount; i++) {
    minCoinsForSum[i] = Number.MAX_SAFE_INTEGER;
  }
  
  for (var i = 1; i <= amount; i++) {
    for (j = 0; j < coins.length; j++) {
      if (coins[j] <= i && minCoinsForSum[i - coins[j]] + 1 < minCoinsForSum[i]) {
        minCoinsForSum[i] = minCoinsForSum[i - coins[j]] + 1;
      }   
    }
  }
  // console.log('print', minCoinsForSum, amount);
  return minCoinsForSum[amount] === Number.MAX_SAFE_INTEGER ? -1 : minCoinsForSum[amount];
};

