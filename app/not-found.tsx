import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-4 text-center">
      <div>
        <p className="label">Error 404</p>
        <h1 className="display mt-4 text-[clamp(88px,20vw,200px)]">Lost</h1>
        <p className="mt-4 text-lg">This page doesn&apos;t exist.</p>
        <Link href="/" className="pill mt-8">
          Back home
        </Link>
      </div>
    </main>
  )
}
