// console.log("working");
let selected;
let wordDisplay = document.createElement("word-display");
let wordDisplayContent = document.createTextNode("Hi there and greetings!");

wordDisplay.appendChild(wordDisplayContent);

let html = document.querySelector("html");
html.appendChild(wordCount);
html.remove();

html.style.top = "100px";

wordDisplay.style.top = "0px";
wordDisplay.style.position = "relative";
wordDisplay.style.height = "100px";
wordDisplay.style.top = "100px";
wordDisplay.style.backgroundColor = "green";

function getSelectedText() {
  if (document.getSelection) {
    selected = document.getSelection().toString();
  }
  return selected;
}

setInterval(function () {
  getSelectedText();
  length = selected.length;
  if (length > 0) {
    //console.log(length);
    wordCount = selected.split(" ").length;
    console.log("Wordcount is " + wordCount);
  }
}, 100);
