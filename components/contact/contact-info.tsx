import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Call Us</h3>
            </div>
            <p className="text-gray-600 mb-2">Main Office:</p>
            <p className="text-gray-800 font-medium mb-4">+255 736 427 842</p>
            <p className="text-gray-600 mb-2">Support:</p>
            <p className="text-gray-800 font-medium">+255 799 565 035</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-2">General Inquiries:</p>
            <p className="text-gray-800 font-medium mb-4">info@mobiwave.co.ke</p>
            <p className="text-gray-600 mb-2">Support:</p>
            <p className="text-gray-800 font-medium">support@mobiwave.co.ke</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Visit Us</h3>
            </div>
            <p className="text-gray-600 mb-2">Office Address:</p>
            <p className="text-gray-800 font-medium">
              1st Floor, Titanic Building
              <br />
              Biashara Street, Kilifi, Kenya
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Business Hours</h3>
            </div>
            <p className="text-gray-600 mb-2">Monday - Friday:</p>
            <p className="text-gray-800 font-medium mb-2">8:00 AM - 5:00 PM</p>
            <p className="text-gray-600 mb-2">Saturday:</p>
            <p className="text-gray-800 font-medium mb-2">9:00 AM - 1:00 PM</p>
            <p className="text-gray-600 mb-2">Sunday:</p>
            <p className="text-gray-800 font-medium">Online Support</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Facebook className="h-6 w-6 text-primary" />
            </a>
            <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Twitter className="h-6 w-6 text-primary" />
            </a>
            <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Instagram className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
