import { h } from "preact";
import type { JSX } from "preact";

export default function ContactForm() {
  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    const res = await fetch("/contact-endpoint");
    const data = await res.json();
    console.log(res.status);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
    </form>
  );
}
