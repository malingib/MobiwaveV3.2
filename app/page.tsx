import type { Metadata } from "next"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import ClientsSection from "@/components/clients-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "MobiWave Innovations | Telecom & Communication APIs in Kenya",
  description:
    "MobiWave provides Bulk SMS, Bulk Email, USSD, WhatsApp messaging, Shortcodes and M-Pesa integration services for businesses and developers in Kenya.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <CtaSection />
    </>
  )
}
