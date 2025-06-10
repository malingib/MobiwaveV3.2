"use client"

import { MessageSquare, Mail, Hash, CreditCard, BarChart3, Gift, HeadphonesIcon, MessageCircle } from "lucide-react"
import ServiceCard from "./service-card"

export default function ServicesList() {
  const services = [
    {
      title: "Bulk SMS",
      description: "Reach your customers instantly with our reliable and cost-effective bulk SMS messaging platform.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      features: [
        "High delivery rates",
        "Personalized messaging",
        "Scheduled campaigns",
        "Detailed analytics",
        "API integration",
      ],
      color: "blue",
      link: "/services/bulk-sms",
    },
    {
      title: "Bulk Email",
      description:
        "Deliver newsletters, promotions, or notifications professionally with our email marketing solution.",
      icon: <Mail className="h-6 w-6 text-white" />,
      features: [
        "Responsive templates",
        "Campaign automation",
        "Advanced segmentation",
        "Performance tracking",
        "Spam testing",
      ],
      color: "green",
      link: "/services/bulk-email",
    },
    {
      title: "Bulk WhatsApp",
      description: "Engage customers on their preferred messaging platform with our WhatsApp Business API solution.",
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      features: [
        "WhatsApp Business API",
        "Rich media messages",
        "Interactive templates",
        "Automated responses",
        "Detailed analytics",
      ],
      color: "green",
      link: "/services/bulk-whatsapp",
    },
    {
      title: "USSD Codes",
      description: "Create interactive USSD services for your customers with our reliable platform.",
      icon: <Hash className="h-6 w-6 text-white" />,
      features: [
        "Menu-based navigation",
        "Real-time interaction",
        "Works on all phones",
        "No internet required",
        "Secure transactions",
      ],
      color: "blue",
      link: "/services/ussd-codes",
    },
    {
      title: "Shortcodes",
      description: "Engage with your customers using easy-to-remember shortcodes for two-way communication.",
      icon: <Hash className="h-6 w-6 text-white" />,
      features: [
        "Memorable numbers",
        "Two-way messaging",
        "Keyword processing",
        "Automated responses",
        "Campaign tracking",
      ],
      color: "purple",
      link: "/services/shortcodes",
    },
    {
      title: "M-Pesa Integration",
      description: "Seamless mobile money collection and disbursement for your business.",
      icon: <CreditCard className="h-6 w-6 text-white" />,
      features: ["C2B transactions", "B2C payments", "Payment confirmation", "Transaction history", "Secure API"],
      color: "orange",
      link: "/services/mpesa-integration",
    },
    {
      title: "Service Desk",
      description: "Streamline your customer support with our comprehensive service desk platform.",
      icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
      features: [
        "Multi-channel ticketing",
        "Knowledge base",
        "SLA management",
        "Advanced reporting",
        "Team collaboration",
      ],
      color: "indigo",
      link: "/services/service-desk",
    },
    {
      title: "Airtime & Data Rewards",
      description: "Reward your customers, employees, or survey participants with airtime and data bundles.",
      icon: <Gift className="h-6 w-6 text-white" />,
      features: [
        "Instant rewards",
        "Bulk disbursement",
        "All networks supported",
        "Scheduled rewards",
        "Detailed reporting",
      ],
      color: "red",
      link: "/services/airtime-rewards",
    },
    {
      title: "SMS Surveys",
      description: "Design and deploy SMS-based surveys and polls to collect valuable feedback from your audience.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      features: [
        "Multiple question types",
        "Real-time responses",
        "Data visualization",
        "Export capabilities",
        "Automated analysis",
      ],
      color: "amber",
      link: "/services/sms-surveys",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Comprehensive Communication Solutions</h2>
          <p className="text-gray-600">
            Explore our full range of services designed to help your business connect with customers effectively and
            drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              color={service.color}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
