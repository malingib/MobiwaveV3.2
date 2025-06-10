"use client"

import { motion } from "framer-motion"
import { Zap, Shield, DollarSign, Code } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast & Reliable Delivery",
    description: "Our platform ensures your messages are delivered quickly and reliably to your target audience.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Dedicated Support Team",
    description: "Our expert support team is available to help you with any questions or issues you may encounter.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden fees, making our services accessible to businesses of all sizes.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Scalable API Integrations",
    description: "Easily integrate our services with your existing systems using our developer-friendly APIs.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
          <p className="text-gray-600">
            MobiWave Innovations offers unparalleled communication solutions with these key advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
