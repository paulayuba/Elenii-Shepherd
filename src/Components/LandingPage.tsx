"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGooglePlay, FaApple, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export function LandingPage() {
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false);

  const handleDownloadClick = () =>
    window.open(
      "https://github.com/Elenii-Org/Elenii-Shepherd/releases/tag/v1.0.0-mvp",
      "_blank"
    );

  const handleLearnMoreClick = () => {
    const section = document.getElementById("how-it-works");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full space-y-8 text-center lg:text-left"
          >
            <div className="inline-block">
              <button
                onClick={() => setShowAccessibilityInfo(!showAccessibilityInfo)}
                className="group relative px-6 py-2 rounded-full bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-bold text-primary tracking-wide flex items-center gap-2">
                  ACCESSIBILITY SOLUTION
                  <FaArrowRight className={`transform transition-transform duration-300 ${showAccessibilityInfo ? "rotate-90" : "group-hover:translate-x-1"}`} size={12} />
                </span>
              </button>

              {showAccessibilityInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-4 p-6 glass-panel rounded-2xl max-w-sm z-20 text-left"
                  role="region"
                  aria-live="polite"
                >
                  <p className="text-gray-700 leading-relaxed">
                    Our solution is designed with inclusivity in mind, featuring high-contrast modes, screen reader optimization, and voice navigation support.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Empowering Vision, <br />
                <span className="text-gradient">Enabling Independence</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The easiest and fastest way for visually impaired individuals to
                access information, navigate spaces, and interact with the world.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={handleDownloadClick}
                className="btn-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 group"
              >
                <div className="flex gap-2">
                  <FaGooglePlay size={20} />
                  <FaApple size={22} />
                </div>
                <span>Download App</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleLearnMoreClick}
                className="px-8 py-4 rounded-full font-bold text-gray-700 hover:bg-gray-100 transition-colors text-lg border border-gray-200"
              >
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <img
                      src={`/User${i}.webp`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Trusted by</p>
                <p className="text-base font-bold text-gray-900">Thousands of users</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full transform scale-90" />
            <Image
              src="/image3.webp"
              alt="Visually impaired person using Elenii Shepherd app"
              width={600}
              height={600}
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
