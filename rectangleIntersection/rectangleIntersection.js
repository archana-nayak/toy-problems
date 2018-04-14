// function findXOverlap(x1, width1, x2, width2) {
//   var rightX1 = x1 + width1;
//   var rightX2 = x2 + width2;
//   var highestStartPoint = Math.max(x1, x2);  //leftMax
//   var lowestEndPoint = Math.min(rightX1, rightX2); //rightMin
//   if (highestStartPoint >= lowestEndPoint) {
//     return {leftX: null, width: null};
//   }
//   return {leftX: highestStartPoint, width: lowestEndPoint - highestStartPoint}; 
// }

// function findYOverlap(y1, height1, y2, height2) {
//   var topY1 = y1 + height1;
//   var topY2 = y2 + height2;
//   var highestStartPoint = Math.max(y1, y2);
//   var lowestEndPoint = Math.min(topY1, topY2);

//   if (lowestEndPoint <= highestStartPoint) {
//     return {bottomY: null, height: null};
//   }

//   return {bottomY: highestStartPoint, height: lowestEndPoint - highestStartPoint};
// }

function findPointIntersection(point1, length1, point2,length2) {
  var highestStartPoint = Math.max(point1, point2);  //leftMax
  var lowestEndPoint = Math.min(point1 + length1, point2 + length2); //rightMin
  if (highestStartPoint >= lowestEndPoint) {
    return {startPoint: null, overlapLength: null};
  }
  return {startPoint: highestStartPoint, overlapLength: lowestEndPoint - highestStartPoint}; 
}

function findRectangleIntersection() {
  var xOverlap = findPointIntersection(x1, width1, x2, width2);
  var yOverlap = findPointIntersection(y1, height1, y2, height2);

  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    
    var returnVal = 
    {
      leftX: null,
      bottomY: null,
      width: 0,
      height: 0  
    };
    return returnVal;
  }
  var returnVal = 
  {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength 
  };
  return returnVal;
}
/** 

(1)                 (2)           (3)                    (4)
-----------      ----------    --------              -----
   ------------    -----                 -----            -----
                                   
   overlap        contained     no                    single point of
                  in other   intersection             intersection
                   
*/                  