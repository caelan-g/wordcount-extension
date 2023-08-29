// console.log("working");
let selected;
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
    selected = document.getSelection().toString();
  }
  return selected;
}

//mouse check loop that scans on mouse move
document.addEventListener("mousemove", function (event) {
  mouseX = parseInt(event.clientX);
  mouseY = parseInt(event.clientY);
});

//main scan loop
setInterval(function () {
  getSelectedText();
  length = selected.length;
  if (length > 0) {
    //console.log("mouseX and Y is " + mouseX + " " + mouseY);
    wordCount = selected.split(" ").length;
    //console.log("Wordcount is " + wordCount);
    wordDisplay.style.visibility = "visible";
    wordDisplay.style.top = mouseY + 10 + "px";
    wordDisplay.style.left = mouseX + "px";

    wordDisplayNum.textContent = wordCount;
  } else {
    wordDisplay.style.visibility = "hidden";
  }
}, 10);
