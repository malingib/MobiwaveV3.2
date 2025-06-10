"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MPesaIntegrations() {
  const integrations = [
    {
      title: "C2B (Customer to Business)",
      description:
        "Allow your customers to make payments to your business through M-Pesa. Ideal for e-commerce, bill payments, and service fees.",
      image: "/images/services/mpesa2.png",
    },
    {
      title: "B2C (Business to Customer)",
      description:
        "Send payments from your business to customers, employees, or suppliers. Perfect for salary disbursements, refunds, and promotions.",
      image: "/images/services/mpesa4.jpg",
    },
    {
      title: "B2B (Business to Business)",
      description:
        "Make payments to other businesses directly from your M-Pesa account. Streamline your supplier payments and business transactions.",
      image: "/images/services/mpesa-b2b.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-orange-600 font-medium mb-4 tracking-wider uppercase bg-orange-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            INTEGRATION OPTIONS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            M-Pesa Integration Types
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our M-Pesa Integration API supports various transaction types to meet your business needs.
          </motion.p>
        </div>

        <div className="space-y-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{integration.title}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Learn more
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="relative h-[300px] w-full">
                  <Image
                    src={integration.image || "/placeholder.svg"}
                    alt={integration.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
