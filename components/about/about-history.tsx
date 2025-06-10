"use client"

import { motion } from "framer-motion"

export default function AboutHistory() {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "MobiWave Innovations was established with a vision to transform business communications in Kenya.",
    },
    {
      year: "2016",
      title: "Launch of Bulk SMS Service",
      description: "Introduced our flagship bulk SMS service, quickly gaining traction in the Kenyan market.",
    },
    {
      year: "2018",
      title: "Expansion of Services",
      description: "Added bulk email, USSD, and shortcode services to our growing portfolio of solutions.",
    },
    {
      year: "2020",
      title: "M-Pesa Integration",
      description: "Launched our M-Pesa integration API, enabling seamless mobile money transactions for businesses.",
    },
    {
      year: "2022",
      title: "Service Desk Solution",
      description: "Introduced our comprehensive Service Desk solution for enhanced customer support.",
    },
    {
      year: "2023",
      title: "Airtime & Data Reward System",
      description: "Launched our innovative Airtime & Data Reward System for businesses.",
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
            OUR JOURNEY
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our History
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From our humble beginnings to becoming a leading telecommunications provider in Kenya, our journey has been
            marked by innovation and growth.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-1"
                  } mb-4 md:mb-0`}
                >
                  <div
                    className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
