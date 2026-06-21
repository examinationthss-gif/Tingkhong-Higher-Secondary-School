import { motion } from 'motion/react';
import { Landmark, Award, ShieldAlert, BadgeCheck, Users, Briefcase, Heart, BookOpen, Crown } from 'lucide-react';
import { SMDC_MEMBERS, SMDCRepresentative } from '../trustAndStaffData';
import { Language } from '../translations';

interface SMDCCommitteeProps {
  lang: Language;
}

// Icon helper relative to role classification
const getRoleIcon = (role: string) => {
  if (role.toLowerCase().includes('chairman') || role.toLowerCase().includes('সভাপতি')) {
    return <Crown size={16} className="text-brand-gold" />;
  }
  if (role.toLowerCase().includes('principal') || role.toLowerCase().includes('অধ্যক্ষ') || role.toLowerCase().includes('secretary')) {
    return <Award size={16} className="text-brand-gold-dark" />;
  }
  if (role.toLowerCase().includes('teacher') || role.toLowerCase().includes('শিক্ষক')) {
    return <BookOpen size={16} className="text-brand-green" />;
  }
  if (role.toLowerCase().includes('parent') || role.toLowerCase().includes('অভিভাৱক')) {
    return <Heart size={16} className="text-pink-600" />;
  }
  return <Users size={16} className="text-blue-600" />;
};

export default function SMDCCommittee({ lang }: SMDCCommitteeProps) {
  
  // Group members dynamically for neat, professional layout hierarchy:
  // 1. Executive Officers (Chairman, Member Secretary)
  // 2. Teacher & Representative Teams
  // 3. Parent & Community Cadre
  
  return (
    <section id="smdc-governance-section" className="py-22 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Landmark size={14} className="text-brand-green" />
            <span>{lang === 'en' ? "GOVERNANCE BOARD" : "প্ৰশাসনীয় নিয়ন্ত্ৰক ব’ৰ্ড"}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {lang === 'en' ? "School Management & Development Committee (SMDC)" : "বিদ্যালয় পৰিচালনা আৰু উন্নয়ন সমিতি (SMDC)"}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {lang === 'en'
              ? "Upholding high transparency and accountability, the SMDC is the principal executive governance team of Tingkhong HSS mandated by the secondary board to manage development, finances, and community-parent collaborations."
              : "স্বচ্ছতা আৰু দায়বদ্ধতা ৰক্ষা কৰি বিদ্যালয়খনৰ উন্নয়নমূলক পুঁজি, পাঠ্যক্ৰম আৰু শিক্ষক-অভিভাৱকৰ সম্পৰ্ক সুদৃঢ় কৰিবলৈ অসম চৰকাৰৰ নিয়মানুসৰি গঠিত স্থানীয় কাৰ্য্যকৰী সমিতি।"}
          </p>
        </div>

        {/* Governance Certificate Layout Header */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-12 shadow-inner">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-gray-200">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-brand-gold-dark uppercase tracking-widest font-mono">
                {lang === 'en' ? "STATUTORY GOVERNING BODY REGISTRY" : "চৰকাৰী অনুমোদিত সাংবিধানিক পৰিষদ"}
              </span>
              <h3 className="text-xl font-black text-slate-800 tracking-tight mt-1">
                {lang === 'en' ? "Executive Council Panel 2026-27" : "কাৰ্যনিৰ্বাহক সমিতিৰ ৰেজিষ্টাৰ ২০২৬-২৭"}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {lang === 'en' 
                  ? "Formulated as per Rastriya Madhyamik Shiksha Abhiyan (RMSA) and Govt. of Assam education rules."
                  : "ৰাষ্ট্ৰীয় মাধ্যমিক শিক্ষা অভিযান (RMSA) আৰু অসম চৰকাৰৰ শৈক্ষিক বিধিসন্মত ব্যৱস্থা অনুসৰি ৰূপায়িত।"}
              </p>
            </div>
            {/* Stamp of Compliance */}
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-xs">
              <BadgeCheck size={18} className="text-brand-green shrink-0" />
              <div className="text-left font-sans">
                <p className="text-[10px] font-black tracking-wide uppercase text-slate-700">RMSA ASSAM COMPLIANT</p>
                <p className="text-[8px] font-mono text-gray-400 uppercase tracking-wide">Verified Registry Council</p>
              </div>
            </div>
          </div>

          {/* Committee Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {SMDC_MEMBERS.map((member, idx) => {
              const roleLabel = member.role[lang];
              const isOfficer = idx < 2; // Chairman & Principal represent active officers
              
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border p-5 relative overflow-hidden transition-all duration-300 hover:shadow-md ${
                    isOfficer
                      ? "border-brand-gold/40 shadow-xs ring-1 ring-brand-gold/10"
                      : "border-gray-200 hover:border-brand-green/20"
                  }`}
                >
                  {/* Category Border Decorator Tag */}
                  <div className={`absolute top-0 inset-x-0 h-1 ${isOfficer ? "bg-brand-gold" : "bg-brand-green"}`} />

                  {/* Icon and Role indicator */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 rounded-lg bg-gray-100 shrink-0">
                      {getRoleIcon(member.role.en)}
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider truncate">
                      {roleLabel}
                    </span>
                  </div>

                  {/* Member Name */}
                  <h4 className="text-sm font-black text-gray-900 leading-snug">
                    {member.name[lang]}
                  </h4>

                  {/* Designation */}
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-medium">
                    {member.designation[lang]}
                  </p>

                  {/* Little static verified badge at card bottom */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[8px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      THSS Governing Seat
                    </span>
                    <BadgeCheck size={11} className="text-brand-green" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Duties / Bottom Statues panel */}
          <div className="mt-8 border-t border-gray-200/60 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-500">
            <p className="italic text-center md:text-left leading-relaxed">
              * {lang === 'en' 
                ? "The SMDC holds mandate physical meetings on the first Saturday of each quarter." 
                : "প্ৰতিটো ত্ৰৈমাসিক বৰ্ষৰ প্ৰথম শনিবাৰে কমিটীৰ গুৰুত্বপূৰ্ণ পৰ্যালোচনা সভা অনুষ্ঠিত হয়।"}
            </p>
            <div className="flex items-center gap-1 font-mono font-bold uppercase tracking-wider text-brand-green">
              <Landmark size={12} />
              <span>Tingkhong Governing Code: SEBA/SMDC-45</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
