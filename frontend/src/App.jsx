import React , { useState } from "react";
import "./App.css";

function App() {
  const [lifestyle, setLifestyle] = useState("");
  const [budget, setBudget] = useState("");
  const [showMatch, setShowMatch] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("₹20K - ₹30K");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const isInBudget = (rent) => {
  if (selectedBudget === "Any Budget") {
    return true;
  }

  if (selectedBudget === "₹10K - ₹20K") {
    return rent >= 10000 && rent <= 20000;
  }

  if (selectedBudget === "₹20K - ₹30K") {
    return rent >= 20000 && rent <= 30000;
  }

  if (selectedBudget === "₹30K - ₹50K") {
    return rent >= 30000 && rent <= 50000;
  }

  if (selectedBudget === "₹50K+") {
    return rent >= 50000;
  }

  return false;
}; 
const isMatchingHome = (rent, location, propertyType) => {
  const budgetMatch = isInBudget(rent);

  const locationMatch =
    selectedLocation === "" || selectedLocation === location;

  const propertyMatch =
    selectedProperty === "" || selectedProperty === propertyType;

  return budgetMatch && locationMatch && propertyMatch;
};
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
            <span className="highlight">Find your place</span>
            <br />
            Feel at home.
          </h1>

          <p className="description">
            Explore verified rental homes, apartments, villas and
            studios in the best locations. Find a home that matches
            your lifestyle and budget.
          </p>

          <div className="search-box">

            <div className="search-field">
              <label>LOCATION</label>
              <select
  value={selectedLocation}
  onChange={(e) => setSelectedLocation(e.target.value)}
>
  <option value="">Choose Location</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Chennai">Chennai</option>
  <option value="Mumbai">Mumbai</option>
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
                <option>studios</option>
                </select>


          </div>
          <div className="search-field">
  <label>BUDGET</label>

  <select
    value={selectedBudget}
    onChange={(e) => setSelectedBudget(e.target.value)}
  >
    <option value="Any Budget">Any Budget</option>
    <option value="₹10K - ₹20K">₹10K - ₹20K</option>
    <option value="₹20K - ₹30K">₹20K - ₹30K</option>
    <option value="₹30K - ₹50K">₹30K - ₹50K</option>
    <option value="₹50K+">₹50K+</option>
  </select>
</div>
<button
  className="search-btn"
  onClick={() => {
    setShowMatch(true);

    setTimeout(() => {
      document.getElementById("matching-homes")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }}
>
  ✨ Find My Perfect Home
</button>

        </div>


  <div className="hero-image">
  <img
    src="https://aapkapainter.com/assets/newdesign/images/homepage/deep-thankyou-image.webp"
    alt="A place where families belong"
  />
</div>

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

{/* LIFESTYLE SECTION */}
<section className="lifestyle-section">
  <div className="section-heading">
    <p>FIND YOUR PERFECT MATCH</p>
    <h2>Choose a lifestyle that feels like you</h2>
    <span>
      Discover homes designed around your lifestyle, needs and budget.
    </span>
  </div>

  <div className="lifestyle-grid">

    <div className="lifestyle-card">
      <div className="lifestyle-icon">🎓</div>
      <h3>Student Living</h3>
      <p>Affordable rooms and studios close to colleges and universities.</p>
      <button>Explore Students →</button>
    </div>

    <div className="lifestyle-card">
      <div className="lifestyle-icon">💼</div>
      <h3>Working Professionals</h3>
      <p>Comfortable homes near offices and everyday essentials.</p>
      <button>Explore Professionals →</button>
    </div>

    <div className="lifestyle-card">
      <div className="lifestyle-icon">👨‍👩‍👧</div>
      <h3>Family Homes</h3>
      <p>Spacious and peaceful homes designed for families.</p>
      <button>Explore Family Homes →</button>
    </div>

    <div className="lifestyle-card">
      <div className="lifestyle-icon">✨</div>
      <h3>Premium Living</h3>
      <p>Elegant villas and premium homes for a comfortable lifestyle.</p>
      <button>Explore Premium →</button>
    </div>

  </div>
</section>
{/* SMART MATCH */}
<section className="smart-match">
  <div className="smart-match-content">

    <div className="smart-match-text">
      <p className="smart-label">SMART HOME MATCHING</p>

      <h2>
        Find a home that fits your <span>life.</span>
      </h2>

      <p>
        Tell us what matters to you and RentEase will help you
        discover homes that match your lifestyle and budget.
      </p>
    </div>

    <div className="match-box">

      <h3>What are you looking for?</h3>

      <div className="match-options">
        <button onClick={() => setLifestyle("Family")}>
          👨‍👩‍👧 Family
        </button>

        <button onClick={() => setLifestyle("Student")}>
          🎓 Student
        </button>

        <button onClick={() => setLifestyle("Professional")}>
          💼 Professional
        </button>
      </div>

      <h3>What's your monthly budget?</h3>

      <div className="match-options">

  <button
    onClick={() => {
      setBudget("₹10K - ₹20K");
      setSelectedBudget("₹10K - ₹20K");
    }}
  >
    ₹10K - ₹20K
  </button>

  <button
    onClick={() => {
      setBudget("₹20K - ₹30K");
      setSelectedBudget("₹20K - ₹30K");
    }}
  >
    ₹20K - ₹30K
  </button>

  <button
    onClick={() => {
      setBudget("₹30K - ₹50K");
      setSelectedBudget("₹30K - ₹50K");
    }}
  >
    ₹30K - ₹50K
  </button>

</div>

      <button
        className="match-btn"
        onClick={() => setShowMatch(true)}
      >
        ✨ Find My Perfect Home
      </button>

      {showMatch && (
        <div className="match-result">
          <h3>✨ Your RentEase Match</h3>

          <p>
            <strong>Lifestyle:</strong>{" "}
            {lifestyle || "Not selected"}
          </p>

          <p>
            <strong>Budget:</strong>{" "}
            {budget || "Not selected"}
          </p>

          <p>🏠 Great! We found homes matching your preferences.</p>

          

<button
  className="view-home-btn"
  onClick={() =>
    document.getElementById("matching-homes")?.scrollIntoView({
      behavior: "smooth"
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

{/* MATCHING HOMES */}
<section id="matching-homes" className="matching-homes">
  <div className="section-heading">
    <p>RECOMMENDED FOR YOU</p>
    <h2>Your Matching Homes</h2>
    <span>Homes selected based on your lifestyle and budget</span>
  </div>

  <div className="matching-grid">

    {isMatchingHome(15000, "Hyderabad", "Studio") && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
          alt="Cozy Studio Home"
        />
        <div className="matching-info">
          <h3>🏠 Cozy Studio Home</h3>
          <p>📍 Kukatpally</p>
          <h4>₹15,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 1 BHK</span>
            <span>🚗 Parking</span>
            <span>📶 Wi-Fi</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}
   {isMatchingHome(35000, "Hyderabad", "Apartment") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      alt="Cozy City Apartment"
    />
    <div className="matching-info">
      <h3>🏠 Cozy City Apartment</h3>
      <p>📍 Kukatpally</p>
      <h4>₹20,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 1 BHK</span>
        <span>🚗 Parking</span>
        <span>📶 Wi-Fi</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isInBudget(22000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
      alt="Modern City Home"
    />
    <div className="matching-info">
      <h3>✨ Modern City Home</h3>
      <p>📍 Miyapur</p>
      <h4>₹22,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>🌳 Garden</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isInBudget(28000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
      alt="Comfortable Family Home"
    />
    <div className="matching-info">
      <h3>🌿 Comfortable Family Home</h3>
      <p>📍 Gachibowli</p>
      <h4>₹28,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>🏊 Pool</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

    {isInBudget(25000) && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
          alt="Budget Family Home"
        />
        <div className="matching-info">
          <h3>🏡 Budget Family Home</h3>
          <p>📍 Miyapur</p>
          <h4>₹25,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 2 BHK</span>
            <span>🚗 Parking</span>
            <span>🌳 Garden</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}

    {isInBudget(30000) && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
          alt="Comfortable Budget Home"
        />
        <div className="matching-info">
          <h3>💛 Comfortable Budget Home</h3>
          <p>📍 Gachibowli</p>
          <h4>₹30,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 2 BHK</span>
            <span>🚗 Parking</span>
            <span>🌳 Garden</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}
    {isInBudget(32000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
      alt="Elegant Family Home"
    />
    <div className="matching-info">
      <h3>🏡 Elegant Family Home</h3>
      <p>📍 Kondapur</p>
      <h4>₹32,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>📶 Wi-Fi</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isMatchingHome(35000, "Hyderabad", "Apartment") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
      alt="Modern Family Home"
    />
    <div className="matching-info">
      <h3>✨ Modern Family Home</h3>
      <p>📍 Hyderabad</p>
      <h4>₹35,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>📶 Wi-Fi</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isInBudget(38000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      alt="Premium City Home"
    />
    <div className="matching-info">
      <h3>🌟 Premium City Home</h3>
      <p>📍 Jubilee Hills</p>
      <h4>₹38,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>🏊 Pool</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isInBudget(42000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
      alt="Peaceful City Apartment"
    />
    <div className="matching-info">
      <h3>🌿 Peaceful City Apartment</h3>
      <p>📍 Kondapur</p>
      <h4>₹42,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 3 BHK</span>
        <span>🏊 Pool</span>
        <span>🔒 Security</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isInBudget(45000) && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
      alt="Premium Family Home"
    />
    <div className="matching-info">
      <h3>✨ Premium Family Home</h3>
      <p>📍 Jubilee Hills</p>
      <h4>₹45,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 3 BHK</span>
        <span>🚗 Parking</span>
        <span>🏊 Pool</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{isMatchingHome(40000, "Hyderabad", "Villa") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      alt="Luxury City Villa"
    />
    <div className="matching-info">
      <h3>🏠 Luxury City Villa</h3>
      <p>📍 Banjara Hills</p>
      <h4>₹48,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 3 BHK</span>
        <span>🚗 Parking</span>
        <span>🏊 Pool</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

    {isInBudget(35000) && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Modern Family Home"
        />
        <div className="matching-info">
          <h3>✨ Modern Family Home</h3>
          <p>📍 Hyderabad</p>
          <h4>₹35,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 2 BHK</span>
            <span>🚗 Parking</span>
            <span>📶 Wi-Fi</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}

  {isMatchingHome(40000, "Hyderabad", "Apartment") && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
          alt="Peaceful City Apartment"
        />
        <div className="matching-info">
          <h3>🌿 Peaceful City Apartment</h3>
          <p>📍 Kondapur</p>
          <h4>₹40,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 2 BHK</span>
            <span>🏊 Pool</span>
            <span>🔒 Security</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}

    {isMatchingHome(45000, "Hyderabad", "Villa") && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
          alt="Premium Family Home"
        />
        <div className="matching-info">
          <h3>✨ Premium Family Home</h3>
          <p>📍 Jubilee Hills</p>
          <h4>₹45,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 3 BHK</span>
            <span>🚗 Parking</span>
            <span>🏊 Pool</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}

    {isInBudget(55000) && (
      <div className="matching-card">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
          alt="Luxury Villa"
        />
        <div className="matching-info">
          <h3>🏡 Luxury Villa</h3>
          <p>📍 Banjara Hills</p>
          <h4>₹55,000 / month</h4>

          <div className="home-details">
            <span>🛏️ 3 BHK</span>
            <span>🚗 Parking</span>
            <span>🏊 Pool</span>
          </div>

          <button>View Details →</button>
        </div>
      </div>
    )}
    {/* CHENNAI */}
{isMatchingHome(18000, "Chennai", "Apartment") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600607687920-4ea09cf159d?auto=format&fit=crop&w=800&q=80"
      alt="Chennai Apartment"
    />
    <div className="matching-info">
      <h3>🏠 Modern Chennai Home</h3>
      <p>📍 Chennai</p>
      <h4>₹18,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>📶 Wi-Fi</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{/* BANGALORE */}
{isMatchingHome(22000, "Bangalore", "Apartment") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      alt="Bangalore Apartment"
    />
    <div className="matching-info">
      <h3>🌆 Premium Bangalore Home</h3>
      <p>📍 Bangalore</p>
      <h4>₹22,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>📶 Wi-Fi</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

{/* MUMBAI */}
{isMatchingHome(25000, "Mumbai", "Apartment") && (
  <div className="matching-card">
    <img
      src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
      alt="Mumbai Apartment"
    />
    <div className="matching-info">
      <h3>🏙️ Premium Mumbai Home</h3>
      <p>📍 Mumbai</p>
      <h4>₹25,000 / month</h4>

      <div className="home-details">
        <span>🛏️ 2 BHK</span>
        <span>🚗 Parking</span>
        <span>🏊 Pool</span>
      </div>

      <button>View Details →</button>
    </div>
  </div>
)}

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