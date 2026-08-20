import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PreferenceProvider } from "./Contexts/UserPreferenceContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreferenceProvider>
        <App />
      </PreferenceProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
