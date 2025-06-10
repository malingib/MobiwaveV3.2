"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users, Heart, Globe, Lightbulb } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and transparency.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "We continuously seek new ways to improve our services and create value for our clients.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Focus",
      description: "We put our customers at the center of everything we do, ensuring their success is our priority.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "We are passionate about technology and its potential to transform businesses.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Inclusivity",
      description: "We believe in creating solutions that are accessible to businesses of all sizes.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in all aspects of our operations and service delivery.",
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
            OUR VALUES
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Drives Us
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our core values shape our culture and guide our decisions as we work to deliver exceptional services to our
            clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center mb-6 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
