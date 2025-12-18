"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HowItWork() {
  const steps = [
    {
      step: "01",
      title: "Download App",
      desc: "Get it free from the Google Play Store or Apple App Store.",
      icon: "📱"
    },
    {
      step: "02",
      title: "Create Profile",
      desc: "Personalize the experience to suit your needs and level of vision.",
      icon: "👤"
    },
    {
      step: "03",
      title: "Start Navigating",
      desc: "Voice, touch, and vibration help you move, read, and connect.",
      icon: "🚀"
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block"
            >
              How it works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get Started in <span className="text-gradient">Minutes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Just three simple steps to start experiencing the world independently.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="btn-primary px-8 py-3 rounded-full font-bold text-lg whitespace-nowrap"
          >
            Get Started Now
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ step, title, desc, icon }, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
                  {step}
                </span>
                <span className="text-4xl bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 glass-panel rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to join the community?</h3>
            <p className="text-blue-100 text-lg">
              Download the app today and start your journey towards greater independence.
            </p>
          </div>
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/QRcode.webp"
              alt="Download QR Code"
              width={180}
              height={180}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}