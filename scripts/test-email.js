// Simple script to test email sending with Nodemailer
// Run with: node scripts/test-email.js
const nodemailer = require('nodemailer');

// Load environment variables from .env file if available
try {
  require('dotenv').config();
} catch (err) {
  console.log('No dotenv package found, using process.env directly');
}

// Email configuration
const config = {
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER || 'info@mobiwave.co.ke',
    pass: process.env.SMTP_PASSWORD || 'your-password-here'
  },
  debug: true,
  logger: true
};

// Create transporter
console.log('Creating transporter with config:', {
  host: config.host,
  port: config.port,
  secure: config.secure,
  user: config.auth.user
});

const transporter = nodemailer.createTransport(config);

// Verify connection
console.log('Verifying connection...');
transporter.verify()
  .then(success => {
    console.log('Server is ready to take messages:', success);
    
    // If connection is successful, try to send an email
    console.log('Attempting to send test email...');
    
    return transporter.sendMail({
      from: config.auth.user,
      to: config.auth.user, // Send to self for testing
      subject: 'Test Email from Node.js Script',
      text: 'This is a test email sent from a Node.js script.',
      html: '<h3>Test Email</h3><p>This is a test email sent from a Node.js script.</p>'
    });
  })
  .then(info => {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
    
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    
    if (error.code) {
      console.error('Error code:', error.code);
    }
    
    if (error.command) {
      console.error('Error command:', error.command);
    }
    
    if (error.response) {
      console.error('Error response:', error.response);
    }
    
    process.exit(1);
  }); 