"use client"

import { motion } from "framer-motion"
import { Hash, MessageSquare, ArrowLeftRight, Shield, BarChart, Globe } from "lucide-react"
import Image from "next/image"

export default function ShortcodeFeatures() {
  const features = [
    {
      icon: <Hash className="h-6 w-6" />,
      title: "Memorable Numbers",
      description: "Short, easy-to-remember numbers that enhance your brand recognition and recall.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Two-Way Communication",
      description: "Enable interactive conversations with your customers through SMS.",
    },
    {
      icon: <ArrowLeftRight className="h-6 w-6" />,
      title: "Automated Responses",
      description: "Set up automated replies based on keywords to provide instant information.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Communication",
      description: "Ensure the security and privacy of your customer communications.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Track and analyze message volumes, response rates, and customer engagement.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Nationwide Coverage",
      description: "Reach customers across all mobile networks in Kenya.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-purple-600 font-medium mb-4 tracking-wider uppercase bg-purple-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              FEATURES
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Benefits of SMS Shortcodes</h2>
            <p className="text-gray-600 mb-8">
              SMS shortcodes provide a powerful way for businesses to engage with their customers through text
              messaging. These short, memorable numbers make it easy for customers to interact with your brand and
              access your services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/services/shortcode2.png"
                alt="Shortcode Features"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {features.slice(4).map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 4) }}
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
