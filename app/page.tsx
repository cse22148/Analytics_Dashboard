import { Suspense } from "react"
import App from "../App"

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <App />
    </Suspense>
  )
}
