import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F3EF] pt-20 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Top Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between py-4 md:py-6 text-xs tracking-wide border-b border-black/10"
        >
          <div className="flex items-start gap-2">
            <div>
              <div>interior & exterior</div>
              <div>design</div>
            </div>
          </div>
          <div className="text-neutral-500 hidden sm:block">MANILA, PHILIPPINES</div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-8 md:mt-12">
          {/* Left Column - Text Content */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-6 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-xs tracking-widest mb-6 md:mb-8 text-neutral-500">
                ARCH. JINUEL TORIO
              </div>
              
              <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.95] tracking-tight mb-6 md:mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  ATELIER
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  MODULO
                </motion.div>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 tracking-tight leading-tight"
              >
                Design and build that works — beautifully.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-neutral-600 leading-relaxed mb-8 md:mb-10 max-w-md text-sm md:text-base"
              >
                Atelier Modulo is a full-service design and build firm led by Arch. Jinuel Torio, turning ideas into functional, intentional, and timeless spaces. From space conceptualization to construction, we bring every vision to life — down to the last detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-black/80 px-6 md:px-10 py-4 md:py-6 group shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-6 md:px-10 py-4 md:py-6 border-2 border-black hover:bg-black hover:text-white transition-all text-sm md:text-base"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-black/10"
              >
            
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden rounded-sm shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                          <ImageWithFallback
                            src="Hero.png"
                            srcList={["/Hero.png", "Hero.png"]}
                            alt="Modern architecture"
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative Number */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none text-white/30 select-none">
                01
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg"
              >
                <div className="text-xs tracking-wider">INNOVATING DESIGNS</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs tracking-widest text-neutral-400">SCROLL</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-neutral-400"
          />
        </div>
      </motion.div>
    </section>
  );
}