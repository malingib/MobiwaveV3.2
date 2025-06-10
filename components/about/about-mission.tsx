"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              OUR MISSION
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Bridging Communication Gaps with Innovative Solutions
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At MobiWave Innovations, our mission is to provide businesses with cutting-edge communication tools that
              enhance customer engagement, streamline operations, and drive growth. We believe that effective
              communication is the foundation of successful businesses.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are committed to delivering reliable, affordable, and innovative telecommunications solutions that meet
              the evolving needs of businesses across Kenya and beyond. Our goal is to empower organizations of all
              sizes with the tools they need to connect with their audiences effectively.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="MobiWave Mission" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
