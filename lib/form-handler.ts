/**
 * Handles form submissions for contact and CTA forms
 */
export async function submitContactForm(formData: any) {
  console.log("📝 Submitting form data:", formData)

  try {
    // Determine if we're in preview mode
    const isPreview =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname.includes("vercel.app"))

    // Use different endpoints for preview vs production
    const endpoint = isPreview ? "/api/mock-email" : "/api/send-mail"

    console.log(`🔄 Using ${isPreview ? "preview" : "production"} endpoint: ${endpoint}`)

    // Send the request
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    // Check if response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error("❌ Response is not JSON:", await response.text())
      return {
        success: false,
        message: "Server returned an invalid response. Please try again later or contact support.",
      }
    }

    // Parse JSON response
    const data = await response.json()
    console.log("📬 Form submission response:", data)

    return data
  } catch (error: any) {
    console.error("❌ Form submission error:", error)
    return {
      success: false,
      message: `Failed to submit form: ${error.message}`,
    }
  }
}
