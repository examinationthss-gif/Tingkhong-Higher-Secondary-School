import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Quote, Landmark, GraduationCap, Award, FileText, Target, Shield, Users, CheckCircle, Camera, RotateCcw } from 'lucide-react';
import { PRINCIPAL_INFO } from '../data';

export default function PrincipalMessage() {
  const getNormalizedImage = (url: string) => {
    return url.startsWith('/public/') ? url.replace('/public/', '/') : url;
  };

  const [imageSrc, setImageSrc] = useState<string>(getNormalizedImage(PRINCIPAL_INFO.image));

  useEffect(() => {
    const savedImage = localStorage.getItem('principal_image');
    if (savedImage) {
      if (savedImage.startsWith('data:image')) {
        setImageSrc(savedImage);
      } else {
        // If it's a relative path, clear it so it defaults to the updated PRINCIPAL_INFO.image
        localStorage.removeItem('principal_image');
        setImageSrc(getNormalizedImage(PRINCIPAL_INFO.image));
      }
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem('principal_image', base64String);
        setImageSrc(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    localStorage.removeItem('principal_image');
    setImageSrc(getNormalizedImage(PRINCIPAL_INFO.image));
  };

  return (
    <section id="principal-message" className="py-20 bg-brand-cream/40 relative">
      <div className="absolute inset-0 muga-pattern pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-dark font-sans bg-brand-gold/15 px-3.5 py-1 rounded-full">
            OFFICIAL LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0d2a1b] mt-3">
            Principal's Office & Educational Vision
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Principal Profile Card & Academic Leadership Credentials */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Principal Profile Card */}
            <div className="relative group w-full max-w-[340px]">
              {/* Outer Golden Border frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-brand-gold/40 group-hover:border-brand-gold/70 transition-colors duration-300 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-4 border border-slate-200/60 shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 mb-4">
                  <img 
                    src={imageSrc} 
                    alt={PRINCIPAL_INFO.name} 
                    className="w-full h-full object-cover object-[50%_20%] filter contrast-[1.03] brightness-[1.01] saturate-100 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    id="principal-avatar-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a1b]/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Elegant Camera upload trigger */}
                  <label htmlFor="principal-photo-upload" className="absolute top-3 right-3 bg-white/95 hover:bg-white text-slate-700 hover:text-brand-green-dark p-2 rounded-full shadow-md cursor-pointer transition-all duration-200 opacity-85 hover:opacity-100 flex items-center justify-center group/btn z-20" title="Upload Principal Sir portrait">
                    <Camera size={14} className="transition-transform group-hover/btn:scale-110" />
                    <input 
                      type="file" 
                      id="principal-photo-upload" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload}
                    />
                  </label>

                  {imageSrc !== getNormalizedImage(PRINCIPAL_INFO.image) && (
                    <button 
                      onClick={handleResetImage}
                      className="absolute top-3 left-3 bg-white/95 hover:bg-white text-rose-600 p-2 rounded-full shadow-md cursor-pointer transition-all duration-200 opacity-85 hover:opacity-100 flex items-center justify-center group/btn z-20"
                      title="Reset to default photo"
                    >
                      <RotateCcw size={14} className="transition-transform group-hover/btn:-rotate-45" />
                    </button>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">
                      CHIEF ADMINISTRATOR
                    </p>
                    <p className="font-serif text-xl font-bold mt-0.5">
                      {PRINCIPAL_INFO.name}
                    </p>
                  </div>
                </div>
                
                {/* Credentials list */}
                <div className="space-y-1 text-center pb-2">
                  <p className="font-sans text-xs text-brand-gold-dark font-black tracking-wide">
                    {PRINCIPAL_INFO.designation}
                  </p>
                  <p className="font-sans text-[11px] text-slate-500 font-medium">
                    Tingkhong Higher Secondary School, Assam
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Leadership Section Card */}
            <div className="w-full max-w-[340px] bg-white border border-slate-200/60 rounded-2xl p-5 mt-8 shadow-md">
              <h4 className="font-sans text-xs font-black uppercase tracking-wider text-brand-green-dark border-b border-brand-gold/20 pb-2.5 mb-4.5 flex items-center gap-2">
                <Award size={15} className="text-brand-gold-dark" />
                <span>Academic Leadership Profile</span>
              </h4>
              <ul className="space-y-3.5 font-sans text-xs text-slate-650">
                {PRINCIPAL_INFO.credentials.map((cred, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle size={14} className="text-brand-green mt-0.5 shrink-0" />
                    <span className="leading-snug">{cred}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3 bg-slate-50/70 p-2.5 rounded-lg">
                <Shield size={20} className="text-brand-gold-dark shrink-0" />
                <p className="text-[10px] font-medium text-slate-550 leading-snug">
                  Authorized Signatory & Administrative Board Head under AHSEC Compliance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative content, Vision Statement, and Leadership Framework */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Elegant Narrative Message & Signature */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-lg">
              
              {/* Elegant Callout Pull-quote */}
              <div className="bg-[#eff5f1] border-l-4 border-brand-green p-6 rounded-r-xl relative mb-8">
                <Quote size={40} className="text-brand-green/10 absolute -top-4 -left-1 transform -scale-x-100" />
                <p className="font-serif italic text-base sm:text-lg text-brand-green-dark leading-relaxed relative z-10">
                  "{PRINCIPAL_INFO.messageQuote}"
                </p>
              </div>

              {/* Letter Body paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                {PRINCIPAL_INFO.messageBody.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Formal Signature layout */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400">OFFICIAL CHIEF ADVISOR</p>
                  <p className="font-serif text-lg font-bold text-brand-green-dark mt-1">
                    {PRINCIPAL_INFO.name}
                  </p>
                  <p className="text-xs text-slate-500">Tingkhong Administration Board</p>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <span className="font-serif italic text-brand-gold text-xl font-bold select-none leading-none">
                    Ashok Gogoi
                  </span>
                  <span className="text-[11px] text-slate-405 border-t border-slate-100 pt-1 mt-1 block">
                    Authorised Principal Seal 2026/27
                  </span>
                </div>
              </div>

            </div>

            {/* Dynamic Vision Statement Callout Block */}
            <div className="bg-brand-green text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="p-3 bg-white/10 rounded-xl text-brand-gold shrink-0 mt-1">
                  <Target size={24} className="animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-brand-gold">
                    Our Core Vision Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans">
                    "Tingkhong Higher Secondary School aspires to become an incubator of national-standard scholastic brilliance. We pledge to deploy rigorous state-of-the-art testing frameworks, maintain 100% regional exam pass benchmarks, and groom empathetic leaders who will contribute meaningfully to the dynamic growth of Upper Assam."
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Leadership Board Framework Grid */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="font-serif text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
                <Users size={18} className="text-brand-green" />
                <span>Academic Leadership & Innovation Framework</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-2 text-left">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs uppercase font-mono">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Rigorous Assessment</h4>
                  <p className="text-[11px] text-slate-550 leading-normal">
                    Standardizing dual monthly mock exams and unit assessments to guarantee SEBA and AHSEC board final preparation readiness.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-2 text-left">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs uppercase font-mono">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Faculty Excellence</h4>
                  <p className="text-[11px] text-slate-550 leading-normal">
                    Assisting our educators with high-tech materials and training seminars, yielding consecutive years of 100% subject-wise pass margins.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-2 text-left">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs uppercase font-mono">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Empowerment Drive</h4>
                  <p className="text-[11px] text-slate-550 leading-normal">
                    Distributing direct fee concessions and scholarship benefits to support outstanding candidates across Dibrugarh district.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
