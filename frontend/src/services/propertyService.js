const API_URL = "http://localhost:3000/api/properties";

const CACHE_KEY = "properties_cache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getProperties = async () => {
  const cachedData = localStorage.getItem(CACHE_KEY);

  if (cachedData) {
    const cache = JSON.parse(cachedData);

    const cacheAge = Date.now() - cache.timestamp;

    if (cacheAge < CACHE_DURATION) {
      console.log("Using cached properties");

      return cache.data;
    }

    localStorage.removeItem(CACHE_KEY);
  }

  console.log("Fetching properties from API");

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const data = await response.json();

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      data,
      timestamp: Date.now()
    })
  );

  return data;
};

export const deleteProperty = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete property");
  }

  localStorage.removeItem(CACHE_KEY);

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

  localStorage.removeItem(CACHE_KEY);

  return response.json();
};