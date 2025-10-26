import { User, Briefcase, Heart } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const aboutData = [
  {
    icon: User,
    title: "Personal",
    items: [
      "From Bahía Blanca, Argentina",
      "Passionate developer & designer",
      "Available for remote work",
      "Love creating beautiful experiences"
    ]
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "3+ years of fullstack development",
      "React, TypeScript & modern frameworks",
      "Worked on e-commerce & SaaS projects",
      "Looking for new challenges"
    ]
  },
  {
    icon: Heart,
    title: "Interests",
    items: [
      "React & modern JavaScript",
      "Design systems & UI/UX",
      "Open source enthusiast",
      "Always learning something new"
    ]
  }
];

const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-32 px-8 bg-gray-100 relative overflow-hidden" id="about">
      <ParticlesBackground />
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}>
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-light">
              About
            </span>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight lowercase mb-6">
            about me
          </h2>
        </div>

        <div className="max-w-3xl mb-16">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            I am a fullstack developer with a passion for creating exceptional web experiences. 
            I am a quick learner and I am always looking to improve my skills and take on new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-purple-500 transition-colors">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {item.items.map((bullet, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-600 flex items-center gap-2 text-sm"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      {bullet}
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

export default AboutMe;