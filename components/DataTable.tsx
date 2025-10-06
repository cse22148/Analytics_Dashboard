"use client"

import type React from "react"
import { motion } from "framer-motion"

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

const DataTable: React.FC = () => {
  const keywords = [
    {
      status: "active",
      keyword: "[yeni]",
      cpt: "$1.21",
      type: "Running",
      protection: "Low",
      industryStatus: "Running",
      adGroup: "Competition",
    },
    {
      status: "active",
      keyword: "jello (first new)",
      cpt: "$1.21",
      type: "Running",
      protection: "Low",
      industryStatus: "Running",
      adGroup: "Competition",
    },
    {
      status: "active",
      keyword: "[baba boya]",
      cpt: "$1.21",
      type: "Running",
      protection: "Low",
      industryStatus: "Running",
      adGroup: "Competition",
    },
    {
      status: "active",
      keyword: "[baba shrimp]",
      cpt: "$1.21",
      type: "Running",
      protection: "Low",
      industryStatus: "Running",
      adGroup: "Competition",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Action bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300 transition-all"
            >
              <span className="w-4 h-4 bg-orange-500 rounded-sm" />
              Actions
              <ChevronDownIcon className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all"
            >
              Rules
              <ChevronDownIcon className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all"
            >
              Quick Edit
              <ChevronDownIcon className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all"
            >
              Labels
              <ChevronDownIcon className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all"
            >
              Filters
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300 transition-all"
            >
              <span className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <span className="bg-gray-400 rounded-sm" />
                <span className="bg-gray-400 rounded-sm" />
                <span className="bg-gray-400 rounded-sm" />
                <span className="bg-gray-400 rounded-sm" />
              </span>
              Columns
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all"
            >
              ↓
            </motion.button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 border-b border-gray-200">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-md transition-all"
          >
            <span className="text-gray-500">≡</span>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 rounded-md"
          >
            <span className="text-sm text-gray-700">Industry status: Running</span>
            <button className="text-gray-500 hover:text-gray-700">×</button>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-white rounded-md transition-all"
          >
            Add Filter
            <PlusIcon className="w-4 h-4" />
          </motion.button>
          <div className="flex-1" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Save
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-sm text-gray-600 hover:text-gray-700 transition-colors"
          >
            Clear
          </motion.button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPT ad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Protection
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ad group name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keywords.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "rgb(249, 250, 251)", x: 4 }}
                  className="cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4">
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-orange-500 rounded-full" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.keyword}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.cpt}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                      <motion.span whileHover={{ scale: 1.3 }} className="w-2 h-2 bg-orange-500 rounded-full" />
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-50 text-red-700 border border-red-200"
                    >
                      {item.protection}
                    </motion.span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                      <motion.span whileHover={{ scale: 1.3 }} className="w-2 h-2 bg-orange-500 rounded-full" />
                      {item.industryStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.adGroup}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 text-sm text-gray-600">
          Selected 0 of 4 · <span className="text-blue-600 cursor-pointer hover:underline">Remove all 75 keywords</span>
        </div>
      </div>
    </motion.div>
  )
}

export default DataTable
