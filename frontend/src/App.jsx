import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import Login from "./pages/login";


function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">

      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/add" element={<AddProperty />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
