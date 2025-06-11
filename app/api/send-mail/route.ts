import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email-service"
import { contactFormSchema } from "@/lib/validations/contact"

export async function POST(request: NextRequest) {
  console.log("=== 📧 Email API Route Called ===")
  console.log("🌍 Environment:", process.env.NODE_ENV)
  console.log("⏰ Timestamp:", new Date().toISOString())

  try {
    // Parse request body with error handling
    let body
    try {
      body = await request.json()
      console.log("📝 Request received:", {
        firstName: body.firstName || body.name?.split(" ")[0],
        lastName: body.lastName || body.name?.split(" ").slice(1).join(" "),
        email: body.email,
        subject: body.subject || body.product,
        inquiry: body.inquiry || body.service,
        messageLength: body.message?.length || 0,
      })
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError)
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format. Please try again.",
        },
        { status: 400 },
      )
    }

    // Transform and validate data
    let validatedData
    try {
      // Transform the data to match the expected schema
      const transformedData = {
        firstName: body.firstName || body.name?.split(" ")[0] || "Unknown",
        lastName: body.lastName || body.name?.split(" ").slice(1).join(" ") || "User",
        email: body.email || "",
        phone: body.phone || "",
        subject: body.subject || body.product || "Website Inquiry",
        inquiry: body.inquiry || body.service || "general",
        message:
          body.message || `Product: ${body.product || "Not specified"}\nService: ${body.service || "Not specified"}`,
      }

      validatedData = contactFormSchema.parse(transformedData)
      console.log("✅ Data validation passed")
    } catch (validationError: any) {
      console.error("❌ Validation error:", validationError)
      return NextResponse.json(
        {
          success: false,
          message: "Please check that all required fields are filled correctly.",
          errors: validationError.errors || [],
        },
        { status: 400 },
      )
    }

    // Send email with comprehensive error handling
    try {
      console.log("📤 Attempting to send email...")
      await sendContactEmail(validatedData)
      console.log("✅ Email sent successfully")

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully! We will get back to you soon.",
      })
    } catch (emailError: any) {
      console.error("❌ Email sending failed:", emailError)

      // Provide specific error messages
      let errorMessage = "Failed to send email. Please try again later."
      let statusCode = 500

      if (emailError.message?.includes("Missing required environment variables")) {
        errorMessage = "Email service is not configured. Please contact support."
        statusCode = 500
      } else if (emailError.message?.includes("Email service is currently unavailable")) {
        errorMessage = "Email service is temporarily unavailable. Please try again later or contact us directly."
        statusCode = 503
      } else if (emailError.message?.includes("authentication")) {
        errorMessage = "Email authentication failed. Please contact support."
        statusCode = 500
      } else if (emailError.message?.includes("connection")) {
        errorMessage = "Unable to connect to email server. Please try again later."
        statusCode = 503
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
        },
        { status: statusCode },
      )
    }
  } catch (error: any) {
    console.error("❌ Unexpected error in email API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "This endpoint only accepts POST requests.",
    },
    { status: 405 },
  )
}
