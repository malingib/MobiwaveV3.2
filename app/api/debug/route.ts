import { NextResponse } from "next/server"

export async function GET() {
  // Simple debug endpoint that doesn't use any DNS or network features
  return NextResponse.json({
    success: true,
    message: "Debug endpoint working",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "unknown",
    isPreview: process.env.VERCEL_ENV === "preview" || false,
  })
}
