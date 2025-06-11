// Test script to verify email API is working
async function testEmailAPI() {
  console.log("🧪 Testing Email API...")

  try {
    // Test the email test endpoint first
    console.log("📡 Testing email configuration endpoint...")
    const testResponse = await fetch("/api/test-email")
    const testResult = await testResponse.json()

    console.log("🔍 Test endpoint result:", testResult)

    if (!testResult.success) {
      console.error("❌ Email configuration test failed:", testResult)
      return
    }

    console.log("✅ Email configuration test passed!")

    // Now test the actual contact form endpoint
    console.log("📝 Testing contact form endpoint...")
    const formData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "+254700000000",
      subject: "API Test Message",
      inquiry: "general",
      message: "This is a test message from the API test script to verify the contact form is working properly.",
    }

    const formResponse = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const formResult = await formResponse.json()
    console.log("📧 Contact form result:", formResult)

    if (formResult.success) {
      console.log("🎉 All tests passed! Email system is working correctly.")
    } else {
      console.error("❌ Contact form test failed:", formResult)
    }
  } catch (error) {
    console.error("💥 Test failed with error:", error)
  }
}

// Run the test
testEmailAPI()
