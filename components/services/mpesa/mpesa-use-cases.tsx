"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Home, Briefcase, Truck, GraduationCap, Heart } from "lucide-react"

export default function MPesaUseCases() {
  const useCases = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "E-commerce",
      description: "Accept M-Pesa payments for online purchases and automate order processing.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "Collect rent payments and property deposits via M-Pesa.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Insurance",
      description: "Process premium payments and claims disbursements through M-Pesa.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics",
      description: "Enable pay-on-delivery options and driver payments via M-Pesa.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Collect school fees and disburse scholarships through M-Pesa.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Non-Profits",
      description: "Accept donations and distribute aid funds via M-Pesa.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-orange-600 font-medium mb-4 tracking-wider uppercase bg-orange-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            USE CASES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Industries Using M-Pesa Integration
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Businesses across various industries are leveraging our M-Pesa Integration API to streamline their payment
            processes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center mb-6 text-white">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Not sure if M-Pesa Integration is right for your business? Contact our team for a consultation.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            Schedule a Consultation
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
