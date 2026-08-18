import { useEffect, useState } from "react";

import PropertyCard from "../components/PropertyCard";
import PropertyCardSkeleton from "../components/PropertyCardSkeleton";
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
    <main className="mx-auto max-w-7xl px-6 py-12">

      {/* Page Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Find a place you love
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Rental Properties
        </h1>

        <p className="mt-3 max-w-xl text-lg text-gray-500">
          Find your next home from our available rental properties.
        </p>
      </div>

      {/* Search & Filter */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
      />

      {/* Loading */}
      {loading && (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
          <p className="font-semibold">
            Unable to load properties
          </p>

          <p className="mt-1 text-sm">
            {error}
          </p>

          <button
            onClick={loadProperties}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty Search Result */}
      {!loading && !error && filteredProperties.length === 0 && (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-gray-200">
          <div className="mb-4 text-5xl">
            🏠
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            No properties found
          </h2>

          <p className="mt-2 text-gray-500">
            Try changing your search or property type.
          </p>
        </div>
      )}

      {/* Property Count */}
      {!loading && !error && filteredProperties.length > 0 && (
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1
              ? "property"
              : "properties"}
          </p>
        </div>
      )}

      {/* Property Cards */}
      {!loading && !error && filteredProperties.length > 0 && (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default Properties;