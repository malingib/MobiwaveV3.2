"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "Jawabu Nexus LTD", logo: "/images/clients/JNL.png" },
  { name: "Mount Kenya University", logo: "/images/clients/MKU.png" },
  { name: "Liberty Life", logo: "/images/clients/LIB.png" },
  { name: "Chancery Wright", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Old Mutual", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Jawamu Group", logo: "/placeholder.svg?height=60&width=180" },
]

export default function ClientsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="text-teal-600 font-medium mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR CUSTOMERS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join Many Happy Clients
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative h-16 w-44"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
              whileHover={{
                scale: 2.5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 176px, 176px"
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
