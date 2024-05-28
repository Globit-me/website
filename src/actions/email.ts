"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const subject =
    "Mensaje de contacto " +
    formData.get("name") +
    " - " +
    formData.get("email");

  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "desarrolloglobit@gmail.com",
    subject: subject,
    text: formData.get("message") as string,
  });

  return response;
};
