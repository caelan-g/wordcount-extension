// console.log("working");
let selected;
let selectedX;
let selectedY;
let selectedString;
let selectedRect;

let wordDisplayText = document.createElement("word-display-text");
let wordDisplayTextContent = document.createTextNode(" words.");

let wordDisplayNum = document.createElement("word-display-num");
let wordDisplayNumContent = document.createTextNode("0");

let wordDisplay = document.createElement("word-display");

/*let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "/stylesheet.css";
head.appendChild(link);*/

var link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap"
);
document.head.appendChild(link);

wordDisplayText.appendChild(wordDisplayTextContent);
wordDisplayNum.appendChild(wordDisplayNumContent);

let html = document.querySelector("html");
let head = document.querySelector("head");
let mouseX;
let mouseY;

html.appendChild(wordDisplay);
wordDisplay.appendChild(wordDisplayNum);
wordDisplay.appendChild(wordDisplayText);

//wordDisplay.style.top = "0px";
wordDisplay.style.position = "absolute";
//wordDisplay.style.backgroundColor = "green";
wordDisplay.style.display = "inline-block";

//function to get selected text in string
function getSelectedText() {
  if (document.getSelection) {
    selection = window.getSelection();
    selectedString = selection.toString();

    let range = selection.getRangeAt(0);

    selectedRect = range.getBoundingClientRect();
  }
  return selectedRect, selectedString;
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

//mouse check loop that scans on mouse move
document.addEventListener("mousemove", function (event) {
  mouseX = parseInt(event.clientX);
  mouseY = parseInt(event.clientY);
});

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
}

//main scan loop
assignStyles();

setInterval(function () {
  getSelectedText();
  length = selectedString.length;
  if (length > 0) {
    getSelectedXY();
    //console.log("mouseX and Y is " + mouseX + " " + mouseY);
    wordCount = selectedString.split(" ").length;
    //console.log("Wordcount is " + wordCount);
    /*wordDisplay.style.visibility = "visible";
    wordDisplay.style.top = mouseY + 10 + "px";
    wordDisplay.style.left = mouseX + "px";*/

    wordDisplay.style.top = selectedY + 20 + "px";
    wordDisplay.style.left = selectedX + "px";
    wordDisplay.style.opacity = "1";

    //console.log("X and Y are " + selectedX + ", " + selectedY);

    wordDisplayNum.textContent = wordCount;
  } else {
    wordDisplay.style.opacity = "0";
  }
}, 10);
