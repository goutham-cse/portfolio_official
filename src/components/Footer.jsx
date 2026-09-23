import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 pt-12 pb-8 border-t border-slate-200 relative overflow-hidden text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-2 lg:col-span-2">
            <NavLink to="/" className="text-xl font-extrabold font-heading text-slate-900 tracking-tight inline-block">
              Goutham <span className="text-[#FE6807]">V S</span>
            </NavLink>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Official portfolio of Goutham V S. CSE student at Chennai Institute of Technology (CGPA 8.54/10). Developer & Digital Growth Strategist.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href="https://www.instagram.com/gqubesportsarena" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#FE6807] hover:border-[#FE6807] transition-all"
                title="@gqubesportsarena"
              >
                <Instagram size={15} />
              </a>
              <a 
                href="https://www.instagram.com/burnoutsholinganallur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#FE6807] hover:border-[#FE6807] transition-all"
                title="@burnoutsholinganallur"
              >
                <Instagram size={15} />
              </a>
              <a 
                href="mailto:gouthamvs08@gmail.com" 
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#FE6807] hover:border-[#FE6807] transition-all"
                title="gouthamvs08@gmail.com"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">Navigation</h4>
            <ul className="space-y-1.5">
              {[
                { name: 'About', path: '/about' },
                { name: 'Skills', path: '/skills' },
                { name: 'Projects', path: '/projects' },
                { name: 'Freelancing', path: '/freelancing' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="hover:text-[#FE6807] transition-colors inline-flex items-center gap-1">
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div className="space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">Direct Contact</h4>
            <p className="text-slate-600 font-medium">gouthamvs08@gmail.com</p>
            <p className="text-slate-600 font-medium">+91 9345946464</p>
            <p className="text-slate-500">Chennai, Tamil Nadu, India</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Goutham V S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
