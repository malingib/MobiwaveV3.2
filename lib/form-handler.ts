export interface FormResponse {
  success: boolean
  message: string
  errors?: any[]
}

export async function submitContactForm(formData: any): Promise<FormResponse> {
  try {
    console.log("🚀 Submitting form data:", {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      product: formData.product,
    })

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    console.log("📡 Response status:", response.status)
    console.log("📡 Response headers:", Object.fromEntries(response.headers.entries()))

    // Always read response as text first to handle both JSON and HTML responses
    const responseText = await response.text()
    console.log("📄 Raw response (first 200 chars):", responseText.substring(0, 200))

    // Check if response looks like HTML (error page)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html")) {
      console.error("❌ Received HTML response instead of JSON")
      return {
        success: false,
        message:
          response.status === 500
            ? "Server error occurred. Please try again later or contact us directly at info@mobiwave.co.ke"
            : "An error occurred. Please try again or contact us directly.",
      }
    }

    // Try to parse as JSON
    let responseData: FormResponse
    try {
      responseData = JSON.parse(responseText)
      console.log("✅ Successfully parsed JSON response:", responseData)
    } catch (parseError) {
      console.error("❌ Failed to parse JSON response:", parseError)
      console.error("❌ Response text:", responseText)

      // If we can't parse JSON but the status is OK, assume success
      if (response.ok) {
        return {
          success: true,
          message: "Your message has been sent successfully!",
        }
      } else {
        return {
          success: false,
          message: "Server error. Please try again later or contact us directly at info@mobiwave.co.ke",
        }
      }
    }

    return responseData
  } catch (error: any) {
    console.error("❌ Network or fetch error:", error)

    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        message: "Network error. Please check your connection and try again.",
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later or contact us directly at info@mobiwave.co.ke",
    }
  }
}
