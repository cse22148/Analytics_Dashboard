"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-11.25"
    />
  </svg>
)

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

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Keywords")
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [selectedRange, setSelectedRange] = React.useState({
    label: "Last 7 Days",
    dates: "Jul 5 - Jul 11, 2025",
  })
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const tabs = [
    "Accounts",
    "Apps",
    "Campaigns",
    "Ad groups",
    "Ad group within",
    "Keywords",
    "Search terms",
    "Negative keywords",
    "Ads",
    "CRM",
  ]

  const dateRangeOptions = [
    { label: "Today", dates: "Jul 11, 2025" },
    { label: "Yesterday", dates: "Jul 10, 2025" },
    { label: "Last 7 Days", dates: "Jul 5 - Jul 11, 2025" },
    { label: "Last 14 Days", dates: "Jun 28 - Jul 11, 2025" },
    { label: "Last 30 Days", dates: "Jun 12 - Jul 11, 2025" },
    { label: "Last 90 Days", dates: "Apr 13 - Jul 11, 2025" },
    { label: "This Month", dates: "Jul 1 - Jul 11, 2025" },
    { label: "Last Month", dates: "Jun 1 - Jun 30, 2025" },
    { label: "This Year", dates: "Jan 1 - Jul 11, 2025" },
  ]

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectRange = (option: (typeof dateRangeOptions)[0]) => {
    setSelectedRange(option)
    setIsDropdownOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="rounded-lg bg-white border border-gray-200 shadow-sm">
        {/* Top section with title and date */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">All ad accounts</h1>

          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:shadow-md w-full sm:w-auto justify-between transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{selectedRange.label}</span>
                <span className="text-gray-500 hidden sm:inline">{selectedRange.dates}</span>
              </div>
              <ChevronDownIcon
                className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-full sm:w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="py-1 max-h-80 overflow-y-auto">
                    {dateRangeOptions.map((option) => (
                      <motion.button
                        key={option.label}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => handleSelectRange(option)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                          selectedRange.label === option.label ? "bg-orange-50 text-orange-600" : "text-gray-700"
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{option.dates}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="px-4 sm:px-6 overflow-x-auto">
          <nav className="flex gap-4 sm:gap-6 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab(tab)}
                className={`py-3 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
