import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Phone, 
  ShieldCheck, 
  Layers, 
  Languages, 
  Sprout, 
  Briefcase, 
  Calendar, 
  Server, 
  MapPin, 
  Cpu, 
  Bookmark, 
  Clock,
  Sparkles
} from 'lucide-react';
import { Language } from '../translations';

interface InstitutionalOverviewProps {
  lang: Language;
}

export default function InstitutionalOverview({ lang }: InstitutionalOverviewProps) {
  // Translations specifically aligned with this administrative/curriculum dashboard
  const t = {
    sectionBadge: { en: "GOVERNANCE & SYLLABUS", as: "প্ৰশাসন আৰু কাৰ্যসূচী" },
    sectionTitle: { en: "Institutional & Academic Overview", as: "প্ৰতিষ্ঠানিক আৰু শৈক্ষিক বিৱৰণ" },
    sectionDesc: { 
      en: "Official school identity, executive contact channels, multi-lingual curriculums, and professional NSQF-aligned vocational pathways under the Government of Assam.",
      as: "অসম চৰকাৰৰ অধীনত বিদ্যালয়ৰ চৰকাৰী পৰিচয়, প্ৰশাসনিক যোগাযোগ, বহুভাষিক পাঠ্যক্ৰম আৰু বৃত্তিমুখী শিক্ষাৰ বিশেষ পথসমূহ।"
    },
    
    colAdminTitle: { en: "Administrative & Profile Registry", as: "প্ৰশাসনিক আৰু চৰকাৰী পঞ্জীয়ন" },
    colCurriculumTitle: { en: "Curriculum & Vocational Pathways", as: "পাঠ্যক্ৰম আৰু বৃত্তিমুখী শিক্ষা" },

    cardExecutive: { en: "Executive Administration", as: "মুখ্য প্ৰশাসন" },
    labelPrincipal: { en: "Headmaster / Principal", as: "প্ৰধান শিক্ষক / অধ্যক্ষ" },
    labelContact: { en: "Official Contact Number", as: "চৰকাৰী যোগাযোগ নম্বৰ" },

    cardProfile: { en: "Core Profile Registry", as: "প্ৰতিষ্ঠানৰ গুৰুত্বপূৰ্ণ তথ্য" },
    labelOfficialName: { en: "Registered Name", as: "পঞ্জীকৃত নাম" },
    labelUdise: { en: "UDISE Registry Code", as: "UDISE পঞ্জীয়ন ক’ড" },
    labelMgmt: { en: "Management Body", as: "পৰিচালনা গোট" },
    labelMgmtVal: { en: "Department of Education (Govt. of Assam)", as: "শিক্ষা বিভাগ (অসম চৰকাৰ)" },
    labelClass: { en: "Operational Classification", as: "কাৰ্যকৰী শ্ৰেণীবিভাজন" },
    labelClassVal: { en: "Formal School | Fully Operational", as: "চৰকাৰী বিদ্যালয় | সম্পূৰ্ণ সক্ৰিয়" },

    cardSession: { en: "Academic Session Cycle", as: "শৈক্ষিক বৰ্ষৰ কাৰ্যসূচী" },
    sessionVal: { en: "April 1, 2026 to March 31, 2027", as: "১ এপ্ৰিল, ২০২৬ ৰ পৰা ৩১ মাৰ্চ, ২০২৭ লৈ" },
    mediumLabel: { en: "Instructional Medium", as: "শিক্ষণৰ মাধ্যম" },
    mediumVal: { en: "Assamese (Primary) / English bilingual support", as: "অসমীয়া (প্ৰধান) / ইংৰাজী দ্বিভাষিক সমৰ্থন" },

    cardLanguages: { en: "Language Cohorts by Level", as: "পৰ্যায়ভিত্তিক ভাষাৰ গোট" },
    levelUP: { en: "Upper Primary Level", as: "উচ্চ প্ৰাথমিক পৰ্যায় (৬-৮)" },
    levelSec: { en: "Secondary Level", as: "মাধ্যমিক পৰ্যায় (৯-১০)" },
    levelHS: { en: "Higher Secondary Level", as: "উচ্চতৰ মাধ্যমিক পৰ্যায় (১১-১২)" },

    cardVocational: { en: "Vocational & Skill Development Tracks", as: "বৃত্তিমুখী আৰু কৌশল বিকাশৰ পথ (NSQF)" },
    vocSecBadge: { en: "Secondary Level (Classes IX - X)", as: "মাধ্যমিক পৰ্যায় (নৱম - দশম)" },
    vocHSBadge: { en: "Higher Secondary (Classes XI - XII)", as: "উচ্চতৰ মাধ্যমিক পৰ্যায় (একাদশ - দ্বাদশ)" },
    trackAgri: { en: "Agriculture Sector", as: "কৃষি বিভাগ" },
    trackAgriSecDesc: { en: "Solanaceous Crop Cultivator Course", as: "বিলাহী-বেগেনা জাতীয় শস্য খেতিৰ প্ৰশিক্ষণ" },
    trackAgriHSDesc: { en: "Floriculturist Specialization", as: "ফুল খেতি বা পুষ্পপালন বিশেষজ্ঞ পাঠ্যক্ৰম" },
    trackIT: { en: "IT-ITES Sector", as: "আই-টি (IT-ITES) বিভাগ" },
    trackITSecDesc: { en: "Domestic Data Entry Operator Training", as: "ঘৰুৱা ডাটা এন্ট্ৰি অপাৰেটৰ প্ৰশিক্ষণ" },
    trackITHSDesc: { en: "CRM Domestic Voice Training", as: "চি-আৰ-এম (CRM) ডমেষ্টিক ভইচ প্ৰশিক্ষণ" },

    vocationalSubtitle: { en: "Providing certified career pathways linked with the National Skills Qualifications Framework (NSQF).", as: "ৰাষ্ট্ৰীয় দক্ষতা অৰ্হতা গাঁথনি (NSQF) ৰ সৈতে সংযোজিত প্ৰমাণিত কেৰিয়াৰ শিক্ষা।" }
  };

  const getTranslation = (key: keyof typeof t) => {
    return t[key][lang];
  };

  return (
    <section id="institutional-overview" className="py-20 bg-brand-dark relative text-white overflow-hidden border-t border-brand-gold/15">
      {/* Decorative patterns */}
      <div className="absolute inset-0 muga-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <ShieldCheck size={11} className="text-brand-gold" />
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

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Administrative Details */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {getTranslation("colAdminTitle")}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Executive Administration Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b1610]/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-gold/25 transition-all duration-300"
                >
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold mb-4 flex items-center gap-2">
                    <User size={12} />
                    <span>{getTranslation("cardExecutive")}</span>
                  </h4>
                  <div className="space-y-3 font-sans">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelPrincipal")}</span>
                      <span className="text-sm font-bold text-white">Ashok Gogoi</span>
                      <span className="text-[10px] text-brand-gold/85 block mt-0.5">Head Master / Principal</span>
                    </div>
                    <div className="h-px bg-slate-800/60" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelContact")}</span>
                      <a href="tel:7896539236" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 mt-0.5">
                        <Phone size={13} />
                        <span>+91 78965 39236</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Core Registry Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#0b1610]/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-gold/25 transition-all duration-300"
                >
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold mb-4 flex items-center gap-2">
                    <Server size={12} />
                    <span>{getTranslation("cardProfile")}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelOfficialName")}</span>
                      <span className="font-bold text-white">TINGKHONG HS</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelUdise")}</span>
                      <span className="font-mono font-bold text-brand-gold">18150218403</span>
                    </div>
                    <div className="sm:col-span-2 h-px bg-slate-800/60" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelMgmt")}</span>
                      <span className="font-bold text-slate-300">{getTranslation("labelMgmtVal")}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider">{getTranslation("labelClass")}</span>
                      <span className="font-bold text-slate-300">{getTranslation("labelClassVal")}</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Session & Medium bottom block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green-dark/20 border border-brand-gold/15 p-5 rounded-2xl flex flex-col sm:flex-row justify-between gap-4 mt-6"
            >
              <div className="flex gap-3 items-start">
                <Calendar size={18} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider">{getTranslation("cardSession")}</span>
                  <span className="text-xs font-black text-white">{getTranslation("sessionVal")}</span>
                </div>
              </div>
              <div className="h-px sm:h-auto sm:w-px bg-slate-800" />
              <div className="flex gap-3 items-start">
                <Clock size={18} className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider">{getTranslation("mediumLabel")}</span>
                  <span className="text-xs font-black text-white">{getTranslation("mediumVal")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Curriculum & Vocational Pathways */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {getTranslation("colCurriculumTitle")}
                </h3>
              </div>

              {/* Language Cohorts by Level */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0b1610]/80 border border-slate-800 p-6 rounded-2xl mb-6 relative overflow-hidden group hover:border-brand-gold/25 transition-all duration-300"
              >
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold mb-4 flex items-center gap-2">
                  <Languages size={12} />
                  <span>{getTranslation("cardLanguages")}</span>
                </h4>
                
                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between items-center bg-black/25 px-4 py-2 rounded-lg">
                    <span className="text-slate-400 font-medium">{getTranslation("levelUP")}</span>
                    <div className="flex gap-1.5">
                      <span className="bg-brand-green/30 border border-brand-green/40 px-2 py-0.5 rounded text-[9px] font-bold text-emerald-400">Assamese</span>
                      <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300">English</span>
                      <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300">Hindi</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-black/25 px-4 py-2 rounded-lg">
                    <span className="text-slate-400 font-medium">{getTranslation("levelSec")}</span>
                    <div className="flex gap-1.5">
                      <span className="bg-brand-green/30 border border-brand-green/40 px-2 py-0.5 rounded text-[9px] font-bold text-emerald-400">Assamese</span>
                      <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300">English</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-black/25 px-4 py-2 rounded-lg">
                    <span className="text-slate-400 font-medium">{getTranslation("levelHS")}</span>
                    <div className="flex gap-1.5">
                      <span className="bg-brand-green/30 border border-brand-green/40 px-2 py-0.5 rounded text-[9px] font-bold text-emerald-400">Assamese</span>
                      <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-[9px] font-bold text-slate-300">English</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vocational Education Skill Tracks */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0b1610]/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-gold/25 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold flex items-center gap-2">
                    <Cpu size={12} />
                    <span>{getTranslation("cardVocational")}</span>
                  </h4>
                  <span className="text-[8px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-widest animate-pulse">NSQF Skill Tracks</span>
                </div>

                <div className="space-y-4">
                  
                  {/* Secondary Vocational Blocks */}
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                      {getTranslation("vocSecBadge")}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-black/35 border border-slate-900 hover:border-brand-gold/15 p-3 rounded-xl flex gap-2.5 items-start transition-colors">
                        <Sprout size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[9px] text-slate-500 font-mono font-bold block uppercase">{getTranslation("trackAgri")}</span>
                          <span className="text-[11px] font-bold text-white">{getTranslation("trackAgriSecDesc")}</span>
                        </div>
                      </div>
                      <div className="bg-black/35 border border-slate-900 hover:border-brand-gold/15 p-3 rounded-xl flex gap-2.5 items-start transition-colors">
                        <Briefcase size={15} className="text-brand-gold mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[9px] text-slate-500 font-mono font-bold block uppercase">{getTranslation("trackIT")}</span>
                          <span className="text-[11px] font-bold text-white">{getTranslation("trackITSecDesc")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/50" />

                  {/* Higher Secondary Vocational Blocks */}
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                      {getTranslation("vocHSBadge")}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-black/35 border border-slate-900 hover:border-brand-gold/15 p-3 rounded-xl flex gap-2.5 items-start transition-colors">
                        <Sprout size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[9px] text-slate-500 font-mono font-bold block uppercase">{getTranslation("trackAgri")}</span>
                          <span className="text-[11px] font-bold text-white">{getTranslation("trackAgriHSDesc")}</span>
                        </div>
                      </div>
                      <div className="bg-black/35 border border-slate-900 hover:border-brand-gold/15 p-3 rounded-xl flex gap-2.5 items-start transition-colors">
                        <Briefcase size={15} className="text-brand-gold mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[9px] text-slate-500 font-mono font-bold block uppercase">{getTranslation("trackIT")}</span>
                          <span className="text-[11px] font-bold text-white">{getTranslation("trackITHSDesc")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

            <p className="text-slate-500 text-[10px] leading-relaxed italic mt-4">
              * {getTranslation("vocationalSubtitle")}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
