import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Coffee, BookOpen, Calendar, HelpCircle, GraduationCap, User } from 'lucide-react';

interface PeriodSlot {
  id: number;
  name: string;
  time: string;
  isBreak?: boolean;
}

const PERIODS: PeriodSlot[] = [
  { id: 1, name: "1st Period", time: "09:15 AM - 10:00 AM" },
  { id: 2, name: "2nd Period", time: "10:00 AM - 10:45 AM" },
  { id: 3, name: "3rd Period", time: "10:45 AM - 11:30 AM" },
  { id: 4, name: "4th Period", time: "11:30 AM - 12:15 PM" },
  { id: 5, name: "Recess Break", time: "12:15 PM - 01:00 PM", isBreak: true },
  { id: 6, name: "5th Period", time: "01:00 PM - 01:45 PM" },
  { id: 7, name: "6th Period", time: "01:45 PM - 02:30 PM" },
  { id: 8, name: "7th Period", time: "02:30 PM - 03:10 PM" },
  { id: 9, name: "8th Period", time: "03:10 PM - 03:30 PM" },
];

const SUBJECT_DETAILS: Record<string, { name: string; teacher: string }> = {
  "MIL": { name: "Modern Indian Language (Assamese)", teacher: "Jharna Borah" },
  "Hist/SWAD": { name: "History / Swadesh Adhyayan", teacher: "Doli Boruah / Antariksha Deka" },
  "Econ/TAI": { name: "Economics / Tai Language", teacher: "Rumi Saikia / Himashri Phukan Borah" },
  "ECON": { name: "Economics", teacher: "Rumi Saikia" },
  "Socio": { name: "Sociology", teacher: "Juri Saharia" },
  "Educ": { name: "Education", teacher: "Julfikar Rahman Zinnah" },
  "ENGL": { name: "English", teacher: "Preeti Rekha Das" },
  "POSC": { name: "Political Science", teacher: "Jayanta Baruah" },
  "EVS": { name: "Environmental Studies", teacher: "Staff Faculty" },
  "IT/AGRI/ADAS": { name: "IT / Agriculture / Advance Assamese", teacher: "Tiloma Hazarika / Babyshree Arandhara / Puja Gogoi" },
  "G.K": { name: "General Knowledge", teacher: "Staff Faculty" }
};

const ROUTINE_DATA: Record<string, Record<string, string[]>> = {
  Monday: {
    "XI A": ["MIL", "Hist/SWAD", "Econ/TAI", "Socio", "Educ", "ENGL", "POSC", "EVS"],
    "XI B": ["ENGL", "Hist/SWAD", "Econ/TAI", "POSC", "Educ", "MIL", "Socio", "EVS"],
    "XII A": ["Socio", "IT/AGRI/ADAS", "MIL", "Educ", "POSC", "Econ/TAI", "ENGL", "G.K"],
    "XII B": ["POSC", "IT/AGRI/ADAS", "ENGL", "Educ", "Socio", "Econ/TAI", "MIL", "G.K"]
  },
  Tuesday: {
    "XI A": ["IT/AGRI/ADAS", "MIL", "Educ", "Hist/SWAD", "POSC", "ENGL", "Econ/TAI", "EVS"],
    "XI B": ["IT/AGRI/ADAS", "ENGL", "Educ", "Hist/SWAD", "Socio", "MIL", "Econ/TAI", "EVS"],
    "XII A": ["Hist/SWAD", "Socio", "ECON", "MIL", "Educ", "POSC", "ENGL", "G.K"],
    "XII B": ["Hist/SWAD", "POSC", "ECON", "ENGL", "Educ", "Socio", "MIL", "G.K"]
  },
  Wednesday: {
    "XI A": ["Econ/TAI", "MIL", "IT/AGRI/ADAS", "Socio", "ENGL", "POSC", "Educ", "EVS"],
    "XI B": ["Econ/TAI", "ENGL", "IT/AGRI/ADAS", "POSC", "MIL", "Socio", "Educ", "EVS"],
    "XII A": ["Educ", "IT/AGRI/ADAS", "MIL", "Hist/SWAD", "POSC", "ENGL", "ECON", "G.K"],
    "XII B": ["Educ", "IT/AGRI/ADAS", "ENGL", "Hist/SWAD", "Socio", "MIL", "ECON", "G.K"]
  },
  Thursday: {
    "XI A": ["MIL", "Econ/TAI", "Hist/SWAD", "Socio", "Educ", "ENGL", "POSC", "EVS"],
    "XI B": ["ENGL", "Econ/TAI", "Hist/SWAD", "POSC", "Educ", "MIL", "Socio", "EVS"],
    "XII A": ["Socio", "IT/AGRI/ADAS", "MIL", "Educ", "POSC", "Hist/SWAD", "ENGL", "G.K"],
    "XII B": ["POSC", "IT/AGRI/ADAS", "ENGL", "Educ", "Socio", "Hist/SWAD", "MIL", "G.K"]
  },
  Friday: {
    "XI A": ["IT/AGRI/ADAS", "Socio", "Educ", "Hist/SWAD", "ENGL", "Econ/TAI", "POSC", "EVS"],
    "XI B": ["IT/AGRI/ADAS", "POSC", "Educ", "Hist/SWAD", "MIL", "Econ/TAI", "Socio", "EVS"],
    "XII A": ["Hist/SWAD", "ECON", "IT/AGRI/ADAS", "Socio", "POSC", "ENGL", "Educ", "G.K"],
    "XII B": ["Hist/SWAD", "ECON", "IT/AGRI/ADAS", "POSC", "Socio", "MIL", "Educ", "G.K"]
  },
  Saturday: {
    "XI A": ["Hist/SWAD", "MIL", "IT/AGRI/ADAS", "Socio"],
    "XI B": ["Hist/SWAD", "ENGL", "IT/AGRI/ADAS", "POSC"],
    "XII A": ["ECON", "Socio", "Hist/SWAD", "MIL"],
    "XII B": ["ECON", "POSC", "Hist/SWAD", "ENGL"]
  }
};

export default function RoutineViewer() {
  const [activeDay, setActiveDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'>('Monday');
  const [activeClass, setActiveClass] = useState<'XI A' | 'XI B' | 'XII A' | 'XII B'>('XI A');

  const days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const classes: ('XI A' | 'XI B' | 'XII A' | 'XII B')[] = ['XI A', 'XI B', 'XII A', 'XII B'];

  const getSubjectForSlot = (period: PeriodSlot, idx: number) => {
    if (period.isBreak) return null;
    // Map period list index to subject index (skipping the recess break)
    const subjectIdx = idx < 4 ? idx : idx - 1;
    const dayData = ROUTINE_DATA[activeDay];
    if (!dayData) return null;
    const classData = dayData[activeClass];
    if (!classData) return null;
    return classData[subjectIdx] || null;
  };

  return (
    <div className="w-full bg-[#04110b] border border-brand-green/20 rounded-2xl p-6 sm:p-8 font-sans text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 muga-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-green/20 pb-6 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
              <Calendar size={11} />
              <span>ACADEMIC TIMETABLE 2026-27</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-gold-light mt-1 tracking-tight">
              Interactive Class Routine
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select a day and class stream to check active subject timings and assigned faculties.
            </p>
          </div>
          
          <div className="flex items-center gap-2.5 text-xs text-brand-gold font-medium bg-brand-green-dark/30 border border-brand-green/15 px-3 py-2 rounded-xl self-start md:self-center">
            <Clock size={15} className="text-brand-gold shrink-0" />
            <span>Morning Assembly starts at 09:00 AM</span>
          </div>
        </div>

        {/* Filters Controls - Tabs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between bg-brand-green-dark/20 p-3 rounded-xl border border-brand-green/15 mb-8">
          
          {/* Day selection tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-brand-dark/40 p-1 rounded-lg border border-brand-green/10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeDay === day
                    ? 'bg-brand-gold text-brand-dark shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-brand-green/10'
                }`}
                id={`routine-day-tab-${day.toLowerCase()}`}
              >
                {day.substring(0, 3)}
              </button>
            ))}
          </div>

          {/* Class selection tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-brand-dark/40 p-1 rounded-lg border border-brand-green/10">
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => setActiveClass(cls)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                  activeClass === cls
                    ? 'bg-brand-green text-white border border-brand-green'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-brand-green/10 border border-transparent'
                }`}
                id={`routine-class-tab-${cls.replace(' ', '-').toLowerCase()}`}
              >
                <GraduationCap size={13} />
                <span>{cls}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Timetable Cards display with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDay}-${activeClass}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {PERIODS.map((period, idx) => {
              if (activeDay === 'Saturday' && idx >= 4) {
                if (idx === 4) {
                  return (
                    <div
                      key="saturday-dismissal"
                      className="p-5 rounded-xl border border-dashed border-brand-gold/30 bg-brand-gold/5 flex flex-col justify-center items-center text-center col-span-1 sm:col-span-2 lg:col-span-3 min-h-[140px] group"
                    >
                      <Coffee className="text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300" size={24} />
                      <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider">
                        Weekend Dismissal / Half Day
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 max-w-sm">
                        Classes dismiss after the 4th Period (12:15 PM) on Saturdays. Enjoy your weekend!
                      </p>
                    </div>
                  );
                }
                return null;
              }

              const subCode = getSubjectForSlot(period, idx);
              const subDetails = subCode ? SUBJECT_DETAILS[subCode] : null;

              return (
                <div
                  key={period.id}
                  id={`period-slot-${period.id}`}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                    period.isBreak
                      ? 'bg-brand-gold/5 border-brand-gold/30 hover:bg-brand-gold/10'
                      : 'bg-brand-green-dark/10 border-brand-green/15 hover:border-brand-gold/20 hover:bg-brand-green-dark/25'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${
                        period.isBreak 
                          ? 'bg-brand-gold/15 text-brand-gold' 
                          : 'bg-brand-green/20 text-brand-gold'
                      }`}>
                        {period.isBreak ? <Coffee size={16} /> : <BookOpen size={16} />}
                      </div>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-wider ${
                          period.isBreak ? 'text-brand-gold' : 'text-slate-400'
                        }`}>
                          {period.name}
                        </span>
                        <p className="text-xs text-slate-300 font-medium font-mono mt-0.5">
                          {period.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject Details Area */}
                  {period.isBreak ? (
                    <div className="mt-4 pt-3 border-t border-brand-gold/10">
                      <h4 className="text-sm font-bold text-brand-gold">Recess Break</h4>
                      <p className="text-[11px] text-brand-gold-light/85 mt-1">
                        Interactive Recreation & Tiffin hour
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-brand-green/10">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-base font-black text-white tracking-wide">
                          {subCode}
                        </h4>
                        {subDetails && (
                          <span className="text-[9px] font-mono uppercase bg-brand-green/25 text-brand-gold-light px-1.5 py-0.5 rounded border border-brand-gold/10">
                            Classroom
                          </span>
                        )}
                      </div>
                      {subDetails ? (
                        <div className="mt-2 space-y-1">
                          <p className="text-[11px] text-slate-300 leading-snug font-medium">
                            {subDetails.name}
                          </p>
                          <div className="flex items-center gap-1 text-[10px] text-brand-gold-light mt-1">
                            <User size={10} className="shrink-0" />
                            <span>Faculty: {subDetails.teacher}</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-500 mt-1 italic">
                          No session allocated
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend / Teachers list footer */}
        <div className="mt-8 pt-6 border-t border-brand-green/20">
          <h4 className="font-serif text-sm font-bold text-brand-gold-light mb-3 flex items-center gap-2">
            <HelpCircle size={15} className="text-brand-gold" />
            <span>Faculty Index & Code Abbreviations</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(SUBJECT_DETAILS).map(([code, details]) => (
              <div 
                key={code} 
                className="bg-brand-green-dark/10 border border-brand-green/10 p-2.5 rounded-lg text-xs flex items-start gap-2"
              >
                <span className="font-black text-brand-gold bg-brand-green/35 px-1.5 py-0.5 rounded text-[10px] uppercase font-mono shrink-0">
                  {code}
                </span>
                <div>
                  <p className="text-slate-200 font-medium leading-tight">{details.name}</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Teacher: {details.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-6 pt-5 border-t border-brand-green/25 text-[11px] text-slate-400">
          <p className="leading-relaxed">
            Please note: Practical computer workshops, agriculture lab activities, and specialized stream electives are scheduled carefully within these designated hours. Any temporary routine deviations are subject to AHSEC academic coordinator instructions.
          </p>
        </div>

      </div>
    </div>
  );
}
