import { useState } from "react"; // NEW: needed to track whether mobile menu is open
import { Link } from "react-router-dom";

function Navbar() {
  // NEW: controls whether the mobile dropdown menu is visible
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      {/* CHANGED: px-6 -> px-4 sm:px-6 so it doesn't hug the edges on small screens */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)} // NEW: closes menu if user taps logo
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-indigo-600 sm:text-2xl"
          // CHANGED: text-2xl -> text-xl sm:text-2xl (slightly smaller on mobile)
        >
          🏠
          <span>RentEase</span>
        </Link>

        {/* CHANGED: this whole block now has `hidden sm:flex` 
            -> it's completely hidden on mobile, only shows on tablet/desktop */}
        <div className="hidden items-center gap-3 sm:flex">

          <Link
            to="/properties"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            Properties
          </Link>

          <Link
            to="/properties/add"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
          >
            + Add Property
          </Link>

        </div>

        {/* NEW: hamburger icon button, only visible below sm breakpoint (sm:hidden) */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-indigo-50 sm:hidden"
        >
          {/* Swaps between X icon (open) and hamburger icon (closed) */}
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* NEW: mobile dropdown panel, only renders when menuOpen is true AND only below sm */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-2">

            <Link
              to="/properties"
              onClick={() => setMenuOpen(false)} // NEW: auto-closes menu after navigating
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              Properties
            </Link>

            <Link
              to="/properties/add"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              + Add Property
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;