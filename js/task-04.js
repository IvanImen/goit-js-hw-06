const decreaseButton = document.querySelector('button[data-action="decrement"]');
const increaseButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

console.dir(counter);

decreaseButton.addEventListener("click", decreaseClick);
increaseButton.addEventListener("click", increaseClick);
let counterValue = 0;

function decreaseClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function increaseClick() {
    counterValue += 1;   
    counter.textContent = counterValue;
}