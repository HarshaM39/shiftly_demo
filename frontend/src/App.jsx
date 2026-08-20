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
        <Route path="/"
            element={
              <ProtectedRoute
                allowedRoles={["tenant", "landlord", "agent"]}
              >
                <Properties />
              </ProtectedRoute>
            }
          />
        <Route path="/properties" 
          element={
        <ProtectedRoute allowedRoles={["tenant", "landlord", "agent"]}>
          <Properties /></ProtectedRoute>} />

        <Route path="/properties/add" element={
          <ProtectedRoute allowedRoles={["landlord"]}>
            <AddProperty />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
