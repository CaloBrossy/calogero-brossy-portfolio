import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

// Componente para texto con efecto hover letra por letra
const LetterByLetterText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300"
          style={{
            transitionDelay: isHovered ? `${index * 50}ms` : `${index * 20}ms`,
            color: isHovered ? '#a855f7' : undefined,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="calogero.jpg" 
          alt="Calogero Brossy"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 animate-slide-up">
        {/* Top Label with Line */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Hello</span>
          <div className="h-px w-16 bg-gray-600" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 text-white">
          <span className="block lowercase">My name is</span>
          <span className="block font-bold  hover:text-purple-500 transition-colors duration-300">Calogero Brossy</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12">
          Fullstack Developer creating exceptional web experiences with React, TypeScript 
          and modern technologies. Specialized in modern interfaces and scalable architectures.
        </p>

        {/* Small Label Bottom */}
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-gray-600" />
          <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Available for projects</span>
        </div>
      </div>

      {/* Left Sidebar - Social Icons */}
      <div className="fixed left-8 bottom-8 z-20 flex flex-col gap-6 animate-slide-in" style={{ animationDelay: "0.5s" }}>
        <a 
          href="https://github.com/CaloBrossy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Github className="h-5 w-5" />
        </a>
        <a 
          href="www.linkedin.com/in/calogero-brossy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>

      {/* Right Sidebar - Email Rotated */}
      <div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-20 writing-vertical-rl"
        style={{ 
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }}
      >
        <a 
          href="mailto:calubrossy@gmail.com"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-widest uppercase"
        >
          calubrossy@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Hero;