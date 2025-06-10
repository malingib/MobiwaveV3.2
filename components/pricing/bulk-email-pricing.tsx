"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const bulkEmailPackages = [
  {
    name: "Starter",
    range: "1 - 30,000",
    pricePerEmail: 0.5,
    features: ["Ksh. 0.5 per email", "HTML templates", "Delivery reports", "Basic analytics", "24/7 support", "No expiry"],
    popular: false,
  },
  {
    name: "Business",
    range: "40,001 - 80,000",
    pricePerEmail: 0.4,
    features: [
      "Ksh. 0.4 per email",
      "HTML templates",
      "Delivery reports",
      "Advanced analytics",
      "24/7 priority support",
      "A/B testing",
      "No expiry",
    ],
    popular: true,
  },
  {
    name: "Professional",
    range: "80,001 - 300,000",
    pricePerEmail: 0.3,
    features: [
      "Ksh. 0.3 per email",
      "Custom HTML templates",
      "Delivery reports",
      "Advanced analytics",
      "24/7 priority support",
      "A/B testing",
      "No expiry",
    ],
    popular: false,
  },
  {
    name: "Premium",
    range: "300,001 - 500,000",
    pricePerEmail: 0.2,
    features: [
      "Ksh. 0.2 per email",
      "Custom HTML templates",
      "Delivery reports",
      "Advanced analytics",
      "24/7 priority support",
      "A/B testing",
      "Dedicated account manager",
      "No expiry",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    range: "Above 500,000",
    pricePerEmail: 0.15,
    features: [
      "Ksh. 0.15 per email",
      "Custom HTML templates",
      "Delivery reports",
      "Advanced analytics",
      "24/7 priority support",
      "A/B testing",
      "Dedicated account manager",
      "Custom integrations",
      "No expiry",
    ],
    popular: false,
  },
]

export default function BulkEmailPricing() {
  return (
    <section className="py-20 bg-gray-50" id="bulk-email">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-teal-600 font-medium mb-4 tracking-wider uppercase bg-teal-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BULK EMAIL
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bulk Email Packages
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach your audience with professional email campaigns at competitive rates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {bulkEmailPackages.map((pkg, index) => (
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
                  <span className="text-3xl font-bold text-gray-900">KES {pkg.pricePerEmail}</span>
                  <span className="text-gray-500 ml-1">/email</span>
                </div>
                <p className="text-gray-600 mb-6">
                  <span className="font-bold text-lg">{pkg.range}</span> emails
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full py-2 px-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All email packages are valid for 12 months from the date of purchase.</p>
          <Link href="/contact" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
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
