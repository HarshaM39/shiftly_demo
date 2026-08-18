import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createProperty } from "../services/propertyService";

function AddProperty() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "Apartment"
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      await createProperty(form);

      navigate("/properties");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">

      {/* Page Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Property Management
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Add Property
        </h1>

        <p className="mt-3 text-gray-500">
          Add a new rental property to your listings.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8"
      >

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
            <p className="font-semibold">
              Unable to create property
            </p>

            <p className="mt-1 text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Property Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Property Title
          </label>

          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="2 BHK Apartment"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the property..."
            className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Location */}
        <div className="mb-5">
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Location
          </label>

          <input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Hyderabad"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Rent + Property Type */}
        <div className="mb-5 grid gap-5 sm:grid-cols-2">

          <div>
            <label
              htmlFor="rent"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Monthly Rent
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                ₹
              </span>

              <input
                id="rent"
                type="number"
                name="rent"
                value={form.rent}
                onChange={handleChange}
                placeholder="18000"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-9 pr-4 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="propertyType"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Property Type
            </label>

            <select
              id="propertyType"
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            >
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
            </select>
          </div>

        </div>

        {/* Bedrooms + Bathrooms */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2">

          <div>
            <label
              htmlFor="bedrooms"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Bedrooms
            </label>

            <input
              id="bedrooms"
              type="number"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              placeholder="2"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="bathrooms"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Bathrooms
            </label>

            <input
              id="bathrooms"
              type="number"
              name="bathrooms"
              value={form.bathrooms}
              onChange={handleChange}
              placeholder="2"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={() => navigate("/properties")}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Property"}
          </button>

        </div>

      </form>
    </main>
  );
}

export default AddProperty;