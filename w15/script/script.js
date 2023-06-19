let cards = document.querySelectorAll(".card");
console.log(cards);

let cardClickEvt = (e) => {
  e.currentTarget.classList.toggle("card-selected");
};
cards.forEach((c) => {
  c.addEventListener("click", cardClickEvt);
});
// https://ko.javascript.info/introduction-browser-events#ref-1221
// https://opentutorials.org/course/1375/6761
