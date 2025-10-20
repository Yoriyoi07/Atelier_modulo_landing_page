import { motion } from "motion/react";
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



export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Intro */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-wide mb-6 md:mb-8 opacity-60"
          >
            — OUR APPROACH
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
            >
              WE HAVE CREATED EXCELLENT & UNIQUE DESIGNS
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-1 w-16 md:w-24 bg-black mb-4 md:mb-6" />
              <p className="text-sm md:text-base opacity-70 leading-relaxed">
                From residential spaces to commercial projects, we bring innovative solutions 
                and exceptional craftsmanship to every design challenge.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-black/5 p-6 md:p-8 rounded-sm hover:border-black/20 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 md:mb-6"
                >
                  <Icon className="h-10 w-10 md:h-12 md:w-12 text-black" />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  className="mb-3 md:mb-4 text-xl md:text-2xl"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className="text-sm leading-relaxed mb-4 md:mb-6 opacity-70"
                >
                  {service.description}
                </motion.p>
                
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 0.8, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + idx * 0.1 }}
                      className="text-sm opacity-80 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}