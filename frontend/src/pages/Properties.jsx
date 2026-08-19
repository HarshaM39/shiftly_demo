import { useEffect, useMemo, useState } from "react"; // NEW: useMemo added for filtering performance

import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";

import {
  getProperties,
  deleteProperty
} from "../services/propertyService";

// NEW: how many property cards to show per page — change this number to adjust page size
const ITEMS_PER_PAGE = 6;

function Properties() {
  const [properties, setProperties] = useState([]);

  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");      // NEW: bedroom filter state
  const [maxPrice, setMaxPrice] = useState("");       // NEW: max price filter state
  const [sortBy, setSortBy] = useState("default");    // NEW: sort order state

  const [currentPage, setCurrentPage] = useState(1);  // NEW: which page of results is shown

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProperties = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await getProperties();
      setProperties(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

 // Fetch on mount — this is the documented "fetch data in an Effect" case,
// the lint rule is just being extra cautious here.
// eslint-disable-next-line react-hooks/set-state-in-effect
useEffect(() => {
  loadProperties();
}, []);

// Reset to page 1 whenever the filters/sort change — computed during render
// instead of in an Effect, so there's no stale-page render flash.
const filtersKey = [search, propertyType, bedrooms, maxPrice, sortBy].join("|");
const [prevFiltersKey, setPrevFiltersKey] = useState(filtersKey);
if (filtersKey !== prevFiltersKey) {
  setPrevFiltersKey(filtersKey);
  setCurrentPage(1);
}

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this property?");
    if (!confirmed) return;

    try {
      await deleteProperty(id);
      setProperties((current) => current.filter((property) => property.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  // NEW: clears every filter back to its default value — passed to SearchBar's Reset button
  const handleReset = () => {
    setSearch("");
    setPropertyType("");
    setBedrooms("");
    setMaxPrice("");
    setSortBy("default");
  };

  // NEW: whenever any filter or sort changes, jump back to page 1.
  // Without this, you could be on page 3 and a new filter leaves only 1 page of results — 
  // you'd see an empty page instead of the results.
  

  // CHANGED: was a simple .filter() — now wrapped in useMemo so it only recalculates
  // when its dependencies actually change (avoids re-filtering on every render)
  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const matchesLocation = property.location
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesType =
        propertyType === "" || property.propertyType === propertyType;

      // NEW: bedroom filter — "2+" means bedrooms >= 2
      const matchesBedrooms =
        bedrooms === "" || property.bedrooms >= Number(bedrooms);

      // NEW: price filter — if slider is at 0 or untouched, treat as "no limit"
      const matchesPrice =
        maxPrice === "" || Number(maxPrice) === 0 || property.rent <= Number(maxPrice);

      return matchesLocation && matchesType && matchesBedrooms && matchesPrice;
    });

    // NEW: sorting applied AFTER filtering
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.rent - b.rent);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.rent - a.rent);
    } else if (sortBy === "bedrooms-desc") {
      result = [...result].sort((a, b) => b.bedrooms - a.bedrooms);
    }

    return result;
  }, [properties, search, propertyType, bedrooms, maxPrice, sortBy]);

  // NEW: pagination math
  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / ITEMS_PER_PAGE));

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // NEW: safely change page (won't go below 1 or above totalPages), scrolls to top
  const goToPage = (page) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // NEW: builds an array like [1, 2, 3] to render page number buttons
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }, [totalPages]);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-white/10" />

        {/* CHANGED: px-6 py-20 -> px-4 py-14 sm:px-6 sm:py-20 (less vertical space wasted on mobile) */}
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Find your perfect home
          </p>

          {/* CHANGED: text-4xl md:text-5xl -> text-3xl sm:text-4xl md:text-5xl 
              (adds an extra step so it's not huge on small phones) */}
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Find a place you'll
            <span className="block text-cyan-200">love to call home.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:mt-5 sm:text-lg sm:leading-8">
            Explore comfortable homes and find a property that fits your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

        {/* CHANGED: now passes 6 new props required by the updated SearchBar */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleReset}
        />

        {/* CHANGED: stacks vertically on mobile, side-by-side from sm up */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Available Properties
            </h2>
            {/* CHANGED: now shows "X of Y" since pagination means not all filtered results show at once */}
            <p className="mt-1 text-sm text-slate-500">
              Showing {paginatedProperties.length} of {filteredProperties.length}{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {/* CHANGED: removed `hidden sm:block` — this badge now always shows, even on mobile */}
          <div className="w-fit rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            🏠 {filteredProperties.length} Listings
          </div>
        </div>

        {loading && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
            <div className="text-4xl">🏠</div>
            <p className="mt-4 font-medium text-slate-600">Loading properties...</p>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && filteredProperties.length === 0 && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm sm:p-16">
            <div className="text-5xl">🔍</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">No properties found</h3>
            <p className="mt-2 text-slate-500">Try changing your search or property type.</p>

            {/* NEW: quick reset button right in the empty state */}
            <button
              onClick={handleReset}
              className="mt-5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* CHANGED: now maps over `paginatedProperties` (the current page's slice) 
            instead of `filteredProperties` (the full filtered list) */}
        {!loading && !error && paginatedProperties.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">
            {/* CHANGED: sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                       -> grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
               (your original never had a true 1-column mobile state — 
               sm:grid-cols-1 doesn't do anything below sm, so cards could overflow) */}
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onDelete={handleDelete} />
            ))}
          </div>
        )}

        {/* NEW: pagination controls — only renders if there's more than 1 page */}
        {!loading && !error && totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
            >
              ← Prev
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`h-9 w-9 rounded-lg text-sm font-semibold transition ${
                  page === currentPage
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
            >
              Next →
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

export default Properties;