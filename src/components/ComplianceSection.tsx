import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, FileCheck, HeartHandshake, Leaf, Award, FileText, CheckCircle2, ShieldCheck, MailWarning } from 'lucide-react';
import { COMPLIANCE_DATA, CompliancePolicy } from '../complianceData';
import { Language, TRANSLATIONS } from '../translations';

interface ComplianceSectionProps {
  lang: Language;
}

// Icon mapper helper
const getIcon = (name: string, size = 18, className = "") => {
  switch (name) {
    case "ShieldAlert": return <ShieldAlert size={size} className={className} />;
    case "FileCheck": return <FileCheck size={size} className={className} />;
    case "HeartHandshake": return <HeartHandshake size={size} className={className} />;
    case "Leaf": return <Leaf size={size} className={className} />;
    default: return <Award size={size} className={className} />;
  }
};

export default function ComplianceSection({ lang }: ComplianceSectionProps) {
  const [activeId, setActiveId] = useState<string>("comp-ragging");

  const activePolicy = COMPLIANCE_DATA.find(p => p.id === activeId) || COMPLIANCE_DATA[0];

  const getTranslation = (key: string) => {
    return TRANSLATIONS[key]?.[lang] || key;
  };

  return (
    <section id="compliance-section" className="py-22 bg-brand-green/5/5 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} className="text-brand-green" />
            <span>{getTranslation("comp_official_badge")}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {getTranslation("compliance_section_title")}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            {getTranslation("compliance_section_subtitle")}
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: List of Policies */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2.5 space-y-1">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 py-2 border-b border-gray-100">
                {lang === 'en' ? "Compliance Framework Index" : "নিয়মসূচী অনুক্ৰমণিকা"}
              </span>
              
              {COMPLIANCE_DATA.map((policy) => {
                const isActive = policy.id === activeId;
                return (
                  <button
                    key={policy.id}
                    id={`comp-tab-${policy.id}`}
                    onClick={() => setActiveId(policy.id)}
                    className={`w-full text-left p-4.5 rounded-lg flex items-start gap-4 transition-all cursor-pointer ${
                      isActive
                        ? "bg-brand-green text-white shadow-md border-l-4 border-brand-gold"
                        : "hover:bg-gray-50/80 text-gray-700 bg-transparent border-l-4 border-transparent"
                    }`}
                  >
                    <div className={`p-2 rounded-md ${
                      isActive ? "bg-white/10 text-brand-gold-light" : "bg-gray-100/80 text-brand-green"
                    }`}>
                      {getIcon(policy.iconName, 18, "")}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold leading-snug">
                        {policy.title[lang]}
                      </h3>
                      <p className={`text-xs mt-1 font-medium transition-colors ${
                        isActive ? "text-white/80" : "text-gray-500 line-clamp-1"
                      }`}>
                        {policy.subtitle[lang]}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Grievance Alert Bar */}
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4 flex gap-3.5 shadow-sm">
              <MailWarning size={20} className="text-brand-gold-dark mt-0.5 shrink-0 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  {lang === 'en' ? "Submit Compliance Grievance" : "যিকোনো অভিযোগ দাখিল কৰক"}
                </h4>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  {lang === 'en'
                    ? "If you note policy breaches or harassment on grounds, contact school security desks directly at examinationthss@gmail.com."
                    : "যদি আপুনি বিদ্যালয় চৌহদত কোনো নীতি লংঘন হোৱা প্ৰত্যক্ষ কৰে, ইমেইলযোগে তৎকালে আমাক জনাওক।"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Official Certificate/Letterhead Layout */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border-2 border-brand-green/20 shadow-xl overflow-hidden relative"
              >
                {/* Visual Watermark Seal Background (Subtle CSS) */}
                <div className="absolute right-8 bottom-8 opacity-[0.03] text-brand-green pointer-events-none">
                  <Award size={260} />
                </div>

                {/* Official Letterhead Header */}
                <div className="border-b-4 border-brand-gold bg-brand-green text-white p-6 sm:p-8 relative">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-gold uppercase block">
                        {lang === 'en' ? "GOVERNMENT OF ASSAM RECOGNIZED" : "অসম চৰকাৰ অনুমোদিত শিক্ষানুষ্ঠান"}
                      </span>
                      <h4 className="text-lg sm:text-xl font-black tracking-tight mt-1">
                        TINGKHONG HIGHER SECONDARY SCHOOL
                      </h4>
                      <p className="text-[10px] sm:text-xs text-white/80 font-mono mt-0.5">
                        UDISE Code: 18210313101 • Estd. 1946
                      </p>
                    </div>
                    {/* Official Stamp Mockup */}
                    <div className="hidden sm:flex flex-col items-center border border-brand-gold/40 rounded px-2.5 py-1 text-[9px] font-mono tracking-wider text-brand-gold uppercase bg-black/10">
                      <span>{getTranslation("comp_verified_seal")}</span>
                      <span className="font-bold text-white text-[8px] mt-0.5">VERIFIED COUNCIL</span>
                    </div>
                  </div>
                </div>

                {/* Document Body */}
                <div className="p-6 sm:p-8 space-y-6 relative">
                  
                  {/* Document Title Header */}
                  <div className="pb-4 border-b border-gray-100">
                    <span className="text-[11px] font-mono font-bold text-brand-gold-dark uppercase tracking-wider bg-brand-gold/10 px-2.5 py-0.5 rounded">
                      Document Ref: THSS/COMP/2026
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                      {activePolicy.title[lang]}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-medium italic">
                      {activePolicy.subtitle[lang]}
                    </p>
                  </div>

                  {/* Bullet Regulations */}
                  <ul className="space-y-4">
                    {activePolicy.content[lang].map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex gap-3.5 items-start"
                      >
                        <div className="w-5.5 h-5.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-mono">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                          {bullet}
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Constitutional/Statutory Footnote */}
                  <div className="pt-6 border-t border-gray-100 bg-gray-50/80 -mx-6 -mb-6 p-6 sm:-mx-8 sm:-mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2 items-start">
                      <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                      <p className="text-[11px] text-gray-500 font-mono italic max-w-md leading-normal">
                        <strong>{lang === 'en' ? "Legal Backing:" : "আইনী ভিত্তি:"}</strong> {activePolicy.statute[lang]}
                      </p>
                    </div>
                    
                    {/* Authorized Seal Signature */}
                    <div className="text-right border-l-2 border-brand-gold pl-3 min-w-[150px]">
                      <p className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                        {lang === 'en' ? "J. Gogoi, Principal" : "জে. গগৈ, অধ্যক্ষ"}
                      </p>
                      <p className="text-[8px] font-mono text-gray-500 mt-0.5 uppercase tracking-wide">
                        {getTranslation("auth_principal_seal")}
                      </p>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
