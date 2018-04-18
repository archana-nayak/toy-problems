var MedianFinder = function() {
  this.ary = [];
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
 
  var low = 0 ; 
  var high = this.ary.length-1;
  
  while(low <= high)
      {
          var mid = Math.floor((high + low)/2);
          
          if(this.ary[mid]  < num)
              {
                  low = mid+1;
              }
          else
              {
                  high =mid-1;
              }
      }
  
  // insert at  location trick for javascript array.
  this.ary.splice(low, 0, num);
  
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  
  if(this.ary.length % 2 ==0)
      {
          var mid = this.ary.length/2;
          return (this.ary[mid] + this.ary[mid-1])/2;
      }
  else
      {
          var mid = Math.floor(this.ary.length/2);
          return (this.ary[mid]);
      }
  
};

var array = [-1, -2, -3, -4, -5];
var medianObj = new MedianFinder();
for (var i = 0; i < array.length; i++) {
  medianObj.addNum(array[i]);
  console.log(medianObj.findMedian());
}