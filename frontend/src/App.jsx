import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>

          {/* Public - anyone can view properties */}
          <Route path="/" element={<Properties />} />
          <Route path="/properties" element={<Properties />} />

          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Only landlord can add properties */}
          <Route
            path="/properties/add"
            element={
              <ProtectedRoute allowedRoles={["landlord"]}>
                <AddProperty />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>
    </div>
  );
}

export default App;