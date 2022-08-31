const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElm = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const liElm = document.createElement("li");
  liElm.classList.add("item");
  liElm.textContent = ingredient;
  return liElm;
});

ingredientsElm.append(...elements);
console.log(ingredientsElm);
