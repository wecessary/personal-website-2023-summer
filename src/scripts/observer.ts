import typewriter from "./typewritterEffect";

let strikeThroughTarget = document.querySelector(".animate-strike");
let typewriterTarget = document.querySelector(".typewriter-target");
let diamondTarget = document.querySelector(".diamond-target");
let testimonialTarget = document.querySelector(".testimonial-target");
let hasCalledTypewriter = false;

let io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const entryClassList = entry.target.classList;
      if (!entry.isIntersecting) return;

      if (entryClassList.contains("animate-strike")) {
        entryClassList.remove("animate-paused");
      }

      if (
        !hasCalledTypewriter &&
        entryClassList.contains("typewriter-target")
      ) {
        hasCalledTypewriter = true;
        typewriter("codes");
      }

      if (entryClassList.contains("testimonial-target")) {
        document
          .querySelector(".animate-testimonial")
          ?.classList.remove("animate-paused");
      }

      if (entryClassList.contains("diamond-target")) {
        document
          .querySelector(".animate-diamond")
          ?.classList.remove("animate-paused");
      }
    });
  },
  {
    threshold: 1,
  }
);
typewriterTarget && io.observe(typewriterTarget);
strikeThroughTarget && io.observe(strikeThroughTarget);
diamondTarget && io.observe(diamondTarget);
testimonialTarget && io.observe(testimonialTarget);
