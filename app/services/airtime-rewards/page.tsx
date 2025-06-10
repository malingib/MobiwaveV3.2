import ServiceHero from "@/components/services/service-hero"
import ServiceFeatures from "@/components/services/service-features"
import ServiceCTA from "@/components/services/service-cta"

export default function AirtimeRewardsPage() {
  return (
    <>
      <ServiceHero
        title="Airtime & Data Reward System"
        description="Reward your customers, employees, or survey participants with airtime and data bundles."
        image="/images/services/rewards.png"
        color="red"
      />
      <ServiceFeatures
        title="Flexible Reward Solutions"
        description="Our Airtime & Data Reward System offers flexible options to meet your incentive needs."
        features={[
          {
            title: "Instant Rewards",
            description: "Send airtime or data rewards instantly to recipients across all mobile networks in Kenya.",
            icon: "Zap",
          },
          {
            title: "Bulk Rewards",
            description: "Send rewards to multiple recipients at once, perfect for large-scale campaigns.",
            icon: "Users",
          },
          {
            title: "Scheduled Rewards",
            description: "Schedule rewards to be sent at specific times or on recurring dates.",
            icon: "Calendar",
          },
          {
            title: "API Integration",
            description: "Integrate reward functionality directly into your applications or systems.",
            icon: "Code",
          },
          {
            title: "Detailed Reporting",
            description: "Track all rewards sent with comprehensive reporting and analytics.",
            icon: "BarChart",
          },
          {
            title: "Custom Denominations",
            description: "Send rewards of any value, from small incentives to substantial bonuses.",
            icon: "DollarSign",
          },
        ]}
      />
      <ServiceCTA
        title="Start Rewarding Today"
        description="Boost engagement and loyalty with our Airtime & Data Reward System."
        buttonText="Get Started"
        buttonLink="/contact"
        color="red"
      />
    </>
  )
}
