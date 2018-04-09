
var asyncMap = function(tasks, callback) {
  var results = [];
  var count = 0;
  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      console.log('i ', i);
      tasks[i]((result) => {
        results[i] = result;
        count++;
        if (count === tasks.length) {
          callback(results);
        }
      });
    }) (i);
  }  
}



asyncMap([
  function(cb){
   setTimeout(function(){
       cb('one');
     }, 200);
   },
   function(cb){
     setTimeout(function(){
       cb('two');
     }, 100);
   }
  ],
   function(results){
     // the results array will equal ['one','two'] even though
     // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });