import { motion } from "motion/react";
import { Shield, ThumbsUp, Clock, HeartHandshake } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed architects"
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "100% satisfaction rate"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed on schedule"
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    description: "Years of excellence"
  }
];

export function TrustBadges() {
  return (
    <section className="bg-white py-12 md:py-20 border-y border-black/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-black/5 flex items-center justify-center"
                >
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-black/60" />
                </motion.div>
                <div className="text-xs md:text-sm mb-1">{badge.title}</div>
                <div className="text-xs opacity-60">{badge.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}