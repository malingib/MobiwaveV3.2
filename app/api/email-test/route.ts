import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // Check environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.SMTP_FROM
    ) {
      return NextResponse.json({
        success: false,
        message: "Missing required environment variables",
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verify connection
    await transporter.verify()

    // Send test email
    const info = await transporter.sendMail({
      from: `"MobiWave Test" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO || process.env.SMTP_FROM,
      subject: "Test Email",
      text: "This is a test email from MobiWave",
      html: "<b>This is a test email from MobiWave</b>",
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json({
      success: false,
      message: "Failed to send email",
      error: errorMessage,
    })
  }
}
