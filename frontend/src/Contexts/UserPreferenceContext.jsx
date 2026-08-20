import { createContext, useContext, useState } from "react";

const PreferenceContext = createContext();

function PreferenceProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function handleTheme() {
    let temp = theme === "dark" ? "light" : "dark";
    setTheme(temp);
    localStorage.setItem("theme", temp);
  }

  return (
    <PreferenceContext.Provider value={{ theme, handleTheme }}>
      {children}
    </PreferenceContext.Provider>
  );
}

function usePreference() {
  const context = useContext(PreferenceContext);

  if (context === undefined) {
    throw new Error(
      "PreferenceContext was used outside of preference provider",
    );
  }

  return context;
}

export { PreferenceProvider, usePreference }; //eslint-disable-line
