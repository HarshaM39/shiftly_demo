function SearchBar({
  search,
  setSearch,
  propertyType,
  setPropertyType,
  selectedLocation,
  setSelectedLocation
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row">

      {/* LOCATION */}
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2"
      >
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none"
      />

      {/* PROPERTY TYPE */}
      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        className="rounded-md border border-gray-300 px-4 py-2"
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