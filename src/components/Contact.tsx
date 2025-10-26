import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient">¿Trabajamos Juntos?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance, colaboraciones o posiciones a tiempo completo.
            No dudes en contactarme.
          </p>
          
          <div className="glass glass-hover p-8 rounded-2xl inline-block mb-12">
            <a 
              href="mailto:calogero.brossy@example.com"
              className="text-2xl font-semibold text-gradient hover:opacity-80 transition-opacity"
            >
              calogero.brossy@example.com
            </a>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full inline-flex hover:scale-110 transition-transform"
            >
              <Github className="h-7 w-7" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full inline-flex hover:scale-110 transition-transform"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full inline-flex hover:scale-110 transition-transform"
            >
              <Twitter className="h-7 w-7" />
            </a>
            <a 
              href="mailto:calogero@example.com"
              className="glass glass-hover p-4 rounded-full inline-flex hover:scale-110 transition-transform"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      
      <footer className="mt-32 pt-8 border-t border-white/10 text-center text-muted-foreground">
        <p>© 2025 Calogero Brossy. Diseñado y desarrollado con ❤️</p>
      </footer>
    </section>
  );
};

export default Contact;