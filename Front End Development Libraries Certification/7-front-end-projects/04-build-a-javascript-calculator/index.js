const display = document.getElementById("display");
const clear = document.getElementById("clear");
const numbers = document.querySelector(".numbers");
const operations = document.querySelector(".operations");
const equals = document.getElementById("equals");

let numStore1 = 0;
let numStore2 = 0;

let secondState = false;
let previousAns = 0;

numbers.addEventListener('click', e => {
  numStore1 += e.target.innerHTML;

  // console.log(e.target.innerHTML);
  console.log(numStore1, typeof numStore1);
  display.innerHTML = numStore1;
});

/*
AC clicked: set everything = to 0

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

*/

