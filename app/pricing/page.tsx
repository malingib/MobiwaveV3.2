import PricingHero from "@/components/pricing/pricing-hero"
import BulkSMSPricing from "@/components/pricing/bulk-sms-pricing"
import BulkEmailPricing from "@/components/pricing/bulk-email-pricing"
import ShortcodePricing from "@/components/pricing/shortcode-pricing"
import USSDPricing from "@/components/pricing/ussd-pricing"
import ServiceDeskPricing from "@/components/pricing/service-desk-pricing"
import MpesaIntegrationPricing from "@/components/pricing/mpesa-integration-pricing"
import SurveyPricing from "@/components/pricing/survey-pricing"
import PricingFAQ from "@/components/pricing/pricing-faq"
import PricingCTA from "@/components/pricing/pricing-cta"

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <BulkSMSPricing />
      <USSDPricing />
      <ShortcodePricing />
      <BulkEmailPricing />
      <MpesaIntegrationPricing />
      <SurveyPricing />
      <ServiceDeskPricing />
      <PricingFAQ />
      <PricingCTA />
    </>
  )
}
