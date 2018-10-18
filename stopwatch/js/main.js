
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');
const opts = {
  elem: timer,
  delay: 10
};
const watch = new stopwatch(opts);

toggleBtn.addEventListener('click', () => {
  if (!watch.isOn) {
    watch.start();
    toggleBtn.textContent = 'Stop';
  } else {
    watch.stop();
    toggleBtn.textContent = 'Start';
  }
});

resetBtn.addEventListener('click', () => {
  if (!watch.isOn) {
    watch.reset();
  }
});



