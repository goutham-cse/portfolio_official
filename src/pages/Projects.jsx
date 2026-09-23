import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Search, 
  Image as ImageIcon, 
  ShieldCheck, 
  ArrowRight,
  Code,
  Zap,
  Layout,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState('overview');

  const techStack = [
    'Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'AI Integration', 'REST APIs', 'Node.js'
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Page Header with Glowing Line */}
      <div className="space-y-4 border-b border-white/10 pb-8 relative">
        <div className="glow-line-top absolute -top-4 left-0 w-full"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase glass-badge">
          <BrainCircuit size={14} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
          Featured Software Projects
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Projects & <span className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}>AI Innovation</span>
        </h1>
        <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
          isLight ? 'text-stone-700' : 'text-gray-300'
        }`}>
          Showcasing practical, user-focused web platforms built with AI-powered computer vision and modern full-stack web technologies.
        </p>
      </div>

      {/* FEATURED CASE STUDY: AI-POWERED LOST & FOUND PLATFORM */}
      <div className="p-6 sm:p-10 rounded-3xl glass-panel space-y-8 relative overflow-hidden border border-white/15">
        
        {/* Header Badge & Title */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isLight ? 'bg-[#B81104]/15 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
              }`}>
                Flagship Project
              </span>
              <span className="text-xs font-semibold opacity-75">Production Grade</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              AI-Powered Lost & Found Platform
            </h2>
          </div>

          {/* Interactive Tab Controls */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
            {[
              { id: 'overview', label: 'Overview', icon: Layout },
              { id: 'features', label: 'Key Features', icon: Zap },
              { id: 'ai', label: 'AI Image Analysis', icon: Cpu },
            ].map(tab => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? isLight
                        ? 'bg-[#B81104] text-white shadow-md'
                        : 'bg-[#FE6807] text-white shadow-glow-orange'
                      : isLight
                        ? 'text-stone-700 hover:bg-stone-200'
                        : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <TabIcon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-sm sm:text-base leading-relaxed opacity-90">
                  A centralized digital platform designed to solve the friction of lost belongings across campuses and public facilities. By replacing unstructured message boards with intelligent, object-specific questions, the system streamlines item registration and accelerates recovery times.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="font-bold text-sm">Structured Questionnaire</h4>
                    <p className="text-xs opacity-75">Category & object-specific detail prompts for accurate logs.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="font-bold text-sm">Automated Matching</h4>
                    <p className="text-xs opacity-75">Algorithmic matching of lost reports against found item entries.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="font-bold text-sm">AI Computer Vision</h4>
                    <p className="text-xs opacity-75">Instant metadata extraction directly from uploaded photos.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
                  <li className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 size={20} className={`mt-0.5 ${isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}`} />
                    <div>
                      <strong className="block font-bold">Centralized Item Reporting</strong>
                      <span className="text-xs opacity-75">Structured, object-specific questions tailored to item types (electronics, IDs, wallets, keys).</span>
                    </div>
                  </li>
                  <li className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 size={20} className={`mt-0.5 ${isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}`} />
                    <div>
                      <strong className="block font-bold">Automatic Report Matching</strong>
                      <span className="text-xs opacity-75">Instantly correlates lost item reports with found items based on location, time window, and attributes.</span>
                    </div>
                  </li>
                  <li className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 size={20} className={`mt-0.5 ${isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}`} />
                    <div>
                      <strong className="block font-bold">Reduced Manual Entry</strong>
                      <span className="text-xs opacity-75">Pre-fills questionnaire forms using visual recognition AI, minimizing friction for reporters.</span>
                    </div>
                  </li>
                  <li className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 size={20} className={`mt-0.5 ${isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}`} />
                    <div>
                      <strong className="block font-bold">Mobile Responsive UI</strong>
                      <span className="text-xs opacity-75">Optimized for quick reporting on mobile smartphones while on the move.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    isLight ? 'bg-[#B81104]/15 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                  }`}>
                    <ImageIcon size={22} />
                  </div>
                  <h3 className="text-lg font-bold">AI Image Analysis Engine</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  Integrated computer vision AI models process uploaded photographs of found belongings. The model automatically extracts key visual attributes (color, brand logo, object category, serial code, physical condition) and pre-populates required field entries.
                </p>
                <div className="p-4 rounded-xl bg-black/20 text-xs font-mono border border-white/10 space-y-1">
                  <span className="text-[#FE6807] font-semibold">// AI Extraction Payload Sample</span>
                  <p className="opacity-80">
                    &#123; "category": "Electronics", "brand": "Apple", "color": "Space Gray", "object": "MacBook Pro", "confidence": 0.98 &#125;
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <span className="text-xs uppercase tracking-wider font-bold opacity-60">Technologies Used</span>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span 
                key={tech} 
                className={`px-3 py-1 rounded-xl text-xs font-semibold glass-badge ${
                  isLight ? 'text-stone-800' : 'text-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
