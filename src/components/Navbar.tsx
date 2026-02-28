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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-[#1d1d1f]">
            Pure<span className="text-gold">Gold</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            className="text-sm bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full hover:bg-[#1d1d1f]/80 transition-colors duration-300"
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
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="text-sm bg-[#1d1d1f] text-white px-5 py-2 rounded-full"
          >
            Shop Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
