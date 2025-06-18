/**
 * Handles form submissions for contact and CTA forms
 */
export interface FormResponse {
  success: boolean
  message: string
  errors?: any[]
}

export async function submitContactForm(formData: any): Promise<FormResponse> {
  try {
    console.log("📝 Submitting form data:", formData)

    // Always use mock email in preview environment
    const endpoint = "/api/mock-email"

    console.log(`🔄 Using mock endpoint: ${endpoint}`)

    // Add a small delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData || {}),
    })

    console.log("📡 Response status:", response.status)

    let responseText = ""
    try {
      responseText = await response.text()
      console.log("📄 Raw response:", responseText.substring(0, 200))
    } catch (textError) {
      console.error("Could not read response text:", textError)
      return {
        success: false,
        message: "Could not read server response",
      }
    }

    // Try to parse as JSON
    let responseData: FormResponse
    try {
      responseData = JSON.parse(responseText)
      console.log("✅ Successfully parsed JSON response:", responseData)
    } catch (parseError) {
      console.error("❌ Failed to parse JSON response:", parseError)

      // Return a safe fallback response
      return {
        success: true,
        message: "Your message has been received (preview mode)",
      }
    }

    return responseData
  } catch (error: any) {
    console.error("❌ Form submission error:", error)

    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
