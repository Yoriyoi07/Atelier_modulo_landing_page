import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFull from "figma:asset/d17356add9c0520aa2882cc176a1d2d940625d65.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EF]/95 backdrop-blur-sm border-b border-black/5"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logoFull} alt="Atelier Modulo" className="h-10 md:h-12" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            <motion.button 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection('about')} 
              className="hover:opacity-60 transition-opacity relative group text-sm lg:text-base"
            >
              About us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </motion.button>
            <motion.button 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection('services')} 
              className="hover:opacity-60 transition-opacity relative group text-sm lg:text-base"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </motion.button>
            <motion.button 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection('projects')} 
              className="hover:opacity-60 transition-opacity relative group text-sm lg:text-base"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </motion.button>
            <motion.button 
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection('contact')} 
              className="bg-black text-white px-4 lg:px-6 py-2 rounded-full hover:bg-black/80 transition-all text-sm lg:text-base"
            >
              Contact
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block text-sm"
          >
            +63 927 955 4306
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="md:hidden fixed top-[72px] right-0 bottom-0 left-0 z-40 bg-[#F5F3EF] border-t border-black/5"
          >
            <div className="flex flex-col p-6 space-y-4">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('about')}
                className="text-left py-4 border-b border-black/10 hover:translate-x-2 transition-transform"
              >
                About us
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => scrollToSection('services')}
                className="text-left py-4 border-b border-black/10 hover:translate-x-2 transition-transform"
              >
                Services
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('projects')}
                className="text-left py-4 border-b border-black/10 hover:translate-x-2 transition-transform"
              >
                Projects
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-4 rounded-full hover:bg-black/80 transition-all mt-4"
              >
                Contact
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 text-sm text-center text-neutral-600"
              >
                +63 927 955 4306
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}