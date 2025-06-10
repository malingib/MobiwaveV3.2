"use client"

import { motion } from "framer-motion"
import { CreditCard, ArrowLeftRight, Shield, Clock, Code, BarChart } from "lucide-react"
import Image from "next/image"

export default function MPesaFeatures() {
  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple Payment Options",
      description: "Support for C2B, B2C, and B2B transactions to meet all your payment needs.",
    },
    {
      icon: <ArrowLeftRight className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Easy integration with your existing systems through our robust API.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security measures to protect all transactions.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Instant transaction processing and confirmation for a smooth user experience.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer-Friendly",
      description: "Comprehensive documentation and support for developers.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Detailed Reporting",
      description: "Comprehensive transaction reports and analytics for better financial management.",
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
              className="text-orange-600 font-medium mb-4 tracking-wider uppercase bg-orange-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              FEATURES
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">M-Pesa Integration Features</h2>
            <p className="text-gray-600 mb-8">
              Our M-Pesa Integration API provides a seamless way for businesses to accept payments and disburse funds
              through M-Pesa, Kenya's leading mobile money platform. With our API, you can automate payment processes
              and provide a better experience for your customers.
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
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 shrink-0">
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
                src="/images/services/mpesa1.png"
                alt="M-Pesa Integration Features"
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
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 shrink-0">
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
