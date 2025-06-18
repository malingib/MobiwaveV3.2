import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    let body = {}

    try {
      body = await request.json()
    } catch (parseError) {
      console.log("Could not parse request body, using empty object")
    }

    console.log("📧 Mock email service received request:", body)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const response = {
      success: true,
      message: "Email simulation successful (preview mode)",
      note: "This is a mock response. In production, real emails will be sent.",
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("❌ Mock email error:", error)

    const errorResponse = {
      success: false,
      message: "Failed to process mock email",
      error: String(error),
    }

    return NextResponse.json(errorResponse, { status: 400 })
  }
}
