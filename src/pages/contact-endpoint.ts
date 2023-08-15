export const prerender = false;
import { Resend } from "resend";

export async function get() {
  const API_KEY = import.meta.env.RESEND_API_KEY;
  const resend = new Resend(API_KEY);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["wesleymhj@gmail.com"],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    });
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
