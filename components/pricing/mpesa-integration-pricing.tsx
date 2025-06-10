"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const mpesaPackages = [
  {
    name: "Bronze Package",
    transactionRange: "Below Ksh. 3,000",
    rate: "5% of transaction",
    validity: "1 Month",
    invoice: "End of month",
    features: [
      "5% of transaction amount",
      "Transactions below Ksh. 3,000",
      "1 Month validity",
      "End of month invoicing",
      "24/7 support",
      "Nationwide access",
    ],
    popular: false,
    color: "blue",
  },
  {
    name: "Diamond Package",
    transactionRange: "Above Ksh. 3,000",
    rate: "Ksh. 50 per Transaction",
    validity: "1 Month",
    invoice: "End of month",
    features: [
      "Ksh. 50 per transaction",
      "Transactions above Ksh. 3,000",
      "1 Month validity",
      "End of month invoicing",
      "24/7 support",
      "Nationwide access",
    ],
    popular: true,
    color: "teal",
  },
]

export default function MpesaIntegrationPricing() {
  return (
    <section className="py-20 bg-gray-50" id="mpesa-integration">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-green-600 font-medium mb-4 tracking-wider uppercase bg-green-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            M-PESA INTEGRATION
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            M-Pesa Integration Packages
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Integrate M-Pesa payments into your business with our reliable and secure solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mpesaPackages.map((pkg, index) => (
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
                  <span className="text-3xl font-bold text-gray-900">{pkg.rate}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  <span className="font-bold text-lg">{pkg.transactionRange}</span>
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Validity</span>
                    <span className="font-bold text-gray-800">{pkg.validity}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Invoice</span>
                    <span className="font-bold text-gray-800">{pkg.invoice}</span>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-2 px-4 bg-gradient-to-r ${
                    pkg.color === "blue"
                      ? "from-blue-600 to-blue-500"
                      : "from-teal-600 to-teal-500"
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
            Transactions worth Ksh 1 to Ksh 3,000 will be charged at 5% of the amount per transaction. 
            Transactions worth 3,001 and above will be charged Ksh 50 per transaction. 
            The charge will be catered by the organization and invoiced at the end of the month.
          </p>
          <Link href="/contact" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Contact us for custom integration
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
