// Script to test the Next.js API endpoints for email functionality
// Run with: node scripts/test-api-email.js
const fetch = require('node-fetch');

// Base URL for API endpoints
const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

// Test connection endpoint
async function testConnection() {
  console.log('Testing email connection...');
  try {
    const response = await fetch(`${BASE_URL}/test-email`);
    const data = await response.json();
    
    console.log('Connection test response:', data);
    return data.success;
  } catch (error) {
    console.error('Connection test error:', error);
    return false;
  }
}

// Test sending email
async function testSendEmail() {
  console.log('Testing email sending...');
  try {
    const response = await fetch(`${BASE_URL}/test-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    console.log('Send email test response:', data);
    return data.success;
  } catch (error) {
    console.error('Send email test error:', error);
    return false;
  }
}

// Test contact form submission
async function testContactForm() {
  console.log('Testing contact form submission...');
  
  const formData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '+1234567890',
    subject: 'API Test',
    inquiry: 'general',
    message: 'This is a test message from the API test script.'
  };
  
  try {
    const response = await fetch(`${BASE_URL}/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    console.log('Contact form test response:', data);
    return data.success;
  } catch (error) {
    console.error('Contact form test error:', error);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('=== Starting Email API Tests ===');
  
  // Test 1: Connection
  const connectionSuccess = await testConnection();
  console.log(`Connection test: ${connectionSuccess ? 'SUCCESS' : 'FAILED'}`);
  
  if (!connectionSuccess) {
    console.log('Stopping tests due to connection failure');
    return;
  }
  
  // Test 2: Send test email
  const sendSuccess = await testSendEmail();
  console.log(`Send email test: ${sendSuccess ? 'SUCCESS' : 'FAILED'}`);
  
  // Test 3: Contact form
  const contactSuccess = await testContactForm();
  console.log(`Contact form test: ${contactSuccess ? 'SUCCESS' : 'FAILED'}`);
  
  console.log('=== Email API Tests Complete ===');
}

// Run the tests
runTests().catch(error => {
  console.error('Test runner error:', error);
  process.exit(1);
}); 