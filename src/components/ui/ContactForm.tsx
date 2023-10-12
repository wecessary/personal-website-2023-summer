import { h } from "preact";
import type { JSX } from "preact";
import { useState } from "preact/hooks";
import ThumbsUp from "../icons/ThumbsUp";

type FormStatus = null | "loading" | "submitted" | "error";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>(null);

  const isSubmitDisabled =
    formStatus === "loading" || formStatus === "submitted";
  const isSubmitted = formStatus === "submitted";
  const isError = formStatus === "error";
  const errorMsg =
    "Sorry something went wrong. Please contact me at wesley@wesleyjessie.com instead.";

  async function handleSubmit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
    if (isSubmitDisabled) return;

    e.preventDefault();
    setFormStatus("loading");
    const res = await fetch("/api/contact-form", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    if (res.status === 200) setFormStatus("submitted");
    if (res.status !== 200) setFormStatus("error");
  }

  const labelWrapperStyles = `block mt-3`;
  const labelStyles = `text-gray-500`;
  const inputStyles = `px-3 rounded-lg outline outline-2 outline-gray-200 focus:outline-gray-400 w-full mt-2 py-1`;
  const submitBtnContent = formStatus === "loading" ? "Sending..." : "Submit";

  return (
    <>
      {!isSubmitted && (
        <form
          className={`rounded-xl px-8 py-8 border-2 border-gray-100 ${
            isSubmitted && "hidden"
          }`}
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg text-gray-800 font-bold">
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
          {isError && (
            <div className="mt-5">
              <span className="text-red-700">{errorMsg}</span>
            </div>
          )}
          <button
            disabled={isSubmitDisabled}
            class="mt-5 w-32 md:w-36 xl:w-36 2xl:w-40 bg-gray-800 text-gray-100 px-4 py-2 rounded-full "
          >
            {submitBtnContent}
          </button>
        </form>
      )}
      {isSubmitted && (
        <div className="rounded-xl px-8 py-8 border-2 border-gray-100">
          <h3 className="font-bold text-gray-800 w-[85%]">
            Thank you. I have received your enquiry.
          </h3>
          <p className="mt-2 text-gray-500">
            You should have also received an email confirmation.
          </p>
          <span>
            <ThumbsUp styles="h-36 w-36" />
          </span>
        </div>
      )}
    </>
  );
}
