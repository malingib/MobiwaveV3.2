"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhatsAppUseCases() {
  const useCases = [
    {
      title: "Customer Support",
      description:
        "Provide instant customer support through WhatsApp, allowing customers to get help through a familiar platform. Handle inquiries, resolve issues, and collect feedback efficiently.",
      icon: "/images/icons/customer-support.png",
    },
    {
      title: "Order Updates & Notifications",
      description:
        "Send order confirmations, shipping updates, delivery notifications, and other transactional messages directly to customers' WhatsApp, ensuring they stay informed about their purchases.",
      icon: "/images/icons/order.jpg",
    },
    {
      title: "Promotional Campaigns",
      description:
        "Launch targeted promotional campaigns with rich media content, special offers, and interactive buttons that drive customer engagement and boost sales conversions.",
      icon: "/images/icons/campaign.png",
    },
    {
      title: "Appointment Reminders",
      description:
        "Send automated appointment reminders with options to confirm, reschedule, or cancel, reducing no-shows and improving scheduling efficiency for your business.",
      icon: "/images/icons/appointment.jpg",
    },
    {
      title: "Product Recommendations",
      description:
        "Deliver personalized product recommendations based on customer preferences and purchase history, complete with images, descriptions, and direct purchase links.",
      icon: "/images/icons/recommendation.png",
    },
    {
      title: "Feedback Collection",
      description:
        "Gather customer feedback through interactive WhatsApp surveys, making it easy for customers to share their opinions and for you to improve your products and services.",
      icon: "/images/icons/feedback.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            WhatsApp Business Use Cases
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore how businesses across industries are leveraging WhatsApp to enhance customer communication
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="relative w-16 h-16">
                  <Image src={useCase.icon || "/placeholder.svg"} alt={useCase.title} fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
