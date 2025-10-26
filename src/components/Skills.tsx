import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

  return (
    <section className="py-32 px-8 bg-gray-100 relative overflow-hidden" id="skills">
      <ParticlesBackground />
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
            return (
              <div
                key={skill.title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-purple-500 transition-colors">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;