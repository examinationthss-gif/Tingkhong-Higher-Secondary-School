import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, ArrowUpRight, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';
import { ACADEMICS_STREAM } from '../data';

export default function AcademicExcellence() {
  const [activeTab, setActiveTab] = useState(0);

  // Focus outcomes or highlights for each stream to make it rich
  const focusAreas = [
    [
      "Foundation for Engineering (JEE) & Medical (NEET)",
      "Smart physics and chemical lab experiment sessions",
      "Interactive coding classes and terminal system exposure",
      "Annual state level Science Fair representational scope"
    ],
    [
      "Civil Services (UPSC/APSC) foundation modules",
      "Rigorous literary writing and logic debating councils",
      "Economics and regional demographics projects",
      "Assam literature and historical conservation groups"
    ],
    [
      "State board (SEBA/HSLC) competitive exam tuning",
      "Dual mock evaluations with high examiner feedbacks",
      "Maths and logical mental aptitude camps",
      "Introductory information technology layouts"
    ],
    [
      "Activity Oriented fun educational worksheets",
      "Mother tongue (Assamese) learning integration",
      "Bihu arts, crafts, and physical health drills",
      "Safe, structured community communication"
    ]
  ];

  return (
    <section id="academics" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green font-sans px-3 py-1 bg-brand-green/10 rounded-full inline-block">
            ACADEMIC PATHWAYS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0d2a1b] mt-3">
            Affiliated Curriculums & Streams
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Examine our high school paths structured carefully under the AHSEC Board of Assam, fostering high merit, state ranking potential, and solid values.
          </p>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Outer Tabs Controller Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Menu for Selecting Streams */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-sans">
            {ACADEMICS_STREAM.map((stream, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                  activeTab === idx
                    ? 'bg-brand-green text-white border-brand-green shadow-lg scale-[1.02]'
                    : 'bg-brand-cream/40 text-slate-800 border-slate-200 hover:bg-brand-cream hover:border-slate-300'
                }`}
                id={`academic-tab-btn-${idx}`}
              >
                {/* Visual Glow behind active item */}
                {activeTab === idx && (
                  <div className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full bg-brand-gold/15 blur-xl" />
                )}

                <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                  activeTab === idx ? 'bg-white/10 text-brand-gold-light' : 'bg-brand-green/10 text-brand-green'
                }`}>
                  <GraduationCap size={20} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm sm:text-base leading-snug group-hover:text-brand-gold transition-colors">
                    {stream.name.split(' (')[0]}
                  </h3>
                  <p className={`text-[11px] sm:text-xs mt-1.5 ${
                    activeTab === idx ? 'text-slate-200' : 'text-slate-500'
                  }`}>
                    {idx < 2 ? 'Classes XI - XII (AHSEC)' : idx === 2 ? 'Classes IX - X (SEBA)' : 'Classes VI - VIII'}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Information Canvas */}
          <div className="lg:col-span-8 bg-brand-cream/30 border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 muga-pattern select-none pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="font-sans"
              >
                {/* Specific Stream Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-green-dark">
                      {ACADEMICS_STREAM[activeTab].name}
                    </h3>
                    <p className="text-xs text-brand-gold-dark font-semibold tracking-wider uppercase mt-1">
                      Assam State Education affiliation
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-lg border border-brand-green/20">
                    Syllabus Standard 2026/27
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 mt-6 leading-relaxed">
                  {ACADEMICS_STREAM[activeTab].description}
                </p>

                {/* Core Subject Grid list */}
                <div className="mt-8">
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Bookmark size={14} className="text-brand-gold-dark" />
                    <span>Prescribed Core Subjects</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {ACADEMICS_STREAM[activeTab].subjects.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="bg-white border border-slate-200/55 p-3.5 rounded-xl shadow-xs hover:shadow-md hover:border-brand-green/30 transition-all duration-300 flex items-center gap-2.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Focus Areas */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4">
                    Tingkhong Enrichment Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {focusAreas[activeTab].map((focus, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-brand-green mt-0.5 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro CTA inside Academics */}
                <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    Questions about subject registration criteria or stream switches?
                  </span>
                  <button 
                    onClick={() => {
                      const portal = document.getElementById('admissions-portal');
                      if (portal) portal.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brand-green hover:text-brand-green-light flex items-center gap-1.5 transition-colors cursor-pointer group"
                  >
                    <span>View Registration Steps</span>
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
