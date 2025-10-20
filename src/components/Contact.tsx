import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import logoWhite from "figma:asset/7d5a43cf187b67f50b93e08684f5b7cfbea2a468.png";

export function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 border border-white/20 rounded-full text-xs tracking-widest"
          >
            GET IN TOUCH
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 md:mb-8 text-white leading-tight"
          >
            LET'S BUILD SOMETHING<br />GREAT TOGETHER
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12 opacity-80 text-base md:text-lg"
          >
            Ready to start your project? Tell us about your space and we'll help you bring it to life.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xs tracking-widest mb-3 md:mb-4 opacity-60">EMAIL</div>
              <a 
                href="mailto:ateliermodulo.ph@gmail.com" 
                className="text-xs md:text-sm hover:text-white/70 transition-colors block break-all"
              >
                ateliermodulo.ph@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xs tracking-widest mb-3 md:mb-4 opacity-60">PHONE</div>
              <a 
                href="tel:+639279554306" 
                className="text-xs md:text-sm hover:text-white/70 transition-colors"
              >
                (+63) 927 955 4306
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xs tracking-widest mb-3 md:mb-4 opacity-60">LOCATION</div>
              <p className="text-xs md:text-sm">
                Based in Metro Manila,<br />serving clients nationwide.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-[1600px] mx-auto mt-20 md:mt-32 pt-6 md:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <img src={logoWhite} alt="Atelier Modulo" className="h-10 md:h-12 opacity-60" />
              <div className="text-xs tracking-wide opacity-60 text-center md:text-left">
                &copy; 2025 Atelier Modulo. All rights reserved.
              </div>
            </div>
            <div className="text-xs tracking-wide opacity-60">Led by Arch. Jinuel Torio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}