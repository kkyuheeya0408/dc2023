let observerOption = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.75,
  // 위 세가지는 기본세팅 순서는 상관없음
  // 어떤 순간에 옵서버옵션을 감지할 것인지 기본 값은 1
};

// function observerCallback() {}
let observerCallback = (observingTargets) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      eachObservingTarget.target.classList.add("triggered");
    } else {
      eachObservingTarget.target.classList.remove("triggered");
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOption);

let elems = document.querySelectorAll(".animTrigger");
console.log(elems);
// // 하드코딩
// observer.observe(HTML요소-하나); 하려면 html js링크 옆에 defer 써야함
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);
// ...
// // 조금 똑똑한 코딩
// for (let idx = 0; idx < elems.length; idx++) {
//   observer.observe(elems[idx]);
// }
// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
