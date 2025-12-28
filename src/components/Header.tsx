import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NavButton = ({ 
  section, 
  number, 
  label, 
  activeSection, 
  onClick 
}: { 
  section: string; 
  number: string; 
  label: string; 
  activeSection: string; 
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeSection === section;
  
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-gray-300 transition-colors relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span 
        className="text-gray-500 font-mono text-sm"
        animate={{ opacity: isActive ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {number}.
      </motion.span>
      <span className="ml-2">{label}</span>
      <motion.span 
        className="absolute bottom-0 left-0 h-px bg-white"
        initial={{ width: 0 }}
        animate={{ width: isActive || isHovered ? '100%' : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.5, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? "bg-gray-900/80 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
      style={{ opacity: isScrolled ? 1 : 0.5 }}
      animate={{ 
        backgroundColor: isScrolled ? "rgba(17, 24, 39, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-3xl font-bold text-white cursor-pointer hover:text-purple-500 transition-colors"
          onClick={() => scrollToSection('hero')}
        >
          C.B.
        </div>

        {/* Navigation */}
        
        <nav className="hidden md:flex items-center gap-12">
          <NavButton 
            section="about"
            number="01"
            label="About"
            activeSection={activeSection}
            onClick={() => scrollToSection('about')}
          />
          <NavButton 
            section="skills"
            number="02"
            label="Skills"
            activeSection={activeSection}
            onClick={() => scrollToSection('skills')}
          />
          <NavButton 
            section="projects"
            number="03"
            label="Projects"
            activeSection={activeSection}
            onClick={() => scrollToSection('projects')}
          />
          <NavButton 
            section="contact"
            number="04"
            label="Contact"
            activeSection={activeSection}
            onClick={() => scrollToSection('contact')}
          />
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
