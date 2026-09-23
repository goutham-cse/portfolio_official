import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Instagram,
  Clock,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare mailto link with encoded parameters to open default mail client directed to gouthamvs08@gmail.com
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:gouthamvs08@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Header Banner Line */}
      <div className="space-y-4 border-b border-white/10 pb-8 relative">
        <div className="glow-line-top absolute -top-4 left-0 w-full"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase glass-badge">
          <Mail size={14} className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'} />
          Get In Touch
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Let's Work <span className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}>Together</span>
        </h1>
        <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
          isLight ? 'text-stone-700' : 'text-gray-300'
        }`}>
          Have a project, software opportunity, freelancing inquiry, or collaboration idea? Send a message directly to <strong className={isLight ? 'text-[#B81104]' : 'text-[#FE6807]'}>gouthamvs08@gmail.com</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Cards (Left Side) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-6 border border-white/15">
            <h3 className="text-2xl font-bold font-heading">Contact Information</h3>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              Feel free to reach out via email, phone, or LinkedIn. I usually respond within 24 hours.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:gouthamvs08@gmail.com"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group transition-all hover:bg-white/10"
              >
                <div className={`p-3 rounded-xl ${
                  isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs opacity-60 font-semibold uppercase tracking-wider block">Email Address</span>
                  <span className={`text-sm font-bold group-hover:underline ${
                    isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                  }`}>gouthamvs08@gmail.com</span>
                </div>
              </a>

              <a 
                href="tel:+919345946464"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group transition-all hover:bg-white/10"
              >
                <div className={`p-3 rounded-xl ${
                  isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs opacity-60 font-semibold uppercase tracking-wider block">Phone Number</span>
                  <span className={`text-sm font-bold group-hover:underline ${
                    isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                  }`}>+91 9345946464</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className={`p-3 rounded-xl ${
                  isLight ? 'bg-[#B81104]/10 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs opacity-60 font-semibold uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-bold">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs opacity-60 font-semibold uppercase tracking-wider block">Freelancing Instagram Accounts</span>
              <div className="flex flex-col gap-2 text-xs">
                <a 
                  href="https://www.instagram.com/gqubesportsarena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-semibold hover:underline ${
                    isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                  }`}
                >
                  <Instagram size={14} />
                  <span>@gqubesportsarena</span>
                </a>
                <a 
                  href="https://www.instagram.com/burnoutsholinganallur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-semibold hover:underline ${
                    isLight ? 'text-[#B81104]' : 'text-[#FE6807]'
                  }`}
                >
                  <Instagram size={14} />
                  <span>@burnoutsholinganallur</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-heading">Send a Message</h3>
              <span className="text-xs opacity-60 flex items-center gap-1">
                <Clock size={12} /> Direct Mail Routing
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4"
              >
                <div className={`p-4 rounded-full w-fit mx-auto ${
                  isLight ? 'bg-[#B81104]/15 text-[#B81104]' : 'bg-[#FE6807]/20 text-[#FE6807]'
                }`}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold font-heading">Message Dispatched!</h4>
                <p className="text-sm opacity-85 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your mail client has been opened to send your inquiry to <strong>gouthamvs08@gmail.com</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isLight ? 'bg-[#B81104] text-white' : 'bg-[#FE6807] text-white'
                  }`}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-75">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-sm outline-none transition-all ${
                        isLight 
                          ? 'border-stone-300 focus:border-[#B81104] text-stone-900' 
                          : 'border-white/10 focus:border-[#FE6807] text-white'
                      }`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-75">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-sm outline-none transition-all ${
                        isLight 
                          ? 'border-stone-300 focus:border-[#B81104] text-stone-900' 
                          : 'border-white/10 focus:border-[#FE6807] text-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-75">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Opportunity / Freelancing Project"
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-sm outline-none transition-all ${
                      isLight 
                        ? 'border-stone-300 focus:border-[#B81104] text-stone-900' 
                        : 'border-white/10 focus:border-[#FE6807] text-white'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-75">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement or project..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-sm outline-none transition-all resize-none ${
                      isLight 
                        ? 'border-stone-300 focus:border-[#B81104] text-stone-900' 
                        : 'border-white/10 focus:border-[#FE6807] text-white'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isLight
                      ? 'bg-[#B81104] hover:bg-[#960e03] shadow-[#B81104]/30'
                      : 'bg-[#FE6807] hover:bg-[#e05a00] shadow-[#FE6807]/40 shadow-glow-orange'
                  }`}
                >
                  {loading ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message to gouthamvs08@gmail.com</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
