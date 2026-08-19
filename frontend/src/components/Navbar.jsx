import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-cyan-500 font-semibold"
        : "text-slate-600 hover:text-cyan-500"
    }`;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">R</div>

          <div>
            <h1>RentEase</h1>
            <span>Find a place to belong</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/properties" className={navClass}>
            Properties
          </NavLink>

          <a href="/#locations" className="navbar-link">
            Locations
          </a>

          <a href="/#about" className="navbar-link">
            About
          </a>

          <a href="/#contact" className="navbar-link">
            Contact
          </a>

          <Link to="/properties/add" className="list-property-btn">
            + List a Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <NavLink
            to="/"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Properties
          </NavLink>

          <a href="/#locations" onClick={() => setMenuOpen(false)}>
            Locations
          </a>

          <a href="/#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <Link
            to="/properties/add"
            className="mobile-list-btn"
            onClick={() => setMenuOpen(false)}
          >
            + List a Property
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;