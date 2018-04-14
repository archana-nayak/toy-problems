// findPivot

// I have an array of words that are mostly alphabetical, 
// except they start somewhere in the middle of the alphabet,
// reach the end, and then start from the beginning of the alphabet.
// In other words, this is an alphabetically ordered array that has 
// been "rotated." Write a function that returns the index of the pivot,
// or null if there is no pivot (meaning the entire list of words is in
// alphabetical order). 

// For example:
// ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// // returns 3

// Remember the rules of how to answer technical prompts. Try and go
// from a working naive solution to a working ideal solution.

//simple linear solution
// var findPivot = function (arr, start, end) {
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i-1]) {
//       return i;
//     }
//   }
//   return null;
// };

//logn solution
var findPivot = function(arr, start, end) {
  start = start || 0;
  end = end || arr.length - 1; 
  var middle = Math.ceil((start + end)/2);
  if(arr[start] < arr[middle]) { // Check if this section (start -> mid, the LEFT half) is        sorted
    // This section is sorted
    // Is there another section of the array remaining to check? (it would be the RIGHT half)
    if(end === middle) { // nothing left, we didn't find the pivot
      return null;
    } else { // something left, check the RIGHT half
      return findPivot(arr, middle, end);
    }
  } else {
    // This section is NOT sorted, so the pivot is in this section (start -> mid)
    if(middle - start === 1) { // if start and mid are immediately next to each other, we found pivot
      return middle;  
    } else { // otherwise, we should continue our search on this section of the array
      return findPivot(arr, start, middle); 
    }
  }
}

// //https://gist.github.com/tim-hr/889796042cf3d684a2a951910644bb57
// //… can be refactored into 
// var findPivot = function(arr, start, end) {
//   start = start || 0;
//   end = end || arr.length - 1; 
//   var middle = Math.ceil((start + end)/2);
//   if(end === middle) {
//     // We've combined our two stop cases. 
//     // Since we're always checking the LEFT half first, 
//     // if the middle === end, it means we've finished our search
//     // Does this small section contain the pivot? if not, we didn't find one
//     // if yes, the pivot index is end/middle
//     return arr[start] < arr[end] ? null : middle;
//   }
//   if(arr[start] < arr[middle]) {
//     return findPivot(arr, middle, end);
//   } else {
//     return findPivot(arr, start, middle)
//   }
// }