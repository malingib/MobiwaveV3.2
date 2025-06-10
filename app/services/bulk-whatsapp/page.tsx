
import ServiceHero from "@/components/services/service-hero"
import WhatsAppFeatures from "@/components/services/whatsapp/whatsapp-features"
import WhatsAppBenefits from "@/components/services/whatsapp/whatsapp-benefits"
import WhatsAppUseCases from "@/components/services/whatsapp/whatsapp-use-cases"
import ServiceCTA from "@/components/services/service-cta"


export default function BulkWhatsAppPage() {
  return (
    <>
      <ServiceHero
        title="Bulk WhatsApp Messaging"
        description="Engage your customers on their preferred messaging platform with our WhatsApp Business API solution. Send personalized messages, rich media, and interactive content at scale."
        image="/images/services/whatsapp.jpg"
        color="green"
      />
      <WhatsAppFeatures />
      <WhatsAppBenefits />
      <WhatsAppUseCases />
      <ServiceCTA
        title="Ready to engage your customers on WhatsApp?"
        description="Contact our team to get started with our Bulk WhatsApp messaging solution and take your customer engagement to the next level."
        buttonText="Get Started"
        buttonLink="/contact"
        color="green"
      />
    </>
  )
}
