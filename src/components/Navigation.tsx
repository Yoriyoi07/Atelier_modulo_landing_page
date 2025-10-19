import { motion } from "motion/react";
import logoFull from "figma:asset/d17356add9c0520aa2882cc176a1d2d940625d65.png";

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EF]/95 backdrop-blur-sm border-b border-black/5"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoFull} alt="Atelier Modulo" className="h-12" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-8"
        >
          <motion.button 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('about')} 
            className="hover:opacity-60 transition-opacity relative group"
          >
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('services')} 
            className="hover:opacity-60 transition-opacity relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('projects')} 
            className="hover:opacity-60 transition-opacity relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </motion.button>
          <motion.button 
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('contact')} 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-all"
          >
            Contact
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm"
        >
          +63 927 955 4306
        </motion.div>
      </div>
    </motion.nav>
  );
}
