import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "Full-service design & build",
    "Experienced team of architects",
    "Personalized project approach",
    "End-to-end project management"
  ];

  return (
    <section id="about" className="bg-[#F5F3EF] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs tracking-wide mb-8 md:mb-12 opacity-60"
            >
              ABOUT ATELIER MODULO
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 md:mb-12 leading-tight"
            >
              We create spaces that make sense.
            </motion.h3>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Atelier Modulo was built on the belief that good design is both purposeful and personal.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our team handles every phase — from conceptual planning and design development to construction and project management — ensuring that your space isn't just built, but thoughtfully realized.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3 md:space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-black flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl order-first lg:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzYwODQzNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Architecture studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
              <div className="text-xs tracking-widest mb-2 opacity-80">SINCE 2024</div>
              <div className="text-xl md:text-2xl">Excellence in Design</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}