//Find Min and the Max Simultaneously

function minMax(a, b) {
  return {min: a, max: b};
}

function getMinMax(a, b) {
  return (a > b)? minMax(b, a) : minMax(a, b);
}


function findMinMax (a) {
  let n = a.length;
  if (n < 2) {
    return minMax(a[0], a[0]);
  }
  let globalMinMax = getMinMax(a[0], a[1]);

  for (let index = 2; index + 1 < n; index += 2) {
    let localMinMax = (a[index] < a[index + 1]) ? minMax(a[index], a[index + 1]): minMax(a[index + 1], a[index]);
    globalMinMax = getMinMax(Math.min(localMinMax.min, globalMinMax.min),
    Math.max(localMinMax.max, globalMinMax.max));
    console.log('index ', index);
  }
  //if odd number of elements in the array, then check for the last element
  if (n % 2 !== 0) {
    globalMinMax = getMinMax(Math.min(a[n - 1], globalMinMax.min), Math.max(a[n - 1], globalMinMax.max))
  }
  return globalMinMax;
}


var array = [3,2,5,1,2,4,7];
console.log(findMinMax(array));

//Time complexity is O(n) and the space complexity is O(1);