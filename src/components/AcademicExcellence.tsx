import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, CheckCircle2, ChevronRight, Bookmark, Sparkles } from 'lucide-react';
import { ACADEMICS_STREAM } from '../data';

export default function AcademicExcellence() {
  const [activeTab, setActiveTab] = useState(0);

  // Focus outcomes or highlights for each stream to make it rich
  const focusAreas = [
    [
      "Civil Services (UPSC/APSC) foundation modules",
      "Rigorous literary writing and logic debating councils",
      "Economics and regional demographics projects",
      "Assam literature and historical conservation groups"
    ],
    [
      "Hands-on IT & software skills workshops",
      "Retail, sales, and service industry apprenticeships",
      "Direct vocational certification aligned with government schemes",
      "Practical project assignments with local industry exposure"
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
    <section id="academics" className="py-20 md:py-28 bg-brand-dark relative text-white overflow-hidden border-t border-b border-brand-gold/15">
      {/* Decorative patterns */}
      <div className="absolute inset-0 muga-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles size={11} className="text-brand-gold" />
            <span>ACADEMIC PATHWAYS</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Our Active Course Offerings
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Examine our high school paths structured carefully under the AHSEC Board of Assam, fostering high merit, state ranking potential, and vocational readiness.
          </p>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-5 rounded-full" />
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
                    ? 'bg-brand-green text-white border-brand-green shadow-xl scale-[1.02]'
                    : 'bg-brand-green-dark/20 text-slate-200 border-brand-green/15 hover:bg-brand-green-dark/50 hover:border-brand-green/30'
                }`}
                id={`academic-tab-btn-${idx}`}
              >
                {/* Visual Glow behind active item */}
                {activeTab === idx && (
                  <div className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full bg-brand-gold/15 blur-xl" />
                )}

                <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                  activeTab === idx ? 'bg-white/10 text-brand-gold-light' : 'bg-brand-green/20 text-brand-gold'
                }`}>
                  <GraduationCap size={20} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm sm:text-base leading-snug group-hover:text-brand-gold transition-colors">
                    {stream.name.split(' (')[0]}
                  </h3>
                  <p className={`text-[11px] sm:text-xs mt-1.5 ${
                    activeTab === idx ? 'text-slate-200' : 'text-slate-400'
                  }`}>
                    {idx < 2 ? 'Classes XI - XII (AHSEC)' : idx === 2 ? 'Classes IX - X (SEBA)' : 'Classes VI - VIII'}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Information Canvas */}
          <div className="lg:col-span-8 bg-brand-green-dark/20 border border-brand-green/15 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 muga-pattern select-none pointer-events-none opacity-20" />

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
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-green/20 pb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-gold-light">
                      {ACADEMICS_STREAM[activeTab].name}
                    </h3>
                    <p className="text-xs text-brand-gold font-semibold tracking-wider uppercase mt-1">
                      Assam State Education Affiliation
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold-light text-xs font-semibold rounded-lg border border-brand-gold/20">
                    Syllabus Standard 2026/27
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 mt-6 leading-relaxed">
                  {ACADEMICS_STREAM[activeTab].description}
                </p>

                {/* Subject Area Section */}
                {activeTab === 0 ? (
                  /* HIGH-END UNIQUE SIDE-BY-SIDE DESIGN FOR HS ARTS STREAM */
                  <div className="mt-8 space-y-6">
                    <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Bookmark size={14} className="text-brand-gold" />
                      <span>OFFICIAL HS ARTS SYLLABUS SCHEME</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Compulsory Column */}
                      <div className="md:col-span-5 bg-brand-dark/60 border border-brand-green/20 rounded-xl p-5 relative overflow-hidden group hover:border-brand-gold/20 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
                        <h5 className="font-serif text-sm font-black text-brand-gold flex items-center gap-2 mb-4">
                          <CheckCircle2 size={14} className="text-brand-gold" />
                          <span>Core / Compulsory Subjects</span>
                        </h5>
                        <div className="space-y-3">
                          {[
                            { name: "English", desc: "Core Language Foundation" },
                            { name: "Modern Indian Language (MIL)", sub: "Assamese", desc: "Mother Tongue & Literary Studies" },
                            { name: "Environmental Education", sub: "General Studies", desc: "Mandatory Civil & Ecological Awareness" }
                          ].map((sub, sIdx) => (
                            <div 
                              key={sIdx}
                              className="bg-brand-green-dark/35 border border-brand-green/15 p-3 rounded-lg flex items-start gap-2.5 hover:border-brand-gold/30 hover:bg-brand-green-dark/55 transition-all duration-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                              <div>
                                <p className="text-xs sm:text-sm text-slate-100 font-semibold">{sub.name}</p>
                                {sub.sub && <p className="text-[11px] text-brand-gold-light/90 font-medium">{sub.sub}</p>}
                                <p className="text-[10px] text-slate-450 mt-0.5 text-slate-400">{sub.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Elective Column */}
                      <div className="md:col-span-7 bg-brand-dark/60 border border-brand-green/20 rounded-xl p-5 relative overflow-hidden group hover:border-brand-gold/20 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-green-light" />
                        <h5 className="font-serif text-sm font-black text-brand-gold-light flex items-center gap-2 mb-4">
                          <BookOpen size={14} className="text-brand-gold" />
                          <span>Elective / Optional Subjects</span>
                        </h5>
                        
                        <div className="space-y-4">
                          {/* Group 1: Humanities */}
                          <div>
                            <p className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">Humanities & Social Sciences</p>
                            <div className="flex flex-wrap gap-2">
                              {["Political Science", "History", "Education", "Sociology", "Swadesh Adhyayan"].map((sub, sIdx) => (
                                <span 
                                  key={sIdx}
                                  className="px-3 py-1.5 bg-brand-green-dark/40 hover:bg-brand-green-dark border border-brand-green/20 rounded-lg text-xs font-medium text-slate-200 hover:border-brand-gold/30 transition-all cursor-default"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Group 2: Languages */}
                          <div>
                            <p className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">Languages & Advanced Studies</p>
                            <div className="flex flex-wrap gap-2">
                              {["Advance Assamese", "Tai Language"].map((sub, sIdx) => (
                                <span 
                                  key={sIdx}
                                  className="px-3 py-1.5 bg-brand-green-dark/40 hover:bg-brand-green-dark border border-brand-green/20 rounded-lg text-xs font-medium text-slate-200 hover:border-brand-gold/30 transition-all cursor-default"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Group 3: Practical */}
                          <div>
                            <p className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1">Practical Electives</p>
                            <div className="flex flex-wrap gap-2">
                              {["Economics"].map((sub, sIdx) => (
                                <span 
                                  key={sIdx}
                                  className="px-3 py-1.5 bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 rounded-lg text-xs font-bold text-brand-gold-light hover:border-brand-gold transition-all cursor-default"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard display for other tabs */
                  <div className="mt-8">
                    <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Bookmark size={14} className="text-brand-gold" />
                      <span>Prescribed Subjects</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {ACADEMICS_STREAM[activeTab].subjects.map((sub, sIdx) => (
                        <div 
                          key={sIdx}
                          className="bg-brand-dark/40 border border-brand-green/20 p-3.5 rounded-xl shadow-xs hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 flex items-center gap-2.5"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-200 font-medium">
                            {sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Focus Areas */}
                <div className="mt-8 pt-8 border-t border-brand-green/20">
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-4">
                    Tingkhong Enrichment Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {focusAreas[activeTab].map((focus, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-brand-gold mt-0.5 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro CTA inside Academics */}
                <div className="mt-8 pt-6 border-t border-brand-green/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Questions about subject registration criteria or stream switches?
                  </span>
                  <button 
                    onClick={() => {
                      const portal = document.getElementById('admissions-portal');
                      if (portal) portal.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brand-gold hover:text-brand-gold-light flex items-center gap-1.5 transition-colors cursor-pointer group"
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
