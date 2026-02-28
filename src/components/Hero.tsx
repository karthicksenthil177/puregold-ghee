"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Product image */}
        <motion.div
          style={{ scale }}
          className="mx-auto mb-10 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 via-gold/10 to-transparent flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#C8A951] to-[#E8D48B] shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-white text-xs font-medium tracking-[0.3em] uppercase block mb-1">
                  PureGold
                </span>
                <span className="text-white/90 text-[10px] tracking-widest uppercase">
                  Premium Ghee
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.05]"
        >
          Pure. Golden.
          <br />
          <span className="text-gold">Timeless.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-[#1d1d1f]/60 max-w-2xl mx-auto font-light"
        >
          Handcrafted from the finest A2 milk using ancient Bilona methods.
          Experience ghee the way it was always meant to be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#products"
            className="btn-primary btn-primary-hover"
          >
            Explore Products
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1d1d1f]/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#1d1d1f]/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
