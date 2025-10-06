"use client"

import type React from "react"
import { motion } from "framer-motion"

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>
)

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left side - Text content */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Evaluate performance of your ads on all levels</h2>
          <p className="text-gray-600 mb-6">
            Ads Manager is your centralized full-funnel view on Apple Search Ads data and post-install metrics to take
            informed actions & accelerate ROAS.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 cursor-pointer"
          >
            <LightbulbIcon className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <span className="text-sm text-gray-700">How to read the metrics</span>
            <button className="ml-auto text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
              Go to
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - Video thumbnail */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(251, 146, 60, 0.4)" }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 to-orange-600/50" />
          <div className="relative h-full min-h-[280px] flex flex-col items-center justify-center p-8">
            <div className="text-white text-center mb-6">
              <p className="text-sm font-medium mb-2">A Video Guide</p>
              <h3 className="text-2xl font-bold">AppStays and apple and</h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0.4)", "0 0 0 20px rgba(255, 255, 255, 0)"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <PlayIcon className="w-8 h-8 text-orange-500 ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroSection
