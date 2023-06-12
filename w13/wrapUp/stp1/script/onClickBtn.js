const btns = document.querySelectorAll("aside>ol>a");
console.log(btns);
let lastBtns;

const whenIClickTheBtn = (e) => {
  console.log("target", e.target);
  console.log("currTarget", e.currentTarget);
  const toggleTarget = e.currentTarget.querySelector("li");
  console.log("toggleTarget", toggleTarget);
  // 토글 눌렀을 때 리스트를 찾아주는 안정적인 코드
  toggleTarget.classList.add("pressed");
  // // 초보의 if 구문 활용을 통한 해결
  // if (lastBtns !== undefined) {
  //   lastBtns.classList.remove("pressed");
  // }
  // 옵셔널 체이닝을 이용한 간지나는 해결
  lastBtns?.classList.remove("pressed");
  lastBtns = toggleTarget;
};

btns.forEach((eachBtn) => {
  eachBtn.addEventListener("click", whenIClickTheBtn);
});
