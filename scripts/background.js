console.log("check1");

setInterval(function () {
  getSelectionText();
  console.log("check2");
}, 10);

function getSelectedText() {
  var selected = "";
  if (document.getSelection == true) {
    selected = document.getSelection();
  }
  console.log(selected);
}
