const express = require("express");

const {
  getProperties,
  getPropertyById,
  createProperty,
  deleteProperty
} = require("../controllers/propertyController");

const router = express.Router();

router.get("/", getProperties);

router.get("/:id", getPropertyById);

router.post("/", createProperty);

router.delete("/:id", deleteProperty);

module.exports = router;