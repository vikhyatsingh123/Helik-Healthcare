import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Products",
    children: [
      {
        label: "New Launches",
        path: "/products/new-launches",
      },
      {
        label: "Export Range",
        path: "/products/export-range",
      },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
            <div className="flex gap-1 justify-center items-center">
              {isTransparent ? (
                <img src="/helik_logo.png" alt="logo" width={100} height={50} />
              ) : (
                <img
                  src="/helik_blue.jpeg"
                  alt="logo"
                  width={100}
                  height={50}
                />
              )}
              <span
                className={`text-3xl font-light transition-colors text-[#276f4b]`}
              >
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;

              const isChildActive = link.children?.some(
                (child) => location.pathname === child.path
              );

              // Product / dropdown item
              if (hasChildren) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isTransparent
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-gray-700 hover:text-[#1a3a6b] hover:bg-blue-50"
                      } ${
                        isChildActive
                          ? isTransparent
                            ? "text-white! font-semibold!"
                            : "text-[#1a3a6b]! font-semibold!"
                          : ""
                      }`}
                    >
                      {link.label}

                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-48 overflow-hidden rounded-lg bg-white border border-gray-100 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              location.pathname === child.path
                                ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                                : "text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Normal navbar links
              return (
                <Link
                  key={link.path}
                  to={link?.path || ""}
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
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "#276f4b",
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
              {navLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0;

                const isChildActive = link.children?.some(
                  (child) => location.pathname === child.path
                );

                // Product dropdown
                if (hasChildren) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setProductOpen((prev) => !prev)}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isChildActive
                            ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                            : "text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]"
                        }`}
                      >
                        <span>{link.label}</span>

                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Product children */}
                      <AnimatePresence initial={false}>
                        {productOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-1 pl-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    location.pathname === child.path
                                      ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                                      : "text-gray-600 hover:bg-blue-50 hover:text-[#1a3a6b]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Normal links
                return (
                  <Link
                    key={link.path}
                    to={link?.path || ""}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white mt-2"
                style={{
                  background: "#276f4b",
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
