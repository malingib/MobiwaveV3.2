import { NextResponse } from "next/server"

// This endpoint simulates email sending for preview environments
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    console.log("📧 Mock email service received request:", body)

    // Simulate email processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Email simulation successful (preview mode)",
      note: "This is a mock response. In production, real emails will be sent.",
      emailData: {
        to: body.email || "recipient@example.com",
        subject: body.subject || "Contact Form Submission",
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error: any) {
    console.error("❌ Mock email error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process mock email",
        error: error.message,
      },
      { status: 400 },
    )
  }
}
