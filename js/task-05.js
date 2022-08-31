const inputElm = document.querySelector("#name-input");
const spanElm = document.querySelector("#name-output");

inputElm.addEventListener("input", newInput);

function newInput(event) {
  spanElm.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
