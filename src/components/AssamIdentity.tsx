import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, ShieldAlert, Award, Star, RefreshCw, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { HIGHLIGHTS } from '../data';

interface TriviaQuestion {
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    question: "What famous Assamese silk is known globally for its natural brilliant golden shine and increases in luster with every wash?",
    options: ["Tasar Silk", "Muga Silk", "Eri Silk", "Pat Silk"],
    correctIdx: 1,
    explanation: "Muga Silk is exclusive to Assam, famed for its golden glow and extreme durability."
  },
  {
    question: "Tingkhong Higher Secondary School is situated amidst lush green tea states of which district of Assam?",
    options: ["Jorhat District", "Sivasagar District", "Dibrugarh District", "Tinsukia District"],
    correctIdx: 2,
    explanation: "Tingkhong is a beautiful tea-rich legislative circle located in Dibrugarh district, the Tea City of India."
  },
  {
    question: "Which legendary Ahom military general defeated Mughals in the historic Battle of Saraighat in 1671?",
    options: ["Bir Chilarai", "Lachit Borphukan", "Swargadeo Sukaphaa", "Maniram Dewan"],
    correctIdx: 1,
    explanation: "Lachit Borphukan led the Ahom army victoriously in 1671, preventing Mughal expansion, and is a symbol of Assamese bravery."
  }
];

export default function AssamIdentity() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (selectedIdx !== null) return; // Prevent double answer
    setSelectedIdx(idx);
    const isCorrect = idx === TRIVIA_QUESTIONS[currentIdx].correctIdx;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedIdx(null);
    setShowExplanation(false);
    if (currentIdx < TRIVIA_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="assam-heritage" className="py-16 md:py-24 bg-brand-cream/25 relative overflow-hidden">
      
      {/* Decorative Japi / Traditional flower design accents */}
      <div className="absolute top-10 left-[-40px] w-24 h-24 bg-brand-gold/10 rounded-full border border-brand-gold/20 flex items-center justify-center font-serif text-[10px] text-brand-gold rotate-12 select-none pointer-events-none opacity-40">
        JAPI ART
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-dark font-sans flex items-center justify-center gap-2">
            <Sprout size={13} className="text-brand-green" />
            <span>ASSAM HERITAGE SPOTLIGHT • আমাৰ অসম</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-green-dark mt-2 leading-snug">
            Embracing the Cultural Roots & Values of Upper Assam
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Traditional info grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Four Cultural / Environmental pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-green-dark mb-4">
              Cultivating Moral Stewardship Among Growing Minds
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Our students don't just grow up to succeed globally, they remain grounded in Assam's rich heritage: from learning traditional respect to celebrating Bihu rituals and conserving the expansive biological ecosystems of our tea garden communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HIGHLIGHTS.map((hl) => (
                <div key={hl.id} className="bg-white border border-slate-200/55 p-5 rounded-2xl shadow-xs">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="p-2 bg-brand-green/10 text-brand-green rounded-lg shrink-0">
                      {hl.iconName === 'Sprout' ? <Sprout size={16} /> : hl.iconName === 'ShieldAlert' ? <ShieldAlert size={16} /> : <Award size={16} />}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-brand-green-dark leading-tight">
                      {hl.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: THE INTERACTIVE TRIVIA CONSOLE */}
          <div className="lg:col-span-6 bg-[#112d1f] text-white rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-brand-gold/30 relative">
            
            <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase font-sans">
              HERITAGE TRIVIA
            </div>

            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-brand-gold" size={24} />
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold">Assam Heritage Quiz</h4>
                <p className="font-sans text-[11px] text-slate-300">Are you a true guardian of Assam's rich cultural legacy?</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!quizFinished ? (
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="font-sans text-sm"
                >
                  {/* Progress tracker */}
                  <div className="flex justify-between items-center text-xs text-slate-300 mb-4 font-semibold">
                    <span>QUESTION {currentIdx + 1} OF {TRIVIA_QUESTIONS.length}</span>
                    <span className="text-brand-gold">Current score: {score}/{TRIVIA_QUESTIONS.length}</span>
                  </div>

                  <p className="font-serif text-base font-bold text-slate-100 leading-relaxed mb-6">
                    {TRIVIA_QUESTIONS[currentIdx].question}
                  </p>

                  {/* Options Stack */}
                  <div className="space-y-3">
                    {TRIVIA_QUESTIONS[currentIdx].options.map((option, idx) => {
                      let btnStyle = "bg-white/5 border border-white/10 hover:bg-white/10 text-white";
                      if (selectedIdx !== null) {
                        if (idx === TRIVIA_QUESTIONS[currentIdx].correctIdx) {
                          btnStyle = "bg-brand-green border-brand-gold text-white font-semibold";
                        } else if (selectedIdx === idx) {
                          btnStyle = "bg-red-950 border-red-500 text-slate-200";
                        } else {
                          btnStyle = "bg-white/5 border-transparent opacity-40 text-slate-400";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(idx)}
                          disabled={selectedIdx !== null}
                          className={`w-full p-3.5 text-left text-xs sm:text-sm rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                          id={`trivia-opt-${idx}`}
                        >
                          <span>{option}</span>
                          {selectedIdx !== null && idx === TRIVIA_QUESTIONS[currentIdx].correctIdx && (
                            <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Block */}
                  {showExplanation && (
                    <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs text-brand-gold-light font-bold uppercase tracking-wider">
                        {selectedIdx === TRIVIA_QUESTIONS[currentIdx].correctIdx ? '🎉 Correct Answer!' : '💡 Educational Fact'}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 lines-relaxed">
                        {TRIVIA_QUESTIONS[currentIdx].explanation}
                      </p>
                      
                      <button
                        onClick={handleNext}
                        className="mt-4 px-4 py-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark text-xs font-bold rounded-lg uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                        id="trivia-next-btn"
                      >
                        <span>{currentIdx === TRIVIA_QUESTIONS.length - 1 ? "Finish Quiz" : "Next Question"}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  )}

                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-sans text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold mx-auto mb-4 border border-brand-gold/30">
                    <Star size={30} fill="currentColor" />
                  </div>

                  <h4 className="font-serif text-xl font-bold text-slate-100">
                    {score === TRIVIA_QUESTIONS.length 
                      ? "Outstanding Heritage Guardian! 🌟" 
                      : score >= 1 
                        ? "Assam Cultural Enthusiast! 🌱" 
                        : "Thanks for Participating!"}
                  </h4>
                  
                  <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                    You scored <strong className="text-brand-gold text-sm">{score}/{TRIVIA_QUESTIONS.length}</strong>. Tingkhong Higher Secondary School is dedicated to raising youth proud of our state's brilliant legacy.
                  </p>

                  {/* Digital Stamp Award Showcase */}
                  {score === TRIVIA_QUESTIONS.length && (
                    <div className="bg-white/10 p-4 rounded-2xl border border-brand-gold/20 mt-6 inline-block max-w-sm mx-auto">
                      <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">TINGKHONG HSS VIRTUAL SEAL</p>
                      <p className="font-serif text-xs font-semibold text-white mt-1">HERITAGE SCHOLAR CERTIFICATE</p>
                      <p className="text-[9px] text-slate-400 mt-1">Unlocked: {new Date().toLocaleDateString('en-IN')}</p>
                    </div>
                  )}

                  <button
                    onClick={handleReset}
                    className="mt-8 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold rounded-lg uppercase tracking-wider flex items-center gap-1.5 mx-auto transition-all cursor-pointer"
                    id="trivia-retry-btn"
                  >
                    <RefreshCw size={12} />
                    <span>Try Again</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
