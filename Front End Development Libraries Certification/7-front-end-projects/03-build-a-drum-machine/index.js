const displayNames = {
  'Q': 'Bass Drum Sound',
  'W': 'Snare Drum Hit',
  'E': 'Rock Hi Hat',
  'A': 'High Tom',
  'S': '909 Mid Tom',
  'D': '808 Mid Tom',
  'Z': '909 Low Tom',
  'X': 'Claves Bell',
  'C': 'Hand Clap',
};

const displayBeat = document.querySelector("#display");
const drumContainer = document.querySelector("#drum-machine");

drumContainer.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    let clickedBtnText = e.target.innerText;
    let playClip = document.getElementById(clickedBtnText)
    playClip.pause();
    playClip.currentTime = 0;
    playClip.play();
  
    displayBeat.innerText = displayNames[clickedBtnText];
  
    console.log(typeof e.target.innerText, 'click', clickedBtnText);
  }
});

const displayNamesKeys = Object.keys(displayNames);
console.log(displayNamesKeys);

document.addEventListener('keypress', e => {
  // console.log(typeof e.key, e.key);
  // console.log(typeof e.key.toUpperCase(), e.key.toUpperCase());

  let keyPressed = e.key.toUpperCase()
  let keyDisplayExist = displayNamesKeys.indexOf(keyPressed);

  if (keyDisplayExist !== -1) {
    console.log(keyPressed)
    let playClip = document.getElementById(keyPressed)
    playClip.pause();
    playClip.currentTime = 0;
    playClip.play();

    displayBeat.innerText = displayNames[keyPressed];
  }
});

