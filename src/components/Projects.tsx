import { ExternalLink } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "ProConnection",
    description: "Plataforma SaaS integral para psicólogos con autofacturación AFIP, chatbot automatizado de WhatsApp para recordatorios, y optimización SEO en Google Maps.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "AFIP API", "WhatsApp Business API"],
    images: [
      "/proconnection_landing.png",
      "/proconnection_dashbord.png"
    ],
    links: {
      github: "#",
      live: "https://www.proconnection.me",
    },
  },
  {
    title: "Elevate AI Agency",
    description: "Plataforma SaaS empresarial con panel administrativo avanzado, sistema de gestión de archivos y dashboard analítico de impresiones en tiempo real.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS S3", "Analytics"],
    images: [
      "/elevate_landing.png",
      "/elevateaigencydashboard.png"
    ],
    links: {
      github: "#",
      live: "https://www.elevateaigency.com",
    },
  },
  {
    title: "Así de Simple",
    description: "Landing page con simulador crediticio en tiempo real, integración de base de datos y sistema automatizado de captura de leads para equipos comerciales.",
    tech: ["PHP", "JavaScript", "MySQL", "Email Integration"],
    images: [
      "/asidesimple_landing.png",
    ],
    links: {
      github: "#",
      live: "https://asidesimple.ar",
    },
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const { offset: cardOffset } = useParallax({ speed: 0.1, elementRef: cardRef });
  const { offset: imageOffset } = useParallax({ speed: 0.3, elementRef: cardRef });
  const { offset: overlayOffset } = useParallax({ speed: 0.2, elementRef: cardRef });
  const { offset: glowOffset } = useParallax({ speed: 0.4, elementRef: cardRef });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group relative"
      style={{ transform: `translateY(${cardOffset}px)` }}
      initial={{ height: 0, opacity: 0 }}
      animate={isInView ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Efecto de brillo sutil */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none rounded-lg opacity-0 group-hover:opacity-100"
        style={{ transform: `translateY(${glowOffset}px)` }}
      />
      
      <div className="relative h-64 overflow-hidden bg-gray-900 group">
        {/* Contenedor de imágenes con carousel */}
        <motion.div 
          className="absolute inset-0 flex"
          animate={{
            x: `-${currentImageIndex * 100}%`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${project.images.length * 100}%` }}
        >
          {project.images.map((image, idx) => (
            <img 
              key={idx}
              src={image} 
              alt={`${project.title} - ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ 
                transform: `translateY(${imageOffset}px)`,
                width: `${100 / project.images.length}%`
              }}
            />
          ))}
        </motion.div>
        
        {/* Overlay oscuro que se aclara en hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500"
          style={{ transform: `translateY(${overlayOffset}px)` }}
        />
        
        {/* Indicadores de imagen (dots) - solo si hay más de una imagen */}
        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-purple-500 w-6' : 'bg-gray-600'
                }`}
                aria-label={`Imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <motion.span 
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 border border-gray-600 group-hover:border-purple-500/50 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <motion.a 
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 rounded-lg text-sm font-medium group/btn relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">View Project</span>
            <motion.span
              className="absolute bottom-0 left-0 h-px bg-white"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const bgRef = useRef<HTMLDivElement>(null);
  const { offset: bgOffset } = useParallax({ speed: 0.3, elementRef: bgRef });

  return (
    <section ref={bgRef} className="py-32 px-8 bg-gray-900 relative overflow-hidden" id="projects">
      <motion.div 
        className="absolute inset-0"
        style={{ transform: `translateY(${bgOffset}px)` }}
      >
        <ParticlesBackground />
      </motion.div>
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}>
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Work</span>
            <div className="h-px w-16 bg-gray-700" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight lowercase mb-6">
            selected projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;