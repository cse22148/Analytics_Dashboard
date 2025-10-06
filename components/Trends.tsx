"use client"

import { useMemo } from "react"
import { useSelector } from "react-redux"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, Tooltip } from "recharts"
import { motion } from "framer-motion"
import type { RootState } from "../app/store"
import type { FC, SVGProps } from "react"

// Icons for the card header
const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
)
const LineChartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    <path d="M3,14L7,10L12,12L17,7L21,9" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const BarChartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
)
const ExpandIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </svg>
)
const ColumnsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M9 4.5v15m6-15v15m-10.5-15h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5z"
    />
  </svg>
)
const InfoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
)

const Trends: FC = () => {
  const trendsData = useSelector((state: RootState) => state.dashboard.trends)
  const yAxisTicks = [1000, 2000, 3000, 4000, 5000, 6000]

  const overlayData = useMemo(() => {
    const arr = Array.isArray(trendsData) ? trendsData : []
    if (arr.length < 2) return arr.map((d: any) => ({ ...d, overlayBlue: null }))
    const i1 = arr.length - 2
    const i2 = arr.length - 1
    const copy = arr.map((d: any, i: number) => ({ ...d, overlayBlue: i === i1 || i === i2 ? d.orange : null }))

    const v1 = Number(copy[i1].overlayBlue ?? 0)
    const v2 = Number(copy[i2].overlayBlue ?? 0)
    if (v2 <= v1) {
      // nudge last point up slightly to guarantee a rising segment, without changing the base orange series
      copy[i2].overlayBlue = v1 + Math.max(1, v1 * 0.02)
    }
    return copy
  }, [trendsData])

  const shiftDayLabel = (value: string) => {
    if (typeof value !== "string") return value as any
    const m = value.match(/(\d+)/)
    if (!m) return value
    const day = Number.parseInt(m[1], 10)
    return value.replace(m[1], String(day + 1))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Trends</h2>
      <motion.div
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          y: -4,
          transition: { duration: 0.2 },
        }}
      >
        <header className="flex items-center justify-between py-3 px-4">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 font-light">
              <PlusIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500"></div>
              <span className="text-sm font-medium text-gray-700">Spend</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <motion.button
              className="p-1 hover:text-gray-700 text-teal-500"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LineChartIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="p-1 hover:text-gray-700"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BarChartIcon className="w-5 h-5" />
            </motion.button>
            <div className="w-px h-4 bg-gray-200"></div>
            <motion.button
              className="p-1 hover:text-gray-700"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExpandIcon className="w-5 h-5" />
            </motion.button>
            <motion.button className="p-1 hover:text-gray-700" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <ColumnsIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </header>

        <div className="h-80 md:h-96 w-full pr-2 md:pr-4">
          <ResponsiveContainer>
            <LineChart data={trendsData} margin={{ top: 10, right: 10, left: 30, bottom: 5 }}>
              <defs>
                <linearGradient id="colorTrendsOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FDBA74" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#FDBA74" stopOpacity={0} />
                </linearGradient>
                {/* blue area gradient */}
                <linearGradient id="colorTrendsBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#BFDBFE" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#BFDBFE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#f3f4f6" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                stroke="#e5e7eb"
                dy={10}
                tickFormatter={shiftDayLabel}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={() => "$27.42%"}
                ticks={yAxisTicks}
                domain={[0, "dataMax + 500"]}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                dx={-10}
              />
              <Tooltip wrapperStyle={{ display: "none" }} />
              <Line
                type="monotone"
                dataKey="orange"
                stroke="#F97316"
                strokeWidth={3}
                dot={false}
                activeDot={false}
                isAnimationActive={true}
                animationDuration={400}
              />
              <Area type="monotone" dataKey="orange" stroke="none" fillOpacity={1} fill="url(#colorTrendsOrange)" />
              <Line
                type="monotone"
                data={overlayData as any}
                dataKey="overlayBlue"
                stroke="#22A3F6"
                strokeWidth={4}
                dot={false}
                activeDot={false}
                connectNulls={false}
                isAnimationActive={true}
                animationDuration={400}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <footer className="flex items-center justify-between py-3 px-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500"></div>
            <span className="text-sm font-medium text-gray-700">India</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <InfoIcon className="w-4 h-4" />
          </button>
        </footer>
      </motion.div>
    </div>
  )
}

export default Trends
