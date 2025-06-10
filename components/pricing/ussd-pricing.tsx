"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const ussdOptions = [
  {
    type: "Dedicated USSD",
    description: "Customers are charged to access code. Full control over your USSD service.",
    cost: 110000,
    upfrontFee: 40000,
    monthlyFee: 40000,
    features: ["Dedicated USSD code", "Full customization", "Customer charged for access", "24/7 support", "API integration"],
    popular: true,
  },
  {
    type: "Test-Bed Service",
    description: "Connection to test environment for 30 days. Perfect for development and testing.",
    cost: 32000,
    extensionFee: 32000,
    monthlyFee: null,
    features: ["30-day test environment", "Development access", "Testing capabilities", "Extension available", "Technical support"],
  },
  {
    type: "Shared USSD",
    description: "Customers are NOT charged to access code. Cost-effective solution for businesses.",
    setupCost: 15000,
    upfrontFee: null,
    monthlyFee: 8000,
    features: ["Shared USSD code", "No customer charges", "Cost-effective", "Monthly billing", "Standard support"],
  },
]

export default function USSDPricing() {
  return (
    <section className="py-20 bg-gray-50" id="ussd">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            USSD SERVICES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            USSD Service Options
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create interactive USSD services for your customers with our reliable platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ussdOptions.map((option, index) => (
            <motion.div
              key={option.type}
              className={`bg-white rounded-xl shadow-lg border overflow-hidden ${
                option.popular ? "border-teal-500 relative" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{option.type}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <div className="space-y-4 mb-6">
                  {option.cost && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Cost</span>
                      <span className="font-bold text-gray-800">KES {option.cost.toLocaleString()} +VAT</span>
                    </div>
                  )}
                  {option.setupCost && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Setup Cost</span>
                      <span className="font-bold text-gray-800">KES {option.setupCost.toLocaleString()} +VAT</span>
                    </div>
                  )}
                  {option.upfrontFee && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Up-front Fee</span>
                      <span className="font-bold text-gray-800">KES {option.upfrontFee.toLocaleString()} +VAT</span>
                    </div>
                  )}
                  {option.monthlyFee && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Monthly Fee</span>
                      <span className="font-bold text-gray-800">KES {option.monthlyFee.toLocaleString()} +VAT</span>
                    </div>
                  )}
                  {option.extensionFee && (
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Extension</span>
                      <span className="font-bold text-gray-800">KES {option.extensionFee.toLocaleString()} +VAT</span>
                    </div>
                  )}
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            USSD services require approval from the Communication Authority of Kenya and mobile network operators.
          </p>
          <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Contact us for custom USSD solutions
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
