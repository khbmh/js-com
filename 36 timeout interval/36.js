const timer = document.getElementById('timer');
const btn = document.getElementById('btn');
// console.log(timer.innerText);
btn.addEventListener('click', () => {

  let timerText = Number(timer.innerText);
  // console.log(timerText);
  if (isNaN(timerText)){
alert('time is up');
return;
  }

  timerInt = setInterval(() => {
    if (timerText === 0) {
      timer.innerText = '3';
      clearInterval(timerInt);
      return;
    }
    --timerText;
    timer.innerText = timerText;
  }, 1000);
});
