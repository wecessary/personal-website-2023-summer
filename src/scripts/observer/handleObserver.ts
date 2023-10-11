export default function handleObserver(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    handleStrikeThrough(entry);
  });
}

function handleStrikeThrough(entry: IntersectionObserverEntry) {
  const animatedElem = document.querySelector(".animate-strike") as HTMLElement;
  const classList = animatedElem.classList;

  const intersectionRatio =
    entry.intersectionRatio < 0.1 ? 0 : entry.intersectionRatio; //explain why

  if (classList.contains("animate-strike")) {
    animatedElem.style.transform = `translateX(-${
      (1 - intersectionRatio) * 100
    }%) scaleX(${intersectionRatio})`;
    classList.remove("animate-paused");
  }
}


