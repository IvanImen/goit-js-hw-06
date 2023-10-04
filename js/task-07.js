const input = document.querySelector("#font-size-control");
const text = document.querySelector('#text');

input.addEventListener('input', textSize);

text.style.fontSize = '56px';

function textSize() {
    text.style.fontSize = `${input.value}px`;
}