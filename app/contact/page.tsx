import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactInfo from "@/components/contact/contact-info"
import ContactFormWrapper from "@/components/contact/contact-form-wrapper"

export const metadata: Metadata = {
  title: "Contact Us | MobiWave Innovations",
  description:
    "Get in touch with MobiWave Innovations for all your mobile communication needs. We're here to help with your inquiries about our services.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactHero />
      <ContactFormWrapper />
      <ContactInfo />
      
    </div>
  )
}
