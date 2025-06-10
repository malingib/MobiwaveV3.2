"use client"

import { motion } from "framer-motion"
import { MessageSquare, Clock, BarChart, Users, Globe, Shield } from "lucide-react"

export default function BulkSMSFeatures() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Personalized Messaging",
      description:
        "Create custom messages with recipient names and other personalized information to increase engagement rates.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Scheduled Delivery",
      description:
        "Plan your campaigns in advance and schedule messages to be sent at the optimal time for your audience.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Track delivery rates, open rates, and engagement metrics to measure the success of your campaigns.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Contact Management",
      description: "Easily manage your contact lists with our user-friendly interface and import/export capabilities.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Wide Network Coverage",
      description: "Reach customers across all mobile networks in Kenya and beyond with our reliable delivery system.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Platform",
      description:
        "Your data and contacts are protected with enterprise-grade security measures and compliance with regulations.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
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
            Powerful SMS Platform Features
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our bulk SMS platform comes with everything you need to create, send, and analyze effective SMS campaigns.
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center mb-6 text-white">
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
