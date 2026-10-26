import { nav } from "@/content/site"

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-1 rounded-full bg-capsule p-1.5 pl-4 text-on-capsule sm:gap-2 sm:pl-5"
      >
        <a href="#top" className="display mr-1 text-[22px] !text-on-capsule sm:mr-3" aria-label="Hafidz Fadillah, back to top">
          HF
        </a>
        <ul className="flex items-center">
          {nav.map((item) => (
            // The Contact text link is redundant on small screens: the green button covers it.
            <li key={item.href} className={item.href === "#contact" ? "hidden sm:block" : undefined}>
              <a
                href={item.href}
                className="block rounded-full px-2 py-2 text-[13px] font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 sm:px-3 sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="pill pill-accent ml-1 min-h-9 px-4 text-sm">
          Contact
        </a>
      </nav>
    </header>
  )
}
