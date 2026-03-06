"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="section-content text-center-wrapper">
        <div className="grid-about">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
              <Image
                src="/images/farm-fresh-heritage.png"
                alt="Farm fresh heritage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="section-label">
              Our Story
            </span>
            <h2 className="section-heading leading-tight">
              Crafted with
              <br />
              generations of wisdom.
            </h2>
            <p className="section-description-left">
              For over three generations, our family has perfected the art of
              making ghee using the traditional Bilona method. Every jar of
              PureGold Ghee begins with milk from grass-fed A2 cows, hand-churned
              to preserve its natural essence and golden richness.
            </p>
            <p className="section-description-left mt-4">
              We believe in no shortcuts — just pure, slow-crafted ghee that
              carries the warmth of tradition in every spoonful.
            </p>
            <div className="about-stats-wrapper">
              <div>
                <div className="text-3xl font-semibold text-[#1d1d1f]">50+</div>
                <div className="text-sm text-[#1d1d1f]/50 mt-1">Years of Heritage</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#1d1d1f]">100%</div>
                <div className="text-sm text-[#1d1d1f]/50 mt-1">A2 Milk</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#1d1d1f]">Zero</div>
                <div className="text-sm text-[#1d1d1f]/50 mt-1">Preservatives</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
