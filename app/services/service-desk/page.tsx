import ServiceHero from "@/components/services/service-hero"
import ServiceFeatures from "@/components/services/service-features"
import ServiceCTA from "@/components/services/service-cta"

export default function ServiceDeskPage() {
  return (
    <>
      <ServiceHero
        title="Service Desk Solution"
        description="Streamline your customer support with our comprehensive service desk platform."
        image="/images/services/service-desk.jpg"
        color="indigo"
      />
      <ServiceFeatures
        title="Comprehensive Support Platform"
        description="Our Service Desk solution provides all the tools you need to deliver exceptional customer support."
        features={[
          {
            title: "Multi-channel Ticketing",
            description: "Manage support tickets from email, web, SMS, and more in a single unified platform.",
            icon: "MessageSquare",
          },
          {
            title: "Knowledge Base",
            description: "Create and maintain a searchable knowledge base to help customers find answers quickly.",
            icon: "BookOpen",
          },
          {
            title: "SLA Management",
            description: "Set and track service level agreements to ensure timely responses to customer inquiries.",
            icon: "Clock",
          },
          {
            title: "Advanced Reporting",
            description: "Gain insights into support performance with comprehensive analytics and reporting.",
            icon: "BarChart",
          },
          {
            title: "Custom Workflows",
            description: "Design support workflows that match your business processes and requirements.",
            icon: "GitBranch",
          },
          {
            title: "Team Collaboration",
            description: "Enable seamless collaboration among support agents with internal notes and assignments.",
            icon: "Users",
          },
        ]}
      />
      <ServiceCTA
        title="Ready to Transform Your Customer Support?"
        description="Get started with our Service Desk solution today and deliver exceptional customer experiences."
        buttonText="Request a Demo"
        buttonLink="/contact"
        color="indigo"
      />
    </>
  )
}
