import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactMap() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Map placeholder - would be replaced with actual map integration */}
              <div className="lg:col-span-2 bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Map Integration</h3>
                  <p className="text-gray-600 mb-4">
                    This would be replaced with an actual Google Maps or other map integration.
                  </p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>

              {/* Contact details */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">MobiWave Innovations</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Address</h4>
                      <p className="text-gray-600 mt-1">
                        MobiWave Innovations
                        <br />
                        Dar es Salaam, Tanzania
                        <br />
                        East Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="text-gray-600 mt-1">+254736 427 842</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-gray-600 mt-1">info@mobiwave.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
