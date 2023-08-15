export const prerender = false;
import { Resend } from "resend";

interface POST {
  request: Request;
}

const MY_EMAIL = "wesley@wesleyjessie.com";

export async function post({ request }: POST) {
  const API_KEY = import.meta.env.RESEND_API_KEY;
  const resend = new Resend(API_KEY);
  const data = await request.formData();
  const email = data.get("email") as string;
  const name = data.get("name") as string;
  const message = data.get("message") as string;

  if (!email || !name || !message) {
    return new Response(null, {
      status: 400,
      statusText: "Missing required fields",
    });
  }

  try {
    await resend.emails.send({
      from: `Wesley <${MY_EMAIL}>`,
      to: [MY_EMAIL],
      subject: `New enquiry from ${name}`,
      html: message,
    });

    await resend.emails.send({
      from: `Wesley <${MY_EMAIL}>`,
      to: [email],
      subject: `Thanks for your enquiry ${name}`,
      html: `Thanks for your enquiry ${name}, I'll get back to you as soon as possible.`,
    });

    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText:
        "Internal Server Error. Please use my email address to email me instead.",
    });
  }
}
