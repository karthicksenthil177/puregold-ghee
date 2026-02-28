"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The richest, most aromatic ghee I have ever tasted. It transformed my cooking completely.",
    name: "Priya Sharma",
    title: "Home Chef",
  },
  {
    quote:
      "PureGold Ghee reminds me of the ghee my grandmother used to make. Absolute perfection in a jar.",
    name: "Rahul Menon",
    title: "Food Blogger",
  },
  {
    quote:
      "I switched to PureGold for my Ayurvedic practice. The purity and quality are unmatched.",
    name: "Dr. Ananya Patel",
    title: "Ayurveda Practitioner",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-[#FAFAFA]">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-header-simple"
        >
          <span className="section-label">
            Testimonials
          </span>
          <h2 className="section-heading">
            Loved by thousands.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid-testimonials"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="testimonial-card"
            >
              {/* Large quote mark */}
              <span className="testimonial-quote">
                &ldquo;
              </span>
              <p className="testimonial-text">
                {t.quote}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <span className="testimonial-avatar-text">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="testimonial-name">
                    {t.name}
                  </div>
                  <div className="testimonial-title">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
