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

button.addEventListener("click", function () {
  if (inputLength() > 0) {
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    // input.value = "";
    createLi();
  }
});

input.addEventListener("keypress", function (event) {
  if (inputLength() > 0 && event.which === 13) {
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    // input.value = "";
    createLi();
  }
});
