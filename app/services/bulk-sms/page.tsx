import ServiceHero from "@/components/services/service-hero"
import BulkSMSBenefits from "@/components/services/bulk-sms/bulk-sms-benefits"
import BulkSMSFeatures from "@/components/services/bulk-sms/bulk-sms-features"
import BulkSMSUseCases from "@/components/services/bulk-sms/bulk-sms-use-cases"
import ServiceCTA from "@/components/services/service-cta"

export default function BulkSMSPage() {
  return (
    <>
      <ServiceHero
        title="Bulk SMS Services"
        description="Reach your customers instantly with our reliable and cost-effective bulk SMS messaging platform."
        image="/images/services/bulksms.jpg"
        color="blue"
      />
      <BulkSMSBenefits />
      <BulkSMSFeatures />
      <BulkSMSUseCases />
      <ServiceCTA
        title="Ready to Start Sending SMS?"
        description="Get started with our Bulk SMS platform today and connect with your audience effectively."
        buttonText="Get Started"
        buttonLink="/contact"
        color="blue"
      />
    </>
  )
}
