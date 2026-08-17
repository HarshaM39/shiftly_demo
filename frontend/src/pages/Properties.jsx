import { useEffect, useState } from "react";

import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";

import {
  getProperties,
  deleteProperty
} from "../services/propertyService";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");

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

  useEffect(() => {
    loadProperties();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProperty(id);

      setProperties((current) =>
        current.filter((property) => property.id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesLocation = property.location
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      propertyType === "" ||
      property.propertyType === propertyType;

    return matchesLocation && matchesType;
  });

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Find your perfect home
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Find a place you'll
            <span className="block text-cyan-200">
              love to call home.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore comfortable homes and find a property
            that fits your lifestyle and budget.
          </p>

        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
        />

        {/* Results header */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Available Properties
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? "property"
                : "properties"}
            </p>
          </div>

          <div className="hidden rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 sm:block">
            🏠 {filteredProperties.length} Listings
          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
            <div className="text-4xl">🏠</div>

            <p className="mt-4 font-medium text-slate-600">
              Loading properties...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          filteredProperties.length === 0 && (
            <div className="rounded-2xl bg-white p-16 text-center shadow-sm">

              <div className="text-5xl">
                🔍
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-800">
                No properties found
              </h3>

              <p className="mt-2 text-slate-500">
                Try changing your search or property type.
              </p>

            </div>
          )}

        {/* Property cards */}
        {!loading && !error && filteredProperties.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default Properties;