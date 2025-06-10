import { type ContactFormData } from "@/lib/validations/contact";

// Basic form data interface that captures all possible fields
export interface FormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  subject?: string;
  inquiry?: string;
  message?: string;
  service?: string;
  product?: string;
}

// Template for contact form submission
export function generateContactEmailTemplate(data: ContactFormData) {
  const subject = `New Contact Form: ${data.subject || 'General Inquiry'}`;
  const html = `
    <h3>New Inquiry from ${data.firstName} ${data.lastName}</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Field</th>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Details</th>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.firstName} ${data.lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.phone || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Inquiry Type:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.inquiry}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.subject}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.message}</td>
      </tr>
    </table>
  `;
  
  return {
    subject,
    html
  };
} 