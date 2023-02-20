var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createLi() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createLi();
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    // input.value = "";
  }
}

function addListAfterKeypress() {
  if (inputLength() > 0 && event.which === 13) {
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    // input.value = "";
    createLi();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
