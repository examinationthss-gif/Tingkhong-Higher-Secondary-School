import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, MessageCircle, Mail } from 'lucide-react';

export default function DesignPartnerBanner() {
  return (
    <section className="w-full bg-[#030906] border-t border-brand-green/20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative premium abstract background details */}
      <div className="absolute inset-0 bg-radial-at-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-black/40 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
          
          {/* Left Column (Studio Branding) */}
          <div className="flex items-center gap-4 min-w-[280px]">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 shrink-0">
              <Sparkles size={22} className="animate-pulse" />
            </div>
            <div>
              <span className="block text-[10px] font-mono font-black text-orange-500 uppercase tracking-widest leading-none">
                AESTHETIC DESIGN PARTNER
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-extrabold text-white mt-1.5 tracking-tight">
                LearnWithJulfy Digital Studio
              </h4>
            </div>
          </div>

          {/* Center Column (Founder Metadata) */}
          <div className="flex flex-col gap-1 min-w-[220px]">
            <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest leading-none">
              FOUNDER & CONSULTANT
            </span>
            <span className="text-sm font-sans font-bold text-slate-200 mt-1.5">
              Julfikar Rahman Zinnah
            </span>
            <a 
              href="mailto:learnwithjulfy@gmail.com" 
              className="text-xs font-mono text-orange-400/90 hover:text-orange-400 transition-colors flex items-center gap-1.5 mt-0.5"
            >
              <Mail size={12} />
              <span>learnwithjulfy@gmail.com</span>
            </a>
          </div>

          {/* Center-Right Column (Creative Capabilities) */}
          <div className="flex flex-col gap-2 min-w-[240px]">
            <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest leading-none">
              CREATIVE CAPABILITIES
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {['NGO Webs', 'Schools', 'Business', 'Apps'].map((capability) => (
                <span 
                  key={capability}
                  className="px-2.5 py-1 text-[10px] font-mono font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full hover:border-orange-500/30 hover:bg-orange-500/5 hover:text-white transition-all duration-300"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (Call-to-Action Elements) */}
          <div className="flex items-center gap-3.5 shrink-0 self-start lg:self-center">
            {/* Visit Studio CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://learnwithjulfy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/15 transition-all duration-300 cursor-pointer"
            >
              <Globe size={16} />
              <span>Visit Studio</span>
            </motion.a>

            {/* Chat Bubble Icon */}
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:learnwithjulfy@gmail.com?subject=Inquiry%20from%20THSS%20Portal"
              className="w-11 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer shrink-0"
              title="Chat / Message"
            >
              <MessageCircle size={18} className="fill-white/10" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
