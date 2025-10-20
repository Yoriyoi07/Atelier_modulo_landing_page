import { motion } from "motion/react";

export function TrustBadges() {
  const badges = [
    { label: "Licensed & Insured" },
    { label: "On-time Delivery" },
    { label: "Quality Craftsmanship" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-black/10 rounded-sm p-4 text-center text-sm tracking-wide"
            >
              {b.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
