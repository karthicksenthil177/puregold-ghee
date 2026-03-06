"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Classic A2 Ghee",
    desc: "Pure desi ghee from grass-fed A2 cows",
    price: "₹1,049",
    gradient: "from-[#F7E7B4] to-[#F0D68A]",
    about: "Our Classic A2 Ghee is made from the milk of grass-fed A2 cows, known for easier digestion. Sourced from trusted farms, it is slow-crafted to preserve the natural flavour and golden colour. Ideal for everyday cooking, drizzling, and traditional recipes. No additives or preservatives—just pure, golden ghee.",
  },
  {
    name: "Organic Bilona Ghee",
    desc: "Traditional hand-churned using the Bilona method",
    price: "₹1,249",
    gradient: "from-[#E8D9A0] to-[#D4C47A]",
    about: "Bilona ghee is made the traditional way: curd is set from A2 milk, then hand-churned in a wooden churner (bilona) until the butter separates. This butter is then slow-cooked into ghee. The process preserves nutrients and gives a rich, nutty taste. Our Organic Bilona Ghee is certified organic and handcrafted in small batches.",
  },
  {
    name: "Infused Herb Ghee",
    desc: "Aromatic ghee infused with Ayurvedic herbs",
    price: "₹1,164",
    gradient: "from-[#D4E4C4] to-[#B8D4A0]",
    about: "Pure Gold Infused Herb Ghee blends our classic A2 ghee with select Ayurvedic herbs. The fat in ghee helps carry the benefits of the herbs. Use it in cooking, on toast, or as directed in your wellness routine. Made with the same quality A2 ghee and natural herb extracts—no artificial flavours.",
  },
  {
    name: "Premium Buffalo Ghee",
    desc: "Rich and creamy buffalo milk ghee",
    price: "₹1,124",
    gradient: "from-[#F0E0C8] to-[#E0CCA8]",
    about: "Our Premium Buffalo Ghee is made from buffalo milk for a richer, creamier texture and a distinct flavour. Sourced from farms that follow ethical practices, it is slow-cooked to a golden finish. Perfect for sweets, biryanis, and dishes where you want a fuller, traditional ghee taste.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

type Product = (typeof products)[number];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="section bg-[#FAFAFA]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">
            Collection
          </span>
          <h2 className="section-heading">
            Our finest selection.
          </h2>
          <p className="section-description">
            Every jar is a testament to purity, crafted for those who accept
            nothing less than the best.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid-products"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="product-card group"
            >
              {/* Product image */}
              <div className="product-card-image relative">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ghee.jpg"
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <h3 className="card-title">
                {product.name}
              </h3>
              <p className="card-description">
                {product.desc}
              </p>
              <div className="product-card-footer">
                <span className="card-price">
                  {product.price}
                </span>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSelectedProduct(product)}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product detail modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="product-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="product-dialog-header">
                <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                  {selectedProduct.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="text-[#1d1d1f]/50 hover:text-[#1d1d1f] p-1 rounded-full hover:bg-[#1d1d1f]/5 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-[#1d1d1f]/70 text-sm mb-2">{selectedProduct.desc}</p>
              <p className="text-[#1d1d1f]/80 text-base leading-relaxed mb-4">
                {selectedProduct.about}
              </p>
              <p className="text-lg font-semibold text-gold mb-0">{selectedProduct.price}</p>
              <div className="product-dialog-contact">
                <span className="text-[#1d1d1f]/60">Contact us</span>
                <a href="mailto:contact@puregoldghee.com">contact@puregoldghee.com</a>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
