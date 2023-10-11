import handleObserver from "./handleObserver";

const strikeThroughTrigger = document.querySelector(".strike-throught-trigger");

window.addEventListener("load", () => {
  createObserver();
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: createThreshold(),
};

function createThreshold() {
  const STEPS = 20;
  const threshold = [];
  for (let i = 1; i <= STEPS; i++) {
    threshold.push(i / STEPS);
  }
  console.log(threshold);
  return threshold;
}

function createObserver() {
  const observer = new IntersectionObserver(handleObserver, options);

  if (strikeThroughTrigger) observer.observe(strikeThroughTrigger);
}
