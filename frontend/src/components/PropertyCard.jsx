import { useNavigate } from "react-router-dom";

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Property Image Area */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-white/80">
            {property.propertyType}
          </span>
        </div>

        {/* Availability Badge */}
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

      {/* Property Details */}
      <div className="p-6">

        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900">
            {property.title}
          </h2>
        </div>

        {/* Location */}
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <span>📍</span>
          {property.location}
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
          {property.description}
        </p>

        {/* Property Information */}
        <div className="mt-5 flex flex-wrap gap-4 border-y border-gray-100 py-4 text-sm text-gray-600">
          <span>🛏 {property.bedrooms} Beds</span>
          <span>🛁 {property.bathrooms} Baths</span>
          <span>🏠 {property.propertyType}</span>
        </div>

        {/* Rent + View */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">
            ₹{property.rent.toLocaleString()}
            <span className="text-sm font-normal text-gray-500">
              /month
            </span>
          </p>

          <button
            onClick={() => navigate(`/properties/${property.id}`)}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View
          </button>
        </div>

        {/* Delete */}
        <button
          onClick={() => onDelete(property.id)}
          className="mt-4 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;