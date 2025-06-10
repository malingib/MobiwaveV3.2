"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function ShortcodeTypes() {
  const shortcodeTypes = [
    {
      type: "Shared Shortcode",
      description:
        "Share a shortcode with other businesses, each with your own unique keyword. This is a cost-effective option for small businesses and startups.",
      features: [
        "Lower cost than dedicated shortcodes",
        "Quick setup time",
        "Unique keyword for your business",
        "Suitable for small to medium message volumes",
      ],
      color: "blue",
    },
    {
      type: "Dedicated Shortcode",
      description:
        "Get your own exclusive shortcode for your business communications. This provides maximum flexibility and brand recognition.",
      features: [
        "Exclusive use of the shortcode",
        "Multiple keywords available",
        "Enhanced brand recognition",
        "Suitable for high message volumes",
        "Complete control over the shortcode",
      ],
      color: "purple",
      popular: true,
    },
    {
      type: "Custom Keyword",
      description:
        "Add a custom keyword to a shared shortcode for your specific campaigns. This is ideal for businesses with limited SMS needs.",
      features: [
        "Most affordable option",
        "Quick implementation",
        "Suitable for specific campaigns",
        "Easy to set up and manage",
      ],
      color: "teal",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-purple-600 font-medium mb-4 tracking-wider uppercase bg-purple-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OPTIONS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Types of Shortcodes
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer different types of shortcodes to suit your business needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shortcodeTypes.map((type, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg border overflow-hidden ${
                type.popular ? "border-purple-500 relative" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {type.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.type}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className={`h-5 w-5 mr-2 shrink-0 ${
                          type.color === "blue"
                            ? "text-blue-500"
                            : type.color === "purple"
                              ? "text-purple-500"
                              : "text-teal-500"
                        }`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/contact"
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r ${
                    type.color === "blue"
                      ? "from-blue-600 to-blue-500"
                      : type.color === "purple"
                        ? "from-purple-600 to-purple-500"
                        : "from-teal-600 to-teal-500"
                  } hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
