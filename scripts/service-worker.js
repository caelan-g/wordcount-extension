// console.log("working");
let selected;
let selectedX;
let selectedY;
let selectedString;
let selectedRect;
let selectedHeight;
let selectedWidth;
let time;
let timeUnits;
let timeSeconds;
let timeText;

var link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap"
);

let wordDisplayText = document.createElement("word-display-text");
let wordDisplayTextContent = document.createTextNode(" words.");

let wordDisplayNum = document.createElement("word-display-num");
let wordDisplayNumContent = document.createTextNode("0");

let wordDisplayReadingText = document.createElement(
  "word-display-reading-text"
);
let wordDisplayReadingTextContent =
  document.createTextNode(" Reading time of ");

let wordDisplayReadingNum = document.createElement("word-display-reading-num");
let wordDisplayReadingNumContent = document.createTextNode("0 mins.");

let wordDisplay = document.createElement("word-display");

/*let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "/stylesheet.css";
head.appendChild(link);*/

document.head.appendChild(link);

wordDisplayText.appendChild(wordDisplayTextContent);
wordDisplayNum.appendChild(wordDisplayNumContent);
wordDisplayReadingText.appendChild(wordDisplayReadingTextContent);
wordDisplayReadingNum.appendChild(wordDisplayReadingNumContent);

let html = document.querySelector("html");
let head = document.querySelector("head");
let mouseX;
let mouseY;

html.appendChild(wordDisplay);
wordDisplay.appendChild(wordDisplayNum);
wordDisplay.appendChild(wordDisplayText);
wordDisplay.appendChild(wordDisplayReadingText);
wordDisplay.appendChild(wordDisplayReadingNum);

//wordDisplay.style.top = "0px";
wordDisplay.style.position = "absolute";
//wordDisplay.style.backgroundColor = "green";
wordDisplay.style.display = "inline-block";

document.addEventListener("click", hideWordDisplay);
hideWordDisplay();

//function to get selected text in string
function getSelectedText() {
  if (document.getSelection) {
    selection = document.getSelection();
    selectedString = selection.toString();
    let range = selection.getRangeAt(0);

    selectedRect = range.getBoundingClientRect();
    return selectedRect, selectedString;
  } else {
    return;
  }
}

function getSelectedXY() {
  //let selectedRect = selectedText.getBoundingClientRect();

  //get position in related to viewport
  selectedX = selectedRect.x;
  selectedY = selectedRect.y;

  //get position in relation to webpage
  selectedX = selectedX + window.scrollX;
  selectedY = selectedY + window.scrollY;

  return selectedX, selectedY;
}

function getSelectedDimensions() {
  //get height by taking bottom and top and finding difference
  selectedHeight = selectedRect.bottom - selectedRect.top;

  //get width by taking right and left and finding difference
  selectedWidth = selectedRect.left - selectedRect.right;

  return selectedHeight, selectedWidth;
}

//mouse check loop that scans on mouse move
/*document.addEventListener("mousemove", function (event) {
  mouseX = parseInt(event.clientX);
  mouseY = parseInt(event.clientY);
});*/

function getWordCount() {
  length = selectedString.length;
  wordCount = selectedString.split(" ").length;

  return wordCount, length;
}

function getReadingTime() {
  time = wordCount / 230; //in minutes (formula is MID)

  if (time < 1) {
    //converts minutes to seconds if under 1 minute and/or adds plural
    time = time * 60;
    timeUnits = " second";
  } else {
    timeSeconds = Math.round(60 * (time - Math.round(time))); //first subtracts minutes rounded from minutes to find seconds, then finds and rounds seconds
    timeUnits = " minute";
    //console.log(timeSeconds);
  }

  time = Math.round(time);

  if (time > 1) {
<<<<<<< HEAD
    //adds plural and punctuation depending if > 1
    timeUnits = timeUnits + "s.";
=======
    //adds prefix and punctuation depending if > 1
    timeText = time + timeUnits + " " + timeSeconds + " seconds.";

    timeText = time + timeUnits;
>>>>>>> 07a635bba58fffb10f1548f9741cddd31d6c9dac
  } else {
    //timeUnits = timeUnits + ".";
    timeUnits = timeUnits + "s";
  }

  if (timeSeconds) return timeText;
}

function assignStyles() {
  wordDisplay.style.backgroundColor = "rgb(240,240,240)";
  wordDisplay.style.paddingLeft = "5px";
  wordDisplay.style.paddingRight = "5px";
  wordDisplay.style.paddingTop = "3px";
  wordDisplay.style.paddingBottom = "3px";
  wordDisplay.style.boxShadow = "2px 2px 3px rgba(0,0,0,.5";
  wordDisplay.style.borderRadius = "5px";
  wordDisplay.style.fontSize = "13px";
  wordDisplay.style.fontWeight = "600";
  wordDisplay.style.fontFamily = "Outfit, Arial, Sans-Serif";
  wordDisplay.style.color = "rgb(10,10,10)";
  wordDisplay.style.transition = "0.1s all ease-in-out";
  wordDisplay.style.zIndex = 10;
  wordDisplay.style.userSelect = "none";
}
assignStyles();

function hideWordDisplay() {
  wordDisplay.style.opacity = "0";
}

//main scan loop
setInterval(function () {
  getSelectedText();
  getWordCount();

  if (length > 0 && document.getSelection) {
    getSelectedXY();
    getSelectedDimensions();
    getReadingTime();

    selectedHeight = selectedRect.bottom - selectedRect.top; //gets height of selected element

    wordDisplay.style.top = selectedY + selectedHeight + "px";
    wordDisplay.style.left = selectedX + "px";
    wordDisplay.style.opacity = "1";

    wordDisplayNum.textContent = wordCount;
    wordDisplayReadingNum.textContent = timeText;

    /*wordDisplay.style.visibility = "visible";
    wordDisplay.style.top = mouseY + 10 + "px";
    wordDisplay.style.left = mouseX + "px";*/
  } else {
    hideWordDisplay();
  }
}, 10);
