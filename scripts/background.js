// console.log("working");
let selected;
let selectedX;
let selectedY;
let selectedString;
let selectedRect;
let wordDisplay = document.createElement("word-display");
let wordDisplayContent = document.createTextNode("Wordcount is");
let wordDisplayNum = document.createElement("p");
let wordDisplayNumContent = document.createTextNode("0");

wordDisplay.appendChild(wordDisplayContent);
wordDisplayNum.appendChild(wordDisplayNumContent);

let html = document.querySelector("html");
let mouseX;
let mouseY;
html.appendChild(wordDisplay);
wordDisplay.appendChild(wordDisplayNum);

//wordDisplay.style.top = "0px";
wordDisplay.style.position = "absolute";
wordDisplay.style.backgroundColor = "green";
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

//main scan loop
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
    wordDisplay.style.visibility = "visible";

    console.log("X and Y are " + selectedX + ", " + selectedY);

    wordDisplayNum.textContent = wordCount;
  } else {
    wordDisplay.style.visibility = "hidden";
  }
}, 10);
