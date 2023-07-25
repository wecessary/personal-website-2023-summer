import typewriter from "./typewritterEffect";

let target = document.querySelector(".should-strike-through");
let typewriterTarget = document.querySelector(".typewriter-target");
let hasCalledTypewriter = false;

let io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("should-strike-through")) {
        entry.target.classList.add("animate-strike");
      }

      if (
        !hasCalledTypewriter &&
        entry.target.classList.contains("typewriter-target")
      ) {
        hasCalledTypewriter = true;
        typewriter("codes");
      }
    });
  },
  {
    threshold: 1,
  }
);
typewriterTarget && io.observe(typewriterTarget);
target && io.observe(target);
