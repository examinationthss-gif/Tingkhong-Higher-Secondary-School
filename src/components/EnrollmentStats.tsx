import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Info, 
  Sparkles, 
  TrendingUp, 
  Percent, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { Language } from '../translations';

interface EnrollmentStatsProps {
  lang: Language;
}

export default function EnrollmentStats({ lang }: EnrollmentStatsProps) {
  const [showTable, setShowTable] = useState(true);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  // Translations object specifically for local demographic data
  const t = {
    sectionBadge: { en: "OFFICIAL AUDITED DEMOGRAPHICS", as: "চৰকাৰী পঞ্জীভুক্ত ছাত্ৰ-ছাত্ৰীৰ পৰিসংখ্যা" },
    sectionTitle: { en: "Enrollment & Demographic Profile", as: "নামভৰ্তি আৰু লিংগভিত্তিক পৰিসংখ্যা" },
    sectionDesc: { 
      en: "Verified statistics for the 2026-27 academic year matching official state records. Reflecting our deep-rooted commitment to inclusive co-educational opportunities in Dibrugarh, Assam.",
      as: "২০২৬-২৭ শিক্ষাবৰ্ষৰ চৰকাৰী নথিৰ সৈতে সন্মত প্ৰমাণিত পৰিসংখ্যা। ডিব্ৰুগড়ৰ টিংখাঙত লিংগ সমতা আৰু মানসম্পন্ন শিক্ষা বিস্তাৰৰ প্ৰতি আমাৰ প্ৰতিশ্ৰুতি ইয়াত প্ৰতিফলিত হৈছে।"
    },
    udiseLabel: { en: "Official UDISE Code", as: "চৰকাৰী UDISE ক’ড" },
    categoryLabel: { en: "Institutional Category", as: "প্ৰতিষ্ঠানৰ শ্ৰেণীবিভাজন" },
    categoryVal: { en: "Category 5 - Upper Primary, Secondary & Higher Secondary", as: "শ্ৰেণী ৫ - উচ্চ প্ৰাথমিক, মাধ্যমিক আৰু উচ্চতৰ মাধ্যমিক" },
    
    totalEnrollment: { en: "Total Enrolments", as: "মুঠ নামভৰ্তি" },
    totalBoys: { en: "Total Boys", as: "মুঠ ছাত্ৰ" },
    totalGirls: { en: "Total Girls", as: "মুঠ ছাত্ৰী" },
    totalTrans: { en: "Total Transgender", as: "মুঠ তৃতীয় লিংগ" },
    verifiedStatus: { en: "Official Govt. Verified", as: "চৰকাৰীভাৱে প্ৰমাণিত" },

    thClass: { en: "Class / Grade", as: "শ্রেণী" },
    thBoys: { en: "Boys", as: "ছাত্ৰ" },
    thGirls: { en: "Girls", as: "ছাত্ৰী" },
    thTotal: { en: "Total Students", as: "মুঠ শিক্ষাৰ্থী" },
    thRatio: { en: "Gender Balance Ratio", as: "লিংগভিত্তিক অনুপাত" },

    btnToggleTable: { en: "Toggle Grade-Wise Sheet", as: "শ্ৰেণীভিত্তিক তালিকা প্ৰদৰ্শন কৰক" },
    interactiveTip: { en: "Click on any grade row below to view detailed cohort insights and breakdown ratios.", as: "সবিশেষ জানিবলৈ যিকোনো শ্ৰেণীৰ শাৰীৰ ওপৰত ক্লিক কৰক।" },
    cohortInsights: { en: "Class Cohort Insights", as: "শ্ৰেণীভিত্তিক পৰ্যালোচনা" },
    boysPercentage: { en: "Boys Proportion", as: "ছাত্ৰৰ শতাংশ" },
    girlsPercentage: { en: "Girls Proportion", as: "ছাত্ৰীৰ শতাংশ" },
    evenSplit: { en: "Optimally Balanced Co-ed Cohort", as: "লিংগ সমতাযুক্ত সহ-শিক্ষাৰ শ্ৰেণী" },
    strongGirlsCount: { en: "High female literacy participation observed in this cluster.", as: "এই শ্ৰেণীটোত ছাত্ৰীৰ অংশগ্ৰহণ আৰু শিক্ষাৰ হাৰ অধিক।" },
    closeBtn: { en: "Close Cohort Details", as: "পৰ্যালোচনা বন্ধ কৰক" }
  };

  const getTranslation = (key: keyof typeof t) => {
    return t[key][lang];
  };

  // Grade data from image stats
  const gradeData = [
    { id: "VI", label: { en: "Class VI", as: "ষষ্ঠ শ্ৰেণী" }, boys: 79, girls: 92, total: 171 },
    { id: "VII", label: { en: "Class VII", as: "সপ্তম শ্ৰেণী" }, boys: 80, girls: 86, total: 166 },
    { id: "VIII", label: { en: "Class VIII", as: "অষ্টম শ্ৰেণী" }, boys: 64, girls: 88, total: 152 },
    { id: "IX", label: { en: "Class IX", as: "নৱম শ্ৰেণী" }, boys: 83, girls: 98, total: 181 },
    { id: "X", label: { en: "Class X", as: "দশম শ্ৰেণী" }, boys: 45, girls: 75, total: 120 },
    { id: "XI", label: { en: "Class XI", as: "একাদশ শ্ৰেণী" }, boys: 78, girls: 92, total: 170 },
    { id: "XII", label: { en: "Class XII", as: "দ্বাদশ শ্ৰেণী" }, boys: 108, girls: 129, total: 237 },
  ];

  // Highlights cards
  const summaryCards = [
    {
      title: getTranslation("totalEnrollment"),
      value: "1,197",
      subText: { en: "Grades VI - XII combined", as: "ষষ্ঠৰ পৰা দ্বাদশ শ্ৰেণী পৰ্যন্ত" },
      icon: GraduationCap,
      color: "border-brand-gold bg-brand-gold/10 text-brand-gold",
      accentGlow: "from-brand-gold/20 to-transparent"
    },
    {
      title: getTranslation("totalBoys"),
      value: "537",
      subText: { en: "44.86% overall ratio", as: "মুঠ ছাত্ৰৰ হাৰ ৪৪.৮৬%" },
      icon: Users,
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
      accentGlow: "from-emerald-500/10 to-transparent"
    },
    {
      title: getTranslation("totalGirls"),
      value: "660",
      subText: { en: "55.14% overall ratio", as: "মুঠ ছাত্ৰীৰ হাৰ ৫৫.১৪%" },
      icon: UserCheck,
      color: "border-teal-500/30 bg-teal-500/5 text-teal-400",
      accentGlow: "from-teal-500/10 to-transparent"
    },
    {
      title: getTranslation("totalTrans"),
      value: "0",
      subText: { en: "No candidates recorded", as: "কোনো প্ৰাৰ্থী পঞ্জীভুক্ত নাই" },
      icon: Info,
      color: "border-slate-800 bg-[#0e1713] text-slate-500",
      accentGlow: "from-slate-800/10 to-transparent"
    }
  ];

  const handleRowClick = (id: string) => {
    setSelectedClass(selectedClass === id ? null : id);
  };

  const selectedCohort = gradeData.find(g => g.id === selectedClass);

  return (
    <section id="enrollment-statistics" className="py-20 bg-brand-dark relative text-white overflow-hidden border-t border-brand-gold/15">
      {/* Background aesthetics */}
      <div className="absolute inset-0 muga-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <TrendingUp size={11} className="text-emerald-400 animate-pulse" />
            <span>{getTranslation("sectionBadge")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            {getTranslation("sectionTitle")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            {getTranslation("sectionDesc")}
          </motion.p>
        </div>

        {/* Official Governance Stamp & Meta Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green-dark/30 border border-brand-gold/15 rounded-2xl p-5 mb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-gold/10 text-brand-gold rounded-xl">
              <FileSpreadsheet size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{getTranslation("verifiedStatus")}</p>
              <p className="text-sm font-sans font-black text-white">UDISE Code: <span className="text-brand-gold font-mono">18150218403</span></p>
            </div>
          </div>
          <div className="h-px w-full md:w-px md:h-10 bg-slate-800" />
          <div className="flex flex-col md:items-end">
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{getTranslation("categoryLabel")}</span>
            <span className="text-xs font-serif font-semibold text-brand-gold-light mt-0.5">{getTranslation("categoryVal")}</span>
          </div>
        </motion.div>

        {/* Top Highlight Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summaryCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-brand-gold/40 hover:-translate-y-1 ${card.color}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.accentGlow} rounded-bl-full pointer-events-none opacity-40`} />
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <p className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1">
                      {card.title}
                    </p>
                    <p className="text-3xl sm:text-4xl font-sans font-black text-white leading-none mb-2">
                      {card.value}
                    </p>
                  </div>
                  <div className="p-2 bg-black/25 rounded-lg text-inherit">
                    <Icon size={20} />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-sans tracking-wide mt-2">
                  {card.subText[lang]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Grade-wise Distribution Interactive Sheet */}
        <div className="bg-[#0b1610]/70 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles size={16} className="text-brand-gold" />
                <span>Grade-Wise Enrollment Breakdown</span>
              </h3>
              <p className="text-slate-400 text-xs mt-1 font-sans">
                {getTranslation("interactiveTip")}
              </p>
            </div>
            
            <button
              onClick={() => setShowTable(!showTable)}
              className="px-4 py-2 bg-brand-green border border-brand-gold/30 rounded-xl text-xs font-sans text-white hover:bg-brand-green-light transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{getTranslation("btnToggleTable")}</span>
              {showTable ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {/* Custom Responsive Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-brand-green-dark/20 text-brand-gold border-b border-slate-800">
                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-[10px]">{getTranslation("thClass")}</th>
                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-[10px] text-center">{getTranslation("thBoys")}</th>
                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-[10px] text-center">{getTranslation("thGirls")}</th>
                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-[10px] text-center">{getTranslation("thTotal")}</th>
                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-[10px] hidden md:table-cell">{getTranslation("thRatio")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {gradeData.map((row) => {
                        const isSelected = selectedClass === row.id;
                        const boysPct = Math.round((row.boys / row.total) * 100);
                        const girlsPct = 100 - boysPct;

                        return (
                          <React.Fragment key={row.id}>
                            <tr 
                              onClick={() => handleRowClick(row.id)}
                              className={`group cursor-pointer transition-colors duration-200 ${
                                isSelected ? "bg-brand-green-dark/45" : "hover:bg-brand-green-dark/20"
                              }`}
                            >
                              <td className="py-3.5 px-5 font-serif font-bold text-white group-hover:text-brand-gold transition-colors">
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-60" />
                                  <span>{row.label[lang]}</span>
                                </div>
                              </td>
                              <td className="py-3.5 px-5 text-center font-mono font-medium text-emerald-400">{row.boys}</td>
                              <td className="py-3.5 px-5 text-center font-mono font-medium text-teal-400">{row.girls}</td>
                              <td className="py-3.5 px-5 text-center font-mono font-bold text-white">{row.total}</td>
                              <td className="py-3.5 px-5 hidden md:table-cell">
                                <div className="flex items-center gap-2 max-w-[200px]">
                                  <span className="text-[10px] text-emerald-400 font-mono w-8 text-right">{boysPct}%</span>
                                  <div className="h-2 flex-grow bg-slate-800 rounded-full overflow-hidden flex">
                                    <div className="bg-emerald-500 h-full" style={{ width: `${boysPct}%` }} />
                                    <div className="bg-teal-500 h-full" style={{ width: `${girlsPct}%` }} />
                                  </div>
                                  <span className="text-[10px] text-teal-400 font-mono w-8">{girlsPct}%</span>
                                </div>
                              </td>
                            </tr>

                            {/* Collapsible detail drawer for this class */}
                            {isSelected && (
                              <tr>
                                <td colSpan={5} className="bg-black/35 px-6 py-4 border-t border-b border-brand-gold/20">
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                                  >
                                    <div className="space-y-1">
                                      <p className="text-[10px] font-mono text-brand-gold uppercase tracking-wider">{getTranslation("cohortInsights")} — {row.label[lang]}</p>
                                      <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                                        {girlsPct > boysPct ? getTranslation("strongGirlsCount") : getTranslation("evenSplit")}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-xs font-mono">
                                      <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-slate-400">{getTranslation("boysPercentage")}:</span>
                                        <span className="text-emerald-400 font-bold">{boysPct}%</span>
                                      </div>
                                      <div className="bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                                        <span className="text-slate-400">{getTranslation("girlsPercentage")}:</span>
                                        <span className="text-teal-400 font-bold">{girlsPct}%</span>
                                      </div>
                                    </div>
                                  </motion.div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Bento Quote box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#0b1610]/40 border border-slate-800/80 p-5 rounded-2xl flex gap-3.5 items-start">
            <div className="p-2 bg-brand-gold/15 text-brand-gold rounded-xl shrink-0">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-gold-light tracking-wide">
                Gender Equity Focus
              </h4>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mt-1">
                With a female student ratio of 55.14%, our demographic profile highlights a highly successful execution of state educational gender-parity goals in Upper Assam.
              </p>
            </div>
          </div>

          <div className="bg-[#0b1610]/40 border border-slate-800/80 p-5 rounded-2xl flex gap-3.5 items-start">
            <div className="p-2 bg-emerald-500/15 text-emerald-400 rounded-xl shrink-0">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-gold-light tracking-wide">
                Optimal Classroom Density
              </h4>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mt-1">
                An average cohort size of 171 students per class provides highly focused administrative control and academic trackability, keeping classroom learning pristine.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
