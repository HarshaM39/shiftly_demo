import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <div>
          <h2>🏠 RentEase</h2>
          <small>Find a place to belong</small>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#locations">Locations</a>
          <a href="#about">About</a>
        </nav>

        <button className="list-btn">+ List Property</button>
      </header>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            FIND YOUR PERFECT HOME
          </p>

          <h1>
            <span className="highlight">A Home That</span>
            <br />
            Feels Like You.
          </h1>

          <p className="description">
            Explore verified rental homes, apartments, villas and
            studios in the best locations. Find a home that matches
            your lifestyle and budget.
          </p>

          <div className="search-box">

            <div className="search-field">
              <label>LOCATION</label>
              <select>
                <option>Choose Location</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </div>

            <div className="search-field">
              <label>PROPERTY</label>
              <select>
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>PG</option>
                <option>Studio</option>
              </select>
            </div>

            <div className="search-field">
              <label>BUDGET</label>
              <select>
                <option>Any Budget</option>
                <option>₹10K - ₹20K</option>
                <option>₹20K - ₹30K</option>
                <option>₹30K - ₹50K</option>
                <option>₹50K+</option>
              </select>
            </div>

            <button className="search-btn">
              Search
            </button>

          </div>

        </div>


        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
            alt="Modern home"
          />
        </div>

      </section>


      {/* QUICK STATS */}
      <section className="stats">

        <div>
          <h2>5,000+</h2>
          <p>Verified Properties</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Popular Cities</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Renters</p>
        </div>

        <div>
          <h2>4.8 ⭐</h2>
          <p>Average Rating</p>
        </div>

      </section>


      {/* PROPERTY TYPES */}
      <section className="locations">

        <div className="section-heading">
          <p>EXPLORE BY TYPE</p>
          <h2>Find What Fits Your Lifestyle</h2>
        </div>

        <div className="location-grid">

          <div className="location-card">
            <div>
              <h3>🏢 Apartments</h3>
              <p>Modern apartments for comfortable city living.</p>
            </div>
          </div>

          <div className="location-card">
            <div>
              <h3>🏡 Villas</h3>
              <p>Spacious villas for families and premium living.</p>
            </div>
          </div>

          <div className="location-card">
            <div>
              <h3>🛏️ Studios</h3>
              <p>Smart and affordable spaces for individuals.</p>
            </div>
          </div>

        </div>

      </section>


      {/* LOCATIONS */}
      <section className="properties" id="locations">

        <div className="section-heading">
          <p>EXPLORE CITIES</p>
          <h2>Popular Locations</h2>
        </div>

        <div className="property-grid">

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80"
              alt="Hyderabad"
            />
            <div className="property-info">
              <h3>Hyderabad</h3>
              <p>1,240+ rental properties</p>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=700&q=80"
              alt="Bangalore"
            />
            <div className="property-info">
              <h3>Bangalore</h3>
              <p>980+ rental properties</p>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80"
              alt="Chennai"
            />
            <div className="property-info">
              <h3>Chennai</h3>
              <p>760+ rental properties</p>
            </div>
          </div>

        </div>

      </section>


      {/* FEATURED PROPERTIES */}
      <section className="locations" id="properties">

        <div className="section-heading">
          <p>HANDPICKED FOR YOU</p>
          <h2>Featured Homes</h2>
        </div>

        <div className="property-grid">

          <div className="property-card">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
              alt="Luxury Villa"
            />

            <div className="property-info">
              <h3>Modern Luxury Villa</h3>
              <p>📍 Jubilee Hills, Hyderabad</p>
              <p>🛏️ 3 BHK &nbsp; • &nbsp; 🚿 3 Bath</p>
              <h3>₹45,000 / month</h3>
            </div>

          </div>


          <div className="property-card">

            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80"
              alt="Apartment"
            />

            <div className="property-info">
              <h3>Elegant City Apartment</h3>
              <p>📍 Whitefield, Bangalore</p>
              <p>🛏️ 2 BHK &nbsp; • &nbsp; 🚿 2 Bath</p>
              <h3>₹28,000 / month</h3>
            </div>

          </div>


          <div className="property-card">

            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80"
              alt="Family Home"
            />

            <div className="property-info">
              <h3>Premium Family Home</h3>
              <p>📍 Anna Nagar, Chennai</p>
              <p>🛏️ 3 BHK &nbsp; • &nbsp; 🚿 2 Bath</p>
              <h3>₹32,000 / month</h3>
            </div>

          </div>

        </div>

      </section>


      {/* WHY RENTEASE */}
      <section className="about" id="about">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
            alt="Beautiful interior"
          />

        </div>

        <div className="about-content">

          <p className="small-title">
            WHY CHOOSE RENTEASE?
          </p>

          <h2>
            Renting a home should be simple.
          </h2>

          <p>
            We connect renters with verified properties and
            trusted owners, making the rental journey easier,
            faster and more transparent.
          </p>

          <br />

          <p>✓ Verified properties</p>
          <p>✓ Transparent pricing</p>
          <p>✓ Trusted property owners</p>
          <p>✓ Easy property discovery</p>

        </div>

      </section>


      {/* TESTIMONIAL */}
      <section className="locations">

        <div className="section-heading">
          <p>RENTERS LOVE US</p>
          <h2>What Our Users Say</h2>
        </div>

        <div className="property-card">

          <div className="property-info">

            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              "RentEase made finding my apartment extremely easy.
              I could compare properties and find a place within
              my budget without wasting time."
            </p>

            <br />

            <strong>— Priya, Hyderabad</strong>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <h2>🏠 RentEase</h2>

        <p>
          Find a place to belong.
        </p>

        <br />

        <a href="#home">Home</a>
        <a href="#properties">Properties</a>
        <a href="#locations">Locations</a>
        <a href="#about">About</a>

        <p>
          © 2026 RentEase. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;