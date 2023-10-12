export default function typewriter(content: string) {
  let i = 0;
  let typewriter = document.querySelector(".typewriter");
  if (typewriter?.textContent === content) return;
  setInterval(() => {
    if (!typewriter) return; //if already typed, do not start
    if (i < content.length) {
      typewriter.textContent += content.charAt(i);
      i++;
    }
  }, 300);
}
