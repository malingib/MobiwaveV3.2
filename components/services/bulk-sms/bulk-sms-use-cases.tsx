"use client"

import { motion } from "framer-motion"
import { Building, ShoppingBag, School, Heart, Bell, Calendar } from "lucide-react"
import Image from "next/image"

export default function BulkSMSUseCases() {
  const useCases = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Corporate Communications",
      description: "Keep employees informed about company updates, events, and emergency notifications.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Retail & E-commerce",
      description: "Send promotions, discounts, and order status updates to increase sales and customer satisfaction.",
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "Educational Institutions",
      description: "Notify parents and students about events, deadlines, and important announcements.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare Services",
      description: "Send appointment reminders, medication alerts, and health tips to patients.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Event Management",
      description: "Send event reminders, updates, and important information to attendees.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Reminders",
      description: "Reduce no-shows by sending automated appointment reminders to clients.",
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
            USE CASES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Who Can Benefit From Bulk SMS?
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our bulk SMS solutions are versatile and can be used across various industries and use cases.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
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
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/images/services/api.png"
                  alt="SMS API Integration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">API Integration Available</h3>
              <p className="text-gray-600 mb-6">
                For businesses that need to integrate SMS capabilities directly into their systems, we offer a robust
                API that allows for seamless integration with your existing software. Our API documentation is
                comprehensive and our support team is available to help with the integration process.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                Request API Documentation
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
