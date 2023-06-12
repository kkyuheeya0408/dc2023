const indicator = document.querySelector(".indicator");
const progressTaget = document.querySelector("main");
// 우리가 실행할 함수 구문을 작성 또는 함수를 갖다 논다.
const progressBar = () => {
  const progressTagetBCR = progressTaget.getBoundingClientRect();
  const progress = 1 - progressTagetBCR.bottom / progressTagetBCR.height;
  // console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText = "transform: scaleX(" + progress + ")";
  } else if (progress < 0) {
    indicator.style.cssText = "transform: scaleX(0)";
    // 비는 공간 없애기
  }
};

// // 이벤트 리스너 추가하는 법 1
// document.onscroll = () => {
//   progressBar();
// };
// 이벤트 리스너 추가하는 법 2
document.addEventListener("scroll", progressBar);
