import { type NextRequest, NextResponse } from "next/server"

// Simple email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  // Set CORS headers for better compatibility
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  try {
    console.log("=== 📧 Email API Route Called ===")
    console.log("🌍 Environment:", process.env.NODE_ENV)
    console.log("⏰ Timestamp:", new Date().toISOString())

    // Parse request body with comprehensive error handling
    let body
    try {
      const rawBody = await request.text()
      console.log("📄 Raw request body:", rawBody.substring(0, 200))

      if (!rawBody.trim()) {
        return NextResponse.json({ success: false, message: "Empty request body" }, { status: 400, headers })
      }

      body = JSON.parse(rawBody)
      console.log("📝 Parsed request body:", {
        name: body.name,
        email: body.email,
        service: body.service,
        product: body.product,
        hasMessage: !!body.message,
      })
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError)
      return NextResponse.json({ success: false, message: "Invalid JSON in request body" }, { status: 400, headers })
    }

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json({ success: false, message: "Name and email are required" }, { status: 400, headers })
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400, headers },
      )
    }

    // Check environment variables
    const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM"]
    const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

    if (missingEnvVars.length > 0) {
      console.error("❌ Missing environment variables:", missingEnvVars)
      return NextResponse.json(
        { success: false, message: "Email service is not properly configured" },
        { status: 500, headers },
      )
    }

    // Try to send email using nodemailer
    try {
      const nodemailer = require("nodemailer")

      const transporter = nodemailer.createTransport({
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

      // Verify connection
      await transporter.verify()
      console.log("✅ SMTP connection verified")

      // Prepare email content
      const emailContent = {
        from: `"MobiWave Contact Form" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO || process.env.SMTP_FROM,
        replyTo: body.email,
        subject: `New Contact: ${body.product || body.service || "Website Inquiry"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
              ${body.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ""}
              ${body.product ? `<p><strong>Product:</strong> ${body.product}</p>` : ""}
              ${body.message ? `<p><strong>Message:</strong><br>${body.message.replace(/\n/g, "<br>")}</p>` : ""}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Service: ${body.service || "Not specified"}
Product: ${body.product || "Not specified"}
Message: ${body.message || "No message provided"}

Submitted: ${new Date().toLocaleString()}
        `.trim(),
      }

      // Send email
      const result = await transporter.sendMail(emailContent)
      console.log("✅ Email sent successfully:", result.messageId)

      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully! We will get back to you soon." },
        { status: 200, headers },
      )
    } catch (emailError: any) {
      console.error("❌ Email sending failed:", emailError)

      let errorMessage = "Failed to send email. Please try again later."

      if (emailError.message?.includes("authentication")) {
        errorMessage = "Email authentication failed. Please contact support."
      } else if (emailError.message?.includes("connection")) {
        errorMessage = "Unable to connect to email server. Please try again later."
      } else if (emailError.message?.includes("timeout")) {
        errorMessage = "Email sending timed out. Please try again."
      }

      return NextResponse.json({ success: false, message: errorMessage }, { status: 500, headers })
    }
  } catch (error: any) {
    console.error("❌ Unexpected error in email API:", error)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500, headers },
    )
  }
}

export async function GET() {
  return NextResponse.json({ success: false, message: "This endpoint only accepts POST requests." }, { status: 405 })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
