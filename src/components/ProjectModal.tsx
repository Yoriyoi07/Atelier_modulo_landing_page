import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    location: string;
    year: string;
    area: string;
    images: string[];
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="fixed top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black hover:bg-white/90 transition-all flex items-center justify-center shadow-xl hover:scale-110"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Mobile Info Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className="md:hidden fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 transition-all flex items-center justify-center"
          >
            <Info className="w-5 h-5" />
          </motion.button>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full h-full flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Gallery - Full screen on mobile, left panel on desktop */}
            <div className="flex-1 relative flex items-center justify-center px-4 md:px-20 py-20 md:py-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                  transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="w-full h-[50vh] md:h-[80vh] relative"
                >
                  <ImageWithFallback
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
              >
                <span className="text-xs md:text-sm">{currentImageIndex + 1} / {project.images.length}</span>
              </motion.div>
            </div>

            {/* Project Details - Bottom sheet on mobile, right panel on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 100 }}
              animate={{ 
                opacity: showInfo || window.innerWidth >= 768 ? 1 : 0, 
                x: window.innerWidth >= 768 ? 0 : 0,
                y: showInfo || window.innerWidth >= 768 ? 0 : 100
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${
                showInfo ? 'block' : 'hidden'
              } md:block absolute md:relative bottom-0 left-0 right-0 md:w-[450px] bg-white p-6 md:p-12 overflow-y-auto max-h-[50vh] md:max-h-full rounded-t-3xl md:rounded-none`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 md:mb-8"
              >
                <div className="text-xs tracking-wide opacity-60 mb-2">{project.category}</div>
                <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">{project.title}</h2>
                <p className="text-sm leading-relaxed opacity-70">{project.description}</p>
              </motion.div>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="border-t border-black/10 pt-4 md:pt-6"
                >
                  <div className="text-xs tracking-wide opacity-60 mb-2">LOCATION</div>
                  <div className="text-sm">{project.location}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="border-t border-black/10 pt-4 md:pt-6"
                >
                  <div className="text-xs tracking-wide opacity-60 mb-2">YEAR</div>
                  <div className="text-sm">{project.year}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="border-t border-black/10 pt-4 md:pt-6"
                >
                  <div className="text-xs tracking-wide opacity-60 mb-2">AREA</div>
                  <div className="text-sm">{project.area}</div>
                </motion.div>
              </div>

              {/* Thumbnail Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-xs tracking-wide opacity-60 mb-4">ALL IMAGES</div>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {project.images.map((image, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square overflow-hidden transition-all duration-300 ${
                        currentImageIndex === index 
                          ? "opacity-100 ring-2 ring-black" 
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}