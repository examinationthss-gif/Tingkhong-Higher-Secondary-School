import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowRight, ShieldCheck, Star, Sparkles, MapPin } from 'lucide-react';
import { SCHOOL_NAME, SCHOOL_LOCATION, SCHOOL_AFFILIATION, SCHOOL_ESTD } from '../data';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <div id="hero" className="relative bg-gradient-to-b from-[#f2f5f1] to-white pt-6 pb-16 md:py-24 overflow-hidden border-b border-slate-200">
      
      {/* Decorative Traditional Assam Background Accents */}
      <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-[-150px] w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Mighty Academic Heading and Mission */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Regional Pride Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full text-brand-green text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <Sparkles size={13} className="text-brand-gold" />
              <span>Celebrating 54 Years of Rural Enlightenment • {SCHOOL_ESTD}</span>
            </motion.div>

            {/* Principal Editorial Header */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-green-dark tracking-tight leading-tight"
            >
              Forging Academic Leaders amidst the <span className="text-brand-green font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-dark">Green Legacy</span> of Assam
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Empowering students from Class VI through XII under the AHSEC & SEBA councils. Located in the heart of Tingkhong's thriving tea estates, we mix modern digital intelligence with the pure values of Dibrugarh.
            </motion.p>

            {/* Actions Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onScrollToSection('admissions-portal')}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-green hover:bg-brand-green-light text-white text-sm font-bold uppercase tracking-wider rounded-lg border border-brand-gold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>H.S. Online Admissions</span>
                <ArrowRight size={16} className="text-brand-gold group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onScrollToSection('notices')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white/80 hover:bg-white text-brand-green-dark text-sm font-bold uppercase tracking-wider rounded-lg border border-slate-300 hover:border-brand-green/40 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={15} className="text-brand-gold-dark" />
                <span>Notice Council</span>
              </button>
            </motion.div>

            {/* Real-time Ticker Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 p-3 bg-brand-cream/80 rounded-lg border border-brand-gold/15 flex items-center gap-3 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="bg-brand-gold text-brand-dark font-sans text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide shrink-0">
                LATEST INFO
              </div>
              <p className="font-sans text-xs text-brand-green-dark font-medium truncate">
                🔴 Class XI Arts & Science admission selections commence June 2026. Keep sheets ready.
              </p>
            </motion.div>

          </div>

          {/* Right Block: Visual representation of the lush school setting & statistics highlights */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Graphic Badge */}
            <div className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white">
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-brand-dark leading-none">SEBA / AHSEC</p>
                <p className="font-sans text-[10px] text-slate-500 mt-0.5">Top Tier Board Score Rate</p>
              </div>
            </div>

            {/* Principal Imagery Frame with custom borders */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-square bg-slate-100"
            >
              {/* Image representing beautiful green environment of Assam School */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" 
                alt="Tingkhong Higher Secondary School Campus Greenery" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              {/* Regional tea estate banner representation */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white bg-linear-to-t from-black/80 to-transparent">
                <p className="font-serif text-lg font-bold flex items-center gap-2">
                  <MapPin size={16} className="text-brand-gold-light" />
                  <span>Tingkhong Administrative Wing</span>
                </p>
                <p className="font-sans text-xs text-slate-200 mt-1">
                  Surrounded by sprawling tea gardens of Dibrugarh district, promoting serene focus for students.
                </p>
              </div>
            </motion.div>

            {/* Rapid Stats Floating Badge in Background */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-green-dark text-white p-4 rounded-xl shadow-lg border border-brand-gold/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase text-brand-gold-light font-bold tracking-wider leading-none">Affiliation</p>
                <p className="font-serif text-xs font-bold mt-1 text-slate-100">{SCHOOL_AFFILIATION}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
