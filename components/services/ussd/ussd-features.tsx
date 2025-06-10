"use client"

import { motion } from "framer-motion"
import { Hash, Smartphone, Globe, Shield, Code, BarChart } from "lucide-react"
import Image from "next/image"

export default function USSDFeatures() {
  const features = [
    {
      icon: <Hash className="h-6 w-6" />,
      title: "Easy-to-Remember Codes",
      description: "Short and memorable USSD codes that your customers can easily recall and use.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Works on All Phones",
      description: "Compatible with all mobile phones, including basic feature phones without internet access.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Wide Network Coverage",
      description: "Available across all mobile networks in Kenya for maximum reach.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Encrypted communication for secure data exchange and transactions.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Development",
      description: "Tailored USSD solutions designed to meet your specific business requirements.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Monitor usage patterns and user behavior with comprehensive analytics.",
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
              className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              FEATURES
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Powerful USSD Service Features</h2>
            <p className="text-gray-600 mb-8">
              Our USSD platform provides a range of features to help you create interactive and user-friendly services
              for your customers. USSD (Unstructured Supplementary Service Data) allows for real-time, two-way
              communication between your business and customers using simple text menus.
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
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 shrink-0">
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
              <Image src="/images/services/ussdHero.png" alt="USSD Features" fill className="object-contain" />
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
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 shrink-0">
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
