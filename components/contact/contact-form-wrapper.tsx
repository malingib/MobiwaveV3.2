"use client"

import dynamic from 'next/dynamic'

// Dynamically import the contact form with no SSR to avoid hydration issues
const ContactForm = dynamic(() => import("@/components/contact/contact-form"), {
  ssr: false,
})

export default function ContactFormWrapper() {
  return <ContactForm />
}
