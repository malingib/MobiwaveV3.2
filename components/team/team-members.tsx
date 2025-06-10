"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamMembers() {
  const executiveTeam = [
    {
      name: "Brighton Malingi",
      position: "Founder & CEO",
      bio: "Brighton is a telecommunications expert with extensive experience in the industry. He founded MobiWave Innovations with a vision to transform business communications in Kenya through innovative technology solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://ke.linkedin.com/in/brighton-malingi-a3374a333",
        twitter: "#",
        email: "brighton@mobiwave.co.ke",
      },
    },
    {
      name: "Graham M. Janji",
      position: "Director of IT & Operations",
      bio: "Graham oversees MobiWave's technology infrastructure and day-to-day operations. With his technical expertise and leadership, he ensures that our platforms are robust, secure, and deliver exceptional service to our clients.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://ke.linkedin.com/in/graham-m-janji-7a07231ab",
        twitter: "#",
        email: "graham@mobiwave.co.ke",
      },
    },
    {
      name: "Sarah Kamau",
      position: "Chief Marketing Officer",
      bio: "Sarah leads our marketing strategies, ensuring that MobiWave's innovative solutions reach businesses across Kenya. She has extensive experience in digital marketing and telecommunications.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@mobiwave.co.ke",
      },
    },
  ]

  const teamMembers = [
    {
      name: "Jane Muthoni",
      position: "Head of Customer Success",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Wanjala",
      position: "Senior Software Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Grace Akinyi",
      position: "Marketing Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Peter Mwangi",
      position: "Technical Support Lead",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lucy Njeri",
      position: "Business Development Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "John Kimani",
      position: "Financial Controller",
      image: "/placeholder.svg?height=300&width=300",
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
            LEADERSHIP
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Executive Team
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the leaders who drive our vision and strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {executiveTeam.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-blue-600 font-medium mb-4 tracking-wider uppercase bg-blue-50 inline-block px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR TEAM
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The People Behind Our Success
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our talented team works tirelessly to deliver exceptional service to our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
