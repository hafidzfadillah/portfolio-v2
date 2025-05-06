"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Create a test account if no email credentials are provided
    // In production, you would use your actual email credentials
    const testAccount = await nodemailer.createTestAccount()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })

    // Send the email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${validatedData.email}>`,
      to: "hafidzfadillah23@gmail.com", // Your email address
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <h3>Message:</h3>
          <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    })

    // For development, log the preview URL
    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      }
    }

    return { success: false, message: "Failed to send message. Please try again." }
  }
}
