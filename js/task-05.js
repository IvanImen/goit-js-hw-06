const input = document.querySelector("#name-input");
const string = document.querySelector("#name-output");

input.addEventListener("input", textInput);

console.dir(input);

function textInput() {
    if (input.value.trim() === "")
        string.textContent = `Anonymous`;
    else
        string.textContent = input.value.trim();
}