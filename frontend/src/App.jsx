import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Properties />} />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/properties/add"
          element={<AddProperty />}
        />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;