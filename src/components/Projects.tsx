import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y sistema de prioridades.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard interactivo para visualización de datos con gráficos en tiempo real y exportación de reportes.",
    tech: ["React", "D3.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
];

const Projects = () => {
  return (
    <section className="py-32 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Proyectos Destacados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de mis mejores trabajos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass glass-hover rounded-2xl overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass glass-hover flex-1"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="glass glass-hover flex-1"
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;