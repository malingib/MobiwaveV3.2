"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SurveyProcess() {
  const steps = [
    {
      number: "01",
      title: "Design Your Survey",
      description:
        "Create your survey questions using our intuitive survey builder. Choose from multiple question types and set up branching logic.",
    },
    {
      number: "02",
      title: "Select Your Audience",
      description:
        "Choose who will receive your survey. Upload your contact list or select from your existing contacts.",
    },
    {
      number: "03",
      title: "Schedule Delivery",
      description: "Set when your survey will be sent. Send immediately or schedule for a future date and time.",
    },
    {
      number: "04",
      title: "Collect Responses",
      description:
        "As recipients respond to your survey, their answers are automatically collected and processed in real-time.",
    },
    {
      number: "05",
      title: "Analyze Results",
      description:
        "View and analyze your survey results through our comprehensive dashboard. Export data for further analysis.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-amber-600 font-medium mb-4 tracking-wider uppercase bg-amber-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            HOW IT WORKS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The SMS Survey Process
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process makes it easy to create, deploy, and analyze SMS surveys.
          </motion.p>
        </div>

        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[40px] top-0 bottom-0 w-1 bg-amber-100 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="md:w-20 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold relative z-10">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 md:pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            className="relative h-[300px] w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image src="/images/services/survey2.jpg" alt="SMS Survey Process" fill className="object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
