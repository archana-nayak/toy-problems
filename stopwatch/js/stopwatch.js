//ES6 syntax
// const stopwatch =  {
//   start () {
//     console.log('watch started...');
//   }
// }

// stopwatch.start();

function stopwatch (opts){
  this.isOn = false;
  let delay = opts.delay;
  let time = 0;
  let interval;
  let offset;
  let elem = opts.elem;

  const update = () => {
    if (this.isOn) {
      time += delta();
    }
    const formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  };

  //calculates the time passed since last update
  const delta = () => {
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;
    return timePassed;
  };

  const timeFormatter = (timeInMilli) => {
    let time = new Date(timeInMilli);
    let minutes = time.getMinutes().toString();
    let secs = time.getSeconds().toString();
    let milli = time.getMilliseconds().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (secs.length < 2) {
      secs ='0' + secs;
    }
    while (milli.length < 3) {
      milli = '0' + milli;
    }

    return minutes + ' : ' + secs + ' : ' + milli;
  };
  
  this.start = () => {
    if (!this.isOn) {
      offset = Date.now();//time the watch starts
      interval = setInterval(update, delay);
      this.isOn = true;
    }
  };
  this.stop = () => {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = () => {
    time = 0;
    update();
  };

}

