import { motion, useAnimate } from "motion/react";
import { useRef } from "react";
import { Ruler, Hammer, Package, TrendingUp, Users, Target } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Design",
    description: "We translate your vision into clear, functional, and inspiring concepts.",
    features: ["Space Planning", "Interior Design", "3D Visualization"]
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Our team executes with precision and care, delivering high-quality construction and fit-out services.",
    features: ["Construction", "Fit-Out Works", "Project Management"]
  },
  {
    icon: Package,
    title: "Turnkey Solutions",
    description: "End-to-end service for clients who want a seamless process — from concept to completion.",
    features: ["Design", "Build", "Handover"]
  }
];

const stats = [
  { icon: TrendingUp, number: "2+", label: "Years of experience" },
  { icon: Target, number: "212+", label: "Projects completed" },
  { icon: Users, number: "12+", label: "Team members" },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-32">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16">
        {/* Intro */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-wide mb-8 opacity-60"
          >
            — OUR APPROACH
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl tracking-tight leading-tight"
            >
              WE HAVE CREATED MORE THAN 200 UNIQUE DESIGNS
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-1 w-24 bg-black mb-6" />
              <p className="text-base opacity-70 leading-relaxed">
                From residential spaces to commercial projects, we bring innovative solutions 
                and exceptional craftsmanship to every design challenge.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="border-l-2 border-black/20 pl-6 cursor-default"
              >
                <Icon className="h-8 w-8 mb-4 text-black/60" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="text-4xl mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs tracking-wide opacity-60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const [scope, animate] = useAnimate();
  const animatingRef = useRef(false);

  const handleHoverStart = async () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    // Single full spin, then snap back to 0 to avoid reverse tweening
    await animate(
      scope.current,
      { rotate: [0, 360] },
      { duration: 0.6 },
    );
    // Reset instantly so the next hover can spin again without backtracking
    await animate(scope.current, { rotate: 0 }, { duration: 0 });
    animatingRef.current = false;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white border-2 border-black/5 p-8 rounded-sm hover:border-black/20 hover:shadow-xl transition-all duration-300 group"
    >
      <motion.div
        ref={scope}
        onHoverStart={handleHoverStart}
        whileHover={{ scale: 1.1 }}
        className="mb-6"
      >
        <Icon className="h-12 w-12 text-black" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: index * 0.15 + 0.2 }}
        className="mb-4 text-2xl"
      >
        {service.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: index * 0.15 + 0.3 }}
        className="text-sm leading-relaxed mb-6 opacity-70"
      >
        {service.description}
      </motion.p>

      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: index * 0.15 + 0.4 + idx * 0.1 }}
            className="text-sm opacity-80 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
