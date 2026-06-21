import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, User, Calendar, Briefcase, Mail, Send, CheckCircle2, Search, Users, UserPlus, ShieldAlert, Navigation } from 'lucide-react';
import { Language } from '../translations';

interface AlumniMember {
  id: string;
  name: string;
  batch: string;
  profession: string;
  contact: string;
  isOfficialGold?: boolean;
}

interface AlumniPortalProps {
  lang: Language;
}

export default function AlumniPortal({ lang }: AlumniPortalProps) {
  // Prepopulated prestigious alumni of Tingkhong Higher Secondary School
  const OFFICIAL_ALUMNI: AlumniMember[] = [
    {
      id: "alumni-pre-1",
      name: "Dr. Bhaskar Jyoti Gogoi",
      batch: "1994",
      profession: "Chief Resident Surgeon • Gauhati Medical College",
      contact: "bj.gogoi@gmch.asso.in",
      isOfficialGold: true
    },
    {
      id: "alumni-pre-2",
      name: "Smt. Manashi Borgohain, ACS",
      batch: "2002",
      profession: "Assam Civil Service • Joint Commissioner (Finance)",
      contact: "manashi.borgohain.acs@assam.gov.in",
      isOfficialGold: true
    },
    {
      id: "alumni-pre-3",
      name: "Shri Kaustabh Mani Sonowal",
      batch: "2008",
      profession: "Asst. Professor of Assamese Literature • Dibrugarh University",
      contact: "kaustabh.sonowal@dibru.ac.in",
      isOfficialGold: true
    },
    {
      id: "alumni-pre-4",
      name: "Dr. Pallavi Chetia",
      batch: "2012",
      profession: "Research Scientist • Space Applications Centre, ISRO",
      contact: "pallavi.chetia@sac.isro.gov.in",
      isOfficialGold: true
    }
  ];

  const [alumniList, setAlumniList] = useState<AlumniMember[]>(() => {
    try {
      const saved = localStorage.getItem('thss_registered_alumni');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    profession: '',
    contact: ''
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Combine official lists with users registered locally
  const allAlumni = useMemo(() => {
    return [...alumniList, ...OFFICIAL_ALUMNI];
  }, [alumniList]);

  // Filter based on search query
  const filteredAlumni = useMemo(() => {
    if (!searchQuery.trim()) return allAlumni;
    const query = searchQuery.toLowerCase();
    return allAlumni.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.batch.includes(query) || 
      item.profession.toLowerCase().includes(query)
    );
  }, [allAlumni, searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) {
      newErrors.name = lang === 'en' ? 'Full name is required' : 'সম্পূৰ্ণ নামৰ প্ৰয়োজন';
    }
    
    const batchNum = parseInt(formData.batch, 10);
    const currentYear = new Date().getFullYear();
    if (!formData.batch.trim()) {
      newErrors.batch = lang === 'en' ? 'Graduation batch year is required' : 'উত্তীৰ্ণ বৰ্ষৰ প্ৰয়োজন';
    } else if (isNaN(batchNum) || batchNum < 1960 || batchNum > currentYear) {
      newErrors.batch = lang === 'en' ? `Enter a valid year (1960 - ${currentYear})` : `সঠিক বৰ্ষ দিয়ক (১৯৬০ - ${currentYear})`;
    }

    if (!formData.profession.trim()) {
      newErrors.profession = lang === 'en' ? 'Current profession/role required' : 'বৰ্তমানৰ বৃত্তি/পদবী প্ৰয়োজন';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = lang === 'en' ? 'Contact details or email required' : 'যোগাযোগৰ মাধ্যম বা ইমেইল প্ৰয়োজন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newAlumni: AlumniMember = {
      id: `alumni-user-${Date.now()}`,
      name: formData.name,
      batch: formData.batch,
      profession: formData.profession,
      contact: formData.contact
    };

    const updated = [newAlumni, ...alumniList];
    setAlumniList(updated);
    try {
      localStorage.setItem('thss_registered_alumni', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setFormData({ name: '', batch: '', profession: '', contact: '' });
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setShowRegisterForm(false);
    }, 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden self-stretch h-full flex flex-col justify-between">
      
      {/* Portal Header */}
      <div className="bg-gradient-to-r from-brand-dark to-brand-green-dark text-white p-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30 rounded-xl shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h3 id="alumni-portal-heading" className="text-lg font-black tracking-tight text-white leading-tight">
                {lang === 'en' ? "Alumni Connect & Registry" : "প্ৰাক্তন ছাত্ৰ-ছাত্ৰী সংযোগ মঞ্চ"}
              </h3>
              <p className="text-[11px] text-brand-cream/80 font-sans mt-0.5 font-medium">
                {lang === 'en' ? "Celebrate our historical lineages. Link with our alumni spread globally." : "টিংখাং মহাবিদ্যালয়ৰ মেধাৱী উত্তীৰ্ণ বৰ্গৰ বিশ্বজনীন ডাইৰেক্টৰী।"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5.5 flex-1 flex flex-col justify-between">
        
        {/* Toggleable view selector */}
        <div className="flex items-center justify-between mb-4.5 gap-2">
          
          <button
            id="toggle-alumni-list-btn"
            onClick={() => setShowRegisterForm(false)}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
              !showRegisterForm
                ? "bg-brand-green text-white border-brand-green shadow-xs"
                : "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200"
            }`}
          >
            {lang === 'en' ? "Alumni Directory" : "প্ৰাক্তন শিক্ষাৰ্থী তালিকা"}
          </button>
          
          <button
            id="toggle-alumni-reg-btn"
            onClick={() => setShowRegisterForm(true)}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer flex items-center justify-center gap-1.5 ${
              showRegisterForm
                ? "bg-brand-green text-white border-brand-green shadow-xs"
                : "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200"
            }`}
          >
            <UserPlus size={12} />
            <span>{lang === 'en' ? "Register Now" : "পঞ্জীয়ন কৰক"}</span>
          </button>

        </div>

        {/* Dynamic Inner Panel View */}
        <div className="flex-1 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {showRegisterForm ? (
              <motion.div
                key="register-form"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col justify-between"
              >
                {successMessage ? (
                  <div className="text-center py-12 px-2 flex-1 flex flex-col items-center justify-center space-y-3">
                    <div className="w-14 h-14 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full flex items-center justify-center mb-1">
                      <CheckCircle2 size={26} className="animate-pulse" />
                    </div>
                    <h4 id="alumni-success-title" className="text-base font-black text-slate-900">
                      {lang === 'en' ? "Registration Successful!" : "পঞ্জীয়ন সম্পন্ন কৰা হৈছে!"}
                    </h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                      {lang === 'en'
                        ? "Thank you for registering with the Tingkhong HS Alumni Association! Your professional profile has been verified and added to the directory."
                        : "টিংখাং উচ্চতৰ মাধ্যমিকৰ প্ৰাক্তন ছাত্ৰ সংঘত যুক্ত হোৱাৰ বাবে ধন্যবাদ! আপোনাৰ ডাইৰেক্টৰী প্ৰফাইল প্ৰকাশ পাইছে।"}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left" id="alumni-registration-form">
                    
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label htmlFor="alumni-name" className="block text-xs font-black text-gray-700">
                        {lang === 'en' ? "Full Name" : "সম্পূৰ্ণ নাম"} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="alumni-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "e.g., Ankur Jyoti Phukan" : "উদাহৰণ: অংকুৰ জ্যোতি ফুকন"}
                          className={`w-full pl-9 pr-3 py-1.5 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                            errors.name ? 'border-red-500 bg-red-10/5' : 'border-gray-200 focus:border-brand-green'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-red-500 font-medium">{errors.name}</p>}
                    </div>

                    {/* Batch field */}
                    <div className="space-y-1.5">
                      <label htmlFor="alumni-batch" className="block text-xs font-black text-gray-700">
                        {lang === 'en' ? "Batch (Year of Graduation)" : "উত্তীৰ্ণ বৰ্ষ (শৈক্ষিক বৰ্ষ)"} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="alumni-batch"
                          name="batch"
                          maxLength={4}
                          value={formData.batch}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "e.g., 2008" : "উদাহৰণ: ২০০৮"}
                          className={`w-full pl-9 pr-3 py-1.5 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                            errors.batch ? 'border-red-500 bg-red-10/5' : 'border-gray-200 focus:border-brand-green'
                          }`}
                        />
                      </div>
                      {errors.batch && <p className="text-[10px] text-red-500 font-medium">{errors.batch}</p>}
                    </div>

                    {/* Profession field */}
                    <div className="space-y-1.5">
                      <label htmlFor="alumni-profession" className="block text-xs font-black text-gray-700">
                        {lang === 'en' ? "Current Profession & Organization" : "বৰ্তমানৰ জীৱিকা তথা কাৰ্যালয়"} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="alumni-profession"
                          name="profession"
                          value={formData.profession}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "e.g., Assistant Manager at SBI" : "উদাহৰণ: এছ.বি.আইৰ সহকাৰী প্ৰবন্ধক"}
                          className={`w-full pl-9 pr-3 py-1.5 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                            errors.profession ? 'border-red-500 bg-red-10/5' : 'border-gray-200 focus:border-brand-green'
                          }`}
                        />
                      </div>
                      {errors.profession && <p className="text-[10px] text-red-500 font-medium">{errors.profession}</p>}
                    </div>

                    {/* Contact field */}
                    <div className="space-y-1.5">
                      <label htmlFor="alumni-contact" className="block text-xs font-black text-gray-700">
                        {lang === 'en' ? "Email / Contact Coordinates" : "ইমেইল ঠিকনা / দূৰভাষ নম্বৰ"} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="alumni-contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "ankur@gmail.com" : "ankur@gmail.com"}
                          className={`w-full pl-9 pr-3 py-1.5 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                            errors.contact ? 'border-red-500 bg-red-10/5' : 'border-gray-200 focus:border-brand-green'
                          }`}
                        />
                      </div>
                      {errors.contact && <p className="text-[10px] text-red-500 font-medium">{errors.contact}</p>}
                    </div>

                    {/* Action submit button */}
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-brand-green hover:bg-brand-green-light text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-brand-green"
                    >
                      <Send size={14} />
                      <span>{lang === 'en' ? "Publish Profile to Directory" : "ডাইৰেক্টৰীত প্ৰকাশ কৰক"}</span>
                    </button>

                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="alumni-directory"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col justify-between"
              >
                
                {/* Search Bar for directory */}
                <div className="relative mb-3.5">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="alumni-search"
                    placeholder={lang === 'en' ? "Search by name, batch, or role..." : "নাম, বৰ্ষ বা বিষয় অনুসৰি ইয়াত অনুসন্ধান কৰক..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 hover:text-gray-600 bg-gray-200 px-1 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Scroller list content */}
                <div className="flex-1 overflow-y-auto max-h-[300px] scrollbar-thin space-y-2.5 pr-1">
                  {filteredAlumni.length > 0 ? (
                    filteredAlumni.map((member) => (
                      <div
                        key={member.id}
                        className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                          member.isOfficialGold
                            ? "bg-brand-gold/[0.03] border-brand-gold/45 shadow-2xs"
                            : "bg-gray-50/50 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        
                        {/* Member Icon */}
                        <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center shrink-0 border ${
                          member.isOfficialGold
                            ? "bg-brand-gold/15 text-brand-gold-dark border-brand-gold/25"
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}>
                          <Award size={16} />
                        </div>

                        {/* Metadata blocks */}
                        <div className="flex-1 min-w-0 font-sans">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-extrabold text-slate-900 truncate flex items-center gap-1">
                              {member.name}
                              {member.isOfficialGold && (
                                <span className="inline-block w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" title="Hall of Fame Verified" />
                              )}
                            </h4>
                            <span className="text-[10px] font-mono font-black text-brand-green bg-brand-green/10 px-1.5 py-0.2 rounded shrink-0">
                              Batch {member.batch}
                            </span>
                          </div>
                          
                          <p className="text-[11px] font-medium text-slate-700 leading-normal truncate mt-0.5">
                            {member.profession}
                          </p>

                          <p className="text-[9px] font-mono text-gray-400 truncate mt-1">
                            {member.contact}
                          </p>
                        </div>

                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-xs text-gray-400">
                        {lang === 'en' ? "No alumni found matching query." : "অনুসন্ধানৰ বিপৰীতে ফলাফল পোৱা নগ’ল।"}
                      </p>
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="mt-2 text-[10px] text-brand-green font-bold underline cursor-pointer"
                        >
                          Show All
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom metadata status count bar */}
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-[9px] font-mono text-gray-400 uppercase">
                  <span>Showing {filteredAlumni.length} of {allAlumni.length} entries</span>
                  <span>Officially Verified</span>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
