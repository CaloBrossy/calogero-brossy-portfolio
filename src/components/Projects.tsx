import { ExternalLink } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const projects = [
  {
    title: "ProConnection",
    description: "Plataforma SaaS integral para psicólogos con autofacturación AFIP, chatbot automatizado de WhatsApp para recordatorios, y optimización SEO en Google Maps.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "AFIP API", "WhatsApp Business API"],
    images: [
      "/proconecctionlanding.png",
      "/PROCONECTIONDASHBOARD.png"
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
      "/ELEVATEAIGENCYLANDING.png",
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
      "/asidesimple.png",
    ],
    links: {
      github: "#",
      live: "https://asidesimple.ar",
    },
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 animate-slide-up group relative"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Efecto de brillo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none rounded-lg opacity-0 group-hover:opacity-100" />
      
      <div className="relative h-64 overflow-hidden bg-gray-900 group">
        {/* Contenedor de imágenes */}
        <div className="absolute inset-0">
          {project.images.map((image, idx) => (
            <img 
              key={idx}
              src={image} 
              alt={`${project.title} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } group-hover:opacity-100`}
            />
          ))}
        </div>
        
        {/* Overlay oscuro que se aclara en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500" />
        
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
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 border border-gray-600 group-hover:border-purple-500/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 rounded-lg text-sm font-medium group/btn"
          >
            <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-32 px-8 bg-gray-900 relative overflow-hidden" id="projects">
      <ParticlesBackground />
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