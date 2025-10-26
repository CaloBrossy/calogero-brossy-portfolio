import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-5xl mx-auto text-center z-10 animate-slide-up">
        <div className="inline-block mb-6 px-6 py-2 glass rounded-full">
          <span className="text-sm text-muted-foreground">👋 Disponible para proyectos</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient glow-effect">Calogero Brossy</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Fullstack Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Creando experiencias web excepcionales con React, TypeScript y las últimas tecnologías.
          Especializado en interfaces modernas y arquitecturas escalables.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="glass glass-hover group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="glass glass-hover"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass glass-hover p-3 rounded-full inline-flex"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass glass-hover p-3 rounded-full inline-flex"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:calogero@example.com"
            className="glass glass-hover p-3 rounded-full inline-flex"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;