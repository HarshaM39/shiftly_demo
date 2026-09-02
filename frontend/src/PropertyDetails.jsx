import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PropertyDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const property = location.state;

  if (!property) {
    return (
      <div className="property-details-page">

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <div className="property-details-card">

          <h1>
            Property Details Not Found
          </h1>

          <p>
            Please select a property from the
            matching homes section.
          </p>

          <button
            onClick={() => navigate("/")}
          >
            Browse Homes
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="property-details-page">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="property-details-card">

        {/* PROPERTY IMAGE */}

        <img
          src={property.image}
          alt={property.name}
          className="property-details-image"
        />

        {/* DETAILS */}

        <div className="property-details-info">

          <p className="property-label">
            RENTEASE PROPERTY
          </p>

          <h1>
            {property.name}
          </h1>

          <p className="property-location">
            📍 {property.location}
          </p>

          <h2>
            {property.price}
          </h2>

          {/* FEATURES */}

          <div className="property-features">

            <span>
              🏠 {property.type}
            </span>

            {property.features &&
              property.features.map(
                (feature, index) => (
                  <span key={index}>
                    {feature}
                  </span>
                )
              )}

          </div>

          {/* ABOUT */}

          <div className="property-description">

            <h3>
              About this home
            </h3>

            <p>
              Welcome to{" "}
              <strong>
                {property.name}
              </strong>
              .
            </p>

            <p>
              This beautiful home is located in{" "}
              <strong>
                {property.location}
              </strong>{" "}
              and offers a comfortable and convenient
              lifestyle.
            </p>

            <p>
              The property includes modern facilities,
              convenient access to everyday essentials
              and a peaceful living environment.
            </p>

          </div>

          {/* BUTTONS */}

          <div className="details-actions">

           <button
  className="contact-button"
  onClick={() => {
    alert(
      `📞 Contact Owner

Property: ${property.name}
Location: ${property.location}

Owner contact feature coming soon!`
    );
  }}
>
  📞 Contact Owner
</button>

            <button
              className="back-home-button"
              onClick={() => navigate("/")}
            >
              🏠 Back to Homes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PropertyDetails;