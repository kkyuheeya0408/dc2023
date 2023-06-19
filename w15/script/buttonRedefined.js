const pages = document.querySelectorAll("section");
const btns = document.querySelectorAll(".pageBtn");
let lastBtn = null;

class BidirectionalMap {
  constructor() {
    this.keyToValueMap = new Map();
    this.valueToKeyMap = new Map();
  }

  set(key, value) {
    this.keyToValueMap.set(key, value);
    this.valueToKeyMap.set(value, key);
  }

  getByKey(key) {
    return this.keyToValueMap.get(key);
  }

  getByValue(value) {
    return this.valueToKeyMap.get(value);
  }
}
const pageBtnMap = new BidirectionalMap();

const setMap = () => {
  pages.forEach((eachPage, idx) => {
    pageBtnMap.set(eachPage, btns[idx]);
  });
};

setMap();

const redefineBtn = () => {
  btns.forEach((eachBtn) => {
    eachBtn.onclick = () => {
      const scrollTarget = pageBtnMap.getByValue(eachBtn);
      scrollTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };
  });
};

redefineBtn();

const scrollIntoView = (dom) => {
  const parentElem = dom.offsetParent;

  const childRect = dom.getBoundingClientRect();

  const parentRect = parentElem.getBoundingClientRect();

  let scrollAmt;
  // 라인 완전히 벗어났을때
  if (childRect.left < parentRect.left) {
    scrollAmt = childRect.left - parentRect.left - 32;
  } else if (childRect.right > parentRect.right) {
    scrollAmt = childRect.right - parentRect.right + 32;
  }

  if (scrollAmt !== undefined && scrollAmt !== 0) {
    // 가로로 스크롤하기
    parentElem.scrollBy({
      top: 0,
      left: scrollAmt,
      behavior: "smooth",
    });
  }
};

const interObsCallback = (obsTargets) => {
  obsTargets.forEach((eachObsTarget) => {
    if (eachObsTarget.isIntersecting) {
      const targetBtn = pageBtnMap.getByKey(eachObsTarget.target);
      console.log(targetBtn);
      lastBtn?.classList.remove("pressed");
      targetBtn.classList.add("pressed");
      scrollIntoView(targetBtn);
      lastBtn = targetBtn;
    }
  });
};

const interObs = new IntersectionObserver(interObsCallback, {
  rootMargin: "50% 0px 50% 0px",
  threshold: [1],
});

pages.forEach((eachPage) => {
  interObs.observe(eachPage);
});
