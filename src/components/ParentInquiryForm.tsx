import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, BookOpen, Send, CheckCircle2, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { Language } from '../translations';

interface ParentInquiryFormProps {
  lang: Language;
}

interface InquiryData {
  parentName: string;
  studentName: string;
  studentClass: string;
  phone: string;
  email: string;
  message: string;
}

export default function ParentInquiryForm({ lang }: ParentInquiryFormProps) {
  const [formData, setFormData] = useState<InquiryData>({
    parentName: '',
    studentName: '',
    studentClass: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<InquiryData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<InquiryData[]>(() => {
    try {
      const saved = localStorage.getItem('thss_parent_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [newlySubmitted, setNewlySubmitted] = useState<InquiryData | null>(null);

  const classesList = [
    { value: 'class-6', en: 'Class VI (6th Standard)', as: 'ষষ্ঠ শ্ৰেণী' },
    { value: 'class-7', en: 'Class VII (7th Standard)', as: 'সপ্তম শ্ৰেণী' },
    { value: 'class-8', en: 'Class VIII (8th Standard)', as: 'অষ্টম শ্ৰেণী' },
    { value: 'class-9', en: 'Class IX (9th Standard)', as: 'নৱম শ্ৰেণী' },
    { value: 'class-10', en: 'Class X (HSLC Batch)', as: 'দশম শ্ৰেণী' },
    { value: 'class-11-arts', en: 'Class XI - Arts Stream', as: 'একাদশ শ্ৰেণী (কলা শাখা)' },
    { value: 'class-11-science', en: 'Class XI - Science Stream', as: 'একাদশ শ্ৰেণী (বিজ্ঞান শাখা)' },
    { value: 'class-12-arts', en: 'Class XII - Arts Final', as: 'দ্বাদশ শ্ৰেণী (কলা শাখা)' },
    { value: 'class-12-science', en: 'Class XII - Science Final', as: 'দ্বাদশ শ্ৰেণী (বিজ্ঞান শাখা)' },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<InquiryData> = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = lang === 'en' ? 'Parent name is required' : 'অভিভাৱকৰ নাম প্ৰয়োজনীয়';
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = lang === 'en' ? 'Student name is required' : 'শিক্ষাৰ্থীৰ নাম প্ৰয়োজনীয়';
    }
    if (!formData.studentClass) {
      newErrors.studentClass = lang === 'en' ? 'Please select a class' : 'শ্ৰেণীটো বাছনি কৰক';
    }
    
    // Simple Phone pattern (at least 10 digits)
    const phoneNum = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'en' ? 'Phone number is required' : 'দূৰভাষ নম্বৰ প্ৰয়োজনীয়';
    } else if (phoneNum.length < 10) {
      newErrors.phone = lang === 'en' ? 'Please enter a valid 10-digit number' : 'অনুগ্ৰহ কৰি এটা সঠিক ১০-অংকৰ নম্বৰ দিয়ক';
    }

    // Email pattern
    if (!formData.email.trim()) {
      newErrors.email = lang === 'en' ? 'Email coordinates required' : 'ইমেইল ঠিকনা প্ৰয়োজনীয়';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = lang === 'en' ? 'Invalid email format' : 'অশুদ্ধ ইমেইল শৈলী';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'en' ? 'Inquiry context is required' : 'অনুসন্ধানৰ বিৱৰণ প্ৰয়োজনীয়';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = lang === 'en' ? 'Message must be at least 10 characters' : 'বাৰ্তাটো অন্ততঃ ১০ টা আখৰৰ হ’ব লাগিব';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate server action
    setTimeout(() => {
      const updatedList = [formData, ...submittedInquiries];
      setSubmittedInquiries(updatedList);
      try {
        localStorage.setItem('thss_parent_inquiries', JSON.stringify(updatedList));
      } catch (err) {
        console.error('Storage failed', err);
      }
      setNewlySubmitted(formData);
      setIsSubmitting(false);
      setFormData({
        parentName: '',
        studentName: '',
        studentClass: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden self-stretch h-full flex flex-col">
      {/* Upper header */}
      <div className="bg-gradient-to-r from-brand-green-dark via-brand-green to-brand-green-light text-white p-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2 bg-brand-gold/20 text-brand-gold-light rounded-xl border border-brand-gold/30 shrink-0">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 id="parent-inquiry-heading" className="text-lg font-black tracking-tight text-white leading-tight">
              {lang === 'en' ? "Pre-Admission Inquiry Center" : "নামভৰ্তিৰ পূৰ্ব প্ৰশ্ন আৰু অনুসন্ধান মকবিল"}
            </h3>
            <p className="text-[11px] text-brand-cream/80 font-sans mt-0.5 font-medium">
              {lang === 'en' ? "Get in touch directly with our general registrar panel for 2026 admission cycles." : "২০২৬ শৈক্ষিক বৰ্ষৰ নামভৰ্তি সম্পর্কীয় সকলো তথ্যৰ বাবে ইয়াত যোগাযোগ কৰক।"}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5.5 flex-1 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {newlySubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 px-4 flex-1 flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-16 h-16 bg-brand-green/10 text-brand-green border-2 border-brand-green/20 rounded-full flex items-center justify-center mb-1 animate-bounce">
                <CheckCircle2 size={32} />
              </div>
              <div className="space-y-1.5">
                <h4 id="inquiry-success-title" className="text-lg font-black text-slate-900">
                  {lang === 'en' ? "Inquiry Registered Successfully" : "অনুসন্ধন পত্ৰ সফলতাৰে পঞ্জীভুক্ত হ’ল"}
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  {lang === 'en' 
                    ? `Thank you, ${newlySubmitted.parentName}. We have logged your request for student ${newlySubmitted.studentName}. Our helpdesk coordinator will contact you via ${newlySubmitted.phone} shortly.` 
                    : `ধন্যবাদ শ্ৰী/শ্ৰীমতী ${newlySubmitted.parentName}। ${newlySubmitted.studentName}ৰ নামভৰ্তিৰ সন্দৰ্ভত আপোনাৰ আবেদন নথিভুক্ত কৰা হৈছে। অতি সোনকালে ${newlySubmitted.phone} নম্বৰত আমাৰ কাৰ্যালয়ে যোগাযোগ কৰিব।`}
                </p>
              </div>

              <div className="bg-brand-cream border border-brand-gold/30 rounded-xl p-3.5 w-full text-left space-y-1.5 text-xs font-sans">
                <p className="text-[10px] font-mono text-brand-gold-dark font-black uppercase tracking-wider">
                  Official Verification Receipt
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-gray-700">
                  <p><strong>{lang === 'en' ? "Student Name:" : "শিক্ষাৰ্থীৰ নাম:"}</strong></p>
                  <p className="text-right font-semibold text-slate-900">{newlySubmitted.studentName}</p>
                  <p><strong>{lang === 'en' ? "Class Requested:" : "যোগাযোগ কৰা শ্ৰেণী:"}</strong></p>
                  <p className="text-right font-mono font-bold text-slate-900 uppercase">
                    {classesList.find(c => c.value === newlySubmitted.studentClass)?.[lang] || newlySubmitted.studentClass}
                  </p>
                  <p><strong>{lang === 'en' ? "Reference Code:" : "প্ৰসংগ নম্বৰ:"}</strong></p>
                  <p className="text-right font-mono font-black text-brand-green">THSS-INQ-{(Math.random() * 9000 + 1000).toFixed(0)}</p>
                </div>
              </div>

              <button
                onClick={() => setNewlySubmitted(null)}
                className="mt-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-light text-white text-xs font-black rounded-lg transition-all shadow-sm cursor-pointer"
              >
                {lang === 'en' ? "Submit Another Inquiry" : "অন্য এটা প্ৰশ্ন পঠিয়াওক"}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="parent-inquiry-form">
              {/* Responsive Parent Name & Student Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Parent Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="parentName" className="block text-xs font-black text-gray-700">
                    {lang === 'en' ? "Parent / Guardian Name" : "অভিভাৱকৰ সম্পূৰ্ণ নাম"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? "e.g., Shri Ratul Baruah" : "উদাহৰণ: শ্ৰী ৰাতুল বৰুৱা"}
                      className={`w-full pl-9 pr-3 py-2 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                        errors.parentName ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                      }`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                      <AlertCircle size={10} /> <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                {/* Student Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="studentName" className="block text-xs font-black text-gray-700">
                    {lang === 'en' ? "Student Name" : "শিক্ষাৰ্থীৰ সম্পূৰ্ণ নাম"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? "e.g., Priyanka Baruah" : "উদাহৰণ: প্ৰিয়ংকা বৰুৱা"}
                      className={`w-full pl-9 pr-3 py-2 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                        errors.studentName ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                      <AlertCircle size={10} /> <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Class Selection & Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Desired Standard */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="studentClass" className="block text-xs font-black text-gray-700">
                    {lang === 'en' ? "Class Seeking Admission" : "নামভৰ্তিৰ বাবে বিচৰা শ্ৰেণী"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select
                      id="studentClass"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleInputChange}
                      className={`w-full pl-9 pr-3 py-2 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all appearance-none ${
                        errors.studentClass ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                      }`}
                    >
                      <option value="">{lang === 'en' ? "-- Choose Admission Class --" : "-- শ্ৰেণী নিৰ্বাচন কৰক --"}</option>
                      {classesList.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt[lang]}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  {errors.studentClass && (
                    <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                      <AlertCircle size={10} /> <span>{errors.studentClass}</span>
                    </p>
                  )}
                </div>

                {/* Contact Phone */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="block text-xs font-black text-gray-700">
                    {lang === 'en' ? "Phone Number" : "কাৰ্য্যক্ষম দূৰভাষ নম্বৰ"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? "e.g., 9876543210" : "উদাহৰণ: ১০-অংকৰ মোবাইল নং"}
                      className={`w-full pl-9 pr-3 py-2 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                      <AlertCircle size={10} /> <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Email Address */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="email" className="block text-xs font-black text-gray-700">
                  {lang === 'en' ? "Email Address" : "ইমেইল ঠিকনা"} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={lang === 'en' ? "parent@example.com" : "অভিভাৱকৰ@ইমেইল.কম"}
                    className={`w-full pl-9 pr-3 py-2 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                    <AlertCircle size={10} /> <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Context */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="block text-xs font-black text-gray-700">
                  {lang === 'en' ? "Inquiry Context / Questions" : "অনুসন্ধানৰ বিষয়/ প্ৰশ্ন আৰু মন্তব্য"} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={lang === 'en' ? "Write your query regarding hostel accommodations, stream benefits, required certificate registries, fee structure, etc." : "হোষ্টেল সুবিধা, বিষয় লাভালাভ, মাচুল ইত্যাদিৰ সন্দৰ্ভত আপোনাৰ প্ৰশ্ন আৰু মনৰ বুজ ল’বলৈ ইয়াত বিতংভাৱে লিখক..."}
                  className={`w-full p-3 bg-gray-50 border text-xs sm:text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all ${
                     errors.message ? 'border-red-500 bg-red-50/10' : 'border-gray-200 focus:border-brand-green'
                  }`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold leading-normal mt-1">
                    <AlertCircle size={10} /> <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit panel */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-brand-green hover:bg-brand-green-light disabled:bg-gray-400 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-brand-green"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'en' ? "Logging Inquiry..." : "পঞ্জীভুক্তকৰণ কৰা হৈছে..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>{lang === 'en' ? "Submit Inquiry to Helpdesk" : "পঞ্জীভুক্ত কৰক"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Statutory verification text */}
              <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-gray-400 leading-normal uppercase">
                <ShieldCheck size={12} strokeWidth={2.4} className="text-brand-gold" />
                <span>Your privacy is secured. Compliant with AHSEC regulations.</span>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
