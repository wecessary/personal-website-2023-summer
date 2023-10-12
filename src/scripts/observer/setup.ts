import handleObserver from "./handleObserver";

const sectionNoTemplateTrigger = document.querySelector(
  ".section-no-template-trigger"
);
const sectionTestimonialTrigger = document.querySelector(
  ".section-testimonial-trigger"
);
const sectionGuranteeTrigger = document.querySelector(
  ".section-gurantee-trigger"
);
const sectionCodeAndDesignTrigger = document.querySelector(
  ".section-code-and-design-trigger"
);

const triggers = [
  sectionNoTemplateTrigger,
  sectionTestimonialTrigger,
  sectionGuranteeTrigger,
  sectionCodeAndDesignTrigger,
];

window.addEventListener("load", () => {
  createObserver();
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

function createObserver() {
  const observer = new IntersectionObserver(handleObserver, options);
  triggers.forEach((trigger) => {
    if (trigger) observer.observe(trigger);
  });
}

// function createThreshold() {
//   const STEPS = 20;
//   const threshold = [];
//   for (let i = 1; i <= STEPS; i++) {
//     threshold.push(i / STEPS);
//   }
//   console.log(threshold);
//   return threshold;
// }
