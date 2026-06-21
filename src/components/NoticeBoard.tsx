import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, AlertTriangle, ChevronDown, ChevronUp, FileText, Filter, Volume2 } from 'lucide-react';
import { NOTICES } from '../data';
import { Notice, NoticeCategory } from '../types';

const CATEGORIES: NoticeCategory[] = [
  { id: 'all', label: 'All Announcements' },
  { id: 'academic', label: 'Academic Updates' },
  { id: 'admission', label: 'Admissions' },
  { id: 'event', label: 'Events & Culture' },
  { id: 'general', label: 'General' }
];

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState<Notice['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>("notice-1"); // Expand first by default

  const toggleExpand = (id: string) => {
    setExpandedNoticeId(prev => (prev === id ? null : id));
  };

  // Filtering Logic
  const filteredNotices = NOTICES.filter(notice => {
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (notice.content && notice.content.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-dark font-sans flex items-center gap-1.5">
              <Volume2 size={13} className="text-brand-green animate-pulse" />
              <span>OFFICIAL ANNOUNCEMENTS</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0d2a1b] mt-2">
              Important Administrative Notice Council
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 max-w-xl">
              Stay fully informed on general evaluations, official examination releases, regional holiday announcements, and board circulars.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative font-sans max-w-sm w-full shrink-0">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search size={16} />
            </span>
            <input 
              type="text"
              placeholder="Search active circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-green/45 focus:ring-1 focus:ring-brand-green/20"
              id="notice-search-input"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-sans">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-brand-green text-white shadow-sm border border-brand-green'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              id={`notice-cat-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* List of filtered notices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active list column */}
          <div className="lg:col-span-8 space-y-4 font-sans">
            <AnimatePresence mode="popLayout">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => {
                  const isExpanded = expandedNoticeId === notice.id;
                  
                  return (
                    <motion.div
                      key={notice.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ${
                        isExpanded ? 'border-brand-green/35 ring-1 ring-brand-green/10' : 'border-slate-200/80'
                      }`}
                    >
                      {/* Notice Row Header */}
                      <div 
                        onClick={() => toggleExpand(notice.id)}
                        className="p-5 flex items-start gap-4 cursor-pointer justify-between"
                        id={`notice-card-header-${notice.id}`}
                      >
                        <div className="flex gap-4 items-start">
                          
                          {/* Left icon wrapper */}
                          <div className={`p-2 rounded-lg ${
                            notice.isUrgent 
                              ? 'bg-red-50 text-red-600 animate-pulse' 
                              : 'bg-brand-cream/60 text-brand-gold-dark'
                          }`}>
                            {notice.isUrgent ? <AlertTriangle size={18} /> : <FileText size={18} />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] text-slate-400 font-semibold uppercase flex items-center gap-1.5">
                                <Calendar size={11} />
                                <span>{notice.date}</span>
                              </span>
                              
                              {/* Pill Category tag */}
                              <span className="text-[9px] font-bold uppercase py-0.5 px-1.5 rounded bg-slate-100 text-slate-500 scale-95">
                                {notice.category}
                              </span>

                              {notice.isUrgent && (
                                <span className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded animate-pulse">
                                  URGENT
                                </span>
                              )}
                            </div>

                            <h3 className="font-serif text-sm sm:text-base font-bold text-brand-green-dark mt-1.5 group-hover:text-brand-green transition-colors leading-snug">
                              {notice.title}
                            </h3>
                          </div>

                        </div>

                        {/* Expand Chevron icons */}
                        <button className="text-slate-400 p-1 rounded-full hover:bg-slate-100 transition-colors shrink-0">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>

                      {/* Expandable Notice Body */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-slate-100 bg-[#fbfbfa]"
                          >
                            <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-l-4 border-brand-green">
                              <p className="whitespace-pre-line font-sans">{notice.content}</p>
                              
                              {/* Download placeholder */}
                              <div className="mt-4 pt-4 border-t border-slate-200/50 flex justify-between items-center flex-wrap gap-2 text-xs">
                                <span className="text-slate-400 font-medium">Official Reference Circular Ref: THSS/AC/{notice.id.toUpperCase()}</span>
                                <a 
                                  href="#admissions-portal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const port = document.getElementById('admissions-portal');
                                    if(port) port.scrollIntoView({behavior: 'smooth'});
                                  }}
                                  className="text-brand-green hover:text-brand-green-light font-bold flex items-center gap-1"
                                >
                                  <span>Submit Query regarding this</span>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  );
                })
              ) : (
                <div className="bg-white border border-dashed border-slate-300 p-12 rounded-2xl text-center">
                  <p className="font-sans text-sm text-slate-400">No notices match your search criteria. Please try another category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right quick stats / visual widget column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick school calendar events info widget */}
            <div className="bg-brand-green-dark text-white rounded-2xl p-6 shadow-md relative overflow-hidden border border-brand-gold/35 font-sans">
              <div className="absolute top-0 right-0 w-24 h-24 muga-pattern opacity-10 select-none" />
              
              <h4 className="font-serif text-base font-bold text-brand-gold">
                Academic Calendar Alerts
              </h4>
              <p className="text-xs text-slate-300 mt-1">Expected milestones during upcoming weeks:</p>

              <div className="mt-6 space-y-4 text-xs">
                <div className="flex gap-3 pb-3 border-b border-white/10">
                  <span className="font-serif text-brand-gold font-bold text-sm shrink-0 mt-0.5">JUN 25</span>
                  <div>
                    <h5 className="font-semibold text-slate-100">Class VI, VII, VIII Form Fillup</h5>
                    <p className="text-slate-400 mt-0.5">Submit parent approval certificates directly to class council.</p>
                  </div>
                </div>

                <div className="flex gap-3 pb-3 border-b border-white/10">
                  <span className="font-serif text-brand-gold font-bold text-sm shrink-0 mt-0.5">JUL 05</span>
                  <div>
                    <h5 className="font-semibold text-slate-100">Brahmaputra Valley Arts Competition</h5>
                    <p className="text-slate-400 mt-0.5">District registration at Dibrugarh University stadium complex.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="font-serif text-brand-gold font-bold text-sm shrink-0 mt-0.5">AUG 15</span>
                  <div>
                    <h5 className="font-semibold text-slate-100">Independence Day Parade & NCC Drill</h5>
                    <p className="text-slate-400 mt-0.5">Compulsory attendance for all Classes VI through XII.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct download block */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs font-sans">
              <h4 className="font-serif text-sm font-bold text-brand-green-dark mb-3">Quick Download Vault</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                  <span>📄 School Leave Form PDF</span>
                  <a href="#admissions" className="text-brand-green font-bold hover:underline">Download</a>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                  <span>📄 Detailed Uniform Layout Rules</span>
                  <a href="#admissions" className="text-brand-green font-bold hover:underline">Download</a>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                  <span>📄 SEBA HSLC Syllabus Guide 2026</span>
                  <a href="#admissions" className="text-brand-green font-bold hover:underline">Download</a>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
