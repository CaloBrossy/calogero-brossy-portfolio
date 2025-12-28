import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer ref={footerRef} className="pt-16 border-t border-gray-200 text-center">
      <motion.p 
        className="text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      >
        © 2025 Calogero Brossy. All rights reserved.
      </motion.p>
    </footer>
  );
};

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-32 px-8 bg-gray-100 relative overflow-hidden" id="contact">
      <ParticlesBackground />
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}>
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Contact</span>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight lowercase mb-6">
            let's work together
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-gray-600 text-lg mb-16 leading-relaxed">
          I am available for freelance projects, collaborations, or full-time positions. Please feel free to contact me through any of these channels.
          </p>
          
          <div className="inline-block mb-12 relative">
            <motion.a 
              href="mailto:contact@calogerobrossy.com"
              className="text-3xl md:text-4xl font-semibold text-black hover:text-gray-600 transition-colors duration-300 border-b-2 border-black/30 hover:border-black relative z-10 inline-block"
              whileHover={{ scale: 1.08 }}
            >
              contact@calogerobrossy.com
            </motion.a>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-500/30"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ 
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{ duration: 0.8, times: [0, 0.5, 1] }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-500/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ 
                scale: [1, 1.8, 2.5],
                opacity: [0.3, 0.2, 0]
              }}
              transition={{ duration: 0.8, delay: 0.1, times: [0, 0.5, 1] }}
            />
          </div>
          
          <div className="flex gap-6 mb-20">
            <motion.a 
              href="https://github.com/CaloBrossy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/calogero-brossy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/calobrossy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="mailto:contact@calogerobrossy.com"
              className="text-gray-400 hover:text-black transition-colors duration-300 relative"
              whileHover={{ scale: 1.08 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              >
                <Mail className="h-6 w-6" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default Contact;