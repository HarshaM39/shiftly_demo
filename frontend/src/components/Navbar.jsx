import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          RentEase
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/properties"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Properties
          </Link>

          <Link
            to="/properties/add"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            + Add Property
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;