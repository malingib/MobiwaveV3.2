import nodemailer from "nodemailer";
import type { Options as TransportOptions } from "nodemailer/lib/smtp-transport";
import type { SendMailOptions, Transporter } from "nodemailer";

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
}

export interface SMTPError extends Error {
  code?: string;
  command?: string;
  response?: string;
}

// Create email transporter with specified configuration
export function createEmailTransporter(config: EmailConfig): nodemailer.Transporter {
  const transportConfig: TransportOptions = {
    host: config.host,
    port: config.port,
    secure: config.port === 465 ? true : false, // Explicitly set secure based on port
    auth: {
      user: config.user,
      pass: config.password,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2'
    },
    // Add debug option to see detailed logs
    debug: true,
    // Add logger to capture debug information
    logger: true,
    // Increase timeout values
    connectionTimeout: 30000, // 30 seconds
    greetingTimeout: 30000,  // 30 seconds
    socketTimeout: 60000,    // 60 seconds
  };

  return nodemailer.createTransport(transportConfig);
}

// Verify transporter connection
export async function verifyTransporter(transporter: Transporter): Promise<boolean> {
  try {
    console.log("📧 SMTP CONNECTION CHECK: Verifying connection...");
    const result = await transporter.verify();
    console.log("✅ SMTP CONNECTION VERIFIED:", result);
    return true;
  } catch (error) {
    const smtpError = error as SMTPError;
    console.error("❌ SMTP CONNECTION FAILED:", {
      message: smtpError.message,
      code: smtpError.code || "UNKNOWN", 
      command: smtpError.command || "N/A",
      response: smtpError.response || "None",
      hostname: (smtpError as any).hostname || "N/A",
      port: (smtpError as any).port || "N/A",
    });
    
    // Check for specific error types
    if (smtpError.code === "ECONNREFUSED") {
      console.error("❌ SMTP CONNECTION REFUSED: Could not connect to email server");
    } else if (smtpError.code === "ETIMEDOUT") {
      console.error("❌ SMTP CONNECTION TIMEOUT: Connection to email server timed out");
    } else if (smtpError.code === "EAUTH") {
      console.error("❌ SMTP AUTHENTICATION FAILED: Check your credentials");
    }
    
    return false;
  }
}

// Load email configuration from environment variables
export function loadEmailConfig(): EmailConfig | null {
  const host = process.env.SMTP_HOST;
  const portStr = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;

  if (!host || !portStr || !user || !password || !from) {
    const missing = [];
    if (!host) missing.push('SMTP_HOST');
    if (!portStr) missing.push('SMTP_PORT');
    if (!user) missing.push('SMTP_USER');
    if (!password) missing.push('SMTP_PASSWORD');
    if (!from) missing.push('SMTP_FROM');
    
    console.error("Email configuration missing variables:", missing);
    return null;
  }

  // Parse port and determine if connection should be secure based on common port numbers
  const port = parseInt(portStr, 10);
  const secure = port === 465; // 465=SSL, 587=TLS

  return { host, port, secure, user, password, from };
}

// Send an email with the given options
export async function sendEmail(transporter: Transporter, options: SendMailOptions) {
  console.log("📧 SENDING EMAIL: Attempting to send email...");
  console.log("📧 Email details:", {
    from: options.from,
    to: options.to,
    subject: options.subject,
    hasText: !!options.text,
    hasHtml: !!options.html,
    hasAttachments: !!(options.attachments && options.attachments.length > 0)
  });
  
  try {
    const info = await transporter.sendMail(options);
    console.log("✅ EMAIL SENT SUCCESSFULLY:", {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
      pending: info.pending,
      envelope: info.envelope
    });
    return info;
  } catch (error) {
    const smtpError = error as SMTPError;
    console.error("❌ EMAIL SENDING FAILED:", {
      message: smtpError.message,
      code: smtpError.code || "UNKNOWN",
      command: smtpError.command || "N/A",
      response: smtpError.response || "None"
    });
    
    // Check for specific error types
    if (smtpError.code === "EENVELOPE") {
      console.error("❌ ENVELOPE ERROR: Invalid recipient or sender address");
    } else if (smtpError.code === "EMESSAGE") {
      console.error("❌ MESSAGE ERROR: Problem with message content");
    } else if (smtpError.code === "EAUTH") {
      console.error("❌ AUTHENTICATION ERROR: Invalid credentials");
    } else if (smtpError.code === "ECONNECTION") {
      console.error("❌ CONNECTION ERROR: Connection issue during sending");
    }
    
    throw error; // Re-throw to let caller handle it
  }
}

// Strip HTML tags for plain text version
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
} 