import { MessageSquare, Users2, HelpCircle } from 'lucide-react';
import AcademicCalendar from './AcademicCalendar';
import ParentInquiryForm from './ParentInquiryForm';
import AlumniPortal from './AlumniPortal';
import { Language } from '../translations';

interface CommunityEngagementProps {
  lang: Language;
}

export default function CommunityEngagement({ lang }: CommunityEngagementProps) {
  return (
    <section id="community-engagement-hub" className="py-22 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Hub Main Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Users2 size={13} className="text-brand-green" />
            <span>{lang === 'en' ? "COMMUNITY COMPASS" : "সম্প্ৰদায় আৰু সংযোগ কেন্দ্ৰ"}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {lang === 'en' ? "Community & Engagement Hub" : "সম্প্ৰদায় আৰু সংযোগ কাৰ্যাৱলী"}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? "Bridging current pupils, prospective guardians, and our global alumni lineage through interactive resources and contact nodes."
              : "বিদ্যমান শিক্ষাৰ্থী, নতুন অভিভাৱক আৰু বিশ্বব্যাপী সিঁচৰতি হৈ থকা আমাৰ প্ৰাক্তন ছাত্ৰ-ছাত্ৰীসকলৰ সহজ সংযোগ কাৰ্যাৱলী।"}
          </p>
        </div>

        {/* 1. Academic Calendar (Takes full width, nicely self-contained) */}
        <div className="mb-14">
          <AcademicCalendar lang={lang} />
        </div>

        {/* 2. Interactive Columns: Inquiry Form & Alumni Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Inquiry form container */}
          <div className="flex flex-col h-full">
            <ParentInquiryForm lang={lang} />
          </div>

          {/* Alumni Portal container */}
          <div className="flex flex-col h-full">
            <AlumniPortal lang={lang} />
          </div>

        </div>

      </div>
    </section>
  );
}
