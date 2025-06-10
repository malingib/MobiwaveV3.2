"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  color: string
  link: string
}

export default function ServiceCard({ title, description, icon, features, color, link }: ServiceCardProps) {
  const getColorClass = (color: string, type: "bg" | "text" | "border" | "hover") => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        hover: "hover:bg-blue-700",
      },
      green: {
        bg: "bg-teal-500",
        text: "text-teal-600",
        border: "border-teal-500",
        hover: "hover:bg-teal-600",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        hover: "hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        border: "border-orange-500",
        hover: "hover:bg-orange-600",
      },
      indigo: {
        bg: "bg-indigo-500",
        text: "text-indigo-600",
        border: "border-indigo-500",
        hover: "hover:bg-indigo-600",
      },
      red: {
        bg: "bg-red-500",
        text: "text-red-600",
        border: "border-red-500",
        hover: "hover:bg-red-600",
      },
      amber: {
        bg: "bg-amber-500",
        text: "text-amber-600",
        border: "border-amber-500",
        hover: "hover:bg-amber-600",
      },
    }
    return colorMap[color][type]
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`${getColorClass(color, "bg")} p-6 flex items-center`}>
        <div className="bg-white/20 p-3 rounded-lg mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>

        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`h-5 w-5 mr-2 mt-0.5 ${getColorClass(color, "text")}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={link}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-white ${getColorClass(
            color,
            "bg",
          )} ${getColorClass(color, "hover")} transition-all duration-300 shadow-md hover:shadow-lg`}
        >
          Learn More
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
