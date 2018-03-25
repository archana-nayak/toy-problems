var mergeMeetings = function(meetings) {
  var sortedMeetings = meetings.slice().sort(function(a, b) {
    return a.startIndex > b.startIndex ? 1 : -1 //put a at lower
    // index if its start time is less than or equal to b.startIndex.
    //returning -1 ensures a is placed at lower index than b.
  });

  var mergedMeetings = [sortedMeetings[0]];//build a new array to store
  //all  meetings after the merge

  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentMeeting= mergedMeetings[mergedMeetings.length - 1];
    if (currentMeeting.endTime >= sortedMeetings[i].startTime) {
      currentMeeting.endTime = Math.max(currentMeeting.endTime, sortedMeetings[i].endTime);
    } else {
      mergedMeetings.push(sortedMeetings[i]);
    }
  }
};        