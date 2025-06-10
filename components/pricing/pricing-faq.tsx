"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long are the SMS credits valid for?",
    answer:
      "All SMS credits are valid for 12 months from the date of purchase. Any unused credits after this period will expire.",
  },
  {
    question: "Can I upgrade my package mid-term?",
    answer:
      "Yes, you can upgrade your package at any time. The remaining credits from your current package will be transferred to your new package.",
  },
  {
    question: "Do you offer discounts for non-profit organizations?",
    answer:
      "Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team for more information.",
  },
  {
    question: "How do I get a personalized sender ID?",
    answer:
      "Personalized sender IDs are included in all our SMS packages. During the registration process, you can specify your preferred sender ID, which will be subject to approval by the Communication Authority of Kenya.",
  },
  {
    question: "What is the difference between shared and dedicated shortcodes?",
    answer:
      "A shared shortcode is used by multiple businesses, with each business assigned a unique keyword. A dedicated shortcode is exclusively used by your business, giving you full control over all keywords and responses.",
  },
  {
    question: "How long does it take to set up a USSD service?",
    answer:
      "The setup time for a USSD service typically ranges from 2-4 weeks, depending on the complexity of the service and the approval process from the Communication Authority of Kenya and mobile network operators.",
  },
  {
    question: "What is the Service Desk solution?",
    answer:
      "Our Service Desk solution is a comprehensive customer support platform that helps businesses manage customer inquiries, support tickets, and knowledge base. It includes features like multi-channel ticketing, reporting, and SLA management.",
  },
  {
    question: "How does the Airtime & Data Reward System work?",
    answer:
      "The Airtime & Data Reward System allows businesses to send airtime or data bundles to customers, employees, or survey participants as rewards or incentives. You can send rewards via our web portal or API, and recipients receive the airtime or data directly on their mobile phones.",
  },
  {
    question: "Are there any additional costs for the Airtime & Data Reward System?",
    answer:
      "Besides the setup fee and transaction fee, there are no additional costs. The transaction fee is calculated based on the value of airtime or data being sent. Volume discounts are available for high-volume users.",
  },
  {
    question: "Can I integrate your services with my existing systems?",
    answer:
      "Yes, all our services come with API access that allows for seamless integration with your existing systems. We provide comprehensive documentation and support to help you with the integration process. Our technical team can also provide custom integration solutions for complex requirements.",
  },
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our pricing and services.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
