
const alertButton = document.getElementById("mybutton");

const alertButton1 = function () {
  alert("Button clicked");
};
alertButton.addEventListener("click", alertButton1);

const changeClassBlueBackground = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};

const attachEventToChangeColorButton = function () {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", changeClassBlueBackground);
};

attachEventToChangeColorButton();


const toggleColor = function () {
  const bodyElement1 = document.body;
  bodyElement1.classList.toggle("red-background");
};

const attachEventToChangeColorButton1 = function () {
  const changeColorButton1 = document.getElementById("toggle-button");
  changeColorButton1.addEventListener("click", toggleColor);
};

attachEventToChangeColorButton1();

