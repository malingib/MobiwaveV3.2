"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
  color: string
}

export default function ServiceHero({ title, description, image, color }: ServiceHeroProps) {
  const getGradient = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "from-blue-900 via-blue-800 to-blue-700",
      green: "from-teal-900 via-teal-800 to-teal-700",
      purple: "from-purple-900 via-purple-800 to-purple-700",
      orange: "from-orange-900 via-orange-800 to-orange-700",
      indigo: "from-indigo-900 via-indigo-800 to-indigo-700",
      red: "from-red-900 via-red-800 to-red-700",
      amber: "from-amber-900 via-amber-800 to-amber-700",
    }
    return colorMap[color] || "from-blue-900 via-blue-800 to-blue-700"
  }

  return (
    <section className={`relative bg-gradient-to-br ${getGradient(color)} text-white py-20 md:py-28`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-white rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">{description}</p>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={image || `/images/services/${title.toLowerCase().replace(/\s+/g, "-")}.png`}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
