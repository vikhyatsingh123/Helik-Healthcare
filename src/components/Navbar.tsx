import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Products",
    path: "/products",
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : isTransparent
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div>
              <span
                className={`text-3xl font-bold transition-colors ${
                  isTransparent ? "text-white" : "text-[#1a3a6b]"
                }`}
              >
                Helik
              </span>
              <span
                className={`text-3xl font-light transition-colors ${
                  isTransparent ? "text-white/80" : "text-gray-500"
                }`}
              >
                {" "}
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-[#1a3a6b] hover:bg-blue-50"
                    } ${
                      location.pathname === link.path ? "text-[#e8732a]!" : ""
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b] transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-[#e8732a]" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isTransparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-[#1a3a6b] hover:bg-blue-50"
                  } ${
                    location.pathname === link.path
                      ? isTransparent
                        ? "text-white! font-semibold!"
                        : "text-[#1a3a6b]! font-semibold!"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #e8732a, #f5a623)",
              }}
            >
              Get In Touch
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-sm font-semibold text-[#1a3a6b] uppercase tracking-wider">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-2 px-6 py-2 text-sm text-gray-600 hover:text-[#1a3a6b] hover:bg-blue-50 rounded-lg"
                      >
                        <item.icon className="w-4 h-4 text-[#e8732a]" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white mt-2"
                style={{
                  background: "linear-gradient(135deg, #e8732a, #f5a623)",
                }}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
