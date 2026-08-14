function PropertyCard({ property }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">
        {property.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {property.location}
      </p>

      <p className="mt-3 text-lg font-bold text-green-600">
        ₹{property.rent} / month
      </p>

      <div className="mt-3 flex gap-4 text-sm text-gray-600">
        <span>{property.bedrooms} Bedrooms</span>
        <span>{property.bathrooms} Bathrooms</span>
      </div>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-sm ${
          property.available
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {property.available ? "Available" : "Not Available"}
      </span>
    </div>
  );
}

export default PropertyCard;
