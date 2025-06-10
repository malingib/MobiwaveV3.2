"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function WhatsAppBenefits() {
  const benefits = [
    {
      title: "Higher Engagement Rates",
      description:
        "WhatsApp messages have significantly higher open and response rates compared to email and SMS, ensuring your messages are seen and acted upon.",
    },
    {
      title: "Rich Media Capabilities",
      description:
        "Share images, videos, documents, and interactive buttons to create more engaging and effective communication.",
    },
    {
      title: "Cost-Effective Communication",
      description:
        "Reduce communication costs while increasing effectiveness with our competitive WhatsApp Business API pricing.",
    },
    {
      title: "Enhanced Customer Experience",
      description:
        "Provide a more personal and interactive customer experience through a platform they already use and trust.",
    },
    {
      title: "Global Reach",
      description:
        "Connect with customers worldwide on WhatsApp's platform, which has over 2 billion users across 180+ countries.",
    },
    {
      title: "Improved Conversion Rates",
      description:
        "Drive higher conversion rates with interactive messages that make it easy for customers to take action.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Benefits of Bulk WhatsApp Messaging
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover why businesses are increasingly choosing WhatsApp as their preferred communication channel
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
