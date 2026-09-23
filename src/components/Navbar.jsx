import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Skills', path: '/skills', sectionId: 'skills' },
    { name: 'Projects', path: '/projects', sectionId: 'projects' },
    { name: 'Freelancing', path: '/freelancing', sectionId: 'freelancing' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Name Brand (G.V.S removed as requested) */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-base font-extrabold font-heading text-slate-900 tracking-tight group-hover:text-[#FE6807] transition-colors">
            Goutham V S
          </span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-[#FE6807] bg-[#FE6807]/10 border border-[#FE6807]/30'
                    : 'text-slate-600 hover:text-[#FE6807] hover:bg-slate-100'
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions: CTA Email Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FE6807] text-white hover:bg-slate-900 transition-all shadow-sm"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} />
          </NavLink>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1.5 mt-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#FE6807] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={14} className="opacity-60" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
