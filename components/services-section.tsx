"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Mail, Hash, CreditCard, BarChart3, Gift, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "bulk-sms",
    title: "Bulk SMS",
    icon: <MessageSquare className="h-6 w-6" />,
    description: "Reach millions of customers instantly with our enterprise-grade SMS platform. Enjoy 99.9% delivery rates, real-time analytics, and competitive pricing starting from Ksh. 0.3 per SMS for high-volume senders.",
    useCases: ["Marketing campaigns & promotions", "Payment & appointment reminders", "Emergency alerts & notifications", "OTP & verification codes", "Customer engagement campaigns"],
    cta: "Get Custom Quote",
    color: "blue",
  },
  {
    id: "bulk-email",
    title: "Bulk Email",
    icon: <Mail className="h-6 w-6" />,
    description: "Professional email marketing platform with advanced analytics and deliverability optimization. Send up to 500,000+ emails with no expiry, starting from just Ksh. 0.15 per email for enterprise volumes.",
    useCases: ["Newsletter distribution", "Customer onboarding sequences", "Promotional campaigns", "Event invitations", "Product announcements"],
    cta: "Launch Campaign",
    color: "green",
  },
  {
    id: "ussd-codes",
    title: "USSD Services",
    icon: <Hash className="h-6 w-6" />,
    description: "Interactive USSD applications for seamless customer engagement. Choose from dedicated, shared, or test-bed options with full customization capabilities and 24/7 technical support.",
    useCases: ["Mobile banking services", "Airtime & bill payments", "Customer feedback systems", "Service subscriptions", "Account balance inquiries"],
    cta: "Request Demo",
    color: "purple",
  },
  {
    id: "bulk-whatsapp",
    title: "Bulk WhatsApp",
    icon: <CreditCard className="h-6 w-6" />,
    description: "Leverage WhatsApp Business API for rich media messaging and two-way conversations. Send images, documents, and interactive messages with delivery confirmations and read receipts.",
    useCases: ["Order confirmations & tracking", "Customer support conversations", "Product catalogs & showcases", "Appointment scheduling", "Payment confirmations"],
    cta: "Start Messaging",
    color: "purple",
  },
  {
    id: "shortcodes",
    title: "SMS Shortcodes",
    icon: <Hash className="h-6 w-6" />,
    description: "Memorable 4-5 digit codes for premium SMS services and two-way communication. Available as dedicated or shared options with comprehensive keyword management and analytics.",
    useCases: ["Voting & polling systems", "Subscription services", "Contest & competition entries", "Customer feedback collection", "Information services"],
    cta: "Reserve Your Code",
    color: "purple",
  },
  {
    id: "mpesa-integration",
    title: "M-Pesa Integration API",
    icon: <CreditCard className="h-6 w-6" />,
    description: "Seamless mobile money integration with competitive rates - 5% for transactions below Ksh. 3,000 and flat Ksh. 50 for higher amounts. Complete API documentation and 24/7 technical support included.",
    useCases: ["E-commerce payment processing", "Bill payment solutions", "Salary & commission disbursements", "Subscription renewals", "Merchant payment collection"],
    cta: "Integrate Now",
    color: "orange",
  },
  {
    id: "service-desk",
    title: "Customer Service Desk",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    description: "Complete customer support solution with multi-channel ticketing, knowledge base, and advanced analytics. Starting at Ksh. 6,000 per user per month with one month free trial.",
    useCases: ["Help desk management", "Ticket routing & escalation", "Knowledge base creation", "Customer satisfaction tracking", "SLA monitoring & reporting"],
    cta: "Start Free Trial",
    color: "indigo",
  },
  {
    id: "airtime-rewards",
    title: "Airtime & Data Rewards",
    icon: <Gift className="h-6 w-6" />,
    description: "Automated airtime and data bundle distribution system for customer loyalty programs, employee incentives, and survey rewards. Support for all major networks with real-time delivery confirmation.",
    useCases: ["Customer loyalty programs", "Employee performance rewards", "Survey participation incentives", "Referral program rewards", "Contest & giveaway prizes"],
    cta: "Launch Rewards Program",
    color: "red",
  },
  {
    id: "sms-surveys",
    title: "SMS Survey Platform",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Comprehensive SMS-based survey and polling platform with real-time analytics and automated reporting. Setup fee of Ksh. 25,000 includes up to 2,000 responses monthly.",
    useCases: ["Customer satisfaction surveys", "Market research studies", "Employee feedback collection", "Product feedback & reviews", "Event feedback & ratings"],
    cta: "Design Your Survey",
    color: "amber",
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("bulk-sms")

  const getColorClass = (color: string, type: "bg" | "text" | "border") => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
      green: { bg: "bg-teal-500", text: "text-teal-600", border: "border-teal-500" },
      purple: { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-600" },
      orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-500" },
      red: { bg: "bg-red-500", text: "text-red-600", border: "border-red-500" },
      indigo: { bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-500" },
      amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-500" },
    }
    return colorMap[color][type]
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-blue-100 mb-8">
            We provide next-generation communication tools to help your business connect with customers effectively.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service tabs */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`w-full text-left px-6 py-4 border-l-4 transition-all ${activeService === service.id
                      ? `${getColorClass(service.color, "border")} bg-gray-50`
                      : "border-transparent hover:bg-gray-50"
                    }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-lg mr-4 ${activeService === service.id ? getColorClass(service.color, "bg") : "bg-gray-100"
                        }`}
                    >
                      <span className={activeService === service.id ? "text-white" : "text-gray-500"}>
                        {service.icon}
                      </span>
                    </div>
                    <span
                      className={`font-medium ${activeService === service.id ? getColorClass(service.color, "text") : "text-gray-700"
                        }`}
                    >
                      {service.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service details */}
          <div className="lg:w-2/3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`bg-white rounded-xl shadow-md p-8 h-full ${activeService === service.id ? "block" : "hidden"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${getColorClass(service.color, "text")}`}>{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h4 className="text-lg font-semibold mb-3 text-gray-800">Use Cases</h4>
                <ul className="mb-8 space-y-2">
                  {service.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className={`h-5 w-5 mr-2 mt-0.5 ${getColorClass(service.color, "text")}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{useCase}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.id === "bulk-sms" ? "/services/bulk-sms" : `/services/${service.id}`}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-white ${getColorClass(
                    service.color,
                    "bg",
                  )} hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]`}
                >
                  {service.cta}
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
