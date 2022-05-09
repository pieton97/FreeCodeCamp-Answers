const topDisplay = document.getElementById("top-display");
const display = document.getElementById("display");
const numbers = document.querySelector(".numbers");
const operations = document.querySelector(".operations");
const equals = document.getElementById("equals");

let numStore1 = 0;
let numStore2 = 0;

let secondState = false;
let previousAns = 0;
let lastOperation;

//if state, then cur val == numstore-1/2
numbers.addEventListener('click', e => {
 if (e.target.tagName === "BUTTON") {
  //appending numbers to storage
  if (secondState == false) {
    if (numStore1 == 0) {
      numStore1 = e.target.innerText;
    } else {
      numStore1 += e.target.innerText;
    }
  } else if (secondState == true) {
    if (numStore2 == 0) {
      numStore2 = e.target.innerText;
    } else {
      numStore2 += e.target.innerText;
    }
  }

  //displaying numbers from storage
  if (secondState == false) {
    topDisplay.innerText = `${numStore1}`;
    display.innerText = numStore1;
  } else {
    topDisplay.innerText = `${numStore1} ${lastOperation} ${numStore2}`;
    display.innerText = numStore2;
  }
 }
  console.log(numStore1, typeof numStore1, numStore2, typeof numStore2);
});

operations.addEventListener('click', e => {
 if (e.target.tagName === "BUTTON") {
  if (secondState == false) {
    //clicking operation for first time
    secondState = true;

    lastOperation = e.target.innerText;

    topDisplay.innerText = `${numStore1} ${lastOperation}`;
    display.innerText = 0;
  } else if (secondState == true && display.innerText == 0) {
    //clicking operation after the first time, but want to change to diff operation
    lastOperation = e.target.innerText;
    topDisplay.innerText = `${numStore1} ${lastOperation}`;
  } else if (secondState == true) {
    //clicking an operation after first time

    topDisplay.innerText = `${numStore1} ${lastOperation} ${numStore2}`;
    display.innerText = 0;
  } 
 }
});


equals.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON") {
    console.log(lastOperation); 
    previousAns = calculate(lastOperation, numStore1, numStore2);

    topDisplay.innerText = `${numStore1} ${lastOperation} ${numStore2} = ${previousAns}`;
    display.innerText = previousAns;
    
    numStore1 = 0;
    numStore2 = 0;
    secondState = false;
  }  
});


//calculator below
const calculate = (operator, num1, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return doOperation[operator](num1, num2);
};

var doOperation = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  'x': function (x, y) { return x * y },
  '/': function (x, y) { return x / y },
};

const clearCalc = () => {
  numStore1 = 0;
  numStore2 = 0;
  secondState = false;
  display.innerText = numStore1;
};



/* ---my thinking process when starting the project:

AC clicked: set everything = to 0, but not the previous answer

nums clicked - appends clicked number to 
  store1 (secondState:false)
  store2 (secondState:true)

operations clicked:
 if (secondState == false) {
  secondState = true;

  set display = 0;
  set prev-display = store1;
 }
 else if (secondState == true) {
  store1 = math(store1 & store2)

  set display = 0
  set prev-display = store1
 }

equal sign clicked: 
 secondState = false

 math(store1 & store2)
 previousAns = math(store1 & store2)

 set display = math(store1 & store2)
 set prev-display = previousAns

OTHER:
if display length > 2 && display[0] == 0, delete first 0

if decimal(.) btn clicked: indexof(.) exist: do nothing

*/

