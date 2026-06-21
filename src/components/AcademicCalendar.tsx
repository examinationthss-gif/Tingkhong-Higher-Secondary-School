import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Bookmark, Gift, GraduationCap, Sparkles, Filter, CheckSquare, Square, Info } from 'lucide-react';
import { Language } from '../translations';

interface AcademicEvent {
  id: string;
  date: string; // YYYY-MM-DD format
  title: { en: string; as: string };
  category: 'exams' | 'holidays' | 'events' | 'admissions' | 'traditional';
  description: { en: string; as: string };
}

interface AcademicCalendarProps {
  lang: Language;
}

export default function AcademicCalendar({ lang }: AcademicCalendarProps) {
  // Database of all events for 2026
  const EVENTS_DATABASE: AcademicEvent[] = [
    // January 2026
    {
      id: "ev-jan-1",
      date: "2026-01-01",
      title: { en: "New Year's Day Celebration", as: "নতুন বছৰৰ আনন্দ উল্লাস" },
      category: "holidays",
      description: { en: "Official school holiday. Campus administrative office closed.", as: "চৰকাৰী বন্ধৰ দিন। বিদ্যালয় কাৰ্যালয় বন্ধ থাকিব।" }
    },
    {
      id: "ev-jan-2",
      date: "2026-01-14",
      title: { en: "Uruka / Magh Bihu Eve", as: "ভোগালী বিহুৰ উৰুকা" },
      category: "traditional",
      description: { en: "Traditional harvesting bonfire gathering across Assam.", as: "অসমীয়াৰ লোক কৃষ্টি মেজি ঘৰ সজা আৰু সমূহীয়া ভোজ-ভাত।" }
    },
    {
      id: "ev-jan-15",
      date: "2026-01-15",
      title: { en: "Magh Bihu / Bhogali Festival", as: "মাঘ বিহু / ভোগালী উৎসৱ" },
      category: "holidays",
      description: { en: "Main harvest festival holidays. School remains closed.", as: "ভোগালী ৰং-ধেমালিৰ দিন। চৰকাৰী বন্ধ।" }
    },
    {
      id: "ev-jan-16",
      date: "2026-01-16",
      title: { en: "Magh Bihu Holiday Day-2", as: "মাঘ বিহু বন্ধ (দ্বিতীয় দিন)" },
      category: "holidays",
      description: { en: "Secondary harvesting festival statutory holiday.", as: "অসম চৰকাৰ অনুমোদিত ভোগালী বিহুৰ দ্বিতীয় তৰংগ বন্ধ।" }
    },
    {
      id: "ev-jan-23",
      date: "2026-01-23",
      title: { en: "Netaji Jayanti Assembly", as: "নেতাজী সুভাষ চন্দ্ৰ বসু জন্মজয়ন্তী" },
      category: "events",
      description: { en: "Remembrance speeches & morning drilling assembly.", as: "প্ৰাতঃ প্ৰাৰ্থনা সভাত বীৰ নেতাজীৰ প্ৰতি শ্ৰদ্ধাঞ্জলি।" }
    },
    {
      id: "ev-jan-26",
      date: "2026-01-26",
      title: { en: "77th Republic Day Flag Hoisting", as: "৭৭-তম গণতন্ত্ৰ দিৱস উদযাপন" },
      category: "events",
      description: { en: "National flag hoisting at 8:30 AM. Compulsory faculty attendance.", as: "পুৱা ৮:৩০ বজাত জাতীয় পতাকা উত্তোলন। সকলো শিক্ষাৰ্থীৰ উপস্থিতি বাঞ্ছনীয়।" }
    },
    {
      id: "ev-jan-31",
      date: "2026-01-31",
      title: { en: "Me-Dam-Me-Phi", as: "মে-ডাম-মে-ফি" },
      category: "traditional",
      description: { en: "Traditional Tai-Ahom ancestor worship festival holiday.", as: "টাই-আহোম সকলৰ পূৰ্বপুৰুষ উপাসনা কাৰ্যাপ কৃষ্টি দিৱস। বন্ধ।" }
    },

    // February 2026
    {
      id: "ev-feb-2",
      date: "2026-02-02",
      title: { en: "Saraswati Puja Celebrations", as: "শ্ৰী শ্ৰী সৰস্বতী পূজা" },
      category: "traditional",
      description: { en: "Devotional floral tribute and traditional yellow costume assemblies.", as: "বিদ্যাৰ অধিষ্ঠাত্ৰী দেৱী ভগৱতী সৰস্বতী উপাসনা। খেচুৰী প্ৰসাদ বিতৰণ।" }
    },
    {
      id: "ev-feb-5",
      date: "2026-02-05",
      title: { en: "Class IX & XI Annual Exams Commences", as: "নৱম আৰু একাদশ শ্ৰেণীৰ বাৰ্ষিক পৰীক্ষা আৰম্ভ" },
      category: "exams",
      description: { en: "State council standardized baseline testing sessions.", as: "নৱম আৰু একাদশ শ্ৰেণীৰ বাৰ্ষিক মূল্যায়ন সূচনা পত্ৰ।" }
    },
    {
      id: "ev-feb-15",
      date: "2026-02-15",
      title: { en: "Bir Chilarai Divas", as: "মহাবীৰ চিলাৰায় দিৱস" },
      category: "holidays",
      description: { en: "State Holiday honouring the tenure of general Chilarai.", as: "অসমৰ বীৰ সেনাপতি চিলাৰায়ৰ স্মৃতিত চৰকাৰী বন্ধৰ দিন।" }
    },
    {
      id: "ev-feb-20",
      date: "2026-02-20",
      title: { en: "Completion of Annual Exams", as: "বাৰ্ষিক পৰীক্ষাৰ সামৰণি" },
      category: "exams",
      description: { en: "Concluding paper of standard school promotional evaluation.", as: "পৰীক্ষাৰ আটাইকেইখন প্ৰশ্নকাকতৰ মূল্যায়ন সামৰণি পৰ্যায়।" }
    },
    {
      id: "ev-feb-26",
      date: "2026-02-26",
      title: { en: "Maha Shivratri Assembly", as: "মহা শিৱৰাত্ৰি" },
      category: "holidays",
      description: { en: "Spiritual holiday. Campus academic blocks remain closed.", as: "পৌৰাণিক উপাসনা তিথি। বিদ্যালয় বন্ধ।" }
    },

    // March 2026
    {
      id: "ev-mar-1",
      date: "2026-03-01",
      title: { en: "Prospectus Intake Portals Open", as: "শৈক্ষিক বৰ্ষৰ নামভৰ্তিৰ জাননী প্ৰকাশ" },
      category: "admissions",
      description: { en: "Release of official admission brochures and offline reservation coupons.", as: "নতুন শৈক্ষিক বৰ্ষৰ নথি-পত্ৰ আৰু নামভৰ্তিৰ নিয়মাৱলী অনলাইন/অফলাইন প্ৰকাশ।" }
    },
    {
      id: "ev-mar-3",
      date: "2026-03-03",
      title: { en: "SEBA HSLC Board Exams Begin", as: "ছেবা হাইস্কুল শিক্ষান্ত (Class X) পৰীক্ষা আৰম্ভ" },
      category: "exams",
      description: { en: "Class X final examinations across regional state centers.", as: "অসম হাইস্কুল শিক্ষান্ত ব’ৰ্ড পৰীক্ষাৰ শুভাৰম্ভ।" }
    },
    {
      id: "ev-mar-10",
      date: "2026-03-10",
      title: { en: "AHSEC Class XII Board Finals Begin", as: "উচ্চতৰ মাধ্যমিক চূড়ান্ত ব’ৰ্ড পৰীক্ষা আৰম্ভ" },
      category: "exams",
      description: { en: "Science & Arts final board testing panels.", as: "অসম উচ্চতৰ মাধ্যমিক শিক্ষা সংসদ পৰিচালিত চুড়ান্ত পৰীক্ষাৰ মূল্যায়ন সূচনা।" }
    },
    {
      id: "ev-mar-25",
      date: "2026-03-25",
      title: { en: "SEBA HSLC Exams Conclude", as: "ছেবা HSLC পৰীক্ষাৰ সফল সামৰণি" },
      category: "exams",
      description: { en: "Class X final test papers compiled for board submission.", as: "হাইস্কুল শিক্ষান্ত পৰীক্ষাসমূহৰ সামগ্ৰিক সামৰণি।" }
    },
    {
      id: "ev-mar-28",
      date: "2026-03-28",
      title: { en: "Holi Doul Utsav Holiday", as: "দ’ল পূৰ্ণিমা / ফাকুৱা বন্ধ" },
      category: "holidays",
      description: { en: "Spring festival of colours. Official holiday.", as: "বসন্তোৎসৱ ফাকুৱা উপলক্ষে আনন্দময় বন্ধৰ দিন।" }
    },

    // April 2026
    {
      id: "ev-apr-1",
      date: "2026-04-01",
      title: { en: "New Academic Session Launch", as: "নতুন শৈক্ষিক বৰ্ষৰ পাঠদান সূচনা" },
      category: "events",
      description: { en: "Distribution of government free textbooks to Class IX/X students.", as: "চৰকাৰী বিনামূলীয়া পাঠ্যপুথি বিতৰণ তথা নতুন শ্ৰেণীৰ পাঠদান আৰম্ভ।" }
    },
    {
      id: "ev-apr-13",
      date: "2026-04-13",
      title: { en: "Rongali Bihu Vacation Day-1", as: "ব’হাগ বিহু বন্ধ (প্ৰথম দিন)" },
      category: "traditional",
      description: { en: "Assamese National New Year festival celebrations. Goru Bihu.", as: "অসমীয়াৰ হেঁপাহৰ বহাগ বিহু, গৰু বিহুৰ পাৰম্পৰিক বন্ধ।" }
    },
    {
      id: "ev-apr-14",
      date: "2026-04-14",
      title: { en: "Bohag Bihu / Manuh Bihu", as: "মানুহ বিহুৰ ৰাজ্যিক বন্ধ" },
      category: "holidays",
      description: { en: "National Bihu high feast. Husori troupes panel.", as: "বসন্ত উৎসবৰ মূল দিন - মানুহ বিহু। চৰকাৰী বন্ধ।" }
    },
    {
      id: "ev-apr-15",
      date: "2026-04-15",
      title: { en: "Rongali Bihu Vacation Day-3", as: "ব’হাগ বিহু বন্ধ (তৃতীয় দিন)" },
      category: "holidays",
      description: { en: "Continued New Year festival school vacation.", as: "বিহুৰ বতৰৰ ধাৰাবাহিক চৰকাৰী বন্ধ।" }
    },
    {
      id: "ev-apr-16",
      date: "2026-04-16",
      title: { en: "Rongali Bihu Vacation Day-4", as: "ব’হাগ বিহু বন্ধ (চতুৰ্থ দিন)" },
      category: "holidays",
      description: { en: "Final day of traditional spring festival holidays.", as: "বহাগ বিহু বন্ধৰ অন্তিমটো দিন।" }
    },
    {
      id: "ev-apr-25",
      date: "2026-04-25",
      title: { en: "Parents-Teacher General Assembly", as: "অভিভাৱক-শিক্ষক সাধাৰণ সভা" },
      category: "events",
      description: { en: "Review of UDISE registers and curriculum distribution strategies.", as: "শিক্ষাৰ্থীৰ পঞ্জীয়ন আৰু পাঠ্যক্ৰম পৰিকল্পনা সন্দৰ্ভত গুৰুত্বপূৰ্ণ বৈঠক।" }
    },

    // May 2026
    {
      id: "ev-may-1",
      date: "2026-05-01",
      title: { en: "International Workers' Day", as: "মে’ দিৱস / শ্ৰমিক দিৱস" },
      category: "holidays",
      description: { en: "Campus administrative offices closed. Tribute to workers.", as: "শ্ৰমিক অধিকাৰ সুৰক্ষা দিৱস মূলক চৰকাৰী বন্ধ।" }
    },
    {
      id: "ev-may-8",
      date: "2026-05-08",
      title: { en: "Rabindra Jayanti Meet", as: "ৰবীন্দ্ৰ জয়ন্তী উদযাপন" },
      category: "events",
      description: { en: "Recitals of Rabindra Sangeet in the humanities block.", as: "কবিগুৰু ৰবীন্দ্ৰনাথ ঠাকুৰৰ স্মৃতিত বিভিন্ন গীত-মাত প্ৰতিযোগিতা।" }
    },
    {
      id: "ev-may-20",
      date: "2026-05-20",
      title: { en: "Tithi of Srimanta Sankardeva", as: "মহাপুৰুষ শ্ৰীমন্ত শংকৰদেৱৰ তিথি" },
      category: "holidays",
      description: { en: "Devotional tribute Day honoring saint Sankardeva. Holiday.", as: "এক শৰণ নাম ধৰ্মৰ গুৰু শংকৰদেৱৰ পৱিত্ৰ তিথি বন্ধ।" }
    },
    {
      id: "ev-may-25",
      date: "2026-05-25",
      title: { en: "Class XI Offline Admissions Start", as: "একাদশ শ্ৰেণীৰ ফৰ্ম বিতৰণ আৰু প্ৰক্ৰিয়া সূচনা" },
      category: "admissions",
      description: { en: "Distribution of printed application forms for Arts and Science streams.", as: "একাদশ শ্ৰেণীৰ নামভৰ্তিৰ ছপা আবেদন পত্ৰ বিতৰণ।" }
    },

    // June 2026
    {
      id: "ev-jun-1",
      date: "2026-06-01",
      title: { en: "Admission Intake Deadline", as: "আবেদন পত্ৰ গ্ৰহণৰ অন্তিম তাৰিখ" },
      category: "admissions",
      description: { en: "Final date to deposit physical application files in registrar counter.", as: "কাৰ্যালয় কাউণ্টাৰত একাদশ শ্ৰেণীৰ আবেদন পত্ৰ জমা লোৱাৰ শেষ সময়।" }
    },
    {
      id: "ev-jun-5",
      date: "2026-06-05",
      title: { en: "World Environment Day Drive", as: "বিশ্ব পৰিৱেশ দিৱস / বৃক্ষৰোপণ কাৰ্যসূচী" },
      category: "events",
      description: { en: "Annual saplings plantation drives across the local sub-divisions.", as: "টিংখাং উচ্চতৰ মাধ্যমিক চৌহদত বৃক্ষৰোপণ আৰু সজাগতা সমদল।" }
    },
    {
      id: "ev-jun-18",
      date: "2026-06-18",
      title: { en: "Class XI Merit List Publication", as: "একাদশ শ্ৰেণীৰ মেধা তালিকা প্ৰকাশ" },
      category: "admissions",
      description: { en: "Display of selected candidates in science & arts streams.", as: "উচ্চতৰ মাধ্যমিকৰ নামভৰ্তিৰ প্ৰথমখন চৰকাৰী মেধা তালিকা প্ৰকাশ।" }
    },
    {
      id: "ev-jun-20",
      date: "2026-06-20",
      title: { en: "Bishnu Rabha Divas Tributes", as: "কলাগুৰু বিষ্ণুপ্ৰসাদ ৰাভা দিৱস" },
      category: "traditional",
      description: { en: "Art representation, patriotic vocal items, and community speeches.", as: "কলাগুৰুৰ কৃতি, বিপ্লৱী চেতনা আৰু সাহিত্য চৰ্চাৰ স্মৰণ দিৱস।" }
    },
    {
      id: "ev-jun-23",
      date: "2026-06-23",
      title: { en: "First Terminal Exams Board Begins", as: "প্ৰথম সাময়িক মূল্যায়ণ পৰীক্ষা আৰম্ভ" },
      category: "exams",
      description: { en: "State council coordinated formative units test assessments.", as: "ষাণ্মাসিক পৰীক্ষাৰ অন্তৰ্ৱৰ্তী প্ৰথম মূল্যায়ন সূচী।" }
    },
    {
      id: "ev-jun-30",
      date: "2026-06-30",
      title: { en: "First Terminal Assessments End", as: "প্ৰথম সাময়িক পৰীক্ষাৰ সমাপ্তি" },
      category: "exams",
      description: { en: "Compilation of academic logs before Summer break.", as: "গ্ৰীষ্মকালীন বন্ধৰ পূৰ্বে মূল্যায়ন পত্ৰৰ কম্পিউটাৰাইজড পঞ্জীয়ন।" }
    },

    // July 2026
    {
      id: "ev-jul-1",
      date: "2026-07-01",
      title: { en: "Annual Summer Vacation Begins", as: "গ্ৰীষ্মকালীন দীঘলীয়া বন্ধ অনুসৰণ" },
      category: "holidays",
      description: { en: "Standard 31 Days state board summer recess panels.", as: "সমগ্ৰ ৰাজ্যৰ সৈতে একযোগে গ্ৰীষ্ম বন্ধ আৰম্ভ।" }
    },
    {
      id: "ev-jul-31",
      date: "2026-07-31",
      title: { en: "Summer Vacation Concludes", as: "গ্ৰীষ্ম বন্ধৰ সামৰণি" },
      category: "holidays",
      description: { en: "Faculty advisory registers reopen tomorrow.", as: "বন্ধৰ সামৰণি। কাইলৈৰ পৰা পাৰম্পৰিকভাৱে পাঠদান পুনৰ চলিব।" }
    },

    // August 2026
    {
      id: "ev-aug-1",
      date: "2026-08-01",
      title: { en: "School Reopening & Review", as: "কাৰ্যালয় তথা পাঠদান মুকলি" },
      category: "events",
      description: { en: "Resumption of active regular curriculums and attendance mapping.", as: "দীঘলীয়া বন্ধৰ অন্তত নিয়মানুযায়ী পাঠদান পুনৰ আৰম্ভ।" }
    },
    {
      id: "ev-aug-15",
      date: "2026-08-15",
      title: { en: "80th Independence Day Parade", as: "৮০-তম স্বাধীনতা দিৱস উদযাপন" },
      category: "events",
      description: { en: "Flag hoisting at 8:00 AM, distribution of sweets, scout parade.", as: "অধ্যক্ষৰ দ্বাৰা পুৱা ৮ বজাত পতাকা উত্তোলন আৰু দেশপ্ৰেমমূলক অনুষ্ঠান।" }
    },
    {
      id: "ev-aug-20",
      date: "2026-08-20",
      title: { en: "Tithi of Sri Madhabdev", as: "মহাপুৰুষ মাধৱদেৱৰ তিথি" },
      category: "holidays",
      description: { en: "Holiday in honour of Vaishnavite saint Madhabdev.", as: "নামঘোষাৰ ৰচক, শংকৰদেৱৰ প্ৰিয় পাঁচনি মাধৱদেৱৰ পৱিত্ৰ তিথি বন্ধ।" }
    },
    {
      id: "ev-aug-31",
      date: "2026-08-31",
      title: { en: "Sri Krishna Janmashtami assembly", as: "শ্ৰীকৃষ্ণ জন্মাষ্টমী দিৱস" },
      category: "holidays",
      description: { en: "Spiritual holiday. Campus academic blocks remain closed.", as: "ভগৱান কৃষ্ণৰ জন্মোৎসৱ জন্মাষ্টমী উপলক্ষে বন্ধ।" }
    },

    // September 2026
    {
      id: "ev-sep-5",
      date: "2026-09-05",
      title: { en: "Teacher's Day Cultural Assembly", as: "শিক্ষক দিৱস উদযাপন বৰ্ণিল অনুষ্ঠান" },
      category: "events",
      description: { en: "Class X and XII student lead felicitations to the core faculty.", as: "ড° সৰ্বপল্লী ৰাধাকৃষ্ণণৰ স্মৃতিত গুৰু দক্ষিণা আৰু ছাত্ৰ মেল।" }
    },
    {
      id: "ev-sep-8",
      date: "2026-09-08",
      title: { en: "Karam Puja Holiday", as: "কৰম পূজা চৰকাৰী বন্ধ" },
      category: "traditional",
      description: { en: "Harvest festival of the tea tribe communities. Holiday.", as: " চাহ জনজাতি সমাজৰ এক পৱিত্ৰ বন্ধ আৰু কৰম ডাল কৃষ্টি কৰ্ম।" }
    },
    {
      id: "ev-sep-15",
      date: "2026-09-15",
      title: { en: "Srimanta Sankardev Jayanti Assembly", as: "শ্ৰীমন্ত শংকৰদেৱ জন্মোৎসৱ" },
      category: "traditional",
      description: { en: "Devotional songs, Borgeet recitations, and lectures on Neo-Vaishnavism.", as: "শংকৰদেৱৰ জন্মজয়ন্তী উপলক্ষে বিদ্যালয় চৌহদত নামকীৰ্তন আৰু ধৰ্মীয় শোভাযাত্ৰা।" }
    },
    {
      id: "ev-sep-18",
      date: "2026-09-18",
      title: { en: "Half-Yearly Exams Board Commences", as: "ষাণ্মাসিক পৰীক্ষাৰ শুভাৰম্ভ" },
      category: "exams",
      description: { en: "Coordinated state standard testing on full 50% course guidelines.", as: "অৰ্ধ-বাৰ্ষিক গুৰুত্বপূৰ্ণ পৰীক্ষাসমূহৰ সূচনা।" }
    },
    {
      id: "ev-sep-28",
      date: "2026-09-28",
      title: { en: "Half-Yearly Board Examinations Conclude", as: "ষাণ্মাসিক ব’ৰ্ড পৰীক্ষাৰ সামৰণি" },
      category: "exams",
      description: { en: "Collection of mark slips before Durga Puja vacation.", as: "পূজা বন্ধৰ পূৰ্বে পৰীক্ষাৰ সকলো কাকতৰ মূল্যায়ন সম্পন্ন।" }
    },

    // October 2026
    {
      id: "ev-oct-2",
      date: "2026-10-02",
      title: { en: "Gandhi Jayanti / Cleanliness Drive", as: "গান্ধী জয়ন্তী / স্বচ্ছতা অভিযান" },
      category: "events",
      description: { en: "Ahimsa and cleanliness drive around Tingkhong town center.", as: "মহাত্মা গান্ধীৰ জন্মজয়ন্তী উদযাপন আৰু এক স্বচ্ছ অঞ্জলি প্ৰদান।" }
    },
    {
      id: "ev-oct-12",
      date: "2026-10-12",
      title: { en: "Durga Puja & Dussehra Break Start", as: "শ্ৰী শ্ৰী দুৰ্গাপূজা বন্ধ আৰম্ভ" },
      category: "holidays",
      description: { en: "Autumn festival board holidays. Institutional shutdown.", as: "শৰৎকালীন পৱিত্ৰ দুৰ্গাপূজা বন্ধৰ প্ৰথম তিথি।" }
    },
    {
      id: "ev-oct-16",
      date: "2026-10-16",
      title: { en: "Durga Puja Vacation Concludes", as: "দুৰ্গাপূজা বন্ধৰ সামৰণি" },
      category: "holidays",
      description: { en: "Official school reopening scheduled for tomorrow morning.", as: "কাইলৈৰ পৰা নিয়মীয়া শ্ৰেণীসমূহ পুনৰ কাৰ্যক্ষম হ’ব।" }
    },
    {
      id: "ev-oct-18",
      date: "2026-10-18",
      title: { en: "Kati Bihu Memorial Day", as: "কাতি বিহু উৎসৱ" },
      category: "traditional",
      description: { en: "Traditional earthen lamp lighting. Campus remains closed.", as: "পাৰম্পৰিক কাতি বিহু উপলক্ষে তুলসী তলত তেলৰ চাকি প্ৰজ্বলন।" }
    },
    {
      id: "ev-oct-24",
      date: "2026-10-24",
      title: { en: "Kali Puja & Deepawali Assemblies", as: "কালী পূজা আৰু দীপাৱলী সভা" },
      category: "holidays",
      description: { en: "Festival of lights. Official state board holiday.", as: "দীপাৱলী প্ৰজ্বলন উপলক্ষে বিদ্যালয় বন্ধ থাকিব।" }
    },

    // November 2026
    {
      id: "ev-nov-14",
      date: "2026-11-14",
      title: { en: "Annual Children's Sports Meet", as: "শিশু দিৱস আৰু খেল-ধেমালি প্ৰতিযোগিতা" },
      category: "events",
      description: { en: "Core athletic programs, district rank selections, and fun races.", as: "পণ্ডিত নেহৰুৰ জন্মজয়ন্তী উপলক্ষে ধাৰাবাহিক ক্ৰীড়া সমাৰোহ।" }
    },
    {
      id: "ev-nov-15",
      date: "2026-11-15",
      title: { en: "Guru Nanak Jayanti Tributes", as: "গুৰু নানক জয়ন্তী তিথি" },
      category: "holidays",
      description: { en: "Administrative offices and academic blocks closed.", as: "কাৰ্যালয় তথা শ্ৰেণীসমূহৰ বাবে বন্ধৰ দিন।" }
    },
    {
      id: "ev-nov-24",
      date: "2026-11-24",
      title: { en: "Lachit Divas Debate Trophies", as: "মহাবীৰ লাচিত বৰফুকন দিৱস" },
      category: "traditional",
      description: { en: "Historical debate championships and pledge reading on Assam history.", as: "শৰাইঘাট যুদ্ধৰ সেনাপতি লাচিতৰ স্মৃতিত কৃষ্টি আৰু কুইজ সম্বল।" }
    },

    // December 2026
    {
      id: "ev-dec-2",
      date: "2026-12-02",
      title: { en: "Sukapha Divas / Assam Day", as: "স্বৰ্গদেউ চুকাফা দিৱস / অসম দিৱস" },
      category: "traditional",
      description: { en: "Tributes to founder स्वर्गदेव चाउ-लुंग सिउ-का-फा. State holiday.", as: "আহোম সাম্ৰাজ্যৰ প্ৰতিষ্ঠাতা চুকাফাৰ স্মৃতিত অসম দিৱস বন্ধ।" }
    },
    {
      id: "ev-dec-15",
      date: "2026-12-15",
      title: { en: "Annual Pre-Board Tests Mock Begins", as: "মেট্ৰিক আৰু দ্বিতীয় বৰ্ষৰ প্ৰাক-নিৰ্বাচনী পৰীক্ষা" },
      category: "exams",
      description: { en: "Final preconditioning mock boards checklist exams.", as: "মেট্ৰিক আৰু হায়াৰ চেকণ্ডাৰী ফাইনেলৰ প্ৰাক-পৰীক্ষা।" }
    },
    {
      id: "ev-dec-25",
      date: "2026-12-25",
      title: { en: "Christmas Day Gathering", as: "বৰদিন অৱকাশ বন্ধ" },
      category: "holidays",
      description: { en: "Universal celebration of goodwill and peace. Campuses closed.", as: "বিশ্বজুৰি উদযাপিত খ্ৰীষ্টীয় পৱিত্ৰ বৰদিনৰ বন্ধ।" }
    }
  ];

  // Starting at June 2026 (The context current time indicates 2026-06-19)
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 5, 1)); // 5 represents June (0-indexed)
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  
  // Category states for filtering
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
    exams: true,
    holidays: true,
    events: true,
    admissions: true,
    traditional: true
  });

  const months = useMemo(() => [
    { en: "January", as: "জানুৱাৰী" },
    { en: "February", as: "ফেব্ৰুৱাৰী" },
    { en: "March", as: "মাৰ্চ" },
    { en: "April", as: "এপ্ৰিল" },
    { en: "May", as: "মে’" },
    { en: "June", as: "জুন" },
    { en: "July", as: "জুলাই" },
    { en: "August", as: "আগষ্ট" },
    { en: "September", as: "ছেপ্টেম্বৰ" },
    { en: "October", as: "অক্টোবৰ" },
    { en: "November", as: "নৱেম্বৰ" },
    { en: "December", as: "ডিচেম্বৰ" }
  ], []);

  const weekDays = useMemo(() => [
    { en: "Sun", as: "দেও" },
    { en: "Mon", as: "সোম" },
    { en: "Tue", as: "মঙ্গল" },
    { en: "Wed", as: "বুধ" },
    { en: "Thu", as: "বৃহ" },
    { en: "Fri", as: "শুক্ৰ" },
    { en: "Sat", as: "শনি" }
  ], []);

  const categoryLabels = {
    exams: { en: "Exam Dates", as: "পৰীক্ষা সম্বল", color: "bg-red-500", text: "text-red-600", bg: "bg-red-50 border-red-200" },
    holidays: { en: "Holidays", as: "পৰ্ব বন্ধ", color: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
    events: { en: "School Events", as: "কাৰ্যসূচী", color: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
    admissions: { en: "Admission Cycles", as: "নামভৰ্তিৰ সময়সূচী", color: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
    traditional: { en: "Heritage Festivals", as: "ঐতিহ্য উৎসৱ", color: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-50 border-purple-200" }
  };

  const handlePrevMonth = () => {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() - 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
    // Limit to 2026 academic calendar guidelines
    if (year === 22026 || year === 2026) {
      setCurrentDate(new Date(year, month, 1));
      setSelectedEventId(null);
    }
  };

  const handleNextMonth = () => {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
    // Limit to 2026 academic calendar guidelines
    if (year === 2026) {
      setCurrentDate(new Date(year, month, 1));
      setSelectedEventId(null);
    }
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
    setSelectedEventId(null);
  };

  // Get days in selected month and year
  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }, [currentDate]);

  // First day offset (e.g. 0 for Sunday, 1 for Monday...)
  const firstDayIndex = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  }, [currentDate]);

  // Events matching the currentMonth of 2026 and category filters
  const currentMonthEvents = useMemo(() => {
    const currentYearStr = currentDate.getFullYear().toString();
    const currentMonthNumStr = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const selectedPrefix = `${currentYearStr}-${currentMonthNumStr}`;
    
    return EVENTS_DATABASE.filter(ev => {
      return ev.date.startsWith(selectedPrefix) && selectedCategories[ev.category];
    });
  }, [currentDate, selectedCategories]);

  // Selected event object details container
  const selectedEventDetails = useMemo(() => {
    if (!selectedEventId) return null;
    return EVENTS_DATABASE.find(ev => ev.id === selectedEventId) || null;
  }, [selectedEventId]);

  return (
    <section id="academic-calendar-portal" className="py-20 bg-brand-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar size={13} className="text-brand-green" />
            <span>{lang === 'en' ? "SCHOLASTIC TRACKS" : "বিদ্যায়তনিক সময়সূচী পঞ্জী"}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {lang === 'en' ? "Institutional Academic Calendar (2026)" : "শৈক্ষিক সূচী আৰু বৰ্ষ দিনলিপি (২০২৬)"}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            {lang === 'en'
              ? "Stay updated on exam dates, statutory school holidays, admission timelines, parent-teacher council conferences, and cultural traditional assemblies."
              : "ব’ৰ্ড পৰীক্ষাৰ দিনসূচী, স্থানীয় উৎসৱৰ বন্ধসমূহ, কাৰ্যক্ৰম পঞ্জী তথা নামভৰ্তিৰ সময় জানিবলৈ এই দিনলিপিখন অনুসৰণ কৰক।"}
          </p>
        </div>

        {/* Double-Split Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT Sidebar: Category Filters & Legend */}
          <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-3">
                <Filter size={15} className="text-brand-green" />
                <span>{lang === 'en' ? "Filter Categories" : "শ্ৰেণী অনুসৰি বাচনি"}</span>
              </h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-normal">
                {lang === 'en' ? "Toggle categories below to filter events on the active calendar coordinates." : "দিনপঞ্জীৰ পৰা যিকোনো শ্ৰেণী লুকাই ৰাখিবলৈ ইয়াত বাচনি কৰিব পাৰে।"}
              </p>

              {/* Checkbox pills toggles */}
              <div className="space-y-2.5">
                {Object.entries(categoryLabels).map(([key, value]) => {
                  const isChecked = selectedCategories[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleCategory(key)}
                      id={`cal-filter-${key}`}
                      className="w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-left border hover:bg-neutral-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-3 h-3 rounded-md shrink-0 ${value.color}`} />
                        <span className="truncate text-slate-700 font-sans">{value[lang]}</span>
                      </div>
                      
                      <div className="text-gray-400 group-hover:text-brand-green shrink-0">
                        {isChecked ? (
                          <CheckSquare size={16} className="text-brand-green" />
                        ) : (
                          <Square size={16} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* General note stamp */}
            <div className="h-0.2 bg-gray-150 w-full" />
            
            <div className="bg-brand-cream/80 border border-brand-gold/20 p-4 rounded-xl flex gap-2.5 items-start text-xs leading-normal text-slate-700">
              <Info size={16} className="text-brand-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[10px] uppercase font-mono tracking-wider text-brand-gold-dark">
                  Academic Standard Advice
                </p>
                <p className="mt-1 font-sans text-xs">
                  {lang === 'en' 
                    ? "Dates of exams are in strict synchronization with AHSEC council decrees. Subject to change only during regional notifications."
                    : "পৰীক্ষাৰ দিনসমূহ অসম উচ্চতৰ মাধ্যমিক শিক্ষা সংসদৰ চৰকাৰী নিৰ্দেশনা সাপেক্ষ। প্ৰয়োজন সাপেক্ষে ইয়াৰ সালসলনি হ’ব পাৰে।"}
                </p>
              </div>
            </div>
          </div>

          {/* CENTRE: Dynamic Calendar Grid Month View */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col justify-between">
            
            {/* Header controls layout */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-150">
              
              {/* Previous month control */}
              <button
                id="cal-prev-month-btn"
                onClick={handlePrevMonth}
                disabled={currentDate.getMonth() === 0}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-55 text-slate-700 hover:text-brand-green disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-all shrink-0"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Month Display Title */}
              <div className="text-center font-sans">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold-dark uppercase block leading-none">
                  TINGKHONG ACADEMIC CALENDAR
                </span>
                <span className="text-xl font-black text-slate-900 mt-1 block">
                  {months[currentDate.getMonth()][lang]} 2026
                </span>
              </div>

              {/* Next month control */}
              <button
                id="cal-next-month-btn"
                onClick={handleNextMonth}
                disabled={currentDate.getMonth() === 11}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-55 text-slate-700 hover:text-brand-green disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-all shrink-0"
              >
                <ChevronRight size={18} />
              </button>

            </div>

            {/* Weekdays table header row */}
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">
              {weekDays.map(day => (
                <div key={day.en} className="py-1">{day[lang]}</div>
              ))}
            </div>

            {/* Month Calendar Cells Grid Matrix */}
            <div className="grid grid-cols-7 gap-1.5 min-h-[220px]">
              
              {/* Empty offset prefix spaces */}
              {Array.from({ length: firstDayIndex }).map((_, index) => (
                <div key={`offset-${index}`} className="aspect-square bg-gray-50/40 rounded-lg border border-dashed border-gray-100" />
              ))}

              {/* Real Active Calendar blocks */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const dayNum = idx + 1;
                const formattedDate = `2026-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`;
                
                // Find matching events on this date
                const dayEvents = currentMonthEvents.filter(ev => ev.date === formattedDate);
                const hasEvents = dayEvents.length > 0;
                
                // Style variables
                let borderStyle = "border-gray-200/60";
                let textStyle = "text-slate-800";
                let bgStyle = "bg-white hover:bg-gray-50/50";

                // Highlight today if matching current system date (June 19, 2026)
                const isSystemToday = formattedDate === "2026-06-19";
                if (isSystemToday) {
                  borderStyle = "border-brand-gold";
                  textStyle = "text-brand-gold-dark font-extrabold";
                  bgStyle = "bg-brand-gold/10 hover:bg-brand-gold/15";
                }

                return (
                  <button
                    key={`day-${dayNum}`}
                    id={`cal-day-cell-${dayNum}`}
                    onClick={() => {
                      if (hasEvents) {
                        setSelectedEventId(dayEvents[0].id);
                      }
                    }}
                    disabled={!hasEvents}
                    className={`aspect-square p-1 rounded-xl border flex flex-col justify-between items-center relative transition-all ${bgStyle} ${borderStyle} ${
                      hasEvents ? "cursor-pointer scale-100 font-bold active:scale-95 shadow-2xs hover:shadow-sm" : "opacity-75 cursor-default"
                    }`}
                  >
                    
                    {/* Day label */}
                    <span className={`text-xs sm:text-sm font-sans font-extrabold ${textStyle}`}>
                      {dayNum}
                    </span>

                    {/* Mini event category color indicators list */}
                    {hasEvents && (
                      <div className="flex gap-0.8 justify-center flex-wrap pb-0.5">
                        {dayEvents.map(ev => (
                          <span
                            key={ev.id}
                            className={`w-1.5 h-1.5 rounded-full ${categoryLabels[ev.category].color}`}
                            title={ev.title[lang]}
                          />
                        ))}
                      </div>
                    )}

                    {/* Golden subtle dot for system today identifier */}
                    {isSystemToday && (
                      <span className="absolute top-1 right-1 w-1 h-1 bg-brand-gold rounded-full" />
                    )}

                  </button>
                );
              })}

            </div>

            {/* Grid helper caption legend */}
            <div className="mt-5.5 pt-3.5 border-t border-gray-150 flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] font-mono text-gray-400 uppercase tracking-wider justify-center">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded bg-brand-gold shrink-0" />
                <span>Today (June 19)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-200 border border-gray-300 shrink-0" />
                <span>Default Day</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Holiday Day</span>
              </div>
            </div>

          </div>

          {/* RIGHT Sidebar: Detailed Active Day Event View Panel */}
          <div className="lg:col-span-3 h-full">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between min-h-[360px] self-stretch">
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-black text-brand-gold-dark uppercase tracking-widest block pb-2 border-b border-gray-150">
                  {lang === 'en' ? "CALENDAR NOTICES" : "পঞ্জিকা জাননী কোণ"}
                </span>

                <AnimatePresence mode="wait">
                  {selectedEventDetails ? (
                    <motion.div
                      key={selectedEventDetails.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 text-left"
                    >
                      {/* Active Day Card Badge */}
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-black uppercase ${categoryLabels[selectedEventDetails.category].bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${categoryLabels[selectedEventDetails.category].color}`} />
                        <span className={categoryLabels[selectedEventDetails.category].text}>{categoryLabels[selectedEventDetails.category][lang]}</span>
                      </span>

                      {/* Event Date Header */}
                      <div>
                        <p className="text-xs font-mono font-black text-gray-400">
                          {new Date(selectedEventDetails.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'as-IN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <h4 className="text-base font-extrabold text-slate-900 mt-1 leading-snug">
                          {selectedEventDetails.title[lang]}
                        </h4>
                      </div>

                      {/* Event detail context */}
                      <p className="text-xs text-slate-700 leading-relaxed font-sans bg-gray-50 p-3 rounded-xl border border-gray-150">
                        {selectedEventDetails.description[lang]}
                      </p>

                      {/* Reset detailed selection button */}
                      <button
                        onClick={() => setSelectedEventId(null)}
                        className="text-xs font-bold text-brand-green hover:text-brand-green-light underline mt-2 cursor-pointer block"
                      >
                        {lang === 'en' ? "← Back to Month Listing" : "← সমগ্ৰ তালিকালৈ উভতি যাওক"}
                      </button>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-selected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-6 space-y-4"
                    >
                      <div className="w-11 h-11 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto border border-brand-green/20">
                        <Bookmark size={18} />
                      </div>
                      
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-black text-slate-900">
                          {lang === 'en' ? "Select any highlighted day" : "দিনপঞ্জীৰ যিকোনো দিন বাচনি কৰক"}
                        </h4>
                        <p className="text-[11px] text-gray-500 leading-normal max-w-xs mx-auto">
                          {lang === 'en'
                            ? "Click on any calendar day possessing colored bullet indicators to inspect verified notices for that specific batch period."
                            : "ৰাতুল পঞ্জিকাৰ যিকোনো ৰঙীন ডট থকা দিন বাচনি কৰিলে তাৰ সবিশেষ জাননী ইয়াত প্ৰদৰ্শিত হব।"}
                        </p>
                      </div>

                      {/* List of upcoming events in the selected month for convenience */}
                      <div className="space-y-2 pt-4 border-t border-gray-150">
                        <span className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-widest block text-left">
                          {lang === 'en' ? `All events in ${months[currentDate.getMonth()].en}` : `${months[currentDate.getMonth()].as} মাহৰ কাৰ্যসূচী`}
                        </span>
                        
                        <div className="max-h-[140px] overflow-y-auto space-y-2.5 pr-1 text-left scrollbar-thin">
                          {currentMonthEvents.length > 0 ? (
                            currentMonthEvents.map(ev => {
                              const dayLabel = ev.date.split('-')[2];
                              return (
                                <button
                                  key={ev.id}
                                  id={`cal-ev-row-${ev.id}`}
                                  onClick={() => setSelectedEventId(ev.id)}
                                  className="w-full p-2 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-gray-150 text-left cursor-pointer flex gap-2.5 transition-all"
                                >
                                  <span className="text-[11px] font-mono font-black bg-neutral-100 text-slate-800 px-1.5 py-0.5 rounded shrink-0 self-start">
                                    {dayLabel}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-gray-950 truncate">{ev.title[lang]}</p>
                                    <span className="text-[8px] font-mono font-bold uppercase text-brand-green-dark">{categoryLabels[ev.category][lang]}</span>
                                  </div>
                                </button>
                              );
                            })
                          ) : (
                            <p className="text-[10px] text-gray-400 italic">
                              {lang === 'en' ? "No filtered events in this month." : "এই শ্ৰেণীৰ বিপৰীতে বন্ধ নাই।"}
                            </p>
                          )}
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
