import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
import useTheme from "../../../hooks/useTheme";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // demo user
  const user = { name: "John Doe", photoURL: "" };
  const LogOut = () => console.log("Logged out");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= NAV ITEMS ================= */
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Important Dates", path: "/importantDates" },
    { name: "Submission", path: "/submission" },
    { name: "Editors Bio", path: "/editorsBio" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full font-inter z-50 bg-[black] text-white  ">
      <div className="w-full flex items-center justify-between px-2 h-16 max-w-7xl mx-auto">

        {/* Logo */}
        <Link className="text-lg md:text-2xl flex space-x-3 font-bold  text-white font-cinzel" to="/">
        <img src="/logo.png" className="w-20 h-7 md:w-30 " alt="springer logo" />
<span>XaiResAiBusAnalytics</span>

        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6">

          {/* Links */}
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-yellow-400 transition ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* ================= MOBILE BUTTONS ================= */}
        <div className="md:hidden flex items-center gap-3">
          {/* <button onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button> */}

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-gray-800 dark:text-white hover:text-yellow-500 transition ${
                      isActive ? "text-yellow-500 dark:text-yellow-500" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}



              {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 text-black dark:text-white dark:hover:bg-gray-800 "
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;