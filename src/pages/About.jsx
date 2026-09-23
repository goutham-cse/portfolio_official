import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  BookOpen
} from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-3 border-b border-white/10 pb-6 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FE6807]/15 text-[#FE6807] border border-[#FE6807]/30">
          <Sparkles size={14} />
          About & Career Background
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight uppercase">
          About <span className="text-[#FE6807]">Goutham V S</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
          Computer Science Engineering Student, Full Stack Developer, and Digital Growth Strategist based in Chennai, India.
        </p>
      </div>

      {/* Summary */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-8 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#FE6807]/20 text-[#FE6807]">
              <Target size={20} />
            </div>
            <h2 className="text-lg font-bold font-heading">Professional Summary</h2>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Computer Science Engineering student with hands-on experience building responsive, API-driven web applications and actively incorporating AI into day-to-day software development workflows.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Possesses a strong problem-solving mindset with a focus on developing practical solutions to real-world challenges—currently building solutions to solve key problems faced by hostellers. Having practical experience in not only engineering applications but also marketing and selling them as services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#FE6807]" />
              <span className="text-xs font-semibold text-gray-200">User-Centric Architecture</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#FE6807]" />
              <span className="text-xs font-semibold text-gray-200">AI Integration & Automation</span>
            </div>
          </div>
        </div>

        {/* Mindset Card */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-2.5 rounded-xl bg-[#FE6807]/20 text-[#FE6807] w-fit">
              <TrendingUp size={22} />
            </div>
            <h3 className="text-base font-bold font-heading">Creative & Growth Mindset</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              "Having a general interest in creative roles, I'm able to seamlessly integrate creativity into my work and transform creative ideas into sales growth."
            </p>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Tech + Marketing Synergy
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#FE6807]/20 text-[#FE6807]">
            <GraduationCap size={22} />
          </div>
          <h2 className="text-xl font-bold font-heading">Education</h2>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <h3 className="text-base font-bold">Bachelor of Engineering (B.E) - Computer Science Engineering</h3>
              <p className="text-xs text-[#FE6807] font-semibold">Chennai Institute of Technology</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span className="flex items-center gap-1"><Calendar size={13} /> 2025 – 2029</span>
              <span className="flex items-center gap-1"><MapPin size={13} /> Chennai, India</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 text-xs">
            <BookOpen size={16} className="text-[#FE6807]" />
            <span className="font-bold text-white">Cumulative GPA (CGPA): 8.54 / 10</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#FE6807]/20 text-[#FE6807]">
            <Briefcase size={22} />
          </div>
          <h2 className="text-xl font-bold font-heading">Professional Experience</h2>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <h3 className="text-base font-bold">Full Stack Developer</h3>
              <p className="text-xs text-[#FE6807] font-semibold">Zero Networks (Online)</p>
            </div>
            <span className="text-xs text-gray-300">05/2026 – 06/2026</span>
          </div>

          <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Developed and delivered a responsive AI-powered web application using Next.js, React.js, and Tailwind CSS.</li>
            <li>Built responsive and reusable UI components optimized for desktop and mobile devices.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};
