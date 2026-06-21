import React, { useState } from 'react';
import { ShieldCheck, Calendar, FileText, CheckCircle2, ChevronRight, Phone, Mail, Award, Landmark, HelpCircle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

const NECESSARY_DOCUMENTS: ChecklistItem[] = [
  { id: "doc-1", label: "HSLC / Class X Admit Card", description: "Clear photocopy for official proof of age validation." },
  { id: "doc-2", label: "Marksheet & Pass Certificate", description: "Original internet/physical marksheet issued by SEBA or other board." },
  { id: "doc-3", label: "Caste Certificate (if applicable)", description: "For reservation benefits under Govt. of Assam policies (OBC, MOBC, ST, SC)." },
  { id: "doc-4", label: "Student Passport size photos", description: "3 recent colored prints with clean light background." },
  { id: "doc-5", label: "Student Bank Passbook Front Page", description: "Needed for official scholarship, uniform allowance and textbook grant transfers." },
  { id: "doc-6", label: "PRC / Domicile declaration", description: "Local residential proof signed by authorised revenue authorities." }
];

export default function AdmissionsCTA() {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalChecked = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((totalChecked / NECESSARY_DOCUMENTS.length) * 100);

  return (
    <section id="admissions-portal" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Important Admission Rules, Timetable, Contacts */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green font-sans px-3 py-1 bg-brand-green/10 rounded-full inline-block">
                ADMISSION REGISTRY • ২০২৬
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-green-dark mt-3 leading-snug">
                Step-by-Step Admission Guide for Session 2026-27
              </h2>
              <div className="w-12 h-1 bg-brand-gold my-5 rounded-full" />
              
              <p className="font-sans text-[#4a5568] text-sm sm:text-base leading-relaxed mb-6">
                Under the directive of State Department of Secondary Education, Assam, all admissions into Higher Secondary (Class XI Arts and Science) must be compulsorily registered through the central government <strong>DARPAN Admission Portal</strong>.
              </p>

              {/* Admission Milestones timeline */}
              <div className="space-y-4 font-sans mb-8">
                <h4 className="font-sans text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Key Milestones & Schedules
                </h4>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-brand-green/20">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-brand-green-dark">Registration Opens (Darpan)</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Submit applications through Darpan using your HSLC details before June 30, 2026.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-brand-green/20">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-brand-green-dark">Publication of Selection List</h5>
                    <p className="text-xs text-slate-500 mt-0.5">School selection and merit waiting list publishes online around July 5, 2026.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-brand-green/20">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-brand-green-dark">Physical Document Scrutiny</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Bring prepared documents for physical cross-reference matching at the Main Office hall.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpline Contacts */}
            <div className="bg-brand-cream border border-brand-gold/20 rounded-2xl p-5 font-sans">
              <h4 className="font-serif text-sm font-bold text-brand-green-dark flex items-center gap-2 mb-3">
                <Landmark size={16} className="text-brand-gold-dark" />
                <span>Admissions Help Desk</span>
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Operating Hours: Monday to Saturday (9:30 AM to 3:00 PM). Parents can dial the administrative wing directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-xs text-slate-700">
                <a href="tel:+919435306000" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Phone size={14} className="text-brand-green" />
                  <span>+91 94353 06000 (Office Secy)</span>
                </a>
                <a href="mailto:examinationthss@gmail.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Mail size={14} className="text-brand-green" />
                  <span>examinationthss@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Block: THE INTERACTIVE CHECKLIST OF DOCUMENTS */}
          <div className="lg:col-span-6 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-green-dark">
                    Document Readiness Checklist
                  </h3>
                  <p className="font-sans text-xs text-slate-500 mt-0.5">
                    Prepare original & photocopies of these listed certificates:
                  </p>
                </div>
                <div className="bg-brand-green text-white font-sans text-xs font-bold px-3 py-1 rounded-full border border-brand-gold">
                  {progressPercent}% Prepared
                </div>
              </div>

              {/* Progress Indicator Bar */}
              <div className="w-full h-2 bg-slate-200 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-brand-green transition-all duration-300" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* List of items */}
              <div className="space-y-4 font-sans max-h-[380px] overflow-y-auto pr-2">
                {NECESSARY_DOCUMENTS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => toggleCheck(doc.id)}
                    className={`p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer select-none ${
                      checkedDocs[doc.id]
                        ? 'bg-brand-green/5 border-brand-green/30'
                        : 'bg-white border-slate-200/80 hover:border-slate-350'
                    }`}
                  >
                    <div className="mt-0.5">
                      <input 
                        type="checkbox"
                        checked={!!checkedDocs[doc.id]}
                        onChange={() => {}} // Handled by outer div click
                        className="w-4.5 h-4.5 rounded border-slate-300 accent-brand-green text-brand-green"
                      />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-semibold leading-tight ${
                        checkedDocs[doc.id] ? 'text-brand-green-dark line-through opacity-85' : 'text-slate-800'
                      }`}>
                        {doc.label}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions at Bottom of Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 justify-between font-sans">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-green font-bold" />
                <span>Ready with files? Click below to navigate:</span>
              </span>
              <a 
                href="https://darpan.ahsec.assam.gov.in"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-brand-gold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Navigate to Darpan Port</span>
                <ChevronRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
