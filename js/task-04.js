let counterValue = 0;

const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueElm = document.querySelector("#value");

incrementBtn.addEventListener("click", onIncrementValue);
decrementBtn.addEventListener("click", onDecrementValue);

function onIncrementValue() {
  counterValue++;
  valueElm.textContent = counterValue;
}

function onDecrementValue() {
  counterValue--;
  valueElm.textContent = counterValue;
}
