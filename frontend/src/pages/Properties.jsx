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
    <main className="min-h-screen bg-gray px-6 py-10">

      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Rental Properties
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Find your next home.
        </p>
        <SearchBar
        search={search}
        setSearch={setSearch}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
      />
        
      </div>

      

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
            No properties found.
          </p>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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