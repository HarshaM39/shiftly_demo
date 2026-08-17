import { useNavigate } from "react-router-dom";

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Property image area */}
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
        <span className="text-5xl">🏠</span>

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            property.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {property.available ? "Available" : "Occupied"}
        </span>
      </div>

      <div className="p-5">

        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900">
            {property.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            📍 {property.location}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {property.description}
        </p>

        {/* Property details */}
        <div className="mt-5 grid grid-cols-3 rounded-lg bg-gray-50 p-3 text-center">

          <div>
            <p className="text-sm font-semibold text-gray-800">
              {property.bedrooms}
            </p>
            <p className="text-xs text-gray-500">
              Beds
            </p>
          </div>

          <div className="border-x border-gray-200">
            <p className="text-sm font-semibold text-gray-800">
              {property.bathrooms}
            </p>
            <p className="text-xs text-gray-500">
              Baths
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              {property.propertyType}
            </p>
            <p className="text-xs text-gray-500">
              Type
            </p>
          </div>

        </div>

        {/* Price + View */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xl font-bold text-blue-600">
              ₹{property.rent.toLocaleString()}
            </p>

            <p className="text-xs text-gray-500">
              per month
            </p>
          </div>

          <button
            onClick={() => navigate(`/properties/${property.id}`)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View Details
          </button>

        </div>

        {/* Delete */}
        <button
          onClick={() => onDelete(property.id)}
          className="mt-3 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Delete Property
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;