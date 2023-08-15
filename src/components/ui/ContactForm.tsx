import { h } from "preact";
import type { JSX } from "preact";
import { useState } from "preact/hooks";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formResult, setFormResult] = useState<string | null>(null);

  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/contact-form", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const data = await res.json();
    setIsLoading(false);
    setFormResult(data.result);
  }

  const labelWrapperStyles = `block mt-3`;
  const labelStyles = `text-gray-500`;
  const inputStyles = `rounded-lg outline outline-2 outline-gray-200 focus:outline-gray-400 w-full mt-2 py-1`;

  return (
    <form
      className="rounded-xl px-8 py-8 border-2 border-gray-100"
      onSubmit={handleSubmit}
    >
      <h3 className="text-gray-800 font-bold">
        Fill out the form and I will get back to you.
      </h3>
      <label className={labelWrapperStyles}>
        <p className={labelStyles}>Your email</p>
        <input name="email" type="email" required className={inputStyles} />
      </label>
      <label className={labelWrapperStyles}>
        <p className={labelStyles}>Your name</p>
        <input name="name" type="text" required className={inputStyles} />
      </label>
      <label className={labelWrapperStyles}>
        <p className={labelStyles}>How can I help you?</p>
        <textarea
          name="message"
          type="text"
          required
          className={`${inputStyles} min-h-[150px]`}
        />
      </label>
      <button class="mt-5 2xl:w-40 bg-gray-800 text-gray-100 px-4 py-2 rounded-full ">
        Submit
      </button>
      <div>{formResult}</div>
    </form>
  );
}
