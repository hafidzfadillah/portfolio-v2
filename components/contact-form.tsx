"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail, ArrowRight } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setShowSuccess(true)
      toast({
        title: "Form completed!",
        description: "You can now send your message directly via email.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try sending an email directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const createMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website")
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    return `mailto:hafidzfadillah23@gmail.com?subject=${subject}&body=${body}`
  }

  if (showSuccess) {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
          <Mail className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold">Ready to send your message!</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Click the button below to open your email client with your message pre-filled.
        </p>
        <div className="pt-4">
          <a
            href={createMailtoLink()}
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Send via Email <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-4">
          If the button doesn't work, please manually send an email to hafidzfadillah23@gmail.com
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="text-sm text-emerald-600 hover:text-emerald-700 underline"
        >
          Back to form
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${
              formErrors.name ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
            } bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-600`}
            placeholder="Your Name"
          />
          {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${
              formErrors.email ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
            } bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-600`}
            placeholder="Your Email"
          />
          {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full p-3 rounded-md border ${
            formErrors.subject ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
          } bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-600`}
          placeholder="Subject"
        />
        {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full p-3 rounded-md border ${
            formErrors.message ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
          } bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-600`}
          placeholder="Your Message"
        ></textarea>
        {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-md" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            "Continue"
          )}
        </Button>
        <a
          href={`mailto:hafidzfadillah23@gmail.com?subject=Contact from Portfolio`}
          className="flex-1 inline-flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium py-2 px-4 rounded-md"
        >
          <Mail className="mr-2 h-4 w-4" /> Email Directly
        </a>
      </div>
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-2">
        You can also reach me at{" "}
        <a href="mailto:hafidzfadillah23@gmail.com" className="text-emerald-600 hover:underline">
          hafidzfadillah23@gmail.com
        </a>
      </p>
    </form>
  )
}
