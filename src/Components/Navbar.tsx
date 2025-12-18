"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass-panel border-b border-white/20" : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.webp"
              alt="Elenii Shepherd Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
            Elenii Shepherd
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => window.open("https://github.com/Elenii-Org/Elenii-Shepherd/releases/tag/v1.0.0-mvp", "_blank")}
            className="btn-primary px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl"
          >
            Download App
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
