const quoteStorage = [
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "- Lao Tzu"
  },
  {
    quote: "My powers are ordinary. Only my application brings me success.",
    author: "- Isaac Newton"
  },
  {
    quote: "Logic will get you from A to Z; imagination will get you everywhere.",
    author: "- Albert Einstein"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "- Henry David Thoreau"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "- Socrates"
  },
  {
    quote: "So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you.",
    author: "- Jesus Christ"
  },
  {
    quote: "Beauty in things exists in the mind which contemplates them.",
    author: "- David Hume"
  },
  {
    quote: "People first concern themselves with meeting their basic needs; only afterwards, do they pursue any higher needs.",
    author: "- Abdolkarim Soroush"
  },
  {
    quote: "Faith is taking the first step even when you don't see the whole staircase.",
    author: "- Martin Luther King, Jr."
  },
  {
    quote: "Try not to become a man of success, but rather try to become a man of value.",
    author: "- Albert Einstein"
  },
  {
    quote: "The value of a man should be seen in what he gives and not in what he is able to receive.",
    author: "- Albert Einstein"
  },
];

// random index of quoteStorage
const quoteStorageLength = quoteStorage.length;
let randomIndex = () => Math.floor(Math.random() * quoteStorageLength)
console.log(randomIndex, "ranbdo");

window.onload = newQuote;

const quoteText = document.getElementById("text")
const authorText = document.getElementById("author")

let prevRandNum = -1;

function newQuote() {
  console.log('button was clicked')
  
  //this is to prevent duplicate quotes
  let curRandNum = randomIndex();
  while (prevRandNum == curRandNum) {
    curRandNum = randomIndex();
  };
  prevRandNum = curRandNum

  quoteText.innerText = quoteStorage[curRandNum].quote;
  authorText.innerText = quoteStorage[curRandNum].author;
}

