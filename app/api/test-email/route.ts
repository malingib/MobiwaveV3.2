import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email-service"

export async function GET() {
  console.log("🧪 Testing email configuration...")

  try {
    // Test with sample data
    const testData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "+254700000000",
      subject: "Email Configuration Test",
      inquiry: "test",
      message: "This is a test email to verify the email configuration is working correctly.",
    }

    await sendContactEmail(testData)

    return NextResponse.json({
      success: true,
      message: "✅ Email configuration test successful! Check your inbox.",
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("❌ Email test failed:", error)

    return NextResponse.json(
      {
        success: false,
        message: "❌ Email configuration test failed",
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
