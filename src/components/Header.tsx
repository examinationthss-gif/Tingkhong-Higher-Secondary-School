import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Phone, Menu, X, Landmark, Award, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ onScrollToSection, lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getTranslation = (key: string) => {
    return TRANSLATIONS[key]?.[lang] || key;
  };

  return (
    <header className="w-full relative z-50">
      {/* Top Banner indicating urgent admissions / notice announcement */}
      <div className="bg-brand-green-dark text-white text-xs py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-brand-gold/25 font-sans font-medium animate-none">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="bg-brand-gold text-brand-dark px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider animate-pulse">
            Admissions 2026
          </span>
          <span className="text-center sm:text-left">{getTranslation("admission_alert")}</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-brand-cream/85">
          <span className="flex items-center gap-1">
            <Phone size={12} className="text-brand-gold-light" />
            <span>+91 94353 06000</span>
          </span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin size={12} className="text-brand-gold-light" />
            <span>Dibrugarh, Assam</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ecece0] py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Institute Header */}
          <div 
            onClick={() => onScrollToSection('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-green flex items-center justify-center border-2 border-brand-gold shadow-md text-white font-serif text-lg font-bold transition-transform duration-300 group-hover:scale-105">
              T
            </div>
            <div>
              <h1 className="font-serif text-base sm:text-lg md:text-xl font-bold text-brand-green-dark tracking-tight leading-none group-hover:text-brand-green transition-colors">
                Tingkhong H.S. School
              </h1>
              <p className="font-sans text-[11px] sm:text-xs text-brand-gold-dark mt-0.5 font-medium flex items-center gap-1">
                <Landmark size={11} />
                <span>{getTranslation("system_affiliation")}</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 font-sans">
            <button 
              onClick={() => onScrollToSection('about-us')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_about")}
            </button>
            <button 
              onClick={() => onScrollToSection('academics')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_academics")}
            </button>
            <button 
              onClick={() => onScrollToSection('principal-message')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_principal")}
            </button>
            <button 
              onClick={() => onScrollToSection('notices')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar size={14} className="text-brand-gold" />
              <span>{getTranslation("nav_notices")}</span>
            </button>
            <button 
              onClick={() => onScrollToSection('assam-heritage')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_heritage")}
            </button>
            <button 
              onClick={() => onScrollToSection('trust-indicators')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_highlights")}
            </button>
            <button 
              onClick={() => onScrollToSection('alumni-network')}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors cursor-pointer"
            >
              {getTranslation("nav_alumni")}
            </button>

            {/* Micro Dual-Language toggle Switcher */}
            <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg border border-gray-200" id="desktop-lang-switcher">
              <Globe size={11} className="text-gray-400 ml-1.5 mr-0.5" />
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? "bg-brand-green text-white shadow-xs"
                    : "text-gray-600 hover:text-brand-green"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('as')}
                className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  lang === 'as'
                    ? "bg-brand-green text-white shadow-xs"
                    : "text-gray-600 hover:text-brand-green"
                }`}
              >
                অ
              </button>
            </div>

            <button 
              onClick={() => onScrollToSection('admissions-portal')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-brand-green text-white rounded-lg hover:bg-brand-green-light transition-all border border-brand-gold shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Award size={13} className="text-brand-gold-light" />
              <span>{getTranslation("nav_apply")}</span>
            </button>
          </nav>

          {/* Right Mobile Block (always displays language switcher + hamburger button side-by-side) */}
          <div className="flex items-center gap-3 lg:hidden">
            
            {/* Mobile Active Language Quick Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'as' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200/80 rounded-lg text-xs font-bold text-slate-700 transition-all cursor-pointer"
              title="Switch Language"
              id="mobile-lang-quick-toggle"
            >
              <Globe size={13} className="text-brand-green" />
              <span>{lang === 'en' ? "অসমীয়া" : "English"}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-brand-green transition-colors cursor-pointer border border-transparent hover:border-gray-200 rounded-lg"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Council"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-brand-cream border-b border-brand-gold/15 shadow-inner overflow-hidden absolute top-full left-0 z-40 font-sans"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              <button 
                onClick={() => { onScrollToSection('about-us'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_about")}
              </button>
              <button 
                onClick={() => { onScrollToSection('academics'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_academics")}
              </button>
              <button 
                onClick={() => { onScrollToSection('principal-message'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_principal")}
              </button>
              <button 
                onClick={() => { onScrollToSection('notices'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{getTranslation("nav_notices")}</span>
                <span className="bg-brand-green text-white text-[10px] px-1.5 py-0.2 rounded font-bold">{getTranslation("nav_new")}</span>
              </button>
              <button 
                onClick={() => { onScrollToSection('assam-heritage'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_heritage")}
              </button>
              <button 
                onClick={() => { onScrollToSection('trust-indicators'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_highlights")}
              </button>
              <button 
                onClick={() => { onScrollToSection('alumni-network'); setIsOpen(false); }}
                className="text-left py-2 text-sm font-medium text-slate-700 border-b border-slate-200/50 hover:text-brand-green transition-colors cursor-pointer"
              >
                {getTranslation("nav_alumni")}
              </button>
              
              {/* Full Mobile Lang Toggles */}
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl border border-gray-200/80 mt-1">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                  <Globe size={13} className="text-brand-green" />
                  <span>Choose Language / ভাষা সলনি:</span>
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setLang('en'); setIsOpen(false); }}
                    className={`px-3 py-1 text-xs font-extrabold rounded-md cursor-pointer ${
                      lang === 'en' ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLang('as'); setIsOpen(false); }}
                    className={`px-3 py-1 text-xs font-extrabold rounded-md cursor-pointer ${
                      lang === 'as' ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    অসমীয়া
                  </button>
                </div>
              </div>

              <button 
                onClick={() => { onScrollToSection('admissions-portal'); setIsOpen(false); }}
                className="w-full mt-2 py-3 bg-brand-green text-center text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-brand-gold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Award size={14} className="text-brand-gold-light" />
                <span>{getTranslation("nav_apply")}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
