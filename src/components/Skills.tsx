import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

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
  return (
    <section className="py-32 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías y herramientas que domino
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="glass glass-hover p-8 rounded-2xl group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li 
                      key={item}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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