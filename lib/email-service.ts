import nodemailer from "nodemailer"
import type { contactFormSchema } from "@/lib/validations/contact"
import type { z } from "zod"

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(data: ContactFormData) {
  console.log("📧 Starting email service...")

  // Check environment variables
  const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM"]
  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

  if (missingEnvVars.length > 0) {
    console.error("❌ Missing environment variables:", missingEnvVars)
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`)
  }

  console.log("✅ Environment variables validated")

  let transporter
  try {
    // Create transporter
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    })

    console.log("✅ Transporter created")
  } catch (error) {
    console.error("❌ Failed to create transporter:", error)
    throw new Error("Failed to configure email service")
  }

  // Verify connection
  try {
    await transporter.verify()
    console.log("✅ SMTP connection verified")
  } catch (error) {
    console.error("❌ SMTP verification failed:", error)
    throw new Error("Email service is currently unavailable")
  }

  // Create email content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Contact Form Submission</h1>
                <p>MobiWave Innovations Website</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">👤 Name:</div>
                    <div class="value">${data.firstName} ${data.lastName}</div>
                </div>
                <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value">${data.email}</div>
                </div>
                ${
                  data.phone
                    ? `
                <div class="field">
                    <div class="label">📱 Phone:</div>
                    <div class="value">${data.phone}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                    <div class="label">📋 Subject:</div>
                    <div class="value">${data.subject}</div>
                </div>
                <div class="field">
                    <div class="label">🏷️ Inquiry Type:</div>
                    <div class="value">${data.inquiry}</div>
                </div>
                <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
                </div>
                <div class="field">
                    <div class="label">⏰ Submitted:</div>
                    <div class="value">${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the MobiWave Innovations contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"MobiWave Contact Form" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO || process.env.SMTP_FROM,
    replyTo: data.email,
    subject: `New Contact: ${data.subject}`,
    html: emailHtml,
    text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}
Inquiry Type: ${data.inquiry}

Message:
${data.message}

Submitted: ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })}
    `.trim(),
  }

  try {
    console.log("📤 Sending email...")
    const result = await transporter.sendMail(mailOptions)
    console.log("✅ Email sent successfully:", result.messageId)
    return result
  } catch (error) {
    console.error("❌ Failed to send email:", error)
    throw new Error("Failed to send email")
  }
}
