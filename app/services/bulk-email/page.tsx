import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import BulkEmailFeatures from "@/components/services/bulk-email/bulk-email-features"
import BulkEmailBenefits from "@/components/services/bulk-email/bulk-email-benefits"
import BulkEmailUseCases from "@/components/services/bulk-email/bulk-email-use-cases"
import ServiceCTA from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Bulk Email Kenya | Email Marketing & Sending Service",
  description:
    "Reach customers with reliable bulk email in Kenya. MobiWave provides professional email campaigns and high-volume email sending for businesses.",
  alternates: { canonical: "/services/bulk-email" },
}

export default function BulkEmailPage() {
  return (
    <>
      <ServiceHero
        title="Bulk Email Services"
        description="Reach your audience with professional email campaigns at competitive rates."
        image="/images/services/bulkemailHero.png"
        color="green"
      />
      <BulkEmailBenefits />
      <BulkEmailFeatures />
      <BulkEmailUseCases />
      <ServiceCTA
        title="Ready to Start Your Email Campaign?"
        description="Get started with our Bulk Email platform today and connect with your audience effectively."
        buttonText="Get Started"
        buttonLink="/contact"
        color="green"
      />
    </>
  )
}
