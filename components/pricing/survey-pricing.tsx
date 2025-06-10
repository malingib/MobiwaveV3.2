"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const surveyPackages = [
  {
    name: "Default Package",
    setupFee: 25000,
    monthlyFee: 8000,
    responseLimit: "0-2000 responses",
    features: [
      "Setup fee: KES 25,000 + VAT",
      "Monthly fee: KES 8,000 + VAT",
      "0-2000 responses included",
      "SMS survey distribution",
      "Real-time analytics",
      "Data export capabilities",
      "24/7 support",
    ],
    requirements: [
      "Authorization letter for short code creation",
      "Letter should be signed and stamped",
      "Must be on company letterhead",
      "Setup payments required",
      "Two weeks waiting period for setup",
    ],
    popular: true,
    color: "teal",
  },
]

export default function SurveyPricing() {
  return (
    <section className="py-20 bg-white" id="survey">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-orange-600 font-medium mb-4 tracking-wider uppercase bg-orange-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SURVEY SERVICES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SMS Survey Solutions
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conduct comprehensive surveys via SMS with our reliable survey platform.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {surveyPackages.map((pkg, index) => (
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
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Setup Fee</span>
                      <span className="font-bold text-gray-800">KES {pkg.setupFee.toLocaleString()} +VAT</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Monthly Fee</span>
                      <span className="font-bold text-gray-800">KES {pkg.monthlyFee.toLocaleString()} +VAT</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Responses</span>
                      <span className="font-bold text-gray-800">{pkg.responseLimit}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.requirements.map((requirement, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full py-2 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All survey services require authorization and have a two-week setup period.
          </p>
          <Link href="/contact" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Contact us for custom survey solutions
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
