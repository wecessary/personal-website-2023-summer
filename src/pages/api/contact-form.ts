export const prerender = false;
import { Resend } from "resend";

interface POST {
  request: Request;
}

const MY_EMAIL = "wesley@wesleyjessie.com";

export async function POST({ request }: POST) {
  const API_KEY = import.meta.env.RESEND_API_KEY;
  const resend = new Resend(API_KEY);
  const data = await request.formData();
  const email = data.get("email") as string;
  const name = data.get("name") as string;
  const message = data.get("message") as string;

  if (!isFormDataValid(name, email, message))
    return new Response(null, {
      status: 400,
      statusText: "Missing required fields",
    });

  try {
    await emailToSelf(resend, name, message, email);
    await emailToCustomer(resend, name, email);

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

function isFormDataValid(name: string, email: string, message: string) {
  return !!email && !!name && !!message;
}

async function emailToSelf(
  resend: Resend,
  name: string,
  message: string,
  email: string
) {
  await resend.emails.send({
    from: `Wesley Jessie <${MY_EMAIL}>`,
    to: [MY_EMAIL],
    subject: `New enquiry from ${name}`,
    html: emailToSelfTemplate(name, message, email),
  });
}

async function emailToCustomer(resend: Resend, name: string, email: string) {
  await resend.emails.send({
    from: `Wesley Jessie <${MY_EMAIL}>`,
    to: [email],
    subject: `Thanks for your enquiry ${name}`,
    html: confirmationTemplate(name),
  });
}

function emailToSelfTemplate(name: string, message: string, email: string) {
  return `<p>Name: ${name}</p><p>Email: ${email}</p><p>${message}</p>`;
}

function confirmationTemplate(name: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en"><head data-id="__react-email-head"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head><div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Hi ${name}, thanks for getting in touch.<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div></div><body data-id="__react-email-body" style="background-color:rgb(255,255,255);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"><table align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style="max-width:37.5em;border-width:1px;border-style:solid;border-color:rgb(209,213,219);border-radius:0.25rem;margin-top:40px;margin-bottom:40px;margin-left:auto;margin-right:auto;padding:20px;width:90%"><tbody><tr style="width:100%"><td><table align="center" width="100%" data-id="react-email-section" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:32px"><tbody><tr><td><img data-id="react-email-img" alt="Wesley Jessie" src="https://www.wesleyjessie.com/logo.jpg" width="70" height="50" style="display:block;outline:none;border:none;text-decoration:none;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto"/></td></tr></tbody></table><h1 data-id="react-email-heading" style="color:rgb(0,0,0);font-size:20px;font-weight:400;text-align:center;padding:0px;margin-top:30px;margin-bottom:30px;margin-left:0px;margin-right:0px">Thank you for contacting me.</h1><p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Hi ${name},</p><p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Thank you for reaching out. I will get back to you within 1-2 business days.</p><p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">If you have something urgent, call me at +44
              7597 296544 (WhatsApp ok).</p><p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Let&#x27;s make a beautiful website.</p><p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0)">Wesley</p><hr data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea;border-width:1px;border-style:solid;border-color:rgb(229,231,235);margin-top:26px;margin-bottom:26px;margin-left:0px;margin-right:0px"/><p data-id="react-email-text" style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(107,114,128)">If you have any follow up questions, please feel free to reply to this email.</p><p data-id="react-email-text" style="font-size:12px;line-height:0px;margin:16px 0;color:rgb(107,114,128);margin-top:1.25rem">wesleyjessie.com</p><p data-id="react-email-text" style="font-size:12px;line-height:0px;margin:16px 0;color:rgb(107,114,128)">Freelance web design and development</p></td></tr></tbody></table></body></html>`;
}
