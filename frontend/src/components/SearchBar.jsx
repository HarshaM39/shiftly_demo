function SearchBar({
  search,
  setSearch,
  propertyType,
  setPropertyType,
  // NEW props below — you must pass these from Properties.jsx or it will crash
  maxPrice,
  setMaxPrice,
  bedrooms,
  setBedrooms,
  sortBy,
  setSortBy,
  onReset
}) {
  return (
    // CHANGED: p-5 -> p-4 sm:p-5 (tighter padding on mobile)
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      {/* CHANGED: was `md:grid-cols-[1fr_220px]` (2 cols only).
          Now: 1 col on phone, 2 cols on tablet, 4 cols on desktop (lg) 
          because we added 2 more filters (bedrooms + price) */}
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

        {/* Search — unchanged from your original */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Search location
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        {/* Property Type — unchanged from your original */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Property type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>

        {/* NEW: Bedrooms filter (dropdown, "2+" means 2 or more bedrooms) */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* NEW: Max rent slider (0 to 100,000, step 1000) 
            You can change the `max="100000"` to match your actual data range */}
        <div>
          <label className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
            <span>Max rent</span>
            <span className="font-normal text-indigo-600">
              {maxPrice ? `₹${Number(maxPrice).toLocaleString()}` : "No limit"}
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="100000" // ADJUST THIS if your rents go higher than ₹100,000
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="mt-3.5 w-full accent-indigo-600" // accent-indigo-600 colors the slider thumb/track
          />
        </div>

      </div>

      {/* NEW: bottom row with Sort dropdown + Reset button, separated by a divider */}
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-slate-700">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="bedrooms-desc">Most Bedrooms</option>
          </select>
        </div>

        {/* NEW: calls the onReset function passed from Properties.jsx,
            which clears all filters back to defaults */}
        <button
          onClick={onReset}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
        >
          Reset filters
        </button>

      </div>
    </div>
  );
}

export default SearchBar;