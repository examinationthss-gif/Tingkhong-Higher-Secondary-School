import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, GraduationCap, Briefcase, Award, Library, Users, User, UserX } from 'lucide-react';
import { STAFF_DATA, StaffMember } from '../trustAndStaffData';
import { Language, TRANSLATIONS } from '../translations';

interface StaffRegistryProps {
  lang: Language;
}

export default function StaffRegistry({ lang }: StaffRegistryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => [
    { id: 'all', label: { en: "All Personnel", as: "সমগ্ৰ কৰ্মচাৰী" } },
    { id: 'leadership', label: { en: "School Leadership", as: "বিদ্যালয় নেতৃত্ব" } },
    { id: 'teaching', label: { en: "Teaching Faculty", as: "শিক্ষক মণ্ডলী" } },
    { id: 'administrative', label: { en: "Administrative Staff", as: "প্ৰশাসনিক বিভাগ" } }
  ], []);

  // Filter staff based on Category selection & Search input
  const filteredStaff = useMemo(() => {
    return STAFF_DATA.filter((item) => {
      // Category filter routing
      if (selectedCategory === 'leadership') {
        if (item.category !== 'principal' && item.category !== 'vice_principal') {
          return false;
        }
      } else if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const enName = item.name.en.toLowerCase();
        const asName = item.name.as.toLowerCase();
        const enDest = item.designation.en.toLowerCase();
        const asDest = item.designation.as.toLowerCase();
        const enDept = item.department.en.toLowerCase();
        const asDept = item.department.as.toLowerCase();
        const enQual = item.qualification.en.toLowerCase();
        const asQual = item.qualification.as.toLowerCase();
        
        return enName.includes(query) || 
               asName.includes(query) || 
               enDest.includes(query) || 
               asDest.includes(query) || 
               enDept.includes(query) || 
               asDept.includes(query) || 
               enQual.includes(query) || 
               asQual.includes(query);
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const getTranslation = (key: string) => {
    return TRANSLATIONS[key]?.[lang] || key;
  };

  return (
    <section id="teachers-registry" className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Users size={13} className="text-brand-green" />
            <span>{lang === 'en' ? "FACULTY CORNER" : "শিক্ষক-কৰ্মচাৰী সমল"}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {lang === 'en' ? "Teachers & Administrators Registry" : "শিক্ষক আৰু প্ৰশাসনীয় কৰ্মচাৰী পঞ্জী"}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? "Browse through our registry of highly accredited educational leaders, senior state lecturers, subject specialists, and administrative coordinators representing generations of dedication."
              : "আমাৰ নিৰীক্ষক মণ্ডলী, জ্যেষ্ঠ বিষয় শিক্ষক তথা কাৰ্যালয় সহায়ক বৰ্গৰ এই চৰকাৰী তালিকাখন অনুসন্ধান কৰক।"}
          </p>
        </div>

        {/* Filter Controls (Search + Categories Hub) */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="staff-search-input"
              aria-label="Search teachers registry"
              placeholder={lang === 'en' ? "Search teachers by name, subject or qualification..." : "নাম, অৰ্হতা বা বিষয় অনুসৰি ইয়াত বিচাৰক..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-200/50 rounded-md transition-all"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pill Buttons */}
          <div className="flex items-center gap-1.5 self-start md:self-auto overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`staff-cat-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                    isActive
                      ? "bg-brand-green text-white border-brand-green shadow-sm"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

        </div>

        {/* Staff Grid Container */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredStaff.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredStaff.map((member) => {
                  const isLeadership = member.category === 'principal' || member.category === 'vice_principal';
                  return (
                    <motion.div
                      key={member.id}
                      layout="position"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white rounded-xl border relative overflow-hidden transition-all duration-300 group ${
                        isLeadership
                          ? "border-brand-gold/50 shadow-md ring-1 ring-brand-gold/10 bg-brand-gold/[0.01]"
                          : "border-gray-200 hover:border-brand-green/30 hover:shadow-lg"
                      }`}
                    >
                      {/* Top Accent Strip color */}
                      <div className={`h-1.5 w-full ${isLeadership ? "bg-brand-gold" : "bg-brand-green"}`} />

                      {/* Card Content body */}
                      <div className="p-5.5 space-y-4">
                        
                        {/* Header Details */}
                        <div className="flex items-start gap-3.5">
                          {/* Styled vector placeholder based on Gender and Leadership status */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${
                            isLeadership
                              ? "bg-brand-gold/15 text-brand-gold-dark border-brand-gold/30"
                              : member.gender === 'F'
                              ? "bg-pink-50 text-pink-600 border-pink-100"
                              : "bg-brand-green/10 text-brand-green border-brand-green/20"
                          }`}>
                            <User size={22} strokeWidth={2.2} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className={`inline-block text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded mb-1.5 tracking-wide ${
                              isLeadership 
                                ? "bg-brand-gold/15 text-brand-gold-dark border border-brand-gold/20"
                                : member.category === 'administrative'
                                ? "bg-slate-100 text-slate-700 border border-slate-200"
                                : "bg-neutral-100 text-neutral-700 border border-neutral-200/80"
                            }`}>
                              {member.category === 'principal'
                                ? (lang === 'en' ? "Principal" : "অধ্যক্ষ")
                                : member.category === 'vice_principal'
                                ? (lang === 'en' ? "Vice Principal" : "উপাধ্যক্ষ")
                                : member.category === 'teaching'
                                ? (lang === 'en' ? "Faculty Member" : "শিক্ষক মণ্ডলী")
                                : (lang === 'en' ? "Administration office" : "প্ৰশাসন বিভাগ")}
                            </span>
                            <h3 className="text-base font-bold text-gray-900 leading-snug truncate">
                              {member.name[lang]}
                            </h3>
                            <p className="text-xs font-semibold text-brand-green mt-0.5 font-sans">
                              {member.designation[lang]}
                            </p>
                          </div>
                        </div>

                        {/* Middle detailed metadata parameters */}
                        <div className="space-y-2.5 pt-3 border-t border-gray-100 text-xs text-gray-600 font-sans">
                          
                          {/* Department */}
                          <div className="flex items-center gap-2">
                            <Library size={13} className="text-gray-400 shrink-0" />
                            <p className="truncate">
                              <strong className="font-semibold text-gray-800">{lang === 'en' ? "Dept:" : "বিভাগ:"}</strong> {member.department[lang]}
                            </p>
                          </div>

                          {/* Qualification */}
                          <div className="flex items-start gap-2">
                            <GraduationCap size={13} className="text-gray-400 shrink-0 mt-0.5" />
                            <p className="leading-snug">
                              <strong className="font-semibold text-gray-800">{lang === 'en' ? "Qual:" : "অৰ্হতা:"}</strong> {member.qualification[lang]}
                            </p>
                          </div>

                          {/* Experience */}
                          <div className="flex items-start gap-2">
                            <Briefcase size={13} className="text-gray-400 shrink-0 mt-0.5" />
                            <p className="leading-snug">
                              <strong className="font-semibold text-gray-800">{lang === 'en' ? "Experience:" : "অভিজ্ঞতা:"}</strong> {member.experience[lang]}
                            </p>
                          </div>

                        </div>

                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-xl border border-gray-200"
              >
                <div className="w-14 h-14 bg-gray-55 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-neutral-200/50">
                  <UserX size={24} className="text-gray-400" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  {lang === 'en' ? "No Personnel Matched Your Query" : "তালিকাত এনে কোনো ব্যক্তি পোৱা নগ’ল"}
                </h3>
                <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
                  {lang === 'en'
                    ? "Ensure the correct spelling of names or departments, or choose a broader category filter pill above."
                    : "অনুগ্ৰহ কৰি কাৰ্যালয় বা বিভাগটো আকৌ অনুসন্ধান কৰক নাইবা শ্ৰেণীসমূহ পুনৰ বাচনি কৰক।"}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-5 px-4 py-2 bg-brand-green text-white hover:bg-brand-green-light text-xs font-bold rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  {lang === 'en' ? "Reset Registry Grid" : "তালিকা ৰিছেট কৰক"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
