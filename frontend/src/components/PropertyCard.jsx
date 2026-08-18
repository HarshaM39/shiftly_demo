import { useNavigate } from "react-router-dom";

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="property-card">

      {/* Property Image */}
      <div className="property-image">
        <div className="image-placeholder">
          🏠
        </div>

        <span
          className={`property-status ${
            property.available ? "available" : "occupied"
          }`}
        >
          {property.available ? "Available" : "Occupied"}
        </span>
      </div>

      {/* Property Details */}
      <div className="property-content">

        <div className="property-header">
          <div>
            <h3>{property.title}</h3>
            <p className="location">
              📍 {property.location}
            </p>
          </div>
        </div>

        <p className="description">
          {property.description}
        </p>

        {/* Property Features */}
        <div className="property-features">
          <span>🛏️ {property.bedrooms} Beds</span>
          <span>🚿 {property.bathrooms} Baths</span>
          <span>🏠 {property.propertyType}</span>
        </div>

        {/* Price and Buttons */}
        <div className="property-footer">

          <div className="price">
            ₹{Number(property.rent).toLocaleString()}
            <span>/month</span>
          </div>

          <button
            className="view-button"
            onClick={() =>
              navigate(`/properties/${property.id}`)
            }
          >
            View
          </button>

        </div>

        <button
          className="delete-button"
          onClick={() => onDelete(property.id)}
        >
          Delete Property
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;