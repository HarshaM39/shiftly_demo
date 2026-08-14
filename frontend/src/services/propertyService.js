const API_URL = "http://localhost:3000/api/properties";

export const getProperties = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
};

export const deleteProperty = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete property");
  }

  return response.json();
};

export const createProperty = async (property) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(property)
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to create property");
  }

  return response.json();
};