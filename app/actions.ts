"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// This function is no longer used, but kept for reference
export async function sendContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Simulate a delay to mimic network request
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For development/demo purposes, always return success
    return {
      success: true,
      message: "Form completed successfully. Please use the email link to send your message.",
    }
  } catch (error) {
    console.error("Error processing form:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      }
    }

    return { success: false, message: "Failed to process form. Please try again or contact directly via email." }
  }
}
