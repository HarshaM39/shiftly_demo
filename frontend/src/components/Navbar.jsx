import { Link } from "react-router-dom";
import HeaderLogo from "../assets/Icons/headerlogo";
import Sun from "../assets/Icons/Sun";
import Moon from "../assets/Icons/Moon";
import { usePreference } from "../Contexts/UserPreferenceContext";

function Navbar() {
  const { theme, handleTheme } = usePreference();

  return (
    <nav
      className=" text-rust-500 dark:text-coral-500 dark:bg-charcoal-700
    bg-amber-50 shadow"
    >
      <div className="mx-auto flex max-w-6xl items-center  justify-between px-6 py-2">
        <Link to="/" className="flex">
          <HeaderLogo />
          <h1 className="text-xl font-bold">RentEase</h1>
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            to="/properties"
            className="hover:underline hover:text-ocean-700 text-ocean-600 underline-offset-21 px-4 py-2"
          >
            Properties
          </Link>

          <Link
            to="/properties/add"
            className="px-4 py-2 text-sm font-medium border border-ocean-700 rounded-full  hover:bg-rust-100
            dark:hover:bg-charcoal-500 "
          >
            Host your home
          </Link>
          <div onClick={handleTheme}>
            {theme === "light" ? <Sun /> : <Moon />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
