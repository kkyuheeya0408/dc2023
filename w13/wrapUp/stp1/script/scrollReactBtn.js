const observingTargets = document.querySelectorAll("main section");
// console.log(observingTargets);

const toggleTargets = document.querySelectorAll("aside>ol>a");
// console.log(toggleTargets); 감지하면 토글타겟 활성화

const pageBtnMap = new Map();
const setPageBtnMap = () => {
  observingTargets.forEach((eachTargets, idx) => {
    pageBtnMap.set(eachTargets, toggleTargets[idx]);
  });
};
setPageBtnMap();
// console.log(pageBtnMap);
// 함수를 실행시키는 코드

let lastBtn;

const margin = ["0px", "-90%"];

const visualizingMargin = () => {
  let topMargin = document.createElement("div");
  topMargin.style.cssText =
    "position: fixed; top: " +
    margin[0].substring(1) +
    "; left: 0; right: 0; height: 1px; background-color: red; z-index:999;";
  let bottomMargin = document.createElement("div");
  bottomMargin.style.cssText =
    "position: fixed; bottom: " +
    margin[1].substring(1) +
    "; left: 0; right: 0; height: 1px; background-color: green; z-index:999;";
  document.body.append(topMargin);
  document.body.append(bottomMargin);
};

// visualizingMargin(); 맨 위 페이지 감지하는 붉은 선

const whenTargetInView = (entities, observer) => {
  entities.forEach((eachEntity) => {
    if (eachEntity.isIntersecting) {
      //   console.log("isIn!", eachEntity.target);
      const pairedTarget = pageBtnMap.get(eachEntity.target);
      console.log(pairedTarget);
      const finalTarget = pairedTarget.querySelector("li");
      finalTarget.classList.add("pressed");
      lastBtn?.classList.remove("pressed");
      lastBtn = finalTarget;
    } else {
      //   console.log("isOut!", eachEntity.target);
    }
  });
};

const observer = new IntersectionObserver(whenTargetInView, {
  root: null,
  rootMargin: margin[0] + " 0px " + margin[1] + " 0px",
  threshold: [0],
});

observingTargets.forEach((eachTarget) => {
  observer.observe(eachTarget);
});
