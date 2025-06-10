"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const airtimeRewardPlans = [
  {
    name: "Starter",
    setupFee: 5000,
    transactionFee: "5%",
    description: "Perfect for small businesses and startups",
    features: ["Airtime rewards", "Basic reporting", "API access", "Email support", "Up to 1,000 rewards/month"],
    popular: false,
    color: "blue",
  },
  {
    name: "Business",
    setupFee: 10000,
    transactionFee: "3%",
    description: "Ideal for medium-sized businesses with moderate reward volume",
    features: [
      "Airtime & data rewards",
      "Advanced reporting",
      "API access",
      "Priority support",
      "Custom branding",
      "Up to 10,000 rewards/month",
    ],
    popular: true,
    color: "teal",
  },
  {
    name: "Enterprise",
    setupFee: 25000,
    transactionFee: "2%",
    description: "Comprehensive solution for large organizations with high reward volume",
    features: [
      "Airtime, data & bundle rewards",
      "Advanced analytics",
      "API access",
      "24/7 priority support",
      "Custom branding",
      "Custom integrations",
      "Unlimited rewards/month",
      "Dedicated account manager",
    ],
    popular: false,
    color: "purple",
  },
]

export default function AirtimeRewardPricing() {
  return (
    <section className="py-20 bg-gray-50" id="airtime-rewards">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-teal-600 font-medium mb-4 tracking-wider uppercase bg-teal-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AIRTIME & DATA REWARDS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Airtime & Data Reward System
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reward your customers, employees, or survey participants with airtime and data bundles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {airtimeRewardPlans.map((plan, index) => (
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
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Setup Fee</span>
                    <span className="font-bold text-gray-800">KES {plan.setupFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Transaction Fee</span>
                    <span className="font-bold text-gray-800">{plan.transactionFee}</span>
                  </div>
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

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Transaction fees are calculated based on the value of airtime or data being sent.
          </p>
          <Link href="/contact" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
            Contact us for volume discounts
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
