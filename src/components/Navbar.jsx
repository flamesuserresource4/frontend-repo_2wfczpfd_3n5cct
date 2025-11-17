import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Baba Ali' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#FAF9F6]/80 border-b border-purple-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4A148C] to-[#800020] ring-2 ring-[#D4AF37]/60" />
            <div className="leading-tight">
              <div className="text-[#4A148C] font-semibold tracking-wide text-sm">SpellsToGetMyExBack</div>
              <div className="text-[#2D5016] text-xs">with Baba Ali</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-[#4A148C]' : 'text-[#36454F]/80 hover:text-[#4A148C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-[#D4AF37] text-[#4A148C] px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
