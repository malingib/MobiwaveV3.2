"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const shortcodeOptions = [
  {
    type: "Shared Short-Code",
    description: "Cost-effective solution for businesses sharing a shortcode with others.",
    costPerNetwork: 2500,
    monthlyRental: 15000,
    color: "blue",
    requirements: ["1 Week waiting period", "Initial payments", "Authorisation letter from organisation", "List of preferred short codes"],
  },
  {
    type: "Dedicated Short-Code",
    description: "Get your own exclusive shortcode for complete control over your communications.",
    costPerNetwork: 15000,
    monthlyRental: 15000,
    color: "teal",
    popular: true,
    requirements: ["1 Week waiting period", "Initial payments", "Authorisation letter from organisation", "List of preferred short codes"],
  },
]

export default function ShortcodePricing() {
  return (
    <section className="py-20 bg-white" id="shortcodes">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-purple-600 font-medium mb-4 tracking-wider uppercase bg-purple-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SHORTCODES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SMS Shortcode Options
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Engage with your customers using easy-to-remember shortcodes for two-way communication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shortcodeOptions.map((option, index) => (
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
                <p className="text-gray-600 mb-6 h-20">{option.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Cost per Network</span>
                    <span className="font-bold text-gray-800">KES {option.costPerNetwork.toLocaleString()} +VAT</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Monthly Rental</span>
                    <span className="font-bold text-gray-800">KES {option.monthlyRental.toLocaleString()} +VAT</span>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                <ul className="space-y-3 mb-6">
                  {option.requirements.map((requirement, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-2 px-4 bg-gradient-to-r ${
                    option.color === "blue"
                      ? "from-blue-600 to-blue-500"
                      : option.color === "teal"
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
          <p className="text-gray-600 mb-4">
            All shortcodes require approval from the Communication Authority of Kenya.
          </p>
          <Link href="/contact" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Contact us for more information
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
