let i = 0;

export default function typewriter(content: string) {
  let typewriter = document.querySelector(".typewriter");

  if (typewriter) {
    setInterval(() => {
      if (!content) return;
      if (!typewriter) return;
      if (i < content.length) {
        typewriter.textContent += content.charAt(i);
        i++;
      }
    }, 300);
  }
}
