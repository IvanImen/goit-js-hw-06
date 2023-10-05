const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map( title => {
  const li = document.createElement("li");

  li.classList.add("item");
  li.textContent = title;

  return li
});

console.log(markup);
list.append(...markup)