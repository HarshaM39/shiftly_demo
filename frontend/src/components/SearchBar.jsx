function SearchBar({
  search,
  setSearch,
  propertyType,
  setPropertyType,
  minRent,
  setMinRent,
  maxRent,
  setMaxRent,
  bedrooms,
  setBedrooms,
  availability,
  setAvailability,
  clearFilters
}) {
  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Find a Property
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Filter properties based on your requirements
          </p>
        </div>

        <button
          type="button"
          onClick={clearFilters}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            placeholder="Search by location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Any Availability</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Minimum Rent
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              ₹
            </span>
            <input
              type="number"
              min="0"
              placeholder="Minimum rent"
              value={minRent}
              onChange={(e) => setMinRent(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-8 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Maximum Rent
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              ₹
            </span>
            <input
              type="number"
              min="0"
              placeholder="Maximum rent"
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-8 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bedroom</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;