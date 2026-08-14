const properties = require("../data/properties");

const getProperties = (req, res) => {
  const { location, propertyType } = req.query;

  let result = properties;

  if (location) {
    result = result.filter((property) =>
      property.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (propertyType) {
    result = result.filter(
      (property) =>
        property.propertyType.toLowerCase() === propertyType.toLowerCase()
    );
  }

  res.status(200).json({
    success: true,
    data: result
  });
};

const getPropertyById = (req, res) => {
  const id = Number(req.params.id);

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return res.status(404).json({
      success: false,
      message: "Property not found"
    });
  }

  res.status(200).json({
    success: true,
    data: property
  });
};

const createProperty = (req, res) => {
  const {
    title,
    description,
    location,
    rent,
    bedrooms,
    bathrooms,
    propertyType
  } = req.body;

  if (
    !title ||
    !location ||
    !rent ||
    !bedrooms ||
    !bathrooms ||
    !propertyType
  ) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing"
    });
  }

  const newProperty = {
    id: properties.length + 1,
    title,
    description: description || "",
    location,
    rent: Number(rent),
    bedrooms: Number(bedrooms),
    bathrooms: Number(bathrooms),
    propertyType,
    available: true
  };

  properties.push(newProperty);

  res.status(201).json({
    success: true,
    message: "Property created successfully",
    data: newProperty
  });
};

const deleteProperty = (req, res) => {
  const id = Number(req.params.id);

  const propertyIndex = properties.findIndex(
    (property) => property.id === id
  );

  if (propertyIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Property not found"
    });
  }

  properties.splice(propertyIndex, 1);

  res.status(200).json({
    success: true,
    message: "Property deleted successfully"
  });
};

module.exports = {
  getProperties,
  getPropertyById,
  createProperty,
  deleteProperty
};