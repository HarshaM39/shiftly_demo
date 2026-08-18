function SearchBar({
  search,
  setSearch,
  propertyType,
  setPropertyType
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:flex-row">

      {/* Search Input */}
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-4 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Property Type */}
      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        className="rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:w-48"
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
      </select>

    </div>
  );
}

export default SearchBar;