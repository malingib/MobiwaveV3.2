"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ctaFormSchema, adaptCtaFormToContactForm } from "@/lib/validations/cta-form"
import { ZodError } from "zod"
import { CheckCircle } from "lucide-react"

export default function CtaSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [product, setProduct] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setService("")
    setProduct("")
    setSubmitted(false)
    setValidationErrors({})
    setError(null)
  }

  const validateForm = () => {
    try {
      // Validate the form data using our schema
      ctaFormSchema.parse({
        name,
        email,
        phone,
        service,
        product,
      })
      setValidationErrors({})
      return true
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const errorMap: Record<string, string> = {}

        error.issues.forEach((issue) => {
          if (issue.path && issue.path.length > 0) {
            errorMap[issue.path[0]] = issue.message
          }
        })

        setValidationErrors(errorMap)
      } else {
        // If we can't parse the error, just set a generic error
        console.error("Validation error:", error)
        setError("Invalid form data. Please check your entries.")
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate form first
    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare form data for backend API by adapting it to the contact form schema
      const ctaFormData = {
        name,
        email,
        phone,
        service,
        product,
      }

      const formData = adaptCtaFormToContactForm(ctaFormData)
      console.log("Sending form data:", formData)

      // Send the data to the backend
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        console.error("HTTP Error:", response.status, response.statusText)

        // Read response body only once as text
        let errorMessage = "Failed to send your message. Please try again later."
        try {
          const responseText = await response.text()
          console.error("Error response text:", responseText)

          // Try to parse the text as JSON
          try {
            const errorData = JSON.parse(responseText)
            errorMessage = errorData.message || errorMessage
          } catch (jsonParseError) {
            // If it's not JSON, use the text directly or provide specific messages
            console.error("Response is not JSON:", jsonParseError)
            if (responseText.includes("Internal Server Error")) {
              errorMessage = "Server error. Please try again later."
            } else if (responseText.includes("404")) {
              errorMessage = "Email service not found. Please contact support."
            } else if (responseText.trim()) {
              // Use the first 100 characters of the error text
              errorMessage = responseText.trim().substring(0, 100)
            }
          }
        } catch (textError) {
          console.error("Could not read error response:", textError)
          // Provide status-specific error messages
          if (response.status === 500) {
            errorMessage = "Server error. Please try again later."
          } else if (response.status === 404) {
            errorMessage = "Email service not found. Please contact support."
          } else if (response.status === 400) {
            errorMessage = "Invalid form data. Please check your entries."
          }
        }

        setError(errorMessage)
        return
      }

      // Parse successful response
      try {
        const responseData = await response.json()
        console.log("Email sent successfully:", responseData)
        setSubmitted(true)
      } catch (jsonError) {
        console.error("Could not parse success response:", jsonError)
        // Even if we can't parse the response, if status was ok, consider it successful
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error sending form:", error)

      // Provide more specific error messages based on the error type
      let errorMessage = "An unexpected error occurred. Please try again later."

      if (error instanceof TypeError && error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your connection and try again."
      } else if (error instanceof SyntaxError) {
        errorMessage = "Server response error. Please try again later."
      }

      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white text-gray-800 rounded-xl p-12 shadow-xl">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You for Contacting Us!</h2>
                <p className="text-gray-600 mb-8">
                  Your message has been received. Our team will get back to you as soon as possible.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Communications?</h2>
              <p className="text-blue-100 mb-8">
                Get in touch with our team today to discuss how MobiWave Innovations can help your business communicate
                more effectively with your customers.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-700 rounded-full p-2 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-blue-200">+254 736 427 842</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-blue-700 rounded-full p-2 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-blue-200">info@mobiwave.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-blue-700 rounded-full p-2 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Office Hours</h3>
                    <p className="text-blue-200">Monday–Friday, 9am–5pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-white text-gray-800 rounded-xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.6,
                  delay: 0.2,
                }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    <strong className="font-bold">Error:</strong>
                    <span className="block sm:inline"> {error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {validationErrors.name && <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.service ? "border-red-500" : "border-gray-300"
                      }`}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Get a Product">Get a Product</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Support">Support</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                    {validationErrors.service && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.service}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="product" className="block text-gray-700 font-medium mb-2">
                      Product
                    </label>
                    <select
                      id="product"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.product ? "border-red-500" : "border-gray-300"
                      }`}
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      required
                    >
                      <option value="">Select a Product</option>
                      <option value="Bulk SMS">Bulk SMS</option>
                      <option value="Bulk Email">Bulk Email</option>
                      <option value="USSD Codes">USSD Codes</option>
                      <option value="Short Codes">Short Codes</option>
                      <option value="M-Pesa Intergration">M-Pesa Intergration</option>
                      <option value="Survey">Survey</option>
                      <option value="Service Desk">Service Desk</option>
                      <option value="Bulk WhatsApp">Bulk WhatsApp</option>
                      <option value="Airtime and Data Reward System">Airtime and Data Reward System</option>
                    </select>
                    {validationErrors.product && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.product}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
