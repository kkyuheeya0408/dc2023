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

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
