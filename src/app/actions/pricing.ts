"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitPricingForm(formData: FormData) {
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const contact = formData.get("contact");
  const email = formData.get("email");
  const planName = formData.get("plan_name");

  // Basic server-side validation
  if (!firstName || !lastName || !contact || !email) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  try {
    // Send email to the business
    const result = await resend.emails.send({
      from: "Pricing Inquiry <onboarding@resend.dev>",
      to: "evans@creativezink.co.ke",
      replyTo: email as string,
      subject: `New Pricing Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Pricing Inquiry</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan Interested In:</strong> ${planName || "Not specified"}</p>
      `,
    });

    if (result.error) {
      console.error("Error sending email:", result.error);
      return {
        success: false,
        message: "Failed to submit your inquiry. Please try again later.",
      };
    }

    console.log("Pricing Form Email Sent:");
    console.log("From:", email);
    console.log("Name:", `${firstName} ${lastName}`);
    console.log("Contact:", contact);
    console.log("Plan:", planName);

    return {
      success: true,
      message: "Thank you for your interest! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Unexpected error submitting pricing form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
