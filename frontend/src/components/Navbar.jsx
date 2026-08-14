import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          RentEase
        </Link>

        <div className="flex gap-6">
          <Link
            to="/properties"
            className="hover:text-blue-200"
          >
            Properties
          </Link>

          <Link
            to="/properties/add"
            className="hover:text-blue-200"
          >
            Add Property
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;