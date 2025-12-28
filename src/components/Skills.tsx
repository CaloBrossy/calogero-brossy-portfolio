import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["SQL", "NoSQL", "Prisma", "Redis"],
  },
  {
    icon: Layout,
    title: "UI/UX",
    items: ["Figma", "Shadcn", "Responsive", "Animations"],
  },
  {
    icon: Zap,
    title: "Tools",
    items: ["Git", "Docker", "VS Code", "Postman"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Responsive", "PWA", "Mobile-first"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getRowIndex = (index: number) => Math.floor(index / 3);

  return (
    <section className="py-32 px-8 bg-gray-100 relative overflow-hidden" id="skills">
      <ParticlesBackground />
      {/* Fondo dinámico decorativo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-20 left-10 w-64 h-px bg-purple-500/20 rotate-45" />
        <div className="absolute bottom-20 right-10 w-64 h-px bg-purple-500/20 -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-500/10 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-500/10 rounded-full" />
      </motion.div>
      
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}>
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Experience</span>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight lowercase mb-6">
            skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const rowIndex = getRowIndex(index);
            return (
              <motion.div
                key={skill.title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: rowIndex * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  rotateY: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-2 rounded-lg bg-gray-900 group-hover:bg-purple-500 transition-colors"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                      scale: 1.1
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-black">{skill.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li 
                      key={item}
                      className="text-gray-600 flex items-center gap-2 text-sm"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;