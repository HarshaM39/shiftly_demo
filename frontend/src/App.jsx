import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import Properties from "./pages/Properties";
import PropertyDetails from "./PropertyDetails";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [lifestyle, setLifestyle] = useState("");
  const [budget, setBudget] = useState("");
  const [showMatch, setShowMatch] = useState(false);

  /* =========================
     VIEW DETAILS FUNCTION
  ========================= */

  const handleViewDetails = (property) => {
    navigate("/property-details", {
      state: property,
    });
  };

  /* =========================
     BUDGET FUNCTION
  ========================= */

  const isInBudget = (price) => {
    if (!budget) {
      return true;
    }

    if (budget === "₹10K - ₹20K") {
      return price >= 10000 && price <= 20000;
    }

    if (budget === "₹20K - ₹30K") {
      return price >= 20000 && price <= 30000;
    }

    if (budget === "₹30K - ₹50K") {
      return price >= 30000 && price <= 50000;
    }

    return true;
  };

  /* =========================
     PROPERTY DATA
  ========================= */

  const properties = [

    /* ================= HYDERABAD ================= */

    {
      name: "Cozy Studio Home",
      location: "Kukatpally, Hyderabad",
      price: 15000,
      type: "1 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🔒 Security"],
    },

    {
      name: "Cozy City Apartment",
      location: "Kukatpally, Hyderabad",
      price: 20000,
      type: "1 BHK",
      category: "Student",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🛒 Nearby Shops"],
    },

    {
      name: "Modern City Home",
      location: "Miyapur, Hyderabad",
      price: 22000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "📶 Wi-Fi"],
    },

    {
      name: "Budget Family Home",
      location: "Miyapur, Hyderabad",
      price: 25000,
      type: "2 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "🏫 Nearby School"],
    },

    {
      name: "Comfortable Family Home",
      location: "Gachibowli, Hyderabad",
      price: 28000,
      type: "2 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Comfortable Budget Home",
      location: "Gachibowli, Hyderabad",
      price: 30000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "📶 Wi-Fi"],
    },

    {
      name: "Elegant Family Home",
      location: "Kondapur, Hyderabad",
      price: 32000,
      type: "2 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🏊 Pool"],
    },

    {
      name: "Modern Family Home",
      location: "Hyderabad",
      price: 35000,
      type: "2 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🔒 Security"],
    },

    {
      name: "Premium City Home",
      location: "Jubilee Hills, Hyderabad",
      price: 38000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Peaceful City Apartment",
      location: "Kondapur, Hyderabad",
      price: 42000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🏊 Pool", "🔒 Security", "🌳 Garden"],
    },

    {
      name: "Premium Family Home",
      location: "Jubilee Hills, Hyderabad",
      price: 45000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Luxury Villa",
      location: "Banjara Hills, Hyderabad",
      price: 55000,
      type: "3 BHK",
      category: "Premium",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🌳 Garden"],
    },

    /* ================= CHENNAI ================= */

    {
      name: "Modern Chennai Home",
      location: "Chennai",
      price: 18000,
      type: "2 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🔒 Security"],
    },

    {
      name: "Chennai Comfort Apartment",
      location: "Velachery, Chennai",
      price: 22000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🛒 Nearby Shops"],
    },

    {
      name: "Chennai Family Residence",
      location: "Anna Nagar, Chennai",
      price: 30000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "🔒 Security"],
    },

    /* ================= BANGALORE ================= */

    {
      name: "Affordable Bangalore Home",
      location: "Electronic City, Bangalore",
      price: 10000,
      type: "1 BHK",
      category: "Student",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🛒 Nearby Shops"],
    },

    {
      name: "Cozy Bangalore Home",
      location: "Marathahalli, Bangalore",
      price: 15000,
      type: "1 BHK",
      category: "Student",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🔒 Security"],
    },

    {
      name: "Modern Bangalore Apartment",
      location: "HSR Layout, Bangalore",
      price: 18000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🏢 Near Offices"],
    },

    {
      name: "Premium Bangalore Home",
      location: "Bangalore",
      price: 22000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🔒 Security"],
    },

    {
      name: "Premium Bangalore Apartment",
      location: "Whitefield, Bangalore",
      price: 25000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "📶 Wi-Fi"],
    },

    {
      name: "Luxury Bangalore Apartment",
      location: "Indiranagar, Bangalore",
      price: 28000,
      type: "2 BHK",
      category: "Premium",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Premium Bangalore Home",
      location: "Koramangala, Bangalore",
      price: 30000,
      type: "3 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "📶 Wi-Fi"],
    },

    {
      name: "Elegant Bangalore Apartment",
      location: "Hebbal, Bangalore",
      price: 35000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "🔒 Security"],
    },

    {
      name: "Luxury Bangalore Home",
      location: "Jayanagar, Bangalore",
      price: 40000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Premium Bangalore Villa",
      location: "Sadashivanagar, Bangalore",
      price: 45000,
      type: "3 BHK",
      category: "Premium",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🌳 Garden"],
    },

    {
      name: "Luxury Bangalore Residence",
      location: "Rajajinagar, Bangalore",
      price: 50000,
      type: "4 BHK",
      category: "Premium",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    /* ================= MUMBAI ================= */

    {
      name: "Premium Mumbai Home",
      location: "Mumbai",
      price: 25000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🏊 Pool", "🔒 Security"],
    },

    {
      name: "Mumbai City Apartment",
      location: "Andheri, Mumbai",
      price: 30000,
      type: "2 BHK",
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "📶 Wi-Fi", "🏢 Near Offices"],
    },

    {
      name: "Mumbai Family Home",
      location: "Powai, Mumbai",
      price: 40000,
      type: "3 BHK",
      category: "Family",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      features: ["🚗 Parking", "🌳 Garden", "🔒 Security"],
    },
  ];

  /* =========================
     FILTER
  ========================= */

  const filteredProperties = properties.filter((property) => {
    const budgetMatch = isInBudget(property.price);

    const lifestyleMatch =
      !lifestyle ||
      property.category === lifestyle ||
      (lifestyle === "Professional" &&
        property.category === "Premium");

    return budgetMatch && lifestyleMatch;
  });

  /* =========================
     PROPERTY DETAILS ROUTE
  ========================= */

  if (location.pathname === "/property-details") {
    return <PropertyDetails />;
  }

  /* =========================
     PROPERTIES ROUTE
  ========================= */

  if (location.pathname === "/properties") {
    return <Properties />;
  }

  /* =========================
     HOME PAGE
  ========================= */

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          🏠 RentEase
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#matching-homes">Smart Match</a>
          <a href="#locations">Locations</a>
          <a href="#about">About</a>
        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-label">
            FIND YOUR PERFECT HOME
          </p>

          <h1>
            Find a place
            <br />
            <span>to belong.</span>
          </h1>

          <p>
            Discover comfortable homes that match your
            lifestyle, location and budget.
          </p>

          <a
            href="#matching-homes"
            className="hero-btn"
          >
            Explore Homes →
          </a>

        </div>
        {/* FAMILY PICTURE */}
