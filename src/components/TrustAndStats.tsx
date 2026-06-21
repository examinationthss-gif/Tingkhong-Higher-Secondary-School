import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Award, Glasses, History, Tv, ShieldCheck, Trophy, Trees, Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { SCHOOL_STATS, TRUST_INDICATORS, TESTIMONIALS } from '../data';

export default function TrustAndStats() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Helper to map string to lucide icons
  const getIcon = (name: string, className: string = "w-6 h-6") => {
    switch (name) {
      case 'Users': return <Users className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Glasses': return <Glasses className={className} />;
      case 'History': return <History className={className} />;
      case 'Tv': return <Tv className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Trophy': return <Trophy className={className} />;
      case 'Trees': return <Trees className={className} />;
      default: return <Award className={className} />;
    }
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="trust-indicators" className="py-16 md:py-24 bg-gradient-to-b from-[#fbfbfa] to-[#f4f7f2] relative border-y border-slate-200">
      
      {/* Background patterns */}
      <div className="absolute inset-0 muga-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core School Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SCHOOL_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-brand-green/30 transition-all duration-300 text-center flex flex-col items-center group relative overflow-hidden"
            >
              {/* Hover highlight bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green mb-4 transition-transform group-hover:scale-110 duration-300">
                {getIcon(stat.iconName, "w-6 h-6")}
              </div>
              
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-green-dark">
                {stat.value}
              </span>
              
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-dark mt-2">
                {stat.label}
              </h3>
              
              <p className="font-sans text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* trust indicators block: Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green font-sans">
              TRUST FACTORS & ACCREDITATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0d2a1b] mt-2 leading-tight">
              Why Parents & AHSEC Boards Highly Trust Our Council
            </h2>
            <div className="w-12 h-1 bg-brand-gold my-5 rounded-full" />
            <p className="font-sans text-slate-600 sm:text-base text-sm leading-relaxed mb-6">
              Tingkhong Higher Secondary School is fully government authorized and recognized as an model eco-campus. We do not just teach textbooks but nurture healthy characters, providing the ideal platform for your child's brilliant academic growth.
            </p>
            
            {/* Mini bullet highlights */}
            <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-700">
              <div className="flex gap-2.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>Modern computerized smart laboratories with projector equipment.</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>Scribbled government monitoring reviews ensuring strict safety.</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>Comprehensive sports pitches, tracking areas, and wellness hubs.</span>
              </div>
            </div>
          </div>

          {/* Grid list of indicators */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TRUST_INDICATORS.map((trust, idx) => (
              <div
                key={trust.id}
                className="bg-white border border-slate-200/50 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-gold/15 text-brand-gold-dark">
                    {getIcon(trust.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-brand-green-dark leading-snug">
                      {trust.title}
                    </h4>
                    <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider block mt-0.5">
                      {trust.metric}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-slate-500 mt-3 leading-relaxed">
                  {trust.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Section: Testimonials & Alumni validation validation */}
        <div className="bg-[#0f2e1e] rounded-3xl p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-xl border border-brand-gold/30">
          
          <div className="absolute top-0 right-0 w-48 h-48 muga-pattern opacity-15 select-none pointer-events-none" />
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 rounded-full bg-brand-gold/5 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Title / Heading for reviews */}
            <div className="lg:col-span-4 lg:border-r border-white/10 lg:pr-10">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider font-sans block mb-2">
                TESTIMONIALS & TRUST
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-snug">
                Verified Alumni & Family Voices
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                Hear directly from our brilliant alumni establishing academic footprints in top universities, and parents celebrating school transformations.
              </p>
              
              {/* Rating stars static showcase */}
              <div className="flex gap-1 items-center mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} className="text-brand-gold fill-brand-gold" />
                ))}
                <span className="font-sans text-xs text-white/90 font-medium ml-2">5.0 average parenting rate</span>
              </div>
            </div>

            {/* Carousel display with animated swipe */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-[220px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="font-sans"
                >
                  <Quote size={40} className="text-brand-gold/25 mb-4 shrink-0" />
                  
                  <p className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed mb-6">
                    "{TESTIMONIALS[activeTestimonial].comment}"
                  </p>

                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="font-serif text-base font-bold text-brand-gold-light">
                        {TESTIMONIALS[activeTestimonial].name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {TESTIMONIALS[activeTestimonial].role} • {TESTIMONIALS[activeTestimonial].batch || "Assam"}
                      </p>
                    </div>

                    {/* Nav controllers */}
                    <div className="flex gap-2.5">
                      <button 
                        onClick={handlePrevTestimonial}
                        className="w-9 h-9 rounded-full border border-white/20 hover:border-white/60 flex items-center justify-center hover:bg-white/5 transition-all text-white cursor-pointer"
                        id="testimonial-prev-btn"
                        aria-label="Previous Testimonial"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      <button 
                        onClick={handleNextTestimonial}
                        className="w-9 h-9 rounded-full border border-white/20 hover:border-white/60 flex items-center justify-center hover:bg-white/5 transition-all text-white cursor-pointer"
                        id="testimonial-next-btn"
                        aria-label="Next Testimonial"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
