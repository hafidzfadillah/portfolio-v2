import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <NotFoundActions />
        </Suspense>
      </div>
    </div>
  )
}

// Separate component that uses useSearchParams
function NotFoundActions() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-full">
          <Home className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
    </div>
  )
}
