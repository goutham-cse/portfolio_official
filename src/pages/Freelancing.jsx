import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Instagram, 
  Sparkles, 
  TrendingUp, 
  Users, 
  ExternalLink, 
  Zap, 
  Award, 
  BarChart3, 
  Target, 
  Heart, 
  Share2, 
  MessageCircle,
  Flame,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Freelancing = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const clients = [
    {
      name: 'G-Qube Sports Arena',
      handle: '@gqubesportsarena',
      url: 'https://www.instagram.com/gqubesportsarena',
      category: 'Sports, Turf & Esports Arena',
      icon: Trophy,
      tagline: 'Premium Sports Facility & Community Hub',
      metrics: [
        { label: 'Follower Growth', value: '+350%' },
        { label: 'Content Strategy', value: 'Reels & Event Covers' },
        { label: 'Engagement Rate', value: 'High Interaction' }
      ],
      deliverables: [
        'End-to-end Instagram content calendar & posting schedule.',
        'High-impact video reels for tournament highlights & turf bookings.',
        'Targeted local audience engagement in Chennai.',
        'Direct conversion from social media posts into sports arena bookings.'
      ],
      color: '#E1306C'
    },
    {
      name: 'Burnout Sholinganallur',
      handle: '@burnoutsholinganallur',
      url: 'https://www.instagram.com/burnoutsholinganallur',
      category: 'Fitness, Gym & Wellness Community',
      icon: Flame,
      tagline: 'High-Energy Fitness & Transformation Studio',
      metrics: [
        { label: 'Brand Awareness', value: '100K+ Reach' },
        { label: 'Sales Growth', value: 'Direct Inquiries' },
        { label: 'Visual Identity', value: 'Aesthetic Branding' }
      ],
      deliverables: [
        'Creative workout reel editing, member spotlight posts & stories.',
        'Promotions for seasonal gym memberships & personal training.',
        'Consistent visual aesthetic aligned with modern fitness trends.',
        'Driving foot traffic & sales conversions through targeted Instagram campaigns.'
      ],
      color: '#F77737'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Header Banner Line */}
      <div className="space-y-4 border-b border-white/10 pb-8 relative">
        <div className="glow-line-top absolute -top-4 left-0 w-full"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase glass-badge">
          <Instagram size={14} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
          Digital Marketing & Media Growth
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Freelancing & <span className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}>Brand Management</span>
        </h1>
        <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
          isLight ? 'text-stone-700' : 'text-gray-300'
        }`}>
          Transforming creative content into measurable sales growth. Handling full-spectrum Instagram page management, visual branding, and audience strategy for established sports & fitness brands.
        </p>
      </div>

      {/* OVERVIEW STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-panel space-y-2 border border-white/15">
          <div className={`p-2.5 rounded-xl w-fit ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <TrendingUp size={22} />
          </div>
          <h3 className="text-2xl font-extrabold font-heading">Sales-Driven Growth</h3>
          <p className="text-xs opacity-85">Connecting content directly to booking & membership growth.</p>
        </div>

        <div className="p-6 rounded-3xl glass-panel space-y-2 border border-white/15">
          <div className={`p-2.5 rounded-xl w-fit ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <Instagram size={22} />
          </div>
          <h3 className="text-2xl font-extrabold font-heading">Full Instagram Mgmt</h3>
          <p className="text-xs opacity-85">Content design, video editing, stories, and DM funnel management.</p>
        </div>

        <div className="p-6 rounded-3xl glass-panel space-y-2 border border-white/15">
          <div className={`p-2.5 rounded-xl w-fit ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <Users size={22} />
          </div>
          <h3 className="text-2xl font-extrabold font-heading">Local Brand Scale</h3>
          <p className="text-xs opacity-85">Optimized for Chennai target demographic engagement.</p>
        </div>
      </div>

      {/* CLIENT SHOWCASE CARDS */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${
            isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
          }`}>
            <BarChart3 size={24} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">Managed Instagram Accounts</h2>
            <p className="text-xs sm:text-sm opacity-75">Click to view official live Instagram pages</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clients.map((client, idx) => {
            const ClientIcon = client.icon;
            return (
              <motion.div
                key={client.handle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-3xl glass-panel space-y-6 relative border border-white/15 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Account Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <ClientIcon size={20} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
                        <h3 className="text-2xl font-extrabold font-heading">{client.name}</h3>
                      </div>
                      <a 
                        href={client.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm font-semibold flex items-center gap-1 hover:underline ${
                          isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                        }`}
                      >
                        <span>{client.handle}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10">
                      {client.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm opacity-85 font-medium">
                    {client.tagline}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 py-2">
                    {client.metrics.map(m => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className={`block text-sm font-bold ${
                          isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                        }`}>
                          {m.value}
                        </span>
                        <span className="text-[10px] opacity-75">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold opacity-60">Scope of Work</h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {client.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 opacity-90">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                            isLight ? 'bg-[#B81104]' : 'bg-[#FE6807]'
                          }`} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 border-t border-white/10">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isLight
                        ? 'bg-[#B81104] text-white hover:bg-[#960e03]'
                        : 'bg-[#FE6807] text-white hover:bg-[#e05a00] shadow-glow-orange'
                    }`}
                  >
                    <Instagram size={16} />
                    <span>Visit {client.handle} on Instagram</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
