import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Bot, LogOut, User, Settings } from 'lucide-react'
import { navLinks } from '../../lib/data'
import { useAuth } from '../../lib/AuthContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Bolnee</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fadeIn">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 hover:bg-brand-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-20">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium text-brand-600 bg-brand-50 rounded-full capitalize">
                          {user.plan}
                        </span>
                      </div>
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 transition-colors">
                        <User className="w-4 h-4" />
                        Profile
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 transition-colors">
                        <Settings className="w-4 h-4" />
                        Dashboard
                      </button>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-brand-700 rounded-lg hover:from-brand-600 hover:to-brand-800 transition-all shadow-sm"
                >
                  Start Free
                </Link>
              </>
            )}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-600">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-brand-50"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 space-y-1 pb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 space-y-2 border-t border-gray-100">
              {user ? (
                <>
                  <div className="px-3 py-2 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false) }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-brand-700 rounded-lg hover:from-brand-600 hover:to-brand-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}