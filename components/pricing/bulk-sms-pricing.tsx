"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"

const bulkSMSPackages = [
  {
    name: "Small Business",
    range: "1 - 50,000",
    pricePerSMS: 0.6,
    features: ["Ksh. 0.6 per SMS", "Personalized sender ID", "Delivery reports", "24/7 support", "API access"],
    popular: false,
    color: "blue",
  },
  {
    name: "Medium Business",
    range: "50,001 - 500,000",
    pricePerSMS: 0.4,
    features: [
      "Ksh. 0.4 per SMS",
      "Personalized sender ID",
      "Delivery reports",
      "24/7 priority support",
      "API access",
      "Message scheduling",
    ],
    popular: true,
    color: "teal",
  },
  {
    name: "Large Business",
    range: "500,001 - 2,000,000",
    pricePerSMS: 0.35,
    features: [
      "Ksh. 0.35 per SMS",
      "Personalized sender ID",
      "Delivery reports",
      "24/7 priority support",
      "API access",
      "Message scheduling",
      "Dedicated account manager",
    ],
    popular: false,
    color: "purple",
  },
  {
    name: "Enterprise",
    range: "Above 2,000,000",
    pricePerSMS: 0.3,
    features: [
      "Ksh. 0.3 per SMS",
      "Personalized sender ID",
      "Delivery reports",
      "24/7 priority support",
      "API access",
      "Message scheduling",
      "Dedicated account manager",
      "Custom integration support",
    ],
    popular: false,
    color: "blue",
  },
]

export default function BulkSMSPricing() {
  const [showTooltip, setShowTooltip] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white" id="bulk-sms">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BULK SMS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bulk SMS Packages
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Send SMS messages to your customers with our reliable and affordable bulk SMS packages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bulkSMSPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`bg-white rounded-xl shadow-lg border overflow-hidden ${
                pkg.popular ? "border-teal-500 relative" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">KES {pkg.pricePerSMS}</span>
                  <span className="text-gray-500 ml-1">/SMS</span>
                </div>
                <p className="text-gray-600 mb-6">
                  <span className="font-bold text-lg">{pkg.range}</span> SMS per month
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative">
                  <button
                    className="text-sm text-gray-500 flex items-center mb-6"
                    onMouseEnter={() => setShowTooltip(index)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    What is the validity period?
                  </button>
                  {showTooltip === index && (
                    <div className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg w-48 z-10">
                      SMS credits are valid for 12 months from the date of purchase.
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  className={`block w-full py-2 px-4 bg-gradient-to-r ${
                    pkg.color === "blue"
                      ? "from-blue-600 to-blue-500"
                      : pkg.color === "teal"
                        ? "from-teal-600 to-teal-500"
                        : "from-purple-600 to-purple-500"
                  } text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom package? We can tailor a solution just for you.</p>
          <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Contact us for custom pricing
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
