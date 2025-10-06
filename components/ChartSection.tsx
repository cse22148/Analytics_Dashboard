"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

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

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
)

const ChartSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  const data = [
    { date: "Jul 5", spend: 650 },
    { date: "Jul 6", spend: 720 },
    { date: "Jul 7", spend: 580 },
    { date: "Jul 8", spend: 690 },
    { date: "Jul 9", spend: 610 },
    { date: "Jul 10", spend: 750 },
    { date: "Jul 11", spend: 680 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-6"
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <motion.button
          whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4"
        >
          <h3 className="text-base font-semibold text-gray-900">Chart</h3>
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
                <div className="flex items-center gap-2 mt-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgb(249, 250, 251)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 rounded-md transition-all"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 2px 8px -2px rgba(251, 146, 60, 0.3)" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-md cursor-pointer"
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-sm" />
                    <span className="text-sm font-medium text-gray-900">Spend</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-full overflow-x-auto"
                >
                  <div className="min-w-[500px]">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: "12px" }} />
                        <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="spend"
                          stroke="#f97316"
                          strokeWidth={2}
                          dot={{ fill: "#f97316", r: 4 }}
                          activeDot={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
                          animationDuration={1000}
                          animationEasing="ease-in-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ChartSection
