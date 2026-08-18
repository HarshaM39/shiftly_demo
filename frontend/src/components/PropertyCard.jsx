import { useNavigate } from "react-router-dom";
import {useState} from "react"

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();
  const [showLogin,setShowLogin]=useState(false);

  const handleView=()=>{
    setShowLogin(true)
  //    const isLoggedIn = localStorage.getItem("isLoggedIn");

  // if (isLoggedIn === "true") {
  //   navigate(`/properties/${property.id}`);
  // } else {
  //   setShowLogin(true);
  // }
  // }
}

  return (
    <>
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600" />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-gray-800">
            {property.title}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              property.available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {property.available ? "Available" : "Occupied"}
          </span>
        </div>

        <p className="mt-2 text-gray-500">
          {property.location}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {property.description}
        </p>

        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.propertyType}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">
            ₹{property.rent.toLocaleString()}
            <span className="text-sm font-normal text-gray-500">
              /month
            </span>
          </p>

          <button
            onClick={handleView}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View
          </button>
        </div>

        <button
          onClick={() => onDelete(property.id)}
          className="mt-3 w-full rounded-md border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  
     {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-gray-800">
              Login Required
            </h2>

            <p className="mt-2 text-gray-500">
              Please login to view property details.
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => setShowLogin(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-md bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
              >
                Login
              </button>

            </div>
          </div>
        </div>
     )}
        </>
      )}
export default PropertyCard;
    