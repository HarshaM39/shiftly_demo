function SearchBar({
  search,
  setSearch,
  propertyType,
  setPropertyType
}) {
  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      
      <div className="grid gap-4 sm:grid-cols-[1fr_200px]">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Search location
          </label>

          <input
            type="text"
            placeholder="Search by location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Property type
          </label>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;