"use server";

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

  // Mocking an email submission delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact Form Submission Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // In a real application, you would send an email here using a service like Resend.
  
  return {
    success: true,
    message: "Thank you for your message! We'll get back to you soon.",
  };
}
