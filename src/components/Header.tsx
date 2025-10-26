import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/80 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
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
        <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-300 transition-colors relative group"
          >
            <span className="text-gray-500 font-mono text-sm">01.</span>
            <span className="ml-2">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className="text-white hover:text-gray-300 transition-colors relative group"
          >
            <span className="text-gray-500 font-mono text-sm">02.</span>
            <span className="ml-2">Skills</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-gray-300 transition-colors relative group"
          >
            <span className="text-gray-500 font-mono text-sm">03.</span>
            <span className="ml-2">Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gray-300 transition-colors relative group"
          >
            <span className="text-gray-500 font-mono text-sm">04.</span>
            <span className="ml-2">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
