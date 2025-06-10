"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

export default function SurveyBenefits() {
  const benefits = [
    "Higher response rates compared to email or web surveys",
    "Reach respondents without smartphones or internet access",
    "Immediate feedback collection",
    "Cost-effective research method",
    "Simple and convenient for respondents",
    "No app downloads or registrations required",
    "Works across all mobile networks",
    "Automated data collection and analysis",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/services/survey.png"
                alt="SMS Survey Benefits"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-amber-600 font-medium mb-4 tracking-wider uppercase bg-amber-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              WHY CHOOSE SMS SURVEYS
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Benefits of SMS Surveys</h2>
            <p className="text-gray-600 mb-8">
              SMS surveys offer unique advantages over other feedback collection methods. They provide a direct and
              immediate way to reach your audience, resulting in higher response rates and more actionable insights.
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
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
