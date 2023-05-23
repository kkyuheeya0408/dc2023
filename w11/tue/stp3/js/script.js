// let aCard = document.querySelector(".card");
// console.log(.aCard);

// let aCards = document.querySelectorAll(".card");
// console.log(.aCards);
// console.log(.aCards[0]);
// console.log(.aCards[1]);
// console.log(.aCards[2]);
// // for(let idx=0; idx<aCards.length; idx++) {
// //   cards[idx].onclick = (e) => {
// //     e.currentTarget.classList.toggle(
// //       "card-selected"
// //     );
// //   }
// // }foreach 구문
// cards.forEach((eachCard) => {
//   eachCard.onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       card-selected);
//     };
// });

// // let elem = document.getElementById("card1");
// // elem.onclick = () => {
// //   elem.classList.toggle(card - selected);
// // };
// // elem.onclick = function () {}와 같다.
let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
//for 구문 사용
// for (let idx = 0; idx < cards.length; idx++) {
//   cards[idx].onclick = (e) => {
//     e.curretTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// }

//for each 사용
cards.forEach((eachCard) => {
  eachCard.onclick = function (e) {
    e.curretTarget.classList.toggle(
      "card-selected "
    );
  };
});

// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };

// elem.onclick=function(){} -> 위 아래 같은 의미
