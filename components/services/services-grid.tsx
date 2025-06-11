"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare, Mail, Smartphone, CreditCard, Gift, HeadphonesIcon, Hash, BarChart3, Phone } from "lucide-react"

const services = [
  {
    title: "Bulk SMS",
    description: "Send thousands of SMS messages instantly to your customers with our reliable bulk SMS service.",
    icon: MessageSquare,
    href: "/services/bulk-sms",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Bulk Email",
    description: "Professional email marketing campaigns with advanced analytics and delivery tracking.",
    icon: Mail,
    href: "/services/bulk-email",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Bulk WhatsApp",
    description: "Reach your customers directly on WhatsApp with our bulk messaging solution.",
    icon: Smartphone,
    href: "/services/bulk-whatsapp",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "M-Pesa Integration",
    description: "Seamless mobile payment integration for your business with M-Pesa API.",
    icon: CreditCard,
    href: "/services/mpesa-integration",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Airtime Rewards",
    description: "Reward your customers with airtime for loyalty and engagement programs.",
    icon: Gift,
    href: "/services/airtime-rewards",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Service Desk",
    description: "Complete customer support solution with ticketing and communication tools.",
    icon: HeadphonesIcon,
    href: "/services/service-desk",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Shortcodes",
    description: "Premium and shared shortcodes for your SMS marketing campaigns.",
    icon: Hash,
    href: "/services/shortcodes",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "SMS Surveys",
    description: "Collect customer feedback and conduct surveys via SMS with real-time analytics.",
    icon: BarChart3,
    href: "/services/sms-surveys",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "USSD Codes",
    description: "Interactive USSD applications for mobile services and customer engagement.",
    icon: Phone,
    href: "/services/ussd-codes",
    color: "from-pink-500 to-pink-600",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Communication Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of communication and technology solutions designed to help your business
            connect with customers effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
