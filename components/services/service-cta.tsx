"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  color: string
}

export default function ServiceCTA({ title, description, buttonText, buttonLink, color }: ServiceCTAProps) {
  const getGradient = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "from-blue-600 to-blue-500",
      green: "from-teal-600 to-teal-500",
      purple: "from-purple-600 to-purple-500",
      orange: "from-orange-600 to-orange-500",
      indigo: "from-indigo-600 to-indigo-500",
      red: "from-red-600 to-red-500",
      amber: "from-amber-600 to-amber-500",
    }
    return colorMap[color] || "from-blue-600 to-blue-500"
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={buttonLink}
              className={`px-8 py-3 bg-gradient-to-r ${getGradient(
                color,
              )} text-white rounded-full font-medium hover:opacity-90 transition-colors shadow-lg inline-block`}
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
