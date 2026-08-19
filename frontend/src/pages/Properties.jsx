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
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [availability, setAvailability] = useState("");

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
    const matchesLocation =
      search === "" ||
      property.location
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      propertyType === "" ||
      property.propertyType === propertyType;
    const matchesMinRent =
      minRent === "" ||
      Number(property.rent) >= Number(minRent);

    const matchesMaxRent =
      maxRent === "" ||
      Number(property.rent) <= Number(maxRent);
    const matchesBedrooms =
      bedrooms === "" ||
      Number(property.bedrooms) >= Number(bedrooms);

    const matchesAvailability =
      availability === "" ||
      (availability === "available" && property.available === true) ||
      (availability === "occupied" && property.available === false);

    return (
      matchesLocation &&
      matchesType &&
      matchesMinRent &&
      matchesMaxRent &&
      matchesBedrooms &&
      matchesAvailability
    );
  });

  const clearFilters = () => {
    setSearch("");
    setPropertyType("");
    setMinRent("");
    setMaxRent("");
    setBedrooms("");
    setAvailability("");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Rental Properties
        </h1>

        <p className="mt-2 text-gray-500">
          Find your next home.
        </p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        minRent={minRent}
        setMinRent={setMinRent}
        maxRent={maxRent}
        setMaxRent={setMaxRent}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        availability={availability}
        setAvailability={setAvailability}
        clearFilters={clearFilters}
      />

      {!loading && !error && (
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1
              ? "property"
              : "properties"}{" "}
            found
          </p>
        </div>
      )}

      {loading && (
        <div className="py-10 text-center text-gray-500">
          Loading properties...
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && filteredProperties.length === 0 && (
        <div className="rounded-lg bg-white p-10 text-center shadow">
          <p className="text-gray-500">
            No properties found matching your filters.
          </p>

          <button
            onClick={clearFilters}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}

export default Properties;