"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+254736427842" className="flex items-center hover:text-blue-100">
              <span>+254736 427 842</span>
            </a>
            <a href="mailto:info@mobiwave.co.ke" className="flex items-center hover:text-blue-100">
              <span>info@mobiwave.co.ke</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-3">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/mobiwave-logo.png"
              alt="MobiWave Innovations Logo"
              width={192}
              height={48}
              priority
              style={{
                width: "192px",
                height: "48px",
              }}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">
              Home
            </Link>

            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={cn(
                  "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out z-50",
                  servicesOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                )}
              >
                <div className="py-1">
                  <Link
                    href="/services/bulk-sms"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Bulk SMS
                  </Link>
                  <Link
                    href="/services/bulk-email"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Bulk Email
                  </Link>
                  <Link
                    href="/services/bulk-whatsapp"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Bulk WhatsApp
                  </Link>
                  <Link
                    href="/services/ussd-codes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    USSD Codes
                  </Link>
                  <Link
                    href="/services/shortcodes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Shortcodes
                  </Link>
                  <Link
                    href="/services/mpesa-integration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    M-Pesa Integration
                  </Link>
                  <Link
                    href="/services/sms-surveys"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    SMS Surveys
                  </Link>
                  <Link
                    href="/services/airtime-rewards"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Airtime Rewards
                  </Link>
                  <Link
                    href="/services/service-desk"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Service Desk
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-gray-800 hover:text-blue-600 font-medium">
              Pricing
            </Link>

            <div className="relative group">
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium"
              >
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={cn(
                  "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out z-50",
                  companyOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                )}
              >
                <div className="py-1">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>

          <div className="hidden lg:flex space-x-4">
            <a
              href="https://sms.mobiwave.co.ke/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              SMS Platform
            </a>
            <a
              href="https://rewards.mobiwave.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              Rewards Platform
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link
                  href="/services/bulk-sms"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bulk SMS
                </Link>
                <Link
                  href="/services/bulk-email"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bulk Email
                </Link>
                <Link
                  href="/services/bulk-whatsapp"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bulk WhatsApp
                </Link>
                <Link
                  href="/services/ussd-codes"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  USSD Codes
                </Link>
                <Link
                  href="/services/shortcodes"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shortcodes
                </Link>
                <Link
                  href="/services/mpesa-integration"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  M-Pesa Integration
                </Link>
                <Link
                  href="/services/sms-surveys"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SMS Surveys
                </Link>
                <Link
                  href="/services/airtime-rewards"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Airtime Rewards
                </Link>
                <Link
                  href="/services/service-desk"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Service Desk
                </Link>
              </div>
            )}
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <button
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              Company
              <ChevronDown className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-180" : ""}`} />
            </button>
            {companyOpen && (
              <div className="pl-4">
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            )}
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-4">
              <a
                href="https://sms.mobiwave.co.ke/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 mb-2 text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:from-teal-600 hover:to-blue-600 shadow-sm transition-all duration-300 hover:shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                SMS Platform
              </a>
              <a
                href="https://rewards.mobiwave.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:from-teal-600 hover:to-blue-600 shadow-sm transition-all duration-300 hover:shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rewards Platform
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
