import ServiceFeatures from "@/components/services/service-features"

export default function WhatsAppFeatures() {
  const features = [
    {
      title: "WhatsApp Business API",
      description:
        "Official WhatsApp Business API integration that allows you to send messages at scale while maintaining compliance with WhatsApp policies.",
      icon: "MessageCircle",
    },
    {
      title: "Rich Media Messages",
      description:
        "Send images, videos, documents, and other rich media content to enhance your communication and engagement.",
      icon: "Image",
    },
    {
      title: "Interactive Templates",
      description:
        "Create and send pre-approved message templates with interactive buttons, quick replies, and call-to-action options.",
      icon: "LayoutTemplate",
    },
    {
      title: "Automated Responses",
      description:
        "Set up automated responses for common queries, welcome messages, and follow-ups to ensure timely engagement.",
      icon: "MessageSquare",
    },
    {
      title: "Two-Way Communication",
      description:
        "Enable two-way conversations with your customers, allowing them to respond and engage with your business.",
      icon: "ArrowLeftRight",
    },
    {
      title: "Detailed Analytics",
      description:
        "Track delivery rates, read receipts, response rates, and other key metrics to optimize your messaging strategy.",
      icon: "BarChart",
    },
    {
      title: "Contact Management",
      description:
        "Organize and manage your WhatsApp contacts with tags, groups, and custom attributes for targeted messaging.",
      icon: "Users",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with your existing CRM, marketing automation, or customer support systems via our robust API.",
      icon: "GitBranch",
    },
    {
      title: "Compliance & Security",
      description:
        "Maintain compliance with WhatsApp's policies and ensure the security of your customer conversations with end-to-end encryption.",
      icon: "Shield",
    },
  ]

  return (
    <ServiceFeatures
      title="Powerful WhatsApp Business Features"
      description="Our Bulk WhatsApp solution provides all the tools you need to create effective and engaging WhatsApp campaigns."
      features={features}
    />
  )
}
