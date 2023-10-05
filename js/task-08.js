const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

const {email, password} = evt.currentTarget.elements;

if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
}
    
const dataObject = {
    email: email.value,
    password: password.value,
}


  console.log(dataObject);

  evt.currentTarget.reset();
}