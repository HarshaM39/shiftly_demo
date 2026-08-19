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
    <main className="mx-auto max-w-2xl px-6 py-10">

      <h1 className="mb-8 text-3xl font-bold">
        Add Property
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl bg-white p-6 shadow"
      >

        {error && (
          <div className="rounded-md bg-red-50 p-3 text-red-600">
            {error}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium">
            Property Title
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2"
            placeholder="2 BHK Apartment"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2"
            rows="4"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Location
          </label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2"
            placeholder="Hyderabad"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Monthly Rent
            </label>

            <input
              type="number"
              name="rent"
              value={form.rent}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Property Type
            </label>

            <select
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
            </select>
          </div>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Bedrooms
            </label>

            <input
              type="number"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Bathrooms
            </label>

            <input
              type="number"
              name="bathrooms"
              value={form.bathrooms}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Property"}
        </button>

      </form>
    </main>
  );
}

export default AddProperty;