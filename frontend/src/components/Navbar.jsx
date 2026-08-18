import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          RentEase
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/properties"
            className="font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Properties
          </Link>

          <Link
            to="/properties/add"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Add Property
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;