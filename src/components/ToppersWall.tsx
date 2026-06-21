import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Trophy, Star, Sparkles, Filter, ShieldCheck, ChevronRight, GraduationCap } from 'lucide-react';
import { TOPPER_DATA, AcademicTopper } from '../trustAndStaffData';
import { Language } from '../translations';

interface ToppersWallProps {
  lang: Language;
}

export default function ToppersWall({ lang }: ToppersWallProps) {
  const [selectedYear, setSelectedYear] = useState<string>('2025');

  const years = useMemo(() => ['2025', '2024', '2023'], []);

  const filteredToppers = useMemo(() => {
    return TOPPER_DATA.filter(t => t.year === selectedYear);
  }, [selectedYear]);

  return (
    <section id="toppers-wall-section" className="py-20 bg-brand-green/[0.02] border-t border-gray-150 relative overflow-hidden">
      
      {/* Decorative floating blurred background shapes to simulate a wall of fame glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/15 text-brand-gold-dark border border-brand-gold/25 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy size={13} className="text-brand-gold" />
            <span>{lang === 'en' ? "HALL OF EXCELLENCE" : "মেধা ক্ৰাফ্ট কেন্দ্ৰ"}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {lang === 'en' ? "Academic Toppers Wall of Fame" : "কৃতী শিক্ষাৰ্থীৰ মেধা-দীপ্তি ফলক"}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            {lang === 'en'
              ? "We celebrate the incredible consistency and academic honors achieved by our exceptional secondary and higher secondary candidates in the state board evaluations."
              : "উচ্চতৰ মাধ্যমিক আৰু হাইস্কুল শিক্ষান্ত পৰীক্ষাত ৰাজ্যিক পৰ্যায়ত জাকতিলীয়া ফলাফল কঢ়িয়াই অনা আমাৰ মেধাৱী ছাত্ৰ-ছাত্ৰীসকলৰ গৌৰৱময় পৰিক্ৰমা।"}
          </p>
        </div>

        {/* Year Filter Center */}
        <div className="flex flex-col items-center justify-center mb-10 gap-3">
          <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
            <Filter size={12} className="text-brand-green" />
            {lang === 'en' ? "Filter Board Year" : "পৰীক্ষা বৰ্ষ বাছনি কৰক"}
          </span>
          
          <div className="flex items-center gap-2 bg-white border border-gray-200 p-1.5 rounded-xl shadow-xs">
            {years.map((year) => {
              const isActive = selectedYear === year;
              return (
                <button
                  key={year}
                  id={`year-btn-${year}`}
                  onClick={() => setSelectedYear(year)}
                  className={`px-5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-green text-white shadow-sm scale-102"
                      : "text-slate-600 hover:bg-slate-100 hover:text-brand-green"
                  }`}
                >
                  {year} {lang === 'en' ? "Batch" : "বৰ্ষৰ উৰ্ত্তীণ"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Toppers Cards Display Matrix */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredToppers.map((topper, idx) => {
                // Determine layout styles based on position (Rank 1 / Highest percentage gets premium glow)
                const isFirst = idx === 0;
                return (
                  <div
                    key={topper.id}
                    className={`bg-white rounded-2xl border-2 hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center p-6 text-center overflow-hidden ${
                      isFirst
                        ? "border-brand-gold ring-1 ring-brand-gold/15 shadow-md bg-brand-gold/[0.01]"
                        : "border-gray-200"
                    }`}
                  >
                    {/* Visual Corner Ribbon for top spot topper */}
                    {isFirst && (
                      <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-mono text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        <Star size={10} className="fill-brand-dark text-transparent animate-spin-slow" />
                        <span>Top Spot</span>
                      </div>
                    )}

                    {/* Student Photo Placeholder Frame - Elegant Vector Silhouette */}
                    <div className="relative mb-5 mt-2">
                      <div className={`w-22 h-22 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-105 ${
                        isFirst
                          ? "bg-gradient-to-tr from-brand-gold/20 to-brand-gold/40 border-brand-gold"
                          : topper.gender === 'F'
                          ? "bg-gradient-to-tr from-pink-50 to-pink-100 border-pink-200"
                          : "bg-gradient-to-tr from-brand-green/10 to-brand-green/20 border-brand-green/30"
                      }`}>
                        {/* Beautiful user silhouette vector representing graduation */}
                        <GraduationCap size={38} className={isFirst ? "text-brand-gold-dark" : "text-slate-600"} />
                      </div>

                      {/* Laurel badge sticker */}
                      <div className="absolute -bottom-2 -right-1 bg-brand-gold text-brand-dark p-1.2 rounded-full border border-white shadow-md">
                        <Award size={14} />
                      </div>
                    </div>

                    {/* Topper Meta Values */}
                    <div className="space-y-1 mb-4 flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-green transition-colors leading-snug">
                        {topper.name[lang]}
                      </h3>
                      <p className="text-xs font-mono font-bold text-gray-400 tracking-wide uppercase">
                        {topper.examination[lang]}
                      </p>
                      
                      {/* Highlighted Percentage Block */}
                      <div className="inline-flex items-center justify-center gap-1.5 py-1 px-3.5 bg-neutral-100 rounded-full border border-neutral-200/50 mt-2">
                        <Sparkles size={12} className="text-brand-gold fill-brand-gold" />
                        <span className="text-sm font-black font-mono text-slate-800">
                          {topper.percentage} {lang === 'en' ? "Percent" : "শতাংশ"}
                        </span>
                      </div>
                    </div>

                    {/* Verification & Bottom Achievements */}
                    <div className="w-full pt-4 border-t border-gray-100 font-sans space-y-2">
                      <div className="bg-gray-50 rounded-lg py-2.5 px-3 flex items-center justify-center gap-1.5 border border-gray-200/40 text-[11px] font-semibold text-gray-700 leading-snug">
                        <ShieldCheck size={13} className="text-brand-green shrink-0" />
                        <span>{topper.achievements[lang]}</span>
                      </div>
                      
                      <div className="text-[10px] font-mono text-gray-400 flex items-center justify-center gap-1 uppercase">
                        <span>Official AHSEC Registry verified</span>
                        <ChevronRight size={10} />
                      </div>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
