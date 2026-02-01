"use server";

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

  // Mocking an email submission delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Pricing Form Submission Received:");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Contact:", contact);
  console.log("Email:", email);
  console.log("Plan:", planName);
  console.log("Target Email: evans@creativezink.co.ke");

  // In a real application, you would send an email here using a service like Resend.
  
  return {
    success: true,
    message: "Thank you for your interest! We'll get back to you soon.",
  };
}
