import ServiceHero from "@/components/services/service-hero"
import ShortcodeFeatures from "@/components/services/shortcode/shortcode-features"
import ShortcodeUseCases from "@/components/services/shortcode/shortcode-use-cases"
import ShortcodeTypes from "@/components/services/shortcode/shortcode-types"
import ServiceCTA from "@/components/services/service-cta"

export default function ShortcodesPage() {
  return (
    <>
      <ServiceHero
        title="SMS Shortcode Services"
        description="Engage with your customers using easy-to-remember shortcodes for two-way communication."
        image="/images/services/shortcode3.jpg"
        color="purple"
      />
      <ShortcodeFeatures />
      <ShortcodeTypes />
      <ShortcodeUseCases />
      <ServiceCTA
        title="Ready to Get Your Shortcode?"
        description="Get started with our SMS Shortcode services today and enhance your customer engagement."
        buttonText="Get Started"
        buttonLink="/contact"
        color="purple"
      />
    </>
  )
}
