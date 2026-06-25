import React from 'react';
import { Landmark, MapPin, Phone, Mail, Clock, ShieldAlert, Award, ArrowUp } from 'lucide-react';
import { SCHOOL_NAME, SCHOOL_LOCATION, SCHOOL_AFFILIATION, SCHOOL_ESTD } from '../data';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-300 font-sans border-t border-brand-gold/20 relative z-10">
      
      {/* Outer decorative gold line */}
      <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green-dark" />

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-green flex items-center justify-center border border-brand-gold text-white font-serif font-bold text-base shadow-sm">
                  T
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white tracking-tight leading-none">
                    Tingkhong H.S. School
                  </h4>
                  <p className="text-[11px] text-brand-gold mt-1 font-semibold">{SCHOOL_AFFILIATION}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-5 leading-relaxed max-w-sm">
                Empowering the future pioneers of Dibrugarh, Assam through moral development, digital inclusion, and outstanding state curriculum achievements since 1946.
              </p>
            </div>

            {/* School statistics / legal certification indicators */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4 text-[10px] text-slate-500 uppercase tracking-wider">
              <span>ESTD. 1946</span>
              <span>•</span>
              <span>UDISE: 18150410401</span>
              <span>•</span>
              <span>Govt. Regd</span>
            </div>
          </div>

          {/* Col 2: Navigation map links */}
          <div className="lg:col-span-3">
            <h5 className="font-serif text-xs font-bold uppercase text-brand-gold tracking-widest mb-4 border-b border-slate-800 pb-2">
              Explore Sections
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onScrollToSection('hero')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Home Portal Overview
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('principal-message')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Principal's Message Letter
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('academics')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Affiliated Curriculums
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('notices')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Important Notices</span>
                  <span className="bg-brand-green text-white text-[9px] px-1 rounded">Active</span>
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('assam-heritage')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Assam Cultural Trivia
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('admissions-portal')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Darpan Admission Steps
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('alumni-network')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>THSS Alumni Portal</span>
                  <span className="bg-brand-gold text-brand-dark text-[8.5px] font-black uppercase tracking-wider px-1 rounded animate-pulse">Network</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h5 className="font-serif text-xs font-bold uppercase text-brand-gold tracking-widest mb-4 border-b border-slate-800 pb-2">
                Office & Contact Coordinates
              </h5>

              <div className="space-y-3.5 text-xs text-slate-400">
                <div className="flex gap-2.5 items-start">
                  <MapPin size={14} className="text-brand-gold mt-0.5 shrink-0" />
                  <span>P.O. Tingkhong, Dibrugarh District, Assam, PIN-786612</span>
                </div>

                <div className="flex gap-2.5 items-center">
                  <Phone size={14} className="text-brand-gold shrink-0" />
                  <a href="tel:+919435306000" className="hover:text-white transition-colors">
                    +91 94353 06000 (Registrar Clerk)
                  </a>
                </div>

                <div className="flex gap-2.5 items-center">
                  <Mail size={14} className="text-brand-gold shrink-0" />
                  <a href="mailto:examinationthss@gmail.com" className="hover:text-white transition-colors">
                    examinationthss@gmail.com
                  </a>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Clock size={14} className="text-brand-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-300 block">Class Timings</span>
                    <span>Class VI - VIII: 9:00 AM to 2:45 PM</span>
                    <span className="block mt-0.5">Classes IX - XII (H.S.): 9:00 AM to 3:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Map Link Frame showing Tingkhong, Dibrugarh, Assam coordinates */}
            <div className="mt-6 p-2 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative group">
              <div className="h-16 bg-slate-850 rounded flex items-center justify-center text-center p-2 relative">
                {/* Visual mock of tea gardens on map */}
                <div className="absolute inset-0 bg-brand-green-dark/40 group-hover:bg-brand-green-dark/20 transition-all duration-300" />
                <div className="relative z-10 text-[10px] space-y-1">
                  <p className="font-serif text-slate-100 font-bold flex items-center justify-center gap-1">
                    <MapPin size={10} className="text-brand-gold" />
                    <span>Tingkhong Administration Coordinates</span>
                  </p>
                  <p className="text-slate-400 font-sans">Click to locate via National Highway map engine</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Tingkhong+Higher+Secondary+School+Dibrugarh+Assam" 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 z-20"
                aria-label="View School location on Google Maps"
              />
            </div>

          </div>

        </div>

        {/* Lower footer information row */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <p>
            &copy; {currentYear} Tingkhong Higher Secondary School. All rights reserved. 
            <span className="text-brand-gold/75 block sm:inline sm:ml-2">Official AHSEC High School Council Portal.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-[11px] text-slate-500 font-sans tracking-wide">
              Built by LearnWithJulfy Digital Studio
            </span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] font-semibold bg-brand-green text-brand-cream py-1.5 px-3 rounded hover:bg-brand-green-light transition-colors border border-brand-gold/40 flex items-center gap-1 cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
