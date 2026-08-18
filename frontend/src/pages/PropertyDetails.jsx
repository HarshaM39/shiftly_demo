import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProperties } from "../services/propertyService";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const propertyImages = {
    Apartment: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    ],
    Villa: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ],
    House: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e10a"
    ]
  };

  const propertyAmenities = {
    Apartment: [
      "Parking",
      "24/7 Security",
      "Power Backup",
      "Wi-Fi"
    ],
    Villa: [
      "Private Parking",
      "Garden",
      "Swimming Pool",
      "24/7 Security"
    ],
    House: [
      "Parking",
      "Garden",
      "Water Supply",
      "Security"
    ]
  };

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getProperties();

        const foundProperty = result.data.find(
          (item) => String(item.id) === String(id)
        );

        if (!foundProperty) {
          setError("Property not found");
          return;
        }

        setProperty(foundProperty);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <p className="text-gray-500">
            Loading property...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
          {error}
        </div>

        <button
          onClick={() => navigate("/properties")}
          className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Back to Properties
        </button>
      </main>
    );
  }

  const images =
    propertyImages[property.propertyType] ||
    propertyImages.House;

  const amenities =
    propertyAmenities[property.propertyType] ||
    propertyAmenities.House;

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate("/properties")}
        className="mb-6 font-medium text-blue-600 transition hover:text-blue-800"
      >
        ← Back to Properties
      </button>

      {/* Image Gallery */}
      <div className="grid gap-4 md:grid-cols-2">

        <div className="h-80 overflow-hidden rounded-2xl">
          <img
            src={images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="h-80 overflow-hidden rounded-2xl">
          <img
            src={images[1]}
            alt={`${property.title} interior`}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

      </div>

      {/* Main Details Card */}
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">

        {/* Title + Availability */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              {property.propertyType}
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {property.title}
            </h1>

            <p className="mt-2 text-gray-500">
              📍 {property.location}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
              property.available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {property.available
              ? "Available"
              : "Occupied"}
          </span>

        </div>

        {/* Description */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            About this property
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            {property.description}
          </p>
        </section>

        {/* Property Information */}
        <section className="mt-8">

          <h2 className="text-xl font-bold text-gray-900">
            Property Details
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Bedrooms
              </p>

              <p className="mt-2 text-xl font-bold text-gray-900">
                🛏️ {property.bedrooms}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Bathrooms
              </p>

              <p className="mt-2 text-xl font-bold text-gray-900">
                🛁 {property.bathrooms}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Property Type
              </p>

              <p className="mt-2 text-xl font-bold text-gray-900">
                🏠 {property.propertyType}
              </p>
            </div>

          </div>

        </section>

        {/* Amenities */}
        <section className="mt-8">

          <h2 className="text-xl font-bold text-gray-900">
            Amenities
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">

            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>

                <span className="font-medium text-gray-700">
                  {amenity}
                </span>
              </div>
            ))}

          </div>

        </section>

        {/* Rent */}
        <section className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Monthly Rent
            </p>

            <p className="mt-1 text-3xl font-bold text-blue-600">
              ₹{property.rent.toLocaleString()}
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </p>
          </div>

          <button
            onClick={() => navigate("/properties")}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Properties
          </button>

        </section>

      </div>
    </main>
  );
}

export default PropertyDetails;