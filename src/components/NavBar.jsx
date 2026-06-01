import { useState } from 'react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="relative w-full px-2 sm:px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="font-main text-lg font-semibold text-white">DINUJA</a>
          </div>

          {/* Desktop links - centered */}
          <nav className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-6 rounded-full border border-white/20 bg-white/6 px-6 py-3 text-xs text-white backdrop-blur-xl shadow-lg shadow-black/20">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white/50 transition-colors">{l.label.toUpperCase()}</a>
              ))}
            </div>
          </nav>

          {/* Mobile: hamburger */}
          <div className="sm:hidden">
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="sm:hidden mt-3">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
              <ul className="flex flex-col gap-3">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-white hover:text-white/50 rounded-md transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
