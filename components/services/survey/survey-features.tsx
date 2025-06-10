"use client"

import { motion } from "framer-motion"
import { MessageSquare, BarChart, Clock, Users, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function SurveyFeatures() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Interactive Surveys",
      description: "Create engaging surveys with multiple question types and branching logic.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Monitor responses and analyze results in real-time with our comprehensive dashboard.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Scheduled Surveys",
      description: "Plan and schedule surveys to be sent at the optimal time for your audience.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Audience Segmentation",
      description: "Target specific audience segments for more relevant and actionable insights.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Wide Reach",
      description: "Reach respondents across all mobile networks, even those without smartphones or internet access.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security",
      description: "Ensure the security and privacy of your survey data with our robust security measures.",
    },
  ]

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
              className="text-amber-600 font-medium mb-4 tracking-wider uppercase bg-amber-50 inline-block px-4 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              FEATURES
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">SMS Survey Platform Features</h2>
            <p className="text-gray-600 mb-8">
              Our SMS Survey platform provides a powerful way to collect feedback from your customers, employees, or
              target audience. With our easy-to-use tools, you can create, deploy, and analyze surveys via SMS, reaching
              respondents on any mobile phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 text-amber-600 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/services/survey3.png"
                alt="SMS Survey Features"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {features.slice(4).map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 4) }}
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 text-amber-600 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
