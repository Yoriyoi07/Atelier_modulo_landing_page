import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 md:bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-56 md:w-64 border border-black/10"
          >
            <div className="text-xs md:text-sm mb-3 md:mb-4">Quick Contact</div>
            <div className="space-y-2 md:space-y-3">
              <motion.a
                href="mailto:ateliermodulo.ph@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="flex-1 text-xs md:text-sm">
                  <div className="opacity-60 text-xs">Email us</div>
                  <div className="text-xs break-all">ateliermodulo.ph@gmail.com</div>
                </div>
              </motion.a>
              <motion.a
                href="tel:+639279554306"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="flex-1 text-xs md:text-sm">
                  <div className="opacity-60 text-xs">Call us</div>
                  <div className="text-xs">(+63) 927 955 4306</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white shadow-2xl flex items-center justify-center hover:bg-black/90 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation ring */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-black"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </div>
  );
}