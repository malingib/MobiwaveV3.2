"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function USSDProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your business needs and objectives to understand how USSD can benefit your operations.",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team designs and develops a custom USSD solution tailored to your specific requirements.",
    },
    {
      number: "03",
      title: "Regulatory Approval",
      description:
        "We handle the approval process with the Communication Authority of Kenya and mobile network operators.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing is conducted before the service is deployed to ensure optimal performance.",
    },
    {
      number: "05",
      title: "Training & Support",
      description:
        "We provide training for your team and ongoing support to ensure smooth operation of your USSD service.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            IMPLEMENTATION PROCESS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We Implement Your USSD Service
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process ensures a smooth implementation of your USSD service from concept to deployment.
          </motion.p>
        </div>

        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[40px] top-0 bottom-0 w-1 bg-blue-100 hidden md:block"></div>

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
                  <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold relative z-10">
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
            <Image
              src="/images/services/ussd3.png"
              alt="USSD Implementation Process"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
