import { useState } from "react";

function Properties() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const locations = [
    {
      city: "Hyderabad",
      state: "Telangana",
      icon: "🏛️",
      className: "location-blue",
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      icon: "🕌",
      className: "location-green",
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      icon: "🏢",
      className: "location-orange",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      icon: "🌆",
      className: "location-purple",
    },
    {
      city: "Delhi",
      state: "Delhi NCR",
      icon: "🪷",
      className: "location-pink",
    },
    {
      city: "Pune",
      state: "Maharashtra",
      icon: "🏛️",
      className: "location-lavender",
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      icon: "🌉",
      className: "location-cyan",
    },
    {
      city: "Vijayawada",
      state: "Andhra Pradesh",
      icon: "🛕",
      className: "location-lightgreen",
    },
  ];

  const selectLocation = (city) => {
    setSearch(city);

    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };

  const handleSearch = () => {
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };

  return (
    <main className="properties-page">

      {/* ================= HERO ================= */}

      <section className="rent-hero">

        <div className="hero-content">

          <div className="eyebrow">
            RENT • SEARCH • LIVE
          </div>

          <h1>
            Find a better place
            <br />
            to call <span>home.</span>
          </h1>

          <p>
            Discover rental homes that match your
            lifestyle, budget and preferred location.
          </p>

          {/* SEARCH BAR */}

          <div className="property-search">

            <div className="search-field">

              <span>📍</span>

              <input
                type="text"
                placeholder="Search by location..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <select
              value={propertyType}
              onChange={(e) =>
                setPropertyType(e.target.value)
              }
            >
              <option value="">All Types</option>
              <option value="Apartment">
                Apartment
              </option>
              <option value="House">
                House
              </option>
              <option value="Villa">
                Villa
              </option>
              <option value="PG">
                PG
              </option>
            </select>

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

        </div>

      </section>

      {/* ================= LOCATIONS ================= */}

      <section
        className="locations-section"
        id="locations"
      >

        <div className="section-title center-title">

          <span>
            EXPLORE LOCATIONS
          </span>

          <h2>
            Find a home in your city
          </h2>

          <p>
            Explore rental properties in popular
            cities across India.
          </p>

        </div>

        <div className="locations-grid">

          {locations.map((location) => (

            <div
              key={location.city}
              className={`location-card ${location.className}`}
              onClick={() =>
                selectLocation(location.city)
              }
            >

              <div className="location-icon">
                {location.icon}
              </div>

              <h3>
                {location.city}
              </h3>

              <p>
                {location.state}
              </p>

              <span className="location-arrow">
                →
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section
        className="why-section"
        id="about"
      >

        <div className="section-title center-title">

          <span>
            WHY CHOOSE US
          </span>

          <h2>
            The smarter way to rent
          </h2>

          <p>
            Everything you need to find your next home.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>
              Easy Search
            </h3>

            <p>
              Find homes quickly using location,
              property type and your preferences.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🏠
            </div>

            <h3>
              Great Homes
            </h3>

            <p>
              Explore a wide range of rental homes
              suitable for different budgets.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Simple & Fast
            </h3>

            <p>
              Find your next home with a clean,
              simple and convenient experience.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <span>
            READY TO MOVE?
          </span>

          <h2>
            Your next home is waiting.
          </h2>

          <p>
            Start exploring rental homes today.
          </p>

        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Explore Locations →
        </button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        className="footer"
        id="contact"
      >

        <div className="footer-container">

          <div>

            <div className="footer-logo">

              <div className="logo-icon">
                R
              </div>

              <div>

                <h3>
                  RentEase
                </h3>

                <span>
                  Find a place to belong
                </span>

              </div>

            </div>

            <p>
              Making the search for your next
              rental home simple, convenient
              and stress-free.
            </p>

          </div>

          <div>

            <h4>
              Explore
            </h4>

            <a href="/">
              Home
            </a>

            <a href="#locations">
              Locations
            </a>

            <a href="#about">
              About Us
            </a>

          </div>

          <div>

            <h4>
              Cities
            </h4>

            <a href="#locations">
              Hyderabad
            </a>

            <a href="#locations">
              Bengaluru
            </a>

            <a href="#locations">
              Mumbai
            </a>

          </div>

          <div>

            <h4>
              Contact
            </h4>

            <p>
              📧 hello@rentease.com
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              📍 Hyderabad, India
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 RentEase. All rights reserved.

        </div>

      </footer>

    </main>
  );
}

export default Properties;