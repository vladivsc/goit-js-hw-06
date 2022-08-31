const ctgElm = document.querySelectorAll(".item");
console.log("Number of categories:", ctgElm.length);

ctgElm.forEach(function (categories) {
  console.log("Category:", categories.firstElementChild.textContent);
  console.log("Elements:", categories.lastElementChild.children.length);
});
