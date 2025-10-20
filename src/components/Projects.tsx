import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import { motion } from "motion/react";
// Sample project data
const projects = [
  {
    title: "GRAZIER DESIGN",
    category: "Residential",
    description: "A minimalist living space that embraces natural light and clean lines. The design focuses on creating a calm, sophisticated environment with carefully curated furniture and a neutral color palette.",
    location: "Quezon City, Metro Manila",
    year: "2024",
    area: "10 sqm",
    images: [
    "/Grazier/G1.png",
    "/Grazier/G2.png",
    "/Grazier/G3.png",
    "/Grazier/G4.png",
    ]
  },
  {
    title: "OFFICE SPACE",
    category: "Commercial",
    description: "Contemporary workspace designed to enhance productivity and collaboration. Features include flexible workstations, natural materials, and integrated technology solutions that support modern work practices.",
    location: "Makati, Metro Manila",
    year: "2024",
    area: "280 sqm",
    images: [
        "/Marv/Marv.png",
        "/Marv/Marv2.png",
        "/Marv/Marv3.png",
        "/Marv/Marv5.png",
    ]
  },
  {
    title: "INTERIOR DESIGN",
    category: "Residential",
    description: "A sleek, functional kitchen combining form and function. Custom cabinetry, premium appliances, and thoughtful storage solutions create an efficient workspace perfect for both cooking and entertaining.",
    location: "BGC, Taguig",
    year: "2023",
    area: "45 sqm",
    images: [
      "/Interior/Interior.png",
      "/Interior/Interior1.png",
      "/Interior/Interior2.png",
      "/Interior/Interior3.png",
      "/Interior/Interior4.png",
      "/Interior/Interior5.png",
      "/Interior/Interior6.png",
      "/Interior/Interior7.png",
      "/Interior/Interior8.png",
    ]
  },
  {
    title: "LUXURY INTERIOR",
    category: "Residential",
    description: "An elegant residential project showcasing refined materials and sophisticated details. Every element is carefully considered to create a cohesive, luxurious living environment that stands the test of time.",
    location: "Alabang, Muntinlupa",
    year: "2023",
    area: "350 sqm",
    images: [
        "Shore/Scene 1_1.png",
        "Shore/Scene 2_1.png",
        "Shore/Scene 3_1.png",
        "Shore/Scene 4_1.png",
        "Shore/Scene 5_1.png",
        "Shore/Scene 6_1.png",
        "Shore/Scene 7_1.png",
        "Shore/Scene 8_1.png",
        "Shore/Scene 9_1.png",
        "Shore/Scene 10_1.png",
        "Shore/Scene 11.png",
        "Shore/Scene 12.png",
        "Shore/Scene 13.png",
        "Shore/Scene 14.png",
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="bg-white py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-wide mb-6 opacity-60"
          >
            — PORTFOLIO
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 md:mb-6">
                FEATURED PROJECTS
              </h2>
              <div className="h-1 w-16 md:w-24 bg-black" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base opacity-70 leading-relaxed"
            >
              Each project is a collaboration with the client to create meaningful spaces that balance 
              functionality with timeless design aesthetics. Click any project to explore the full story.
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 md:mb-6 bg-neutral-100 rounded-sm shadow-lg group-hover:shadow-2xl transition-shadow duration-500 relative">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="relative w-full h-full"
                >
                  <ImageWithFallback
                    src={project.images[0]}
                    srcList={project.images}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-xs md:text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      VIEW PROJECT
                    </motion.div>
                  </div>
                </motion.div>
                {/* Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs tracking-wider shadow-lg">
                  {project.category}
                </div>
              </div>
              <motion.div 
                className="flex items-start justify-between gap-3 md:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="flex-1">
                  <h3 className="mb-2 text-lg md:text-xl group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <div className="text-xs tracking-wide opacity-60 mb-2">{project.location}</div>
                  <div className="text-sm opacity-70 line-clamp-2">{project.description}</div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300"
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-black group-hover:border-white rotate-45 transition-colors duration-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}