"use client"

import React from "react"
import { motion } from "framer-motion"
import { sidebarIcons, bottomSidebarIcons } from "../constants"

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState("gauge")

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-16 flex flex-col items-center bg-orange-500 text-white">
      <div className="relative flex flex-col items-center py-4 w-full">
        {/* Logo */}
        <div className="p-2 mb-4">
          <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center shadow-sm">
            <div className="h-6 w-6 bg-orange-500 rounded-sm" />
          </div>
        </div>

        {/* Icons */}
        <nav className="flex flex-col items-center space-y-2 w-full px-2">
          {sidebarIcons.map((item, i) => {
            const isThirdLast = i === sidebarIcons.length - 3
            return (
              <motion.button
                key={item.id}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(item.id)}
                title={item.label}
                className={`w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  active === item.id ? "bg-white/20" : "hover:bg-white/10"
                } ${isThirdLast ? "mt-1 md:mt-2" : ""}`}
                aria-pressed={active === item.id}
                aria-current={active === item.id ? "page" : undefined}
              >
                <div className="h-5 w-5">{item.icon}</div>
              </motion.button>
            )
          })}
        </nav>

        {/* Bottom icons */}
        <div className="flex-1" />
        <nav className="mb-4 flex flex-col items-center space-y-2 w-full px-2">
          {bottomSidebarIcons.map((item, i) => (
            <motion.button
              key={item.id}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              title={item.id}
              className="w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <div className="h-5 w-5">{item.icon}</div>
            </motion.button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
