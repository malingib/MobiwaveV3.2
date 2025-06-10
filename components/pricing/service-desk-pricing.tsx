"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const serviceDeskPlans = [
  {
    name: "Full Package",
    pricePerUser: 6000,
    description: "Comprehensive customer support solution with one month free trial",
    features: [
      "KES 6,000 per user per month (+VAT)",
      "One Month Free Trial",
      "Multi-channel ticketing",
      "Knowledge base",
      "Advanced reporting",
      "SLA management",
      "24/7 support",
      "Custom branding",
      "API access",
      "Dedicated account manager",
    ],
    popular: true,
    color: "teal",
  },
]

export default function ServiceDeskPricing() {
  return (
    <section className="py-20 bg-white" id="service-desk">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SERVICE DESK
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Customer Support Solutions
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Streamline your customer support with our comprehensive service desk solutions.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
          {serviceDeskPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg border overflow-hidden ${
                plan.popular ? "border-teal-500 relative" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">KES {plan.pricePerUser.toLocaleString()}</span>
                  <span className="text-gray-500 ml-1">/user/month</span>
                </div>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-2 px-4 bg-gradient-to-r ${
                    plan.color === "blue"
                      ? "from-blue-600 to-blue-500"
                      : plan.color === "teal"
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
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All service desk plans include a 14-day free trial.</p>
          <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Contact us for custom enterprise solutions
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
