import typewriter from "./typewritterEffect";

let strikeThroughTarget = document.querySelector(".should-strike-through");
let typewriterTarget = document.querySelector(".typewriter-target");
let diamondTarget = document.querySelector(".diamond-target");
let hasCalledTypewriter = false;

let io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const classList = entry.target.classList;
      if (!entry.isIntersecting) return;

      if (classList.contains("should-strike-through")) {
        classList.add("animate-strike");
      }

      if (!hasCalledTypewriter && classList.contains("typewriter-target")) {
        hasCalledTypewriter = true;
        typewriter("codes");
      }

      if (classList.contains("diamond-target")) {
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
