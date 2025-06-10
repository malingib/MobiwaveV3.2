"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Vote, Gift, MessageCircle, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function ShortcodeUseCases() {
  const useCases = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Marketing Campaigns",
      description: "Run SMS marketing campaigns with call-to-actions using your shortcode.",
    },
    {
      icon: <Vote className="h-6 w-6" />,
      title: "Polls & Surveys",
      description: "Collect customer feedback and conduct polls via SMS.",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Promotions & Contests",
      description: "Run competitions and promotional campaigns with SMS entries.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Customer Support",
      description: "Provide customer service and support through SMS.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Donations",
      description: "Collect donations for charitable causes via SMS.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Membership Services",
      description: "Manage memberships and subscriptions through SMS.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-purple-600 font-medium mb-4 tracking-wider uppercase bg-purple-50 inline-block px-4 py-1 rounded-full"
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
            How Businesses Use Shortcodes
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the various ways businesses across different industries leverage SMS shortcodes to engage with
            their customers.
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
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/images/services/shortcode1.png"
                  alt="Shortcode Approval Process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Regulatory Approval Process</h3>
              <p className="text-gray-600 mb-6">
                All shortcodes require approval from the Communication Authority of Kenya before they can be activated.
                Our team handles the entire approval process on your behalf, ensuring compliance with all regulatory
                requirements. We work closely with mobile network operators to ensure a smooth and efficient setup of
                your shortcode.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                Learn About the Process
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
