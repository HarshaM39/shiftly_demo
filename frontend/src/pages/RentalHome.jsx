import "./RentalHome.css";

function RentalHome() {
  return (
    <div className="rental-home">
      <nav className="navbar">
        <h2>🏠 RentEase</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#locations">Locations</a>
          <a href="#about">About</a>
        </div>

        <button className="login">Login</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="tag">FIND YOUR PERFECT HOME</p>

          <h1>
            A Home That
            <br />
            <span>Feels Like You.</span>
          </h1>

          <p>
            Discover beautiful rental homes in your favorite locations.
            Simple search, verified properties and transparent pricing.
          </p>

          <div className="search-box">
            <div>
              <small>LOCATION</small>
              <b>📍 Hyderabad</b>
            </div>

            <div>
              <small>PROPERTY</small>
              <b>🏠 Apartment</b>
            </div>

            <div>
              <small>BUDGET</small>
              <b>₹15K - ₹30K</b>
            </div>

            <button>Search</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
            alt="Modern home"
          />
        </div>
      </section>

      <section className="locations" id="locations">
        <p className="tag">EXPLORE CITIES</p>
        <h2>Popular Locations</h2>

        <div className="location-grid">
          <div>🏙️ Hyderabad</div>
          <div>🌆 Bangalore</div>
          <div>🌇 Chennai</div>
          <div>🏢 Pune</div>
        </div>
      </section>

      <section className="properties" id="properties">
        <p className="tag">HANDPICKED FOR YOU</p>
        <h2>Featured Properties</h2>

        <div className="property-grid">
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Apartment"
            />
            <h3>Modern 2 BHK Apartment</h3>
            <p>📍 Gachibowli, Hyderabad</p>
            <b>₹22,000 / month</b>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="House"
            />
            <h3>Luxury Family Home</h3>
            <p>📍 Whitefield, Bangalore</p>
            <b>₹28,500 / month</b>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="City apartment"
            />
            <h3>Cozy City Apartment</h3>
            <p>📍 Hitech City, Hyderabad</p>
            <b>₹18,000 / month</b>
          </div>
        </div>
      </section>

      <section className="why" id="about">
        <h2>Why Choose RentEase?</h2>

        <div className="why-grid">
          <div>
            <span>✓</span>
            <h3>Verified Homes</h3>
            <p>Find genuine and trusted rental properties.</p>
          </div>

          <div>
            <span>₹</span>
            <h3>Transparent Pricing</h3>
            <p>No confusing hidden charges.</p>
          </div>

          <div>
            <span>⚡</span>
            <h3>Easy Search</h3>
            <p>Find your next home quickly and easily.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Your next home is waiting.</h2>
        <p>Start exploring rental properties today.</p>
        <button>Explore Properties →</button>
      </section>

      <footer>
        <h3>🏠 RentEase</h3>
        <p>Making your rental journey simple.</p>
        <small>© 2026 RentEase</small>
      </footer>
    </div>
  );
}

export default RentalHome;