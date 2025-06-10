"use client"

import { motion } from "framer-motion"
import { Mail, BarChart, Users, Clock, Layout, Shield } from "lucide-react"

export default function BulkEmailFeatures() {
  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "HTML Email Templates",
      description:
        "Choose from a variety of professional templates or create your own custom designs for your email campaigns.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description:
        "Track open rates, click-through rates, and conversions to measure the success of your email campaigns.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "List Management",
      description: "Easily manage your contact lists with segmentation, tagging, and automated list cleaning.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Scheduled Delivery",
      description:
        "Plan your campaigns in advance and schedule emails to be sent at the optimal time for your audience.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "A/B Testing",
      description: "Test different subject lines, content, and designs to optimize your email performance.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Tools",
      description:
        "Stay compliant with email regulations with built-in tools for managing subscriptions and preferences.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-teal-600 font-medium mb-4 tracking-wider uppercase bg-teal-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FEATURES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powerful Email Platform Features
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our bulk email platform comes with everything you need to create, send, and analyze effective email
            campaigns.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-400 rounded-lg flex items-center justify-center mb-6 text-white">
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
