"use client"
import { motion } from "framer-motion"
import {
  MessageSquare,
  BookOpen,
  Clock,
  BarChart,
  GitBranch,
  Users,
  Zap,
  Calendar,
  Code,
  DollarSign,
  Shield,
  Globe,
  Phone,
  Mail,
  Hash,
  CreditCard,
  BarChart3,
  Gift,
} from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
  icon: string
}

interface ServiceFeaturesProps {
  title: string
  description: string
  features: ServiceFeature[]
}

export default function ServiceFeatures({ title, description, features }: ServiceFeaturesProps) {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      MessageSquare: <MessageSquare className="h-6 w-6" />,
      BookOpen: <BookOpen className="h-6 w-6" />,
      Clock: <Clock className="h-6 w-6" />,
      BarChart: <BarChart className="h-6 w-6" />,
      GitBranch: <GitBranch className="h-6 w-6" />,
      Users: <Users className="h-6 w-6" />,
      Zap: <Zap className="h-6 w-6" />,
      Calendar: <Calendar className="h-6 w-6" />,
      Code: <Code className="h-6 w-6" />,
      DollarSign: <DollarSign className="h-6 w-6" />,
      Shield: <Shield className="h-6 w-6" />,
      Globe: <Globe className="h-6 w-6" />,
      Phone: <Phone className="h-6 w-6" />,
      Mail: <Mail className="h-6 w-6" />,
      Hash: <Hash className="h-6 w-6" />,
      CreditCard: <CreditCard className="h-6 w-6" />,
      BarChart3: <BarChart3 className="h-6 w-6" />,
      Gift: <Gift className="h-6 w-6" />,
    }
    return iconMap[iconName] || <MessageSquare className="h-6 w-6" />
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
