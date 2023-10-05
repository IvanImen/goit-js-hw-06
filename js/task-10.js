const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector("input");
const square = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

console.dir(square);

function createBoxes() {
  let markup = "";
  for (let i = 0; i < input.value; i++) {
    markup += `<div style = "width: ${30+i*10}px; height: ${30+i*10}px; background-color:${getRandomHexColor()}"></div>`;
  }
  square.innerHTML = markup;
  }


function destroyBoxes() {
  square.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
