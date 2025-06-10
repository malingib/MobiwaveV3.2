"use client"

import { motion } from "framer-motion"
import { CreditCard, ShoppingBag, School, Building, Users, Phone } from "lucide-react"

export default function USSDUseCases() {
  const useCases = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Banking Services",
      description:
        "Allow customers to check balances, transfer funds, pay bills, and access other banking services via USSD.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Retail & E-commerce",
      description: "Enable product inquiries, order tracking, and customer feedback through USSD menus.",
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "Educational Institutions",
      description: "Provide exam results, fee payment options, and registration services via USSD.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Insurance Companies",
      description: "Offer policy information, premium payments, and claims processing through USSD.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Government Services",
      description: "Deliver public services, information, and citizen feedback mechanisms via USSD.",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telecommunications",
      description: "Provide airtime top-up, data bundle purchases, and account management via USSD.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
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
            Industries That Benefit From USSD
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            USSD services are versatile and can be implemented across various industries to improve customer engagement
            and service delivery.
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center mb-6 text-white">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
