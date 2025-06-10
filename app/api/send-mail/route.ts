import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, message: `Field '${field}' is required` },
          { status: 400 }
        )
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Email configuration using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mobiwave.co.ke',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'jawabune@mobiwave.co.ke',
        pass: process.env.SMTP_PASS || 'vW9nX6YN8MZFexM29muU'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Prepare email content
    const name = `${data.firstName} ${data.lastName}`
    const phone = data.phone || 'Not provided'
    const inquiry = data.inquiry || 'general'

    // Create HTML email content
    const htmlContent = `
      <h3>New Inquiry from ${name}</h3>
      <table style='width: 100%; border-collapse: collapse;'>
        <tr>
          <th style='text-align: left; padding: 8px; border-bottom: 1px solid #ddd;'>Field</th>
          <th style='text-align: left; padding: 8px; border-bottom: 1px solid #ddd;'>Details</th>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Name:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${name}</td>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Email:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${data.email}</td>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Phone:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${phone}</td>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Inquiry Type:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${inquiry}</td>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Subject:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${data.subject}</td>
        </tr>
        <tr>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Message:</strong></td>
          <td style='padding: 8px; border-bottom: 1px solid #ddd;'>${data.message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
    `

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'jawabune@mobiwave.co.ke',
      to: process.env.SMTP_TO || process.env.SMTP_USER || 'jawabune@mobiwave.co.ke',
      subject: `New Contact Form: ${data.subject}`,
      html: htmlContent,
      replyTo: data.email
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      details: {
        recipient: 'jawabune@mobiwave.co.ke',
        method: 'Nodemailer SMTP'
      }
    })

  } catch (error) {
    console.error('Error sending email:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}