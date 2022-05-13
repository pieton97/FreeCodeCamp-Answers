const setTimer = document.getElementById('set-timer');

//break objects variables
const breakLength = document.getElementById('break-length');
const breakDecrement = document.getElementById('break-decrement');
const breakIncrement = document.getElementById('break-increment');

//session object variables
const sessionLength = document.getElementById('session-length');
const sessionDecrement = document.getElementById('session-decrement');
const sessionIncrement = document.getElementById('session-increment');

const timeLeft = document.getElementById('time-left');
const startStop = document.getElementById('start_stop');


let breakDefault = 3;
let sessionDefault = 30;

breakLength.innerHTML = breakDefault;
sessionLength.innerHTML = sessionDefault;



setTimer.addEventListener('click', (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON'){
    modifyTimer(e.target.id);
  }


});

const modifyTimer = (action) => {
  // console.log(action);
  const [a,b] = action.split('-');

  if (a === 'break') {
    (b === 'decrement') ? breakDefault-- : breakDefault++
    breakLength.innerHTML = breakDefault;
  } 
  else if (a === 'session') {
    (b === 'decrement') ? sessionDefault-- : sessionDefault++
    sessionLength.innerHTML = sessionDefault;
    timeLeft.innerHTML = sessionDefault + ":00";
  }



};

const adjustTimer = () => {
  console.log('this will adjust the timer');
};

const resetTimer = () => {
  console.log('this will reset the timer');
};

/* starting thoguhts on how to solve this efficiently

one main event listener with many if statements

onclick functions

*/
