import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = {
      success: true,
      message: "Debug endpoint working",
      timestamp: new Date().toISOString(),
      environment: "preview",
      status: "ok",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Debug endpoint error",
      error: String(error),
    })
  }
}
