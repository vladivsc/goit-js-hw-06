const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgElm = document.querySelector(".gallery");

const galleryElm = images.map(
  (image) =>
    `<li>
  <img src="${image.url}" alt="${image.alt}" width = '500px' height = '250px'>
</li>`
);

imgElm.append(...galleryElm);
imgElm.insertAdjacentHTML("afterbegin", galleryElm);

imgElm.style.display = "flex";
imgElm.style.flexWrap = "wrap";
imgElm.style.alignItems = "center";
imgElm.style.listStyle = "none";

console.log(galleryElm);
