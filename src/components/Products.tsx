"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Classic A2 Ghee",
    desc: "Pure desi ghee from grass-fed A2 cows",
    price: "$24.99",
    gradient: "from-[#F7E7B4] to-[#F0D68A]",
  },
  {
    name: "Organic Bilona Ghee",
    desc: "Traditional hand-churned using the Bilona method",
    price: "$29.99",
    gradient: "from-[#E8D9A0] to-[#D4C47A]",
  },
  {
    name: "Infused Herb Ghee",
    desc: "Aromatic ghee infused with Ayurvedic herbs",
    price: "$27.99",
    gradient: "from-[#D4E4C4] to-[#B8D4A0]",
  },
  {
    name: "Premium Buffalo Ghee",
    desc: "Rich and creamy buffalo milk ghee",
    price: "$26.99",
    gradient: "from-[#F0E0C8] to-[#E0CCA8]",
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

export default function Products() {
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
              {/* Product image placeholder */}
              <div
                className={`product-card-image bg-gradient-to-br ${product.gradient}`}
              >
                <div className="product-card-image-inner">
                  <div className="product-card-image-label">
                    <span className="product-card-image-text">
                      PureGold
                    </span>
                  </div>
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
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
