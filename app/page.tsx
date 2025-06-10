import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import ClientsSection from "@/components/clients-section"
import CtaSection from "@/components/cta-section"

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
