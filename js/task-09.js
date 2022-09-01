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
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
}
