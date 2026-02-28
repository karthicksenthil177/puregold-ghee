"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="navbar-brand-text">
            Pure<span className="text-gold">Gold</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            className="btn-primary"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="navbar-mobile-menu"
      >
        <div className="navbar-mobile-content">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="btn-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
          >
            Shop Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
