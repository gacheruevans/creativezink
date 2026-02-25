"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic server-side validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  try {
    // Send email to the business
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "evans@creativezink.co.ke",
      replyTo: email as string,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (result.error) {
      console.error("Error sending email:", result.error);
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      };
    }

    console.log("Contact Form Email Sent:");
    console.log("From:", email);
    console.log("Name:", name);
    console.log("Message:", message);

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Unexpected error submitting contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
