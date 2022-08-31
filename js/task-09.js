function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  magicBtn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.magicBtn.addEventListener("click", onButtonClickChangeBodyColor);

function onButtonClickChangeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}
