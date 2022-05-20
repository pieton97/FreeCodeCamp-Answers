//container for break length and session label with buttons
const setTimer = document.getElementById('set-timer');

//break objects variables
const breakLength = document.getElementById('break-length');
const breakDecrement = document.getElementById('break-decrement');
const breakIncrement = document.getElementById('break-increment');

//session object variables
const sessionLength = document.getElementById('session-length');
const sessionDecrement = document.getElementById('session-decrement');
const sessionIncrement = document.getElementById('session-increment');

//variables for session time left display, start/stop + reset buttons
const timerLabel = document.getElementById('timer-label');
const timeLeft = document.getElementById('time-left');
const startStop = document.getElementById('start_stop');
const alarmAudio = document.getElementById('beep');

let breakDefault = 5;
let sessionDefault = 25;

breakLength.innerHTML = breakDefault;
sessionLength.innerHTML = sessionDefault;


//event to the whole container to adjust the break/session time length
setTimer.addEventListener('click', (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON'){
    modifyTimer(e.target.id);
  }
});

const modifyTimer = (action) => {
  const [a,b] = action.split('-');

  //can only modify the time if timer isnt running
  if (sessionRunning == false && breakRunning == false) {
    //the nested ternary makes sure time value cant be <= 0, or > 60
    if (a === 'break') {
      (b === 'decrement') 
      ? ((breakDefault > 1) ? breakDefault-- : console.log('time value cant be <= 0')) 
      : ((breakDefault < 60) ? breakDefault++ : console.log('time value cant be > 60'));
  
      breakLength.innerHTML = breakDefault;
    } 
    else if (a === 'session') {
      (b === 'decrement') 
      ? ((sessionDefault > 1) ? sessionDefault-- : console.log('time value cant be <= 0')) 
      : ((sessionDefault < 60) ? sessionDefault++ : console.log('time value cant be > 60'));
  
      sessionLength.innerHTML = sessionDefault;
      timeLeft.innerHTML = sessionDefault + ":00";
    }
  }
};

const resetTimer = () => {
  clearInterval(timer);
  breakDefault = 5;
  sessionDefault = 25;
  breakLength.innerHTML = breakDefault;
  sessionLength.innerHTML = sessionDefault;
  timeLeft.innerHTML = sessionDefault + ":00";
  timerLabel.innerText = 'Session';

  alarmAudio.pause();
  alarmAudio.currentTime = 0;

  distance = 0;
  pause = false;
  startTimer = false;
  sessionRunning = false;
  breakRunning = false;
};

//starts timer, and pause/resume timer
let pause = false;
let startTimer = false;

startStop.addEventListener('click', () => {
  if (startTimer == false) {
    sessionCountDown();
    startTimer = true;
  } else if(pause === false) {
    pause = true;
  } else {
    pause = false;
  }
  console.log(pause, 'pause<', 'startTimer:', startTimer);
});

//below is start of pomodoro clock functionality
let timer = null;
let distance = 0;

let sessionRunning = false;
let breakRunning = false;

function sessionCountDown(){
  distance = sessionDefault * 60 * 1000;
  timer = setInterval(countDownTemplate, 1000);
  sessionRunning = true;
};

function breakCountDown(){
  distance = breakDefault * 60 * 1000;
  timer = setInterval(countDownTemplate, 1000);
  breakRunning = true;
};

const countDownTemplate = () => {
  if (!pause) {
    // counting down 1000ms (1s) from the total time distance every 1s
    distance = distance - 1000;

    // Time calculations for minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(minutes,seconds,'timer');

    // allows consistent 00:00 format
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Output the result in timeleft display
    timeLeft.innerHTML = minutes + ":" + seconds;
    
    // If the count down is over clear current timer and start new session/break
    if (distance <= 0) {
      clearInterval(timer);
      alarmAudio.pause();
      alarmAudio.currentTime = 0;
      alarmAudio.play();

      //sets timer on autoplay between session and break
      if (sessionRunning == true) {
        sessionRunning = false;
        timerLabel.innerText = 'Break';
        breakCountDown();
      } else {
        breakRunning = false;
        timerLabel.innerText = 'Session';
        sessionCountDown();
      }
    }
  }
};
