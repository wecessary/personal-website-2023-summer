import typewriter from "../typewritterEffect";

export default function handleObserver(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    handleSectionNoTemplate(entry);
    handleSectionTerstimonial(entry);
    handleSectionGurantee(entry);
    handleSectionCodeAndDesign(entry);
  });
}

function handleSectionNoTemplate(entry: IntersectionObserverEntry) {
  if (!entry.target.classList.contains("section-no-template-trigger")) return; //check that the entry is the target

  const classList = getClassList({ queriedClass: "animate-strike" });
  if (entry.isIntersecting) classList.remove("animate-paused");
}

function handleSectionTerstimonial(entry: IntersectionObserverEntry) {
  if (!entry.target.classList.contains("section-testimonial-trigger")) return;

  const classList = getClassList({
    queriedClass: "animate-testimonial",
  });
  if (entry.isIntersecting) classList.remove("animate-paused");
}

function handleSectionGurantee(entry: IntersectionObserverEntry) {
  if (!entry.target.classList.contains("section-gurantee-trigger")) return;
  const classList = getClassList({ queriedClass: "animate-diamond" });
  if (entry.isIntersecting) classList.remove("animate-paused");
}

function handleSectionCodeAndDesign(entry: IntersectionObserverEntry) {
  if (!entry.target.classList.contains("section-code-and-design-trigger"))
    return;
  typewriter("codes");
}

function getClassList({ queriedClass }: { queriedClass: string }) {
  const elem = document.querySelector(`.${queriedClass}`) as HTMLElement;
  return elem.classList;
}
