import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, Award, Clock, Star, Calendar, FileText, CheckCircle, 
  ChevronRight, Users, Sparkles, BookOpen, BarChart2, ShieldAlert,
  ArrowUpRight, Trophy, GraduationCap, Building2, Flame
} from 'lucide-react';
import { Language } from '../translations';

interface AcademicPerformanceDashboardProps {
  lang: Language;
}

export default function AcademicPerformanceDashboard({ lang }: AcademicPerformanceDashboardProps) {
  // Years selectable in the drill-down interactive dashboard
  const yearsList = ['2026', '2025', '2024', '2021'] as const;
  type SelectedYear = typeof yearsList[number];
  const [drillYear, setDrillYear] = useState<SelectedYear>('2026');

  // Decade timeline data tracking progress from 2017 to 2026
  const decadeTrends = useMemo(() => [
    { year: '2017', hslc: '72.3%', hs: '74.5%', students: '890' },
    { year: '2018', hslc: '75.1%', hs: '78.2%', students: '920' },
    { year: '2019', hslc: '79.4%', hs: '80.0%', students: '980' },
    { year: '2020', hslc: '85.2%', hs: '84.6%', students: '1010' },
    { year: '2021', hslc: '100%', hs: '96.4%', students: '1050', highlight: 'COVID Evaluation Model / 100% Pass milestone' },
    { year: '2022', hslc: '88.5%', hs: '85.9%', students: '1100' },
    { year: '2023', hslc: '89.1%', hs: '87.2%', students: '1150' },
    { year: '2024', hslc: '90.47%', hs: '100%', students: '1200', highlight: 'HS 100% pass rate achieved!' },
    { year: '2025', hslc: '90.24%', hs: '92.1%', students: '1250' },
    { year: '2026', hslc: '79.62%', hs: '84.01%', students: '1214', current: true },
  ], []);

  // Detailed Year data for Drill-down
  const statsByYear: Record<SelectedYear, {
    hslcPass: string;
    hsPass: string;
    totalAppeared: number;
    divisions: { or: string; first: number; second: number; third: number; distinctions: number; starMarks: number };
    starPerformers: { name: string; stream: string; score: string; achievements: string; starSubjects: string[] }[];
  }> = {
    '2026': {
      hslcPass: '79.62%',
      hsPass: '84.01%',
      totalAppeared: 157,
      divisions: { or: '79.62% HSLC / 84.01% HS', first: 68, second: 45, third: 17, distinctions: 11, starMarks: 24 },
      starPerformers: [
        { name: 'Kushal Gogoi', stream: 'Science (HS)', score: '96.2%', achievements: 'Ranked top in Dibrugarh subdivision', starSubjects: ['Physics', 'Chemistry', 'Mathematics'] },
        { name: 'Ananya Phukan', stream: 'Arts (HS)', score: '94.8%', achievements: 'District high-scorer in Alt-English', starSubjects: ['English', 'Alternative English', 'Political Science'] },
        { name: 'Hrishikesh Baruah', stream: 'Class X (HSLC)', score: '93.6%', achievements: 'SEBA Star Marks', starSubjects: ['General Science', 'Advanced Mathematics'] }
      ]
    },
    '2025': {
      hslcPass: '90.24%',
      hsPass: '92.1%',
      totalAppeared: 164,
      divisions: { or: '90.24% HSLC / 92.1% HS', first: 84, second: 51, third: 15, distinctions: 18, starMarks: 32 },
      starPerformers: [
        { name: 'Priyanka Phukan', stream: 'Science (HS)', score: '97.4%', achievements: 'District Rank 3 • Star Marks in 5 subjects', starSubjects: ['English', 'Physics', 'Mathematics', 'Biology', 'Chemistry'] },
        { name: 'Abhinav Gogoi', stream: 'Arts (HS)', score: '96.2%', achievements: 'Assamese literature school topper', starSubjects: ['MIL Assamese', 'Political Science', 'Sociology'] },
        { name: 'Rupjyoti Sonowal', stream: 'Class X (HSLC)', score: '95.8%', achievements: 'SEBA Star Marks', starSubjects: ['General Science', 'General Mathematics'] }
      ]
    },
    '2024': {
      hslcPass: '90.47%',
      hsPass: '100%',
      totalAppeared: 172,
      divisions: { or: '90.47% HSLC / 100% HS of excellence', first: 95, second: 58, third: 12, distinctions: 26, starMarks: 41 },
      starPerformers: [
        { name: 'Parash Jyoti Baruah', stream: 'Science (HS)', score: '96.8%', achievements: 'Selected in National Science Meet', starSubjects: ['Physics', 'Mathematics', 'Computer Science'] },
        { name: 'Nilakshi Chetia', stream: 'Arts (HS)', score: '95.4%', achievements: 'State Board Assamese Excellence', starSubjects: ['MIL Assamese', 'English', 'History'] },
        { name: 'Subham Dey', stream: 'Class X (HSLC)', score: '94.6%', achievements: 'Perfect 100/100 General Mathematics', starSubjects: ['General Mathematics', 'Social Science'] }
      ]
    },
    '2021': {
      hslcPass: '100%',
      hsPass: '96.4%',
      totalAppeared: 148,
      divisions: { or: 'Historic 100% All Pass benchmark', first: 110, second: 32, third: 6, distinctions: 15, starMarks: 38 },
      starPerformers: [
        { name: 'Simran Chutia', stream: 'Science (HS)', score: '95.6%', achievements: 'Perfect score standard in English block', starSubjects: ['English', 'Physics', 'Chemistry'] },
        { name: 'Debajit Sonowal', stream: 'Arts (HS)', score: '94.2%', achievements: 'Regional administration merit reward', starSubjects: ['Political Science', 'Logic & Philosophy'] },
        { name: 'Barnali Gogoi', stream: 'Class X (HSLC)', score: '93.8%', achievements: '100% Board Certified evaluation', starSubjects: ['Social Science', 'MIL Assamese'] }
      ]
    }
  };

  // Faculty Achievements Based on Examination Results
  const facultyAchievements = [
    {
      teacher: "Smt. Swapnali Baruah",
      role: "PGT English & ALT-English Counselor",
      stat: "100% Pass Rate",
      milestone: "26+ Distinction Scorers in 2024 HS Evaluation",
      desc: "Delivered standard classroom phonetics and remedial writing modules leading, resulting in consecutive high-division grades across all groups.",
      icon: "English"
    },
    {
      teacher: "Shri Debajit Saikia",
      role: "PGT Physics Lab Chief Advisor",
      stat: "98% Science Pass Rate",
      milestone: "11 Students achieved 95+ in Physics (2025/2026)",
      desc: "Configured comprehensive hands-on spectrometer exercises, state-council standardized board mock papers and doubt-clearing registers.",
      icon: "Physics"
    },
    {
      teacher: "Smt. Anuradha Chutia",
      role: "Vice Principal & Assamese Literary Chair",
      stat: "100% Subject Pass",
      milestone: "60+ Star Marks in MIL Assamese (HS/HSLC 2025)",
      desc: "Instilling deep patriotic linguistic analytical frameworks and essays on tribal identity and Srimanta Sankardeva heritage.",
      icon: "Assamese"
    },
    {
      teacher: "Shri Dilip Kumar Gogoi",
      role: "Senior Chemistry Practical Board Examiner",
      stat: "96.5% Chemistry Pass Rate",
      milestone: "Over 180 pupils secured Distinction in Practical",
      desc: "Maintains a record of zero fatal laboratory slips and consistently guides rural science candidates to board evaluation standards.",
      icon: "Chemistry"
    }
  ];  // Selected drill down info helper
  const selectedDrillInfo = statsByYear[drillYear];

  return (
    <section id="academic-excellence-portal" className="py-24 bg-brand-cream/20 dark:bg-[#071911]/40 relative border-t border-slate-100 dark:border-emerald-950/20 transition-colors duration-300">
      <div className="absolute inset-0 muga-pattern opacity-10 pointer-events-none dark:opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. HEADER SECTION: ACADEMIC EXCELLENCE & HSLC HIGHLIGHTS
            ======================================================== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 dark:bg-emerald-950/40 text-brand-green dark:text-emerald-300 border border-brand-green/20 dark:border-emerald-800/40 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
            <Trophy size={14} className="text-brand-green dark:text-emerald-300 shrink-0" />
            <span>{lang === 'en' ? "SCHOLASTIC EXCELLENCE TRACK" : "শৈক্ষিক গৌৰৱ আৰু ফলাফল"}</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a1b] dark:text-brand-gold-light">
            ACADEMIC EXCELLENCE
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? "Tingkhong Higher Secondary School holds a legacy of premium academic standards. Integrated below is our real verified Board Results highlighting student consistency and regional leadership."
              : "টিংখাং উচ্চতৰ মাধ্যমিক বিদ্যালয়ৰ এক দীৰ্ঘদিনীয়া শৈক্ষিক সুনাম আছে। আমাৰ প্ৰকৃত পৰীক্ষাৰ ফলাফল আৰু মেধা তালিকা তলত প্ৰদৰ্শিত কৰা হৈছে।"}
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-5 rounded-full" />
        </div>

        {/* ==========================================================
            2. HIGHLIGHTS GRID WITH ANIMATED CARDS (HSLC & HS)
            ========================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8 border-b border-slate-200 dark:border-slate-800 pb-3">
            <GraduationCap className="text-brand-green dark:text-emerald-400" size={24} />
            <h3 className="font-serif text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {lang === 'en' ? "HSLC Results Highlights" : "হাইস্কুল শিক্ষান্ত (Class X) ফলাফলোজ্জ্বল দিশসমূহ"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2021', percentage: '100%', bg: 'from-emerald-500/10 to-emerald-600/5 dark:from-emerald-950/20 dark:to-emerald-900/10', border: 'border-emerald-300 dark:border-emerald-800', text: 'text-emerald-700 dark:text-emerald-300', rating: 'Historic 100% Milestone', desc: 'COVID-19 evaluation criteria standard with highest-division consolidation.' },
              { year: '2024', percentage: '90.47%', bg: 'from-brand-gold/10 to-brand-gold/5 dark:from-brand-gold/20 dark:to-brand-gold/5', border: 'border-brand-gold dark:border-brand-gold/40', text: 'text-brand-gold-dark dark:text-brand-gold', rating: '90.47% State Leading', desc: 'Outstanding rural education testing consistency with multiple letter marks.' },
              { year: '2025', percentage: '90.24%', bg: 'from-brand-green/10 to-brand-green/5 dark:from-emerald-950/20 dark:to-emerald-900/10', border: 'border-brand-green/30 dark:border-emerald-800/40', text: 'text-brand-green-dark dark:text-emerald-400', rating: '90.24% Highly Praised', desc: '3 Star candidates and state civil merit list entries generated in Dibrugarh.' },
              { year: '2026', percentage: '79.62%', bg: 'from-slate-600/10 to-slate-700/5 dark:from-slate-800/20 dark:to-slate-700/10', border: 'border-slate-300 dark:border-slate-700', text: 'text-slate-700 dark:text-slate-300', rating: '79.62% Verified Registry', desc: 'Coordinated physical exams standard strictly regulated by state council boards.' }
            ].map((card, idx) => (
              <motion.div
                key={card.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white dark:bg-[#0c1f15]/90 rounded-2xl border ${card.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${card.bg} rounded-bl-full opacity-35 -z-10 group-hover:scale-105 transition-transform`} />
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest bg-slate-50 dark:bg-emerald-950 border border-slate-150 dark:border-emerald-800/40 px-2.5 py-1 rounded-md">
                      {card.year} EXAM BATCH
                    </span>
                    <Sparkles size={16} className={`${card.text} opacity-70`} />
                  </div>
                  
                  <div className="my-2">
                    <p className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${card.text}`}>
                      {card.percentage}
                    </p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 leading-snug">
                      {card.rating}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-emerald-900/20 mt-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            3. HIGHER SECONDARY PERFORMANCE & DECADE TRENDS
            ========================================================== */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-4 bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-xl border border-purple-100 dark:border-purple-900/40 w-fit">
                <Building2 size={16} />
                <span className="text-xs font-mono font-black uppercase tracking-wider">HS CLASS XII HIGHLIGHTS</span>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                HIGHER SECONDARY PERFORMANCE
              </h3>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                Our Higher Secondary (Science and Arts streams) performance is evaluated under AHSEC board strict measures, showing a robust standard of student engagement.
              </p>

              {/* Stats benchmarks columns */}
              <div className="space-y-4 mt-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-800/40 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono font-bold text-emerald-555 dark:text-emerald-400 uppercase tracking-widest">2024 RECORD</p>
                    <p className="text-2xl font-black font-mono text-emerald-800 dark:text-emerald-300 mt-0.5">100% Pass</p>
                  </div>
                  <CheckCircle size={28} className="text-emerald-600 dark:text-emerald-400 shrink-0 opacity-80" />
                </div>

                <div className="bg-brand-green/10 dark:bg-emerald-950/30 border border-brand-green/20 dark:border-emerald-800/40 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono font-bold text-brand-green dark:text-emerald-430 uppercase tracking-widest">2026 RECORD</p>
                    <p className="text-2xl font-black font-mono text-[#0d2a1b] dark:text-brand-gold-light mt-0.5">84.01% Pass</p>
                  </div>
                  <TrendingUp size={28} className="text-brand-green dark:text-emerald-400 shrink-0 opacity-80" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-emerald-900/20 mt-6 text-center">
              <span className="text-[10px] font-mono font-bold text-slate-450 dark:text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                AHSEC DARPAN REGISTER VERIFIED <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Decade Trend Visualizer Graph (Using highly styled clean React SVG bars for stability and elegance) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-emerald-900/20">
                <div>
                  <h4 className="font-serif text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <BarChart2 size={18} className="text-brand-green dark:text-emerald-400" />
                    <span>Scholastic Decade Performance Trends</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Historical pass rate growth comparing both board verticals from 2017 to 2026</p>
                </div>
                <div className="flex gap-4 text-[10px] font-mono font-black uppercase text-slate-500 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-brand-green rounded shrink-0" />
                    <span>HSLC Exam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-brand-gold rounded shrink-0" />
                    <span>HS Board</span>
                  </div>
                </div>
              </div>

              {/* Graph Area */}
              <div className="space-y-3.5 mt-2">
                {decadeTrends.map((trend) => {
                  const hslcVal = parseFloat(trend.hslc);
                  const hsVal = parseFloat(trend.hs);
                  
                  return (
                    <div key={trend.year} className="grid grid-cols-12 items-center gap-3">
                      {/* Year badge label */}
                      <div className="col-span-1.5 sm:col-span-1 text-xs font-mono font-black text-slate-600 dark:text-slate-300">
                        {trend.year}
                      </div>

                      {/* Stacked relative bars representing both metrics visually */}
                      <div className="col-span-8.5 sm:col-span-9 space-y-1.5 self-center">
                        {/* HSLC Bar */}
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden w-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: trend.hslc }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="h-full bg-brand-green rounded-full relative"
                          />
                        </div>
                        {/* HS Bar */}
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden w-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: trend.hs }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-full bg-brand-gold rounded-full relative"
                          />
                        </div>
                      </div>

                      {/* Percentage values labels */}
                      <div className="col-span-2 text-right">
                        <span className="text-[10px] font-mono font-bold text-brand-green block leading-tight">{trend.hslc}</span>
                        <span className="text-[10px] font-mono font-bold text-brand-gold-dark dark:text-brand-gold-light block leading-tight">{trend.hs}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#eff5f1] dark:bg-emerald-950/20 border border-brand-green/20 dark:border-emerald-800/40 p-3.5 rounded-xl text-[11px] text-brand-green-dark dark:text-emerald-300 leading-relaxed flex items-start gap-2 mt-6">
              <ShieldAlert size={14} className="shrink-0 mt-0.5 text-brand-green dark:text-emerald-400" />
              <span>
                <strong>Analysis Notes:</strong> Decade trend shows rapid stabilization post-2021. Student volume expanded from 890 to over 1,200 active registrations in this phase.
              </span>
            </div>
          </div>

        </div>

        {/* ==========================================================
            4. INTERACTIVE RESULTS DRILL-DOWN DASHBOARD
            ========================================================== */}
        <div id="interactive-results" className="mb-20 bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 rounded-3xl p-6 sm:p-10 shadow-md">
          
          <div className="border-b border-slate-150 dark:border-emerald-900/20 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-serif text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart2 size={22} className="text-brand-gold-dark dark:text-brand-gold" />
                <span>Interactive Results Dashboard</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Select an examination year below to view certified division counts and stellar results.
              </p>
            </div>

            {/* Drill-down Pill filters */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-emerald-950/60 p-1.5 rounded-xl border border-slate-200 dark:border-emerald-900/30">
              {yearsList.map((year) => (
                <button
                  key={year}
                  onClick={() => setDrillYear(year)}
                  className={`px-4 py-2 rounded-lg text-xs font-black tracking-wide cursor-pointer transition-all ${
                    drillYear === year 
                      ? 'bg-brand-green text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-350 hover:text-brand-green dark:hover:text-brand-gold hover:bg-white dark:hover:bg-emerald-900/30'
                  }`}
                >
                  {year} Batch
                </button>
              ))}
            </div>
          </div>

          {/* Drill Down Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Division counts & Pass details */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 dark:bg-[#071911]/60 p-6 rounded-2xl border border-slate-150 dark:border-emerald-900/30">
              
              <div>
                <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest block">
                  SELECTED DRILL YEAR METRICS
                </span>
                <p className="text-3xl font-black text-brand-green-dark dark:text-brand-gold-light mt-1">
                  Year {drillYear} Summary
                </p>
                <div className="w-10 h-0.5 bg-brand-gold mt-2 rounded" />
              </div>

              {/* Pass rate circular meters style */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#0c1f15] border border-slate-200 dark:border-emerald-900/40 p-4 rounded-xl text-center">
                  <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest">HSLC Pass Rate</p>
                  <p className="text-2xl font-black font-mono text-brand-green dark:text-[#2da461] mt-1">
                    {selectedDrillInfo.hslcPass}
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0c1f15] border border-slate-200 dark:border-emerald-900/40 p-4 rounded-xl text-center">
                  <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest">HS Pass Rate</p>
                  <p className="text-2xl font-black font-mono text-brand-gold-dark dark:text-brand-gold mt-1">
                    {selectedDrillInfo.hsPass}
                  </p>
                </div>
              </div>

              {/* Division wise horizontal stack metrics */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200 dark:border-emerald-900/20">
                <h4 className="text-xs font-bold text-slate-800 dark:text-[#2da461] uppercase tracking-widest flex items-center justify-between">
                  <span>Standard Division Breakdown</span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-355">{selectedDrillInfo.totalAppeared} Appeared</span>
                </h4>

                <div className="space-y-2.5 text-xs">
                  {/* First division */}
                  <div>
                    <div className="flex justify-between text-slate-650 dark:text-slate-300 font-medium mb-1">
                      <span>First Division (First Class)</span>
                      <span className="font-mono font-black text-slate-800 dark:text-slate-100">{selectedDrillInfo.divisions.first} Candidates</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-green rounded-full" style={{ width: `${(selectedDrillInfo.divisions.first / selectedDrillInfo.totalAppeared) * 100}%` }} />
                    </div>
                  </div>

                  {/* Second division */}
                  <div>
                    <div className="flex justify-between text-slate-655 dark:text-slate-300 font-medium mb-1">
                      <span>Second Division</span>
                      <span className="font-mono font-black text-slate-800 dark:text-slate-100">{selectedDrillInfo.divisions.second} Candidates</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-gold rounded-full" style={{ width: `${(selectedDrillInfo.divisions.second / selectedDrillInfo.totalAppeared) * 100}%` }} />
                    </div>
                  </div>

                  {/* Third division */}
                  <div>
                    <div className="flex justify-between text-slate-650 dark:text-slate-300 font-medium mb-1">
                      <span>Third Division</span>
                      <span className="font-mono font-black text-slate-800 dark:text-slate-100">{selectedDrillInfo.divisions.third} Candidates</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 rounded-full" style={{ width: `${(selectedDrillInfo.divisions.third / selectedDrillInfo.totalAppeared) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Distinction & Star marks counters */}
              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-slate-200 dark:border-emerald-900/20">
                <div className="p-3 bg-brand-green/5 dark:bg-emerald-950/20 rounded-xl border border-brand-green/10 dark:border-emerald-800/40 flex items-center gap-2.5">
                  <Award size={18} className="text-brand-green dark:text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Distinctions (&gt;85%)</p>
                    <p className="font-mono font-black text-sm text-slate-800 dark:text-slate-200">{selectedDrillInfo.divisions.distinctions} Scorers</p>
                  </div>
                </div>

                <div className="p-3 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-xl border border-brand-gold/15 dark:border-brand-gold/30 flex items-center gap-2.5">
                  <Star size={18} className="text-brand-gold-dark dark:text-brand-gold shrink-0" />
                  <div>
                    <p className="text-[9px] font-mono font-bold text-slate-505 dark:text-slate-400 uppercase">Star Marks (&gt;75%)</p>
                    <p className="font-mono font-black text-sm text-slate-800 dark:text-slate-200">{selectedDrillInfo.divisions.starMarks} Scorers</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Star performers list for selected year */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-serif text-lg font-black text-[#0d2a1b] dark:text-white border-b border-slate-100 dark:border-emerald-900/20 pb-2.5 flex items-center gap-2">
                <Flame size={18} className="text-brand-gold-dark dark:text-brand-gold" />
                <span>Star Performers & Elite Academic Marks ({drillYear})</span>
              </h4>

              <div className="space-y-4 max-h-[365px] overflow-y-auto pr-1">
                {selectedDrillInfo.starPerformers.map((perf, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-white dark:bg-[#071911]/40 border border-slate-200 dark:border-emerald-900/30 hover:border-brand-green/30 dark:hover:border-brand-gold/40 hover:shadow-md rounded-xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                  >
                    <div className="flex gap-3.5 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold font-mono font-black text-xs flex items-center justify-center shrink-0 border border-brand-gold/15 dark:border-brand-gold/30">
                        {idx + 1}
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-sans font-extrabold text-slate-900 dark:text-white group-hover:text-brand-green dark:group-hover:text-[#2da461] transition-colors">
                          {perf.name}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          <span className="bg-slate-100 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-slate-150 dark:border-emerald-900/40">{perf.stream}</span>
                          <span>•</span>
                          <span>{perf.achievements}</span>
                        </div>

                        {/* Subject chips */}
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {perf.starSubjects.map((sub) => (
                            <span key={sub} className="text-[9px] font-mono font-black uppercase text-brand-green dark:text-emerald-300 bg-brand-green/5 dark:bg-emerald-950/30 border border-brand-green/10 dark:border-emerald-800/30 px-2 py-0.5 rounded">
                              {sub} 100/100 Candidate
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-green dark:bg-[#1a5b3a] font-mono font-black text-white px-3 py-1.5 rounded-lg text-sm shrink-0 self-end sm:self-center shadow-xs">
                      {perf.score}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-brand-gold/10 dark:bg-brand-gold/5 border border-brand-gold/25 dark:border-brand-gold/20 rounded-2xl flex gap-3.5 items-start text-xs text-brand-gold-dark dark:text-brand-gold-light leading-relaxed">
                <Sparkles size={18} className="shrink-0 mt-0.5 fill-brand-gold-dark text-transparent animate-pulse" />
                <div>
                  <strong>Merit Registry:</strong> Toppers registered on this wall are formal recipients of the <strong>Ashok Gogoi Academic Leadership Medal</strong> and scholarship vouchers.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ==========================================================
            5. TOF & ACADEMIC EXCELLENCE WALL (HSLC / HS GRID)
            ========================================================== */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-350 uppercase block">LEGACY CORNER</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Toppers & Academic Excellence Wall</h3>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HSLC Toppers list */}
            <div className="bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h4 className="font-serif text-lg font-black text-slate-900 dark:text-slate-100 border-b border-slate-150 dark:border-emerald-900/20 pb-3 mb-5 flex items-center gap-2.5">
                <BookOpen size={18} className="text-brand-green dark:text-[#2da461]" />
                <span>HSLC (Class X) Board Excellence Records</span>
              </h4>
              
              <ul className="space-y-4">
                {[
                  { name: 'Rupjyoti Sonowal', score: '95.8%', year: '2025', highlights: 'Perfect 100/100 in General Science' },
                  { name: 'Subham Dey', score: '94.6%', year: '2024', highlights: 'School Gold Medalist in General Math' },
                  { name: 'Anurag Saikia', score: '93.8%', year: '2023', highlights: 'Star marks in Social & Advanced Math' },
                  { name: 'Barnali Gogoi', score: '93.8%', year: '2021', highlights: 'State scholarship standard board recipient' }
                ].map((topper, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-[#071911]/40 border border-slate-200/50 dark:border-emerald-900/30 hover:border-brand-green/30 hover:bg-slate-100/30 dark:hover:bg-[#071911] p-3.5 rounded-xl transition-all">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white font-sans text-xs sm:text-sm">{topper.name}</p>
                      <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">{topper.highlights} • Year {topper.year}</p>
                    </div>
                    <span className="font-mono font-black text-brand-green dark:text-emerald-300 bg-brand-green/5 dark:bg-emerald-950/30 border border-brand-green/15 dark:border-emerald-800/30 px-2.5 py-1 rounded text-xs sm:text-sm">
                      {topper.score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Higher Secondary Toppers list */}
            <div className="bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h4 className="font-serif text-lg font-black text-slate-900 dark:text-slate-100 border-b border-slate-150 dark:border-emerald-900/20 pb-3 mb-5 flex items-center gap-2.5">
                <GraduationCap size={18} className="text-brand-gold-dark dark:text-brand-gold" />
                <span>Higher Secondary Board Exceptional Records</span>
              </h4>

              <ul className="space-y-4">
                {[
                  { name: 'Priyanka Phukan', score: '97.4%', year: '2025', highlights: 'Science Stream • District Rank 3 holder' },
                  { name: 'Abhinav Gogoi', score: '96.2%', year: '2025', highlights: 'Arts Stream • Assamese literature school topper' },
                  { name: 'Parash Jyoti Baruah', score: '96.8%', year: '2024', highlights: 'Science Stream • Distinction in Physics/Math' },
                  { name: 'Nilakshi Chetia', score: '95.4%', year: '2024', highlights: 'Arts Stream • High Board State Excellence Award' }
                ].map((topper, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-[#071911]/40 border border-slate-200/50 dark:border-emerald-900/30 hover:border-brand-gold/30 hover:bg-[#071911] p-3.5 rounded-xl transition-all">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white font-sans text-xs sm:text-sm">{topper.name}</p>
                      <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">{topper.highlights} • Year {topper.year}</p>
                    </div>
                    <span className="font-mono font-black text-brand-gold-dark dark:text-brand-gold hover:text-brand-gold-light bg-brand-gold/5 dark:bg-brand-gold/5 border border-brand-gold/15 dark:border-brand-gold/25 px-2.5 py-1 rounded text-xs sm:text-sm">
                      {topper.score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================================
            6. FACULTY EXCELLENCE SECTION
            ========================================================== */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0d2a1b] dark:text-brand-gold bg-brand-green/10 dark:bg-brand-gold/10 px-3.5 py-1 rounded-full uppercase inline-block">PEDAGOGICAL LEADERS</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">Faculty Excellence & Examination Credentials</h3>
            <p className="text-xs text-slate-500 dark:text-slate-450 max-w-xl mx-auto mt-2">
              Our faculty members regularly serve as state board examiners and curriculum editors. Below are their achievements verified by results.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAchievements.map((fac, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="p-3 bg-brand-green/10 dark:bg-emerald-950/40 text-brand-green dark:text-emerald-300 rounded-xl shrink-0">
                  <Users size={24} />
                </div>
                
                <div className="space-y-2 text-left flex-1 font-sans">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="font-sans font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">{fac.teacher}</h4>
                    <span className="bg-brand-green/10 dark:bg-emerald-950/30 text-brand-green dark:text-emerald-300 text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded border border-brand-green/20 dark:border-emerald-800/30">
                      {fac.stat}
                    </span>
                  </div>
                  
                  <p className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase leading-none">{fac.role}</p>
                  
                  <p className="text-xs font-semibold text-brand-gold-dark dark:text-brand-gold bg-brand-gold/10 dark:bg-brand-gold/5 border border-brand-gold/20 dark:border-brand-gold/30 px-2.5 py-1 rounded-md w-fit">
                    Milestone: {fac.milestone}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1.5">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            7. INSTITUTIONAL ACHIEVEMENT TIMELINE
            ========================================================== */}
        <div>
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-350 uppercase block">HISTOGRAM OF MILESTONES</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Institutional Achievement Timeline</h3>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-brand-green/35 dark:border-emerald-800/40 md:ml-10 space-y-8 pl-6 md:pl-10">
            {[
              { year: '2026', title: 'Scholastic Stabilization', icon: 'Timeline', color: 'bg-brand-green', label: '84% Classes XII pass achieved strictly under paper scanning standards.' },
              { year: '2024', title: '100% Higher Secondary Pass Year', icon: '100Percent', color: 'bg-brand-gold', label: 'Achieved complete 100% pass rate in HS Science and Arts stream under AHSEC registries.' },
              { year: '2022', title: 'District Smart-Class Integration', icon: 'Smart', color: 'bg-brand-green', label: 'Completed installation of full projection screens and science lab calibration benchmarks.' },
              { year: '2021', title: '100% HSLC Pass Year (Historic Milestone)', icon: '100Percent', color: 'bg-brand-gold', label: 'SEBA standard achieved 100% pass outcome, rewarding educational resilience.' },
              { year: '1972', title: 'Foundational Establishment', icon: 'ESTD', color: 'bg-slate-700 dark:bg-slate-600', label: 'Tingkhong Higher Secondary School first established, raising rural standards in Dibrugarh.' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group text-left">
                {/* Dot indicator */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#071911] ring-4 ring-slate-100 dark:ring-emerald-950/60 ${milestone.color} group-hover:scale-110 transition-transform`} />
                
                <div className="bg-white dark:bg-[#0c1f15]/90 border border-slate-250 dark:border-emerald-900/40 p-5 rounded-2xl hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
                    <span className="font-mono text-xs font-black text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider">{milestone.year}</span>
                    <span className="text-slate-400 dark:text-slate-500">•</span>
                    <h4 className="font-serif text-base font-extrabold text-[#0d2a1b] dark:text-white">{milestone.title}</h4>
                  </div>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {milestone.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
