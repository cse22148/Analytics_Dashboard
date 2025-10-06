"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

const TotalSummary: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  const metrics = [
    { label: "Conversions (ROAS)", value: "0.00%", change: "+0.00%", changeColor: "text-green-600" },
    { label: "Conversion (ROAS)", value: "$6,108.89", change: "+27.42%", changeColor: "text-green-600" },
    { label: "Conversion (ROAS)", value: "0.00%", change: "0%", changeColor: "text-gray-500" },
    { label: "Conversions (ROAS)", value: "$2,101", change: "0%", changeColor: "text-orange-500" },
    { label: "Conversions (ROAS)", value: "$2.91", change: "0%", changeColor: "text-orange-500" },
    { label: "Conversions (ROAS)", value: "0", change: "0%", changeColor: "text-gray-500" },
    { label: "Conversions (ROAS)", value: "$0.00", change: "0%", changeColor: "text-gray-500" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-6"
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <motion.button
          whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4"
        >
          <h3 className="text-base font-semibold text-gray-900">Total Summary</h3>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -4, boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)" }}
                      className="space-y-1 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <p className="text-xs text-gray-500">{metric.label}</p>
                      <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                      <p className={`text-xs font-medium ${metric.changeColor}`}>{metric.change}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default TotalSummary
