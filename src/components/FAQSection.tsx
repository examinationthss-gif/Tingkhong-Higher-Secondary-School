import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Check, HelpCircle } from 'lucide-react';
import { FAQ_DATA, FAQItem } from '../faqData';
import { Language, TRANSLATIONS } from '../translations';

interface FAQSectionProps {
  lang: Language;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>("faq-adm-1"); // Open first admission FAQ by default

  const categories = useMemo(() => [
    { id: 'all', label: { en: "Show All", as: "সকলো প্ৰশ্ন" } },
    { id: 'admissions', label: { en: "Admissions", as: "নামভৰ্তি" } },
    { id: 'academics', label: { en: "Academics", as: "শৈক্ষিক" } },
    { id: 'examination', label: { en: "Examination & Board", as: "পৰীক্ষা আৰু ব'ৰ্ড" } },
    { id: 'scholarships', label: { en: "Scholarships", as: "জলপানি" } },
    { id: 'facilities', label: { en: "Facilities & Campus", as: "সুবিধা আৰু চৌহদ" } },
    { id: 'contact', label: { en: "Contact Details", as: "যোগাযোগ" } }
  ], []);

  // Filter FAQ items based on category tabs and search input
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const enQ = item.question.en.toLowerCase();
        const asQ = item.question.as.toLowerCase();
        const enA = item.answer.en.toLowerCase();
        const asA = item.answer.as.toLowerCase();
        return enQ.includes(query) || asQ.includes(query) || enA.includes(query) || asA.includes(query);
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const getTranslation = (key: string) => {
    return TRANSLATIONS[key]?.[lang] || key;
  };

  return (
    <section id="faq-section" className="py-20 bg-gradient-to-b from-gray-50/50 to-white/90 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-green border border-brand-gold/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={13} className="text-brand-gold" />
            <span>{getTranslation("faq_admissions")} / {getTranslation("nav_notices")}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {getTranslation("faq_section_title")}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            {getTranslation("faq_section_subtitle")}
          </p>
        </div>

        {/* Filter Toolbar: Search Bar + Horizontal Category Badges */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md p-4 mb-8 flex flex-col gap-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="faq-search"
              aria-label="Search FAQs"
              placeholder={getTranslation("faq_search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
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

          {/* Categories Tab Pill List */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    // Reset open accordion list for better layout fit
                    setOpenId(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                    isActive
                      ? "bg-brand-green text-white border-brand-green shadow-sm"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200/70"
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-3 min-h-[150px]">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, idx) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-xl border transition-all ${
                      isOpen
                        ? "border-brand-green ring-1 ring-brand-green/10 shadow-md"
                        : "border-gray-200/70 hover:border-gray-300 shadow-sm"
                    }`}
                  >
                    {/* Collapsible Trigger Head */}
                    <button
                      id={`faq-trigger-${item.id}`}
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex gap-3">
                        <span className="text-xs font-bold text-brand-gold-dark/80 bg-brand-gold/10 px-2 py-0.5 rounded-md h-fit mt-0.5 font-mono">
                          Q{idx + 1}
                        </span>
                        <h3 className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                          isOpen ? "text-brand-green" : "text-gray-900"
                        }`}>
                          {item.question[lang]}
                        </h3>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 shrink-0 mt-0.5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand-green" : ""
                        }`}
                      />
                    </button>

                    {/* Explanatory Body */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                            <p className="bg-gray-50/70 rounded-lg p-3.5 border-l-2 border-brand-gold">
                              {item.answer[lang]}
                            </p>
                            
                            {/* Meta Badge of Category */}
                            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono font-medium text-gray-400 uppercase">
                              <Check size={11} className="text-brand-green" />
                              <span>Verified Office Response • {item.category}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 px-4 bg-white rounded-xl border border-gray-200/60"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search size={20} className="text-gray-400" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {lang === 'en' ? "No FAQs matched your search" : "কোনো প্ৰশ্ন পোৱা নগ’ল"}
                </h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                  {lang === 'en'
                    ? "Try checking spelling, resetting category filters or searching broader words."
                    : "দয়া কৰি বৰ্ণাশুদ্ধি আকৌ পৰীক্ষা কৰক বা আন শব্দ সহায় লওক।"}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-3.5 py-1.5 bg-brand-green/10 text-brand-green hover:bg-brand-green text-xs font-semibold rounded-lg transition-all hover:text-white"
                >
                  {lang === 'en' ? "Reset Selection" : "পুনৰ ছেট কৰক"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
