"use client"

import type React from "react"
import Header from "./Header"
import HeroSection from "./HeroSection"
import TotalSummary from "./TotalSummary"
import ChartSection from "./ChartSection"
import DataTable from "./DataTable"
import { motion } from "framer-motion"

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <Header />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <TotalSummary />
        <ChartSection />
        <DataTable />
      </motion.div>
    </div>
  )
}

export default Dashboard