<div className="hero-family-image">
 <img
  className="family-hero-image"
 src="https://carleyaplin.com/wp-content/uploads/2023/03/Relaxed-At-Home-Family-Photoshoot-Carley-Aplin-20230323_0261-1280x854.jpg"
  alt="Family of Four"
/>
</div>

      </section>

      {/* ================= LIFESTYLE ================= */}

      <section
        id="lifestyle"
        className="lifestyle-section"
      >

        <div className="section-heading">

          <p>CHOOSE YOUR LIFESTYLE</p>

          <h2>
            Homes made for your life
          </h2>

          <span>
            Find a home that matches the way you live.
          </span>

        </div>

        <div className="lifestyle-grid">

          {/* PROFESSIONAL */}

          <div className="lifestyle-card">

  <img
    className="lifestyle-card-image"
    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
    alt="Working Professional"
  />

  <div className="lifestyle-icon">
    💼
  </div>
            <h3>
              Working Professionals
            </h3>

            <p>
              Comfortable homes near offices and everyday
              essentials.
            </p>

            <button
              onClick={() => {
                setLifestyle("Professional");

                document
                  .getElementById("matching-homes")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Explore Professionals →
            </button>

          </div>

          {/* FAMILY WITH REAL PICTURE */}

          <div className="lifestyle-card family-card">

            <img
              className="family-image"
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80"
              alt="Happy Family"
            />

            <div className="lifestyle-icon">
              👨‍👩‍👧
            </div>

            <h3>
              Family Homes
            </h3>

            <p>
              Spacious and peaceful homes designed for
              families.
            </p>

            <button
              onClick={() => {
                setLifestyle("Family");

                document
                  .getElementById("matching-homes")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Explore Family Homes →
            </button>

          </div>

          {/* PREMIUM */}

          <div className="lifestyle-card">
            <img
  className="lifestyle-card-image"
  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
  alt="Premium Luxury Home"
/>

            <div className="lifestyle-icon">
              ✨
            </div>

            <h3>
              Premium Living
            </h3>

            <p>
              Elegant villas and premium homes for a
              comfortable lifestyle.
            </p>

            <button
              onClick={() => {
                setLifestyle("Premium");

                document
                  .getElementById("matching-homes")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Explore Premium →
            </button>

          </div>

        </div>

      </section>

      {/* ================= SMART MATCH ================= */}

      <section className="smart-match">

        <div className="smart-match-content">

          <div className="smart-match-text">

            <p className="smart-label">
              SMART HOME MATCHING
            </p>

            <h2>
              Find a home that fits your{" "}
              <span>life.</span>
            </h2>

            <p>
              Tell us what matters to you and RentEase
              will help you discover homes that match
              your lifestyle and budget.
            </p>

          </div>

          <div className="match-box">

            <h3>
              What are you looking for?
            </h3>

            <div className="match-options">

              <button
                className={
                  lifestyle === "Family"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setLifestyle("Family")
                }
              >
                👨‍👩‍👧 Family
              </button>

              <button
                className={
                  lifestyle === "Student"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setLifestyle("Student")
                }
              >
                🎓 Student
              </button>

              <button
                className={
                  lifestyle === "Professional"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setLifestyle("Professional")
                }
              >
                💼 Professional
              </button>

            </div>

            <h3>
              What's your monthly budget?
            </h3>

            <div className="match-options">

              <button
                className={
                  budget === "₹10K - ₹20K"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBudget("₹10K - ₹20K")
                }
              >
                ₹10K - ₹20K
              </button>

              <button
                className={
                  budget === "₹20K - ₹30K"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBudget("₹20K - ₹30K")
                }
              >
                ₹20K - ₹30K
              </button>

              <button
                className={
                  budget === "₹30K - ₹50K"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBudget("₹30K - ₹50K")
                }
              >
                ₹30K - ₹50K
              </button>

            </div>

            <button
              className="match-btn"
              onClick={() => {
                setShowMatch(true);

                setTimeout(() => {
                  document
                    .getElementById("matching-homes")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 100);
              }}
            >
              ✨ Find My Perfect Home
            </button>

            {showMatch && (
              <div className="match-result">

                <h3>
                  ✨ Your RentEase Match
                </h3>

                <p>
                  <strong>
                    Lifestyle:
                  </strong>{" "}
                  {lifestyle || "Not selected"}
                </p>

                <p>
                  <strong>
                    Budget:
                  </strong>{" "}
                  {budget || "Not selected"}
                </p>

                <p>
                  🏠 We found{" "}
                  {filteredProperties.length}{" "}
                  homes matching your preferences.
                </p>

                <button
                  className="view-home-btn"
                  onClick={() =>
                    document
                      .getElementById("matching-homes")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  View Matching Homes →
                </button>

              </div>
            )}

          </div>

        </div>

      </section>

      {/* ================= MATCHING HOMES ================= */}

      <section
        id="matching-homes"
        className="matching-homes"
      >

        <div className="section-heading">

          <p>
            RECOMMENDED FOR YOU
          </p>

          <h2>
            Your Matching Homes
          </h2>

          <span>
            Homes based on your lifestyle and budget
          </span>

        </div>

        <div className="matching-grid">

          {filteredProperties.map(
            (property, index) => (

              <div
                className="matching-card"
                key={
                  property.name +
                  property.location +
                  index
                }
              >

                <img
                  src={property.image}
                  alt={property.name}
                />

                <div className="matching-info">

                  <h3>
                    {property.name}
                  </h3>

                  <p>
                    📍 {property.location}
                  </p>

                  <h4>
                    ₹
                    {property.price.toLocaleString(
                      "en-IN"
                    )}{" "}
                    / month
                  </h4>

                  <div className="home-details">

                    <span>
                      🛏️ {property.type}
                    </span>

                    {property.features.map(
                      (feature, featureIndex) => (
                        <span
                          key={featureIndex}
                        >
                          {feature}
                        </span>
                      )
                    )}

                  </div>

                  {/* VIEW DETAILS BUTTON */}

                  <button
                    onClick={() =>
                      handleViewDetails({
                        ...property,
                        price:
                          `₹${property.price.toLocaleString(
                            "en-IN"
                          )} / month`,
                      })
                    }
                  >
                    View Details →
                  </button>

                </div>

              </div>

            )
          )}

        </div>

        {filteredProperties.length === 0 && (

          <div className="no-results">

            <h3>
              😔 No matching homes found
            </h3>

            <p>
              Try changing your lifestyle or budget.
            </p>

          </div>

        )}

      </section>

      {/* ================= TESTIMONIAL ================= */}

      <section
        id="testimonials"
        className="testimonials"
      >

        <div className="section-heading">

          <p>
            RENTERS LOVE US
          </p>

          <h2>
            What Our Users Say
          </h2>

        </div>

        <div className="property-card">

          <div className="property-info">

            <h3>
              ⭐⭐⭐⭐⭐
            </h3>

            <p>
              "RentEase made finding my apartment
              extremely easy. I could compare properties
              and find a place within my budget without
              wasting time."
            </p>

            <br />

            <strong>
              — Priya, Hyderabad
            </strong>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="section-heading">

          <p>
            ABOUT RENTEASE
          </p>

          <h2>
            Making home hunting easier.
          </h2>

          <span>
            RentEase connects people with comfortable
            homes that fit their lifestyle and budget.
          </span>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <h2>
          🏠 RentEase
        </h2>

        <p>
          Find a place to belong.
        </p>

        <br />

        <a href="#home">
          Home
        </a>

        <a href="#properties">
          Properties
        </a>

        <a href="#matching-homes">
          Smart Match
        </a>

        <a href="#locations">
          Locations
        </a>

        <a href="#about">
          About
        </a>

        <p>
          © 2026 RentEase. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;