const input = document.querySelector("#validation-input");

input.addEventListener("blur", textLenght);

console.dir(input);

function textLenght() {
    const expectedLength = parseInt(input.getAttribute('data-length'));
    const currentLength = input.value.trim().length;

    if (currentLength === expectedLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
}