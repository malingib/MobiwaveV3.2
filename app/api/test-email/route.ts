import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: NextRequest) {
  console.log("🧪 Starting email test endpoint...")

  try {
    // Basic environment check
    const envStatus = {
      SMTP_HOST: Boolean(process.env.SMTP_HOST),
      SMTP_PORT: Boolean(process.env.SMTP_PORT),
      SMTP_USER: Boolean(process.env.SMTP_USER),
      SMTP_PASSWORD: Boolean(process.env.SMTP_PASSWORD),
      SMTP_FROM: Boolean(process.env.SMTP_FROM),
      SMTP_TO: Boolean(process.env.SMTP_TO),
    }

    console.log("Environment status:", envStatus)

    // Check for missing variables
    const missing = Object.entries(envStatus)
      .filter(([_, value]) => !value)
      .map(([key]) => key)

    if (missing.length > 0) {
      console.log("❌ Missing environment variables:", missing)
      return NextResponse.json({
        success: false,
        message: `Missing environment variables: ${missing.join(", ")}`,
        envStatus,
      })
    }

    console.log("✅ All environment variables present")

    // Create transporter
    let transporter
    try {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
      })
      console.log("✅ Transporter created")
    } catch (transportError: any) {
      console.error("❌ Failed to create transporter:", transportError)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create email transporter",
          error: transportError.message,
        },
        { status: 500 },
      )
    }

    // Test connection
    try {
      await transporter.verify()
      console.log("✅ SMTP connection verified")
    } catch (verifyError: any) {
      console.error("❌ SMTP verification failed:", verifyError)
      return NextResponse.json(
        {
          success: false,
          message: "SMTP connection failed",
          error: verifyError.message,
          hint: "Check your SMTP credentials and server settings",
        },
        { status: 500 },
      )
    }

    // Send test email
    const testEmailOptions = {
      from: `"MobiWave Test" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO || process.env.SMTP_FROM,
      subject: "✅ MobiWave Email Test - Success!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">✅ Email Test Successful!</h1>
            <p style="margin: 10px 0 0 0;">MobiWave Contact Form System</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p><strong>🎉 Great news!</strong> Your email configuration is working perfectly.</p>
            <p><strong>⏰ Test Time:</strong> ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}</p>
            <p><strong>📧 From:</strong> ${process.env.SMTP_FROM}</p>
            <p><strong>📬 To:</strong> ${process.env.SMTP_TO || process.env.SMTP_FROM}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 14px;">
              This test email confirms that your MobiWave contact forms will work correctly.
              You can now receive customer inquiries through your website!
            </p>
          </div>
        </div>
      `,
      text: `
✅ Email Test Successful!

Great news! Your email configuration is working perfectly.

Test Time: ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}
From: ${process.env.SMTP_FROM}
To: ${process.env.SMTP_TO || process.env.SMTP_FROM}

This test email confirms that your MobiWave contact forms will work correctly.
You can now receive customer inquiries through your website!
      `.trim(),
    }

    try {
      const result = await transporter.sendMail(testEmailOptions)
      console.log("✅ Test email sent successfully:", result.messageId)

      return NextResponse.json({
        success: true,
        message: "🎉 Email test successful! Check your inbox for the test email.",
        details: {
          messageId: result.messageId,
          from: process.env.SMTP_FROM,
          to: process.env.SMTP_TO || process.env.SMTP_FROM,
          timestamp: new Date().toISOString(),
        },
        envStatus,
      })
    } catch (sendError: any) {
      console.error("❌ Failed to send test email:", sendError)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send test email",
          error: sendError.message,
          hint: "SMTP connection works, but email sending failed. Check your email settings.",
        },
        { status: 500 },
      )
    }
  } catch (error: any) {
    console.error("❌ Unexpected error in test endpoint:", error)
    return NextResponse.json({
      success: false,
      message: "Unexpected error occurred",
      error: error?.message || "Unknown error",
      stack: error?.stack || "No stack trace available",
    })
  }
}
