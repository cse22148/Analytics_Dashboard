"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"

// Icons for the card header
const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.75 9h16.5m-16.5 6h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 015.657 15.343A9 9 0 0112 3z" />
  </svg>
)

const BarChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
)

const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </svg>
)

const ColumnsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 3.75H18m-2.25 0v16.5m0-16.5H6.375m0 0H3.75m2.625 0v16.5m0-16.5h3m-3 0h.008v.008H9m-2.625 0H9m-2.625 0H6.375"
    />
  </svg>
)

// Icons for the map
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)
const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
)

// Icon for the legend
const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
)

const Storefronts: React.FC = () => {
  const [tooltip, setTooltip] = useState({ visible: false, content: "", x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const svgContainerRef = useRef<HTMLDivElement>(null)

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(0.6, Math.min(prev + delta, 8)))
  }

  const handleCountryHover = (e: React.MouseEvent<SVGPathElement>) => {
    const target = e.target as SVGPathElement
    const name = target.getAttribute("data-name")
    if (name) {
      let content = name
      if (name === "India") {
        content = `${name}: $6.1k`
      }
      setTooltip({
        visible: true,
        content,
        x: (e as any).clientX,
        y: (e as any).clientY,
      })
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Storefronts</h2>
      <motion.div
        id="storefronts-section"
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
        <header className="flex items-center justify-between py-3 px-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">Spend</h3>
          <div className="flex items-center gap-2 text-gray-500">
            <motion.button
              className="p-1.5 rounded-md hover:bg-gray-50 text-teal-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <GlobeIcon />
            </motion.button>
            <motion.button
              className="p-1.5 rounded-md hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BarChartIcon />
            </motion.button>
            <span className="w-px h-4 bg-gray-200 mx-1" />
            <motion.button
              className="p-1.5 rounded-md hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExpandIcon />
            </motion.button>
            <motion.button
              className="p-1.5 rounded-md hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ColumnsIcon />
            </motion.button>
          </div>
        </header>
        <div
          className="bg-white rounded-b-lg relative"
          ref={svgContainerRef}
          onMouseMove={(e) => {
            if (tooltip.visible) {
              setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
            }
          }}
          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
        >
          {tooltip.visible && (
            <div
              className="absolute z-10 p-2 text-xs bg-gray-900 text-white rounded-md shadow-lg pointer-events-none"
              style={{
                top: tooltip.y - (svgContainerRef.current?.getBoundingClientRect().top ?? 0) + 14,
                left: tooltip.x - (svgContainerRef.current?.getBoundingClientRect().left ?? 0) + 14,
              }}
            >
              {tooltip.content}
            </div>
          )}
          <div className="relative w-full h-80 md:h-96 overflow-hidden" style={{ backgroundColor: "#FFF7ED" }}>
            <ComposableMap
              width={1000}
              height={470}
              className="w-full h-full"
              style={{ width: "100%", height: "100%" }}
              projectionConfig={{ scale: 150 }}
            >
              <ZoomableGroup zoom={zoom} center={[10, 20]} minZoom={0.8} maxZoom={6}>
                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isIndia = Number((geo as any).id) === 356

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isIndia ? "#F97316" : "#F3E7D6"} // warm neutral land, brand accent for India
                          stroke="#FFFFFF"
                          strokeWidth={0.6}
                          style={{
                            default: { outline: "none", vectorEffect: "non-scaling-stroke" as any },
                            hover: {
                              fill: isIndia ? "#EA580C" : "#EDE2D3",
                              outline: "none",
                              vectorEffect: "non-scaling-stroke" as any,
                            },
                            pressed: { outline: "none", vectorEffect: "non-scaling-stroke" as any },
                          }}
                          onMouseEnter={(e) => {
                            const content = isIndia ? "India: $6.1k" : ""
                            setTooltip({
                              visible: Boolean(content),
                              content,
                              x: (e as any).clientX,
                              y: (e as any).clientY,
                            })
                          }}
                          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
                          tabIndex={-1}
                        />
                      )
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-4 flex flex-col space-y-1">
              <button
                onClick={() => handleZoom(0.2)}
                className="bg-white/95 backdrop-blur p-1.5 rounded-sm shadow border text-gray-700 hover:bg-gray-50"
                aria-label="Zoom in"
              >
                <PlusIcon />
              </button>
              <button
                onClick={() => handleZoom(-0.2)}
                className="bg-white/95 backdrop-blur p-1.5 rounded-sm shadow border text-gray-700 hover:bg-gray-50"
                aria-label="Zoom out"
              >
                <MinusIcon />
              </button>
            </div>
          </div>
          {/* Legend */}
          <footer className="flex items-center justify-between py-3 px-4 border-t border-gray-200">
            <div className="flex items-center gap-3 w-full">
              <span className="text-xs text-gray-600">$6.11k</span>
              <div className="h-3 flex-1 rounded-sm bg-orange-500" aria-hidden="true" />
              <span className="text-xs text-gray-600">$6.11K</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <InfoIcon className="w-4 h-4" />
            </button>
          </footer>
        </div>
      </motion.div>
    </div>
  )
}

export default Storefronts
