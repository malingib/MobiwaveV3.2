"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function BulkEmailBenefits() {
  const benefits = [
    "Higher engagement rates with personalized content",
    "Cost-effective compared to traditional marketing",
    "Detailed analytics and reporting",
    "Automated campaigns and follow-ups",
    "Segmentation for targeted messaging",
    "Professional templates for quick deployment",
    "A/B testing to optimize performance",
    "Compliance with email regulations",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-teal-600 font-medium mb-4 tracking-wider uppercase bg-teal-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              WHY CHOOSE US
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Benefits Of Bulk Email</h2>
            <p className="text-gray-600 mb-8">
              Email marketing remains one of the most effective ways to reach your audience. Our bulk email service
              provides numerous advantages to help you achieve your marketing goals.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/services/bulkemail.png"
                alt="Bulk Email Benefits"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
