import { useNavigate } from "react-router-dom";

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden shadow-md rounded-xl transition hover:shadow-lg  max-w-90 bg-amber-50 dark:bg-charcoal-500 ">
      <div className="h-70 max-w-90 bg-linear-to-r from-amber-300 to-amber-400 rounded-xl dark:bg-linear-to-r dark:from-onyx-300 dark:to-onyx-400 " />

      <div
        className="p-5 flex-col justify
      "
      >
        <div className="flex items-start justify-between gap-3 ">
          <h2 className="text-xl font-bold text-rust-800 dark:text-onyx-50">
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

        <p className="mt-2 text-rust-800 dark:text-onyx-100">
          {property.location}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-rust-700 dark:text-coral-100">
          {property.description}
        </p>

        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span className="bg-amber-100 text-amber-700 dark:bg-onyx-400 dark:text-onyx-100 rounded-sm p-1 px-2">
            {property.bedrooms} Beds
          </span>
          <span className="bg-amber-100 text-amber-700  dark:bg-onyx-400 dark:text-onyx-100 rounded-sm p-1 px-2">
            {property.bathrooms} Baths
          </span>
          <span className="bg-amber-100 text-amber-700 dark:bg-onyx-400 dark:text-onyx-100 rounded-sm p-1 px-2">
            {property.propertyType}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-rust-900 dark:text-gray-50">
            ₹{property.rent.toLocaleString()}
            <span className="text-sm font-normal text-gray-800 dark:text-gray-200">
              /month
            </span>
          </p>

          <button
            onClick={() => navigate(`/properties/${property.id}`)}
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-rust-50 hover:bg-amber-400
            dark:bg-gold-700 dark:hover:bg-gold-600 "
          >
            View
          </button>
        </div>

        <button
          onClick={() => onDelete(property.id)}
          className="mt-3 w-full rounded-md border border-red-300 px-4 py-2 text-sm text-red-300 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
