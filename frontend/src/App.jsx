import { Routes, Route } from "react-router-dom";
import { usePreference } from "./Contexts/UserPreferenceContext";
import Navbar from "./components/Navbar";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";

function App() {
  let { theme } = usePreference();

  return (
    <div className={`min-h-screen  ${theme} bg-amber-100 dark:bg-charcoal-900`}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/add" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
