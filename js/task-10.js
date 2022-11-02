/* 
Напиши скрипт создания и очистки коллекции элементов. 

Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 

При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.

Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);

refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];

  amount = refs.input.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  console.log(boxes);

  refs.divContainer.append(...boxes);
}

function destroyBoxes() {
  refs.divContainer.remove();
  refs.input.value = "";
}
