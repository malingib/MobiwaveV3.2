import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import MPesaFeatures from "@/components/services/mpesa/mpesa-features"
import MPesaIntegrations from "@/components/services/mpesa/mpesa-integrations"
import MPesaUseCases from "@/components/services/mpesa/mpesa-use-cases"
import ServiceCTA from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "M-Pesa Integration API Kenya | Daraja & Payments",
  description:
    "Integrate M-Pesa payments in Kenya with MobiWave. Build collections, disbursements and mobile money workflows with a reliable M-Pesa API.",
  alternates: { canonical: "/services/mpesa-integration" },
}

export default function MPesaIntegrationPage() {
  return (
    <>
      <ServiceHero
        title="M-Pesa Integration API"
        description="Seamless mobile money collection and disbursement for your business."
        image="/images/services/mpesa3.png"
        color="orange"
      />
      <MPesaFeatures />
      <MPesaIntegrations />
      <MPesaUseCases />
      <ServiceCTA
        title="Ready to Integrate M-Pesa?"
        description="Get started with our M-Pesa Integration API today and streamline your payment processes."
        buttonText="Get Started"
        buttonLink="/contact"
        color="orange"
      />
    </>
  )
}
