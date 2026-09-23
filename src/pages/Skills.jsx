import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const skillCategories = [
    {
      title: 'Languages',
      icon: Terminal,
      skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java', 'C', 'C++'],
      color: isLight ? 'text-[#B81104]' : 'text-[#FE6807]',
    },
    {
      title: 'Frontend & Web Tech',
      icon: Globe,
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: isLight ? 'text-[#B81104]' : 'text-[#FE6807]',
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'AI Agents Integration'],
      color: isLight ? 'text-[#B81104]' : 'text-[#FE6807]',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: isLight ? 'text-[#B81104]' : 'text-[#FE6807]',
    }
  ];

  const certificates = [
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      year: '2026',
      badge: 'GenAI & LLM Workflows',
    },
    {
      title: 'Web Developer',
      issuer: 'Zero Networks',
      year: '2026',
      badge: 'Full Stack Web App Dev',
    },
    {
      title: 'Generative and Agentic AI',
      issuer: 'MindLyft AI',
      year: '2026',
      badge: 'Agentic Workflows & Automation',
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Header Banner Line */}
      <div className="space-y-4 border-b border-white/10 pb-8 relative">
        <div className="glow-line-top absolute -top-4 left-0 w-full"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase glass-badge">
          <Code2 size={14} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
          Technical Stack & Credentials
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Skills & <span className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}>Certifications</span>
        </h1>
        <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
          isLight ? 'text-stone-700' : 'text-gray-300'
        }`}>
          A comprehensive breakdown of engineering languages, web technologies, backend frameworks, databases, and industry certifications.
        </p>
      </div>

      {/* SKILLS CATEGORIES GRID */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <Cpu size={24} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">Technical Skills</h2>
            <p className="text-xs sm:text-sm opacity-75">Languages, Frameworks, and Tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-panel space-y-4 border border-white/15"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    isLight ? 'bg-[#B81104]/15 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 glass-badge transition-all hover:scale-105 ${
                        isLight ? 'text-stone-800' : 'text-slate-100'
                      }`}
                    >
                      <CheckCircle2 size={14} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <Award size={24} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">Certificates</h2>
            <p className="text-xs sm:text-sm opacity-75">Verified Professional Certifications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-panel space-y-4 relative overflow-hidden border border-white/15 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                    isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                  }`}>
                    {cert.year}
                  </span>
                  <ShieldCheck size={18} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
                </div>

                <h3 className="text-lg font-bold font-heading leading-snug">
                  {cert.title}
                </h3>
                
                <p className={`text-sm font-semibold ${
                  isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                }`}>
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs opacity-80">
                <span>{cert.badge}</span>
                <Sparkles size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
