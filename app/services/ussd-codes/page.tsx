import ServiceHero from "@/components/services/service-hero"
import USSDFeatures from "@/components/services/ussd/ussd-features"
import USSDUseCases from "@/components/services/ussd/ussd-use-cases"
import USSDProcess from "@/components/services/ussd/ussd-process"
import ServiceCTA from "@/components/services/service-cta"

export default function USSDCodesPage() {
  return (
    <>
      <ServiceHero
        title="USSD Services"
        description="Create interactive USSD services for your customers with our reliable platform."
        image="/images/services/ussd2.png"
        color="blue"
      />
      <USSDFeatures />
      <USSDUseCases />
      <USSDProcess />
      <ServiceCTA
        title="Ready to Create Your USSD Service?"
        description="Get started with our USSD platform today and provide interactive services to your customers."
        buttonText="Get Started"
        buttonLink="/contact"
        color="blue"
      />
    </>
  )
}
