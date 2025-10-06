"use client"

import type React from "react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="relative min-h-screen bg-gray-50 text-gray-800">
        {/* Sidebar is fixed; main gets left padding to compensate */}
        <Sidebar />
        <main className="pl-16 md:pl-16 flex-1 flex flex-col overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </Provider>
  )
}

export default App
