import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  Instagram, 
  GraduationCap, 
  Briefcase, 
  Layers,
  Award,
  ChevronRight,
  ExternalLink,
  Zap,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Terminal,
  Globe,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Send,
  Flame,
  Trophy,
  Layout,
  Clock,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:gouthamvs08@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-16 pt-20 pb-16">
      
      {/* 1. HERO SECTION (#home) */}
      <section id="home" className="relative pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FE6807]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-5">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight leading-none text-slate-900">
            Goutham <span className="text-[#FE6807]">V S</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Computer Science Engineering student at <strong className="text-slate-900">Chennai Institute of Technology (CGPA 8.54/10)</strong>. Building responsive AI-powered web applications and managing digital marketing growth for top brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#FE6807] text-white hover:bg-slate-900 transition-all shadow-md flex items-center gap-1.5 hover-glow-card"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#freelancing"
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-all flex items-center gap-1.5 hover-glow-card"
            >
              <Instagram size={15} className="text-[#FE6807]" />
              <span>Freelancing Work</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 text-white hover:bg-[#FE6807] transition-all flex items-center gap-1.5 hover-glow-card"
            >
              <Mail size={15} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* 3 Metric Cards with Pop-Out Glow Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl pt-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm flex flex-col justify-center hover-glow-card cursor-pointer">
              <span className="text-3xl font-extrabold font-heading text-slate-900 block mb-1">
                8.54<span className="text-[#FE6807] text-lg"> /10</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-semibold block">CGPA</span>
              <span className="text-[11px] text-slate-500 font-medium">Computer Science and Engineering</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm flex flex-col justify-center hover-glow-card cursor-pointer">
              <span className="text-3xl font-extrabold font-heading text-slate-900 block mb-1">
                AI <span className="text-[#FE6807]">Lost & Found</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-semibold block">Flagship project</span>
              <span className="text-[11px] text-slate-500 font-medium">Computer Vision & Matching</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm flex flex-col justify-center hover-glow-card cursor-pointer">
              <span className="text-3xl font-extrabold font-heading text-slate-900 block mb-1">
                Creative <span className="text-[#FE6807]">Work</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-600 font-semibold block">2 active clients</span>
              <span className="text-[11px] text-slate-500 font-medium leading-tight">
                @gqubesportsarena and @burnoutsholinganallur
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. ABOUT ME SECTION (#about) */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm hover-glow-card cursor-pointer">
              <div className="p-3 rounded-2xl bg-[#FE6807]/15 text-[#FE6807] w-fit">
                <BrainCircuit size={26} />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">Engineering + Digital Strategy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combining full stack web development with creative marketing strategy to turn user-focused ideas into scalable digital growth.
              </p>
              <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-[#FE6807] font-semibold">
                <Sparkles size={14} />
                <span>Problem Solving Mindset</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">About Me</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-snug">
              Architecting Intelligent & <span className="text-[#FE6807]">Scalable Web Solutions.</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                Computer Science Engineering student at <strong className="text-slate-900">Chennai Institute of Technology</strong> with practical experience building API-driven web applications and actively incorporating AI tools into everyday software engineering workflows.
              </p>
              <p>
                Currently solving real-world challenges faced by hostellers through dedicated web platforms. Having practical experience in not only engineering solutions but also marketing and selling them as services.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
              {[
                'Artificial Intelligence', 'Full Stack Web Dev', 'React & Next.js',
                'REST API Systems', 'Database Architecture', 'Sales Growth Strategy'
              ].map(tag => (
                <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover-glow-card cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6807]"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL ARSENAL / SKILLS SECTION (#skills) */}
      <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="space-y-6">
          
          <div className="space-y-1">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">Technical Arsenal</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Languages, Frameworks & <span className="text-[#FE6807]">Credentials</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              A comprehensive technical toolkit for building intelligent, scalable, and responsive web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Languages */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex items-center gap-2.5 border-b border-slate-200 pb-2.5">
                <Terminal size={18} className="text-[#FE6807]" />
                <h3 className="text-sm font-bold font-heading text-slate-900 uppercase tracking-wider">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java', 'C', 'C++'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend & Web Tech */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex items-center gap-2.5 border-b border-slate-200 pb-2.5">
                <Globe size={18} className="text-[#FE6807]" />
                <h3 className="text-sm font-bold font-heading text-slate-900 uppercase tracking-wider">Frontend & Web Tech</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex items-center gap-2.5 border-b border-slate-200 pb-2.5">
                <Server size={18} className="text-[#FE6807]" />
                <h3 className="text-sm font-bold font-heading text-slate-900 uppercase tracking-wider">Backend & APIs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'REST APIs', 'AI Agents Integration'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex items-center gap-2.5 border-b border-slate-200 pb-2.5">
                <Database size={18} className="text-[#FE6807]" />
                <h3 className="text-sm font-bold font-heading text-slate-900 uppercase tracking-wider">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'MongoDB'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Certificates Subsection */}
          <div className="pt-4 space-y-3">
            <h3 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
              <Award size={18} className="text-[#FE6807]" />
              Verified Certifications (2026)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Generative AI Mastermind', issuer: 'Outskill', year: '2026' },
                { title: 'Web Developer', issuer: 'Zero Networks', year: '2026' },
                { title: 'Generative and Agentic AI', issuer: 'MindLyft AI', year: '2026' }
              ].map(c => (
                <div key={c.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-sm hover-glow-card cursor-pointer">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FE6807] font-bold">{c.year}</span>
                    <ShieldCheck size={16} className="text-[#FE6807]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{c.title}</h4>
                  <p className="text-[11px] text-slate-500">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEARNING JOURNEY & EXPERIENCE TIMELINE (#experience) */}
      <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="space-y-6">
          
          <div className="text-center space-y-1">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">Career & Education</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Learning Journey & <span className="text-[#FE6807]">Experience</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Bachelor of Engineering (B.E) - CSE</h3>
                  <p className="text-xs text-[#FE6807] font-semibold">Chennai Institute of Technology</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 w-fit">
                  2025 – 2029 | Chennai, India
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Cumulative Grade Point Average (CGPA): <strong className="text-slate-900">8.54 / 10</strong>. Focusing on core computer science fundamentals, web systems, and AI integration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm hover-glow-card cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Full Stack Developer</h3>
                  <p className="text-xs text-[#FE6807] font-semibold">Zero Networks (Online)</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 w-fit">
                  05/2026 – 06/2026
                </span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Developed and delivered a responsive AI-powered web application using Next.js, React.js, and Tailwind CSS.</li>
                <li>Built reusable UI components optimized for desktop and mobile performance.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION (#projects) */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="space-y-6">
          
          <div className="space-y-1">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">Featured Work</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              AI-Powered <span className="text-[#FE6807]">Lost & Found Platform</span>
            </h2>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 shadow-sm hover-glow-card">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE6807]">Flagship AI Project</span>
              
              <div className="flex items-center gap-2">
                {['overview', 'features', 'ai'].map(t => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                      activeTab === t 
                        ? 'bg-[#FE6807] text-white' 
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-3 text-xs text-slate-600">
                <p>
                  A centralized web application designed for reporting lost and found belongings using structured, object-specific questions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover-glow-card">
                    <strong className="block text-slate-900 text-xs font-bold">Structured Prompts</strong>
                    <span className="text-[11px] text-slate-500">Tailored questions per category.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover-glow-card">
                    <strong className="block text-slate-900 text-xs font-bold">Auto Matching</strong>
                    <span className="text-[11px] text-slate-500">Correlates lost & found entries.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover-glow-card">
                    <strong className="block text-slate-900 text-xs font-bold">AI Vision</strong>
                    <span className="text-[11px] text-slate-500">Extracts item details from photos.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2 hover-glow-card">
                  <CheckCircle2 size={16} className="text-[#FE6807] mt-0.5" />
                  <span>Centralized reporting system replacing messy message boards.</span>
                </li>
                <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2 hover-glow-card">
                  <CheckCircle2 size={16} className="text-[#FE6807] mt-0.5" />
                  <span>Automated report matching based on item attributes and location.</span>
                </li>
                <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2 hover-glow-card">
                  <CheckCircle2 size={16} className="text-[#FE6807] mt-0.5" />
                  <span>AI photo analysis automatically answering required questions.</span>
                </li>
                <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2 hover-glow-card">
                  <CheckCircle2 size={16} className="text-[#FE6807] mt-0.5" />
                  <span>Responsive UI optimized for desktop and mobile phones.</span>
                </li>
              </ul>
            )}

            {activeTab === 'ai' && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-200 hover-glow-card">
                <span className="text-[#FE6807] font-bold">// AI Vision Metadata Extraction Payload</span>
                <p>
                  &#123; "category": "Electronics", "object": "Laptop", "brand": "Apple", "color": "Space Gray", "confidence": 0.98 &#125;
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
              {['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'AI Integration'].map(t => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-800">
                  {t}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. FREELANCING & BRAND MANAGEMENT SECTION (#freelancing) */}
      <section id="freelancing" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="space-y-6">
          
          <div className="space-y-1">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">Freelancing Showcase</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Instagram Brand <span className="text-[#FE6807]">Management</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Handling social media strategy, reel content creation, visual branding, and audience engagement for top sports and fitness clients in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* G-Qube Sports Arena */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm hover-glow-card">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Trophy size={18} className="text-[#FE6807]" />
                      G-Qube Sports Arena
                    </h3>
                    <a 
                      href="https://www.instagram.com/gqubesportsarena" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#FE6807] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>@gqubesportsarena</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold">Sports Facility</span>
                </div>

                <p className="text-xs text-slate-600">
                  Full Instagram account handling: tournament reel edits, turf booking promos, and direct local engagement.
                </p>
              </div>

              <a
                href="https://www.instagram.com/gqubesportsarena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FE6807] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-900 transition-colors shadow-xs"
              >
                <Instagram size={15} />
                <span>Visit Instagram Page</span>
              </a>
            </div>

            {/* Burnout Sholinganallur */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm hover-glow-card">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Flame size={18} className="text-[#FE6807]" />
                      Burnout Sholinganallur
                    </h3>
                    <a 
                      href="https://www.instagram.com/burnoutsholinganallur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#FE6807] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>@burnoutsholinganallur</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold">Fitness Studio</span>
                </div>

                <p className="text-xs text-slate-600">
                  Gym community growth: workout reels, member spotlight content, membership drive promo campaigns.
                </p>
              </div>

              <a
                href="https://www.instagram.com/burnoutsholinganallur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FE6807] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-900 transition-colors shadow-xs"
              >
                <Instagram size={15} />
                <span>Visit Instagram Page</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 7. LET'S CONNECT & CONTACT SECTION (#contact) */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[#FE6807] uppercase tracking-[0.25em] text-xs font-bold">Contact</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 uppercase">
              Let's <span className="text-[#FE6807]">Connect</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Open for opportunities in Full Stack Web Development, AI Integration, and Digital Brand Growth.
            </p>

            <div className="space-y-2.5 pt-2">
              <a 
                href="mailto:gouthamvs08@gmail.com"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 hover-glow-card shadow-xs"
              >
                <Mail size={18} className="text-[#FE6807]" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">gouthamvs08@gmail.com</span>
              </a>

              <a 
                href="tel:+919345946464"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 hover-glow-card shadow-xs"
              >
                <Phone size={18} className="text-[#FE6807]" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">+91 9345946464</span>
              </a>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs hover-glow-card">
                <MapPin size={18} className="text-[#FE6807]" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover-glow-card">
              <h3 className="text-base font-bold font-heading text-slate-900">Send a Message</h3>

              {submitted ? (
                <div className="p-5 rounded-xl bg-white border border-slate-200 text-center space-y-2">
                  <CheckCircle2 size={32} className="text-[#FE6807] mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900">Mail Client Dispatched</h4>
                  <p className="text-xs text-slate-600">
                    Your message draft has been directed to <strong>gouthamvs08@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 outline-none focus:border-[#FE6807] transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 outline-none focus:border-[#FE6807] transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 outline-none focus:border-[#FE6807] transition-colors"
                  />
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Message content..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 outline-none focus:border-[#FE6807] transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#FE6807] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-900 transition-colors shadow-sm"
                  >
                    <Send size={15} />
                    <span>Send Message to gouthamvs08@gmail.com</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
