"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

interface EmailStatusCheckProps {
  className?: string;
}

export function EmailStatusCheck({ className }: EmailStatusCheckProps) {
  const [status, setStatus] = useState<"idle" | "checking" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  // Check connection status when component mounts
  useEffect(() => {
    console.log("🔍 EmailStatusCheck: Component Mounted");
    checkEmailConnection();
  }, []);

  const checkEmailConnection = async () => {
    try {
      setStatus("checking");
      setMessage("Checking email server connectivity...");
      
      const response = await fetch("/api/test-email", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store" // Ensure we don't use cached response
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setMessage("Email server connection ready");
      } else {
        setStatus("error");
        setMessage(data.message || "Could not connect to email server");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error checking email connection");
    }
  };
  
  if (status === "idle") {
    return null;
  }

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      {status === "checking" && (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
          <span className="text-blue-600">{message}</span>
        </>
      )}
      
      {status === "success" && (
        <>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span className="text-green-600">{message}</span>
        </>
      )}
      
      {status === "error" && (
        <>
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-red-600">{message}</span>
          <button 
            onClick={checkEmailConnection}
            className="text-blue-600 hover:text-blue-800 text-xs underline ml-2"
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
} 