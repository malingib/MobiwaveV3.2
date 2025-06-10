"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    let start = 0
    let timeoutId: NodeJS.Timeout

    if (inView) {
      const step = Math.floor(duration / end)

      const updateCount = () => {
        start += 1
        setCount(start)

        if (start < end) {
          timeoutId = setTimeout(updateCount, step)
        }
      }

      updateCount()
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-blue-600">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export default function AboutStats() {
  const stats = [
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "M+", label: "SMS Delivered Monthly" },
    { value: 99, suffix: "%", label: "Delivery Success Rate" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We take pride in our achievements and the trust our clients place in us.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
              <p className="text-blue-100 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
