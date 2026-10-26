"use client"

import { useRef } from "react"
import { X } from "lucide-react"

// Generic trigger + native <dialog>: Esc, focus handling and top-layer come from the browser.
// Children can be server-rendered (e.g. <ProjectDetail />), so only this shell ships as JS.
export function DetailsDialog({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
        className="pill min-h-10 px-4 text-sm"
      >
        {label}
        <span className="sr-only">: {title}</span>
      </button>
      <dialog
        ref={ref}
        aria-label={title}
        className="details-dialog"
        // A click on the dialog element itself (not its content) is a click on the backdrop.
        onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      >
        {/* Zero-height sticky row keeps Close reachable while long content scrolls. */}
        <div className="sticky top-0 z-10 flex h-0 justify-end">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close"
            className="pill mr-4 mt-4 min-h-10 w-10 border-hairline bg-surface px-0"
          >
            <X aria-hidden className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6 md:p-8">{children}</div>
      </dialog>
    </>
  )
}
