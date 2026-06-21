import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import PrincipalMessage from './components/PrincipalMessage';
import AcademicExcellence from './components/AcademicExcellence';
import AcademicPerformanceDashboard from './components/AcademicPerformanceDashboard';
import TrustAndStats from './components/TrustAndStats';
import ToppersWall from './components/ToppersWall';
import StaffRegistry from './components/StaffRegistry';
import AssamIdentity from './components/AssamIdentity';
import AdmissionsCTA from './components/AdmissionsCTA';
import CommunityEngagement from './components/CommunityEngagement';
import THSSAlumniNetwork from './components/THSSAlumniNetwork';
import FAQSection from './components/FAQSection';
import ComplianceSection from './components/ComplianceSection';
import SMDCCommittee from './components/SMDCCommittee';
import Footer from './components/Footer';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased font-sans">
      {/* 1. Header Bar */}
      <Header onScrollToSection={handleScrollToSection} lang={lang} setLang={setLang} />

      {/* 2. Main Hero Landing Area */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 3. Notice Board & Announcements Council */}
      <NoticeBoard />

      {/* 4. Principal's Editorial Reflections Message */}
      <PrincipalMessage />

      {/* 5. Academic Excellence Streams Tab Viewer */}
      <AcademicExcellence />

      {/* 5b. Integrated Academic Performance & Interactive Results Dashboard */}
      <AcademicPerformanceDashboard lang={lang} />

      {/* 5c. Faculty Excellence Dedicated Highlight Card */}
      <section id="faculty-excellence-card" className="py-12 bg-slate-50/50 dark:bg-[#06150e]/60 border-t border-b border-slate-150/40 dark:border-emerald-950/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0c1f15]/90 border border-slate-200 dark:border-emerald-900/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-brand-green/30">
            {/* Elegant Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-green/10 via-brand-gold/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              {/* Left Side: Editorial Typography & Overall Meta */}
              <div className="lg:max-w-md space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 dark:bg-emerald-950/40 text-brand-green dark:text-[#2da461] border border-brand-green/20 dark:border-emerald-800/40 rounded-full text-[10px] font-black uppercase tracking-widest">
                  ⭐ {lang === "en" ? "Pedagogical Leadership" : "শিক্ষক-শিক্ষয়িত্ৰীৰ বিশেষত্ব"}
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0d2a1b] dark:text-brand-gold-light leading-tight">
                  {lang === "en" ? "Faculty Excellence" : "শিক্ষক সমাজৰ পাৰদৰ্শিতা"}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {lang === "en"
                    ? "Tingkhong Higher Secondary School is fueled by certified educators serving as Senior Board Evaluators and State Curriculum Advisors. Their consistent guidance assures top-tier scores."
                    : "আমাৰ বিদ্যালয়ৰ জ্যেষ্ঠ শিক্ষক-শিক্ষয়িত্ৰীসকল ৰাজ্যিক শিক্ষা ব’ৰ্ডৰ নিৰীক্ষক আৰু পাঠ্যক্ৰম উপদেষ্টা হিচাপে কৰ্মৰত। তেওঁলোকৰ সুদক্ষ মাৰ্গদৰ্শনৰ বাবেই ছাত্ৰ-ছাত্ৰীসকলে প্ৰতিবছৰে উৎকৃষ্ট ফল লাভ কৰি আহিছে।"}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-emerald-900/20 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-black font-mono text-brand-green dark:text-emerald-400">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">{lang === "en" ? "Language Passing Rate" : "ভাষা পাঠ্যক্ৰমৰ সফলতা"}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black font-mono text-brand-gold-dark dark:text-brand-gold">15+ Yrs</p>
                    <p className="text-[10px] font-bold text-[#b88c3a] dark:text-brand-gold-light uppercase tracking-wider">{lang === "en" ? "Average Pedagogy" : "গড় অভিজ্ঞতা"}</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive, dynamic mini-list of stellar faculty advisors */}
              <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Smt. Swapnali Baruah",
                    role: lang === "en" ? "PGT English & ALT-English Counselor" : "জ্যেষ্ঠ ইংৰাজী প্ৰবক্তা",
                    stat: "100% Pass",
                    milestone: lang === "en" ? "26+ Distinction Scorers in 2024" : "২৬+তকৈ অধিক ডিষ্টিংকচন"
                  },
                  {
                    name: "Shri Debajit Saikia",
                    role: lang === "en" ? "PGT Physics Lab Chief Advisor" : "জ্যেষ্ঠ পদাৰ্থ বিজ্ঞান প্ৰবক্তা",
                    stat: "98% Science Pass",
                    milestone: lang === "en" ? "11 Students scored 95+ in 2026" : "১১ গৰাকী ৯০% বা ততোধিক সংগ্ৰহ"
                  },
                  {
                    name: "Smt. Anuradha Chutia",
                    role: lang === "en" ? "Vice Principal & Assamese Literary Chair" : "উপাধ্যক্ষ তথা অসমীয়া সাহিত্য মুৰব্বী",
                    stat: "100% Success",
                    milestone: lang === "en" ? "60+ Star Marks in MIL Assamese" : "৬০+ষ্টাৰ মাৰ্ক্স প্ৰাপ্ত কৰিছে"
                  },
                  {
                    name: "Shri Dilip Kumar Gogoi",
                    role: lang === "en" ? "Senior Chemistry Board Examiner" : "জ্যেষ্ঠ ৰসায়ন বিজ্ঞান নিৰীক্ষক",
                    stat: "96.5% Chem Pass",
                    milestone: lang === "en" ? "Practical Exams Coordinator" : "ব্যৱহাৰিক পৰীক্ষাৰ মুখ্য সমন্বয়ক"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-[#071911]/40 border border-slate-150 dark:border-emerald-950/45 p-4 rounded-2xl flex flex-col justify-between hover:border-brand-green/25 dark:hover:border-brand-gold/30 hover:bg-white dark:hover:bg-[#0a2318] transition-all duration-350">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-sans font-extrabold text-[#0d2a1b] dark:text-white text-xs sm:text-sm line-clamp-1">{item.name}</span>
                        <span className="shrink-0 text-[9px] font-black font-mono px-1.5 py-0.5 bg-brand-green/10 dark:bg-emerald-950/60 text-brand-green dark:text-emerald-300 rounded uppercase">
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 uppercase mt-1 tracking-tight line-clamp-1">
                        {item.role}
                      </p>
                    </div>
                    
                    <div className="mt-3 pt-2.5 border-t border-slate-150/40 dark:border-emerald-950/20">
                      <span className="text-[11px] font-medium text-brand-gold-dark dark:text-brand-gold-light">
                        🏆 {item.milestone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Statistics count & Verified Trust Indicators */}
      <TrustAndStats />

      {/* 6b. Academic Toppers Wall of Fame */}
      <ToppersWall lang={lang} />

      {/* 6c. Teachers & Administrators Registry */}
      <StaffRegistry lang={lang} />

      {/* 7. Assam Traditional Heritage Spotlight & Live trivia */}
      <AssamIdentity />

      {/* 8. AHSEC Darpan Portal & Admissions Checklist Guide */}
      <AdmissionsCTA />

      {/* 8b. Community & Engagement (Scholastic Calendar, Pre-Admission Inquiry Form, Alumni Registry) */}
      <CommunityEngagement lang={lang} />

      {/* 8c. Premium THSS Alumni Network dedicated portal */}
      <THSSAlumniNetwork lang={lang} />

      {/* 9. Bilingual Categorized FAQ Explorer */}
      <FAQSection lang={lang} />

      {/* 10. Official School Compliance & Safety Council */}
      <ComplianceSection lang={lang} />

      {/* 10b. SMDC Committee Governance Section */}
      <SMDCCommittee lang={lang} />

      {/* 11. Comprehensive Footer portal */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
