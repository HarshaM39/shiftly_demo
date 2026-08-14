import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-violet-600 text-white p-2">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link to="/" className="text-2xl font-bold">
        RentEase
      </Link>
    <div className="flex gap-6">
      <Link to="/properties" className="hover:text-violet-200">
        Properties
      </Link>
      <Link
            to="/properties/add"
            className="hover:text-violet-200"
          >
            Add Property
          </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;