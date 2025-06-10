import ServiceHero from "@/components/services/service-hero"
import SurveyFeatures from "@/components/services/survey/survey-features"
import SurveyBenefits from "@/components/services/survey/survey-benefits"
import SurveyProcess from "@/components/services/survey/survey-process"
import ServiceCTA from "@/components/services/service-cta"

export default function SMSSurveysPage() {
  return (
    <>
      <ServiceHero
        title="SMS Surveys"
        description="Design and deploy SMS-based surveys and polls to collect valuable feedback from your audience."
        image="/images/services/survey4.jpg"
        color="amber"
      />
      <SurveyFeatures />
      <SurveyBenefits />
      <SurveyProcess />
      <ServiceCTA
        title="Ready to Start Collecting Feedback?"
        description="Get started with our SMS Survey platform today and gain valuable insights from your audience."
        buttonText="Get Started"
        buttonLink="/contact"
        color="amber"
      />
    </>
  )
}
