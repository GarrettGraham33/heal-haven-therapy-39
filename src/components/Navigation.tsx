
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scroll position to change nav styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-heal-charcoal-950 font-heading text-2xl font-semibold">
          Heal Counseling
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                location.pathname === link.path
                  ? "text-heal-green-700"
                  : "text-heal-charcoal-700 hover:text-heal-green-600 hover:bg-heal-green-50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-heal-green-600 hover:bg-heal-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-heal-charcoal-800 hover:text-heal-green-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 transform md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "px-4 py-4 rounded-md text-lg font-medium transition-colors duration-300 text-center",
                location.pathname === link.path
                  ? "text-heal-green-700 bg-heal-green-50"
                  : "text-heal-charcoal-700 hover:text-heal-green-600 hover:bg-heal-green-50"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-heal-green-600 hover:bg-heal-green-700 text-white px-4 py-4 rounded-md text-lg font-medium transition-colors duration-300 text-center mt-auto mb-12"
            onClick={() => setIsOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
