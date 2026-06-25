import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, 
  GraduationCap, 
  Building2, 
  Cpu, 
  Trees, 
  BookOpen, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Coffee, 
  Droplet, 
  Dribbble, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  Search,
  BookMarked
} from 'lucide-react';
import { Language } from '../translations';

interface AboutUsProps {
  lang: Language;
}

type TabType = 'overview' | 'academics' | 'campus' | 'tech' | 'amenities';

export default function AboutUs({ lang }: AboutUsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Translations for headings and interactive elements
  const t = {
    sectionBadge: { en: "INSTITUTIONAL PROFILE", as: "প্ৰতিষ্ঠানৰ পৰিচয়" },
    sectionTitle: { en: "About Our School & Legacy", as: "বিদ্যালয়ৰ ঐতিহ্য আৰু আন্তঃগাঁথনি" },
    sectionDesc: { 
      en: "Established in 1946, Tingkhong Higher Secondary School represents a legacy of academic rigour, cultural preservation, and state-of-the-art administrative facilities.",
      as: "১৯৪৬ চনতে প্ৰতিষ্ঠিত টিংখাং উচ্চতৰ মাধ্যমিক বিদ্যালয়ে এক সুদীৰ্ঘ কাল ধৰি মানসম্পন্ন শিক্ষা, অসমৰ ঐতিহ্য আৰু সুন্দৰ শৈক্ষিক আন্তঃগাঁথনি প্ৰদান কৰি আহিছে।"
    },
    interactiveGuide: { en: "Click on any category tab below to explore detailed verified data:", as: "সবিশেষ তথ্য লাভ কৰিবলৈ তলৰ শ্ৰেণীসমূহত ক্লিক কৰক:" },
    quickStatsTitle: { en: "Institutional Overview", as: "প্ৰতিষ্ঠানৰ সাৰাংশ" },
    keyMetric: { en: "Key Highlight", as: "আকৰ্ষণীয় দিশ" },
    searchLabel: { en: "Filter facilities...", as: "সুবিধাসমূহ ইয়াত সন্ধান কৰক..." },
    tabOverview: { en: "Overview & Registry", as: "চমু আভাস আৰু পঞ্জীয়ন" },
    tabAcademics: { en: "Academics & Operations", as: "শৈক্ষিক আৰু পৰিচালনা" },
    tabCampus: { en: "Campus & Admin Blocks", as: "চৌহদ আৰু প্ৰশাসন" },
    tabTech: { en: "Tech & Innovation Labs", as: "প্ৰযুক্তি আৰু উদ্ভাৱন" },
    tabAmenities: { en: "Amenities & Environment", as: "সা-সুবিধা আৰু পৰিৱেশ" },
  };

  // Content Data
  const categories: Record<TabType, {
    title: { en: string; as: string };
    icon: React.ComponentType<any>;
    badge: { en: string; as: string };
    bgColor: string;
    metrics: { label: { en: string; as: string }; value: string; sub?: string }[];
    details: { title: { en: string; as: string }; desc: { en: string; as: string }; bullet?: boolean }[];
  }> = {
    overview: {
      title: { en: "Historical Foundation & Registry", as: "ঐতিহাসিক ভেটি আৰু চৰকাৰী আভাস" },
      icon: Landmark,
      badge: { en: "Est. 1946", as: "স্থাপিত: ১৯৪৬" },
      bgColor: "from-amber-500/10 to-brand-gold/10",
      metrics: [
        { label: { en: "Year Founded", as: "প্ৰতিষ্ঠা কাল" }, value: "1946", sub: "Pre-Independence Era" },
        { label: { en: "Affiliation", as: "চৰকাৰী স্বীকৃতি" }, value: "AHSEC / SEBA", sub: "Govt. of Assam Approved" },
        { label: { en: "Administrative District", as: "প্ৰশাসনিক জিলা" }, value: "Dibrugarh", sub: "Upper Assam Region" },
      ],
      details: [
        { 
          title: { en: "Founding Philosophy", as: "প্ৰতিষ্ঠাৰ মূল আদৰ্শ" }, 
          desc: { 
            en: "Founded shortly before India's independence, our school has served as the academic beacon of Upper Assam, educating generations of scholars, public leaders, and global engineers.",
            as: "ভাৰতৰ স্বাধীনতাৰ ঠিক পূৰ্বে স্থাপিত হোৱা আমাৰ বিদ্যালয়ে উজনি অসমৰ শৈক্ষিক জ্যোতিষ্মান বস্তি হিচাপে কাম কৰি আহিছে, যাৰ বুকুত বহুত মেধাৱী ছাত্ৰ আৰু সমাজৰ কাণ্ডাৰী গঢ়ি উঠিছে।"
          } 
        },
        { 
          title: { en: "Executive Management", as: "পৰিবৰ্ধিত ব্যৱস্থাপনা" }, 
          desc: { 
            en: "Directly managed and funded by the Department of Education, Government of Assam, ensuring strict alignment with state curriculum mandates and complete transparency.",
            as: "অসম চৰকাৰৰ শিক্ষা বিভাগৰ দ্বাৰা প্ৰত্যক্ষভাৱে পৰিচালিত আৰু পুঁজি লাভ কৰা ইয়াৰ প্ৰশাসনীয় নীতিসমূহ অত্যন্ত স্বচ্ছ আৰু নিয়মানুযায়ী।"
          } 
        },
        { 
          title: { en: "Geographical Setting", as: "ভৌগোলিক অৱস্থান" }, 
          desc: { 
            en: "Located in the serene Joypur Block of the Dibrugarh District, framed by historic lush rainforest corridors and thriving tea estates, providing a safe, green learning climate.",
            as: "ডিব্ৰুগড় জিলাৰ জয়পুৰ উন্নয়ন খণ্ডৰ এক অতি শান্ত পৰিৱেশত অৱস্থিত। ইয়াৰ চাৰিওফালে থকা চাহ বাগিচা আৰু প্ৰাকৃতিক সেউজীয়া পৰিৱেশে এক সুন্দৰ শৈক্ষিক বাতাৱৰণ গঢ়ি তোলে।"
          } 
        },
      ]
    },
    academics: {
      title: { en: "Academic Systems & Operations", as: "শৈক্ষিক প্ৰণালী আৰু কাৰ্যকলাপ" },
      icon: GraduationCap,
      badge: { en: "Grades 6-12", as: "ষষ্ঠ-দ্বাদশ শ্ৰেণী" },
      bgColor: "from-emerald-500/10 to-brand-green/10",
      metrics: [
        { label: { en: "Co-Ed Ratio", as: "সহ-শিক্ষা ব্যৱস্থা" }, value: "Balanced", sub: "Boys & Girls Integration" },
        { label: { en: "Operating Shift", as: "শৈক্ষিক সময়" }, value: "Single Shift", sub: "Structured Day Classes" },
        { label: { en: "Medium", as: "শিক্ষা মাধ্যম" }, value: "Assamese", sub: "With English terminology support" },
      ],
      details: [
        { 
          title: { en: "Comprehensive Grades", as: "সৰ্বাংগীণ শ্ৰেণীসমূহ" }, 
          desc: { 
            en: "Catering to Class VI through Class XII, offering the Arts Stream alongside modern Vocational Streams at the higher secondary level with dedicated computer and practical labs.",
            as: "ষষ্ঠ শ্ৰেণীৰ পৰা দ্বাদশ শ্ৰেণীলৈকে পাঠদানৰ ব্যৱস্থা আছে। উচ্চতৰ মাধ্যমিক পৰ্যায়ত কলা শাখা আৰু আধুনিক বৃত্তিমুখী পাঠ্যক্ৰমৰ সৈতে উন্নত লেব আৰু শ্ৰেণীকোঠাৰ ব্যৱস্থা কৰা হৈছে।"
          } 
        },
        { 
          title: { en: "Academic Cycle", as: "শৈক্ষিক বৰ্ষ" }, 
          desc: { 
            en: "Our formal session starts strictly in April under SEBA and AHSEC board compliance, tracking student performance through regular unit assessments and pre-board examinations.",
            as: "SEBA আৰু AHSEC ব'ৰ্ডৰ নিৰ্দেশনাত এপ্ৰিল মাহৰ পৰা শৈক্ষিক বৰ্ষৰ কাৰ্যসূচী আৰম্ভ হয়। নিয়মীয়া ইউনিট পৰীক্ষা আৰু প্ৰাক-বোৰ্ড পৰীক্ষাৰ যোগেদি শিক্ষাৰ মূল্যায়ন কৰা হয়।"
          } 
        },
        { 
          title: { en: "All-Weather Connectivity", as: "পৰিবহন সংযোগ" }, 
          desc: { 
            en: "The school premises are highly accessible via all-weather tarred/concrete roads, guaranteeing seamless daily transport for students, school buses, and administrative visitors.",
            as: "আমাৰ বিদ্যালয়খন সকলো ঋতু উপযোগী পকী পথৰ সৈতে সুন্দৰকৈ সংযোগ হৈ আছে, যাৰ বাবে শিক্ষাৰ্থী আৰু অভিভাৱকসকলৰ যাতায়ত অত্যন্ত সুচল।"
          } 
        },
      ]
    },
    campus: {
      title: { en: "Campus Structure & Admin Cells", as: "বিদ্যালয় ভৱন আৰু প্ৰশাসনিক গোট" },
      icon: Building2,
      badge: { en: "16 Classrooms", as: "১৬ টা শ্ৰেণীকোঠা" },
      bgColor: "from-blue-500/10 to-indigo-500/10",
      metrics: [
        { label: { en: "Building Type", as: "ভৱনৰ প্ৰকাৰ" }, value: "Pucca", sub: "Permanent Govt. Masonry" },
        { label: { en: "Staff Rooms", as: "জিৰণি কোঠা" }, value: "2 Rooms", sub: "Spacious Common Lounges" },
        { label: { en: "Admin Offices", as: "প্ৰশাসনিক কক্ষ" }, value: "4 Blocks", sub: "Principal, Headmaster & Exam Cell" },
      ],
      details: [
        { 
          title: { en: "Permanent Infrastructure", as: "স্থায়ী আন্তঃগাঁথনি" }, 
          desc: { 
            en: "Housed inside a robust, permanent concrete government structure with an encompassing Pucca boundary wall, ensuring a highly secure, distraction-free environment for young minds.",
            as: "অত্যন্ত মজবুত পকী চৰকাৰী ভৱন আৰু সুদৃঢ় চাৰিসীমা বেৰাৰে সমগ্ৰ বিদ্যালয়খন সুৰক্ষিত কৰা হৈছে, যিয়ে শিক্ষাৰ্থীসকলক এক নিৰাপদ পৰিৱেশ প্ৰদান কৰে।"
          } 
        },
        { 
          title: { en: "Administrative Chambers", as: "প্ৰশাসনিক কক্ষসমূহ" }, 
          desc: { 
            en: "Featuring an executive Principal's Office, a dedicated Headmaster's Room, and an isolated, highly secure Examination Controller Cell for printing and keeping Board papers safe.",
            as: "ইয়াত আছে সুসজ্জিত অধ্যক্ষৰ কাৰ্যালয়, প্ৰধান শিক্ষকৰ সুকীয়া কোঠা আৰু বোৰ্ড পৰীক্ষাৰ অতি সুৰক্ষিত আৰু গোপনীয় প্ৰশাসনিক কেন্দ্ৰ বা পৰীক্ষা নিয়ন্ত্ৰণ কক্ষ।"
          } 
        },
        { 
          title: { en: "Teaching Capacities & Partition Walls", as: "শ্ৰেণীকোঠাৰ সুবিধা আৰু বিভাজক ব্যৱস্থা" }, 
          desc: { 
            en: "Equipped with 16 spacious, high-ceiling classrooms optimized for natural light, alongside permanent structural Partition Walls to separate study zones and preserve clean acoustic boundaries.",
            as: "শিক্ষাৰ্থীৰ বাবে ১৬ টা বতাহ চলাচল কৰিব পৰা সুন্দৰ শ্ৰেণীকোঠা আছে আৰু কোঠাসমূহ সুকীয়াকৈ ৰাখিবলৈ নিৰাপদ স্থায়ী বিভাজক দেৱাল বা পাৰ্টিচন ৱালৰ ব্যৱস্থা কৰা হৈছে।"
          } 
        },
        { 
          title: { en: "Utilities & Complete Electrification", as: "বিদ্যুতীকৰণ আৰু বিশেষ ৰেম্পৰ সুবিধা" }, 
          desc: { 
            en: "Features fully certified Internal and External Electrification across all academic blocks, integrated with a dedicated concrete accessibility Ramp at key entryways for inclusive mobility.",
            as: "আটাইকেইটা শৈক্ষিক ব্লকত সুৰক্ষিত আভ্যন্তৰীণ আৰু বাহ্যিক বিদ্যুতীকৰণৰ লগতে সকলো শ্ৰেণীৰ ছাত্ৰ-ছাত্ৰীৰ বাবে বিশেষভাৱে নিৰ্মিত স্থায়ী পকী ৰেম্পৰ সুন্দৰ ব্যৱস্থা আছে।"
          } 
        },
        { 
          title: { en: "Classroom Furniture & Fixtures", as: "শ্রেণীকোঠাৰ আচবাব আৰু সঁজুলি" }, 
          desc: { 
            en: "Furnished with a comprehensive set of premium, high-quality wooden and steel Desks, Benches, Tables, and Chairs for both students and teaching staff, verified in excellent, clean usage condition.",
            as: "ছাত্ৰ-ছাত্ৰী তথা শিক্ষক-কৰ্মচাৰীৰ বাবে উন্নত মানদণ্ডৰ কাঠ আৰু ষ্টীলৰ ডেস্ক, বেঞ্চ, মেজ আৰু চকীৰ সম্পূৰ্ণ ব্যৱস্থা কৰা হৈছে, যিবোৰ অতি পৰিস্কাৰ আৰু উৎকৃষ্ট সক্ৰিয় অৱস্থাত আছে।"
          } 
        },
      ]
    },
    tech: {
      title: { en: "Information Technology & Innovations", as: "তথ্য-প্ৰযুক্তি আৰু উদ্ভাৱনী পৰীক্ষাগাৰ" },
      icon: Cpu,
      badge: { en: "Smart Learning", as: "স্মাৰ্ট শিক্ষা" },
      bgColor: "from-violet-500/10 to-brand-gold/10",
      metrics: [
        { label: { en: "Computers", as: "কম্পিউটাৰ" }, value: "10 Units", sub: "Equipped with Local LAN" },
        { label: { en: "Interactive Boards", as: "স্মাৰ্ট ব’ৰ্ড" }, value: "3 Smart", sub: "Multimedia Digital Content" },
        { label: { en: "Tinkering Lab", as: "উদ্ভাৱন কোঠা" }, value: "Active", sub: "Hands-on STEM Experiments" },
      ],
      details: [
        { 
          title: { en: "ICT & Computer-Aided Learning (CAL) Lab", as: "আই-চি-টি (ICT) আৰু কম্পিউটাৰ শিক্ষণ কেন্দ্ৰ" }, 
          desc: { 
            en: "Our state-of-the-art ICT and CAL labs house 10 fully operational computers, 3 printers, and high-speed broadband Internet connectivity for robust digital and vocational training.",
            as: "আমাৰ তথ্য আৰু যোগাযোগ প্ৰযুক্তি (ICT) আৰু CAL লেবত ১০ টা সক্ৰিয় কম্পিউটাৰ, ৩ টা লেজাৰ প্ৰিণ্টাৰ আৰু হাই-স্পীড ব্ৰডবেণ্ড ইণ্টাৰনেট সংযোগৰ সুব্যৱস্থা আছে।"
          } 
        },
        { 
          title: { en: "Advanced Smart & Tele Classrooms", as: "উন্নত স্মাৰ্ট আৰু টেলি-ক্লাছৰুম" }, 
          desc: { 
            en: "Features 3 designated fully-equipped Smart Classrooms alongside a modern high-definition Tele Classroom connected to state teaching networks for multi-sensory interactive lectures.",
            as: "৩ টা অত্যাধুনিক স্মাৰ্ট ক্লাছৰুম আৰু এটা উচ্চ মানদণ্ডৰ টেলি-ক্লাছৰুমৰ সুন্দৰ ব্যৱস্থা আছে, য’ত ডিজিটেল মাধ্যমত শিক্ষাৰ্থীক উন্নত শিক্ষণ প্ৰ প্রদান কৰা হয়।"
          } 
        },
        { 
          title: { en: "Practical Science & Tinkering Labs", as: "বিজ্ঞানাগাৰ আৰু উদ্ভাৱনী কৰ্মশালা" }, 
          desc: { 
            en: "Includes a fully active General Science Lab for hands-on secondary-level experiments alongside our dedicated Tinkering Lab focused on creative research, electronic boards, and scientific reasoning.",
            as: "পদাৰ্থ, ৰসায়ন আৰু জীৱবিজ্ঞানৰ ব্যৱহাৰিক কৰ্মশালাৰ বাবে সুকীয়া বিজ্ঞান পৰীক্ষাগাৰ (Science Lab) আৰু সৃজনীমূলক কাম-কাজৰ বাবে এটা সু-সজ্জিত উদ্ভাৱনী কোঠা আছে।"
          } 
        },
      ]
    },
    amenities: {
      title: { en: "Student Welfare & Campus Bio-Climate", as: "ছাত্ৰ কল্যাণ আৰু সেউজ পৰিৱেশ" },
      icon: Trees,
      badge: { en: "8,000+ Books", as: "৮০০০+ পুথি" },
      bgColor: "from-green-500/10 to-emerald-500/10",
      metrics: [
        { label: { en: "Library Books", as: "পুথিভঁৰাল" }, value: "8,000+", sub: "Reference Books & Novels" },
        { label: { en: "Pure Water Access", as: "বিশুদ্ধ খোৱাপানী" }, value: "2 Pumps", sub: "Heavy-duty Filtration Systems" },
        { label: { en: "Mid-Day Meal", as: "মধ্যাহ্ন ভোজন" }, value: "Hygienic", sub: "Prepared Fresh On Premises" },
      ],
      details: [
        { 
          title: { en: "Central Literary Vault", as: "পুথিভঁৰালৰ ভঁৰাল" }, 
          desc: { 
            en: "A comprehensive library reading room storing over 8,000 curriculum-linked text files, reference volumes, Assamese literature novels, and historic research journals.",
            as: "৮০০০ তকৈও অধিক শৈক্ষিক সংগ্ৰহ, ব্যাকৰণ, অভিধান আৰু অসমীয়া সাহিত্যৰ আপুৰুগীয়া কিতাপেৰে সমৃদ্ধ এক বৃহৎ পুথিভঁৰাল।"
          } 
        },
        { 
          title: { en: "Sanitation & Running Hydration", as: "স্বাস্থ্য আৰু খোৱাপানী" }, 
          desc: { 
            en: "Clean, separate functional toilets for boys and girls with continuous water supply. Hydration is secured via 2 high-capacity safe drinking hand pumps connected to filtration units.",
            as: "ল’ৰা আৰু ছোৱালীৰ বাবে পৃথক কাৰ্যক্ষম শৌচালয় আৰু ফিল্টাৰযুক্ত বিশুদ্ধ খোৱাপানীৰ বাবে ২ টা গধুৰ চাপকলৰ সুন্দৰ ব্যৱস্থা কৰা হৈছে।"
          } 
        },
        { 
          title: { en: "Sports, Culture & Living Museum", as: "ক্ৰীড়া, সংস্কৃতি আৰু সংগ্ৰহালয়" }, 
          desc: { 
            en: "Boasts a large athletics playground with sports gear, beautifully curated seasonal botanical gardens, a cultural Museum Room preserving Assamese heritage, and an Agriculture learning unit.",
            as: "ক্ৰীড়া সামগ্ৰীৰে সমৃদ্ধ খেলপথাৰ, মনোমোহা বতৰীয়া ফুলৰ বাগিচা, ঐতিহ্য সংৰক্ষণ কৰা সংগ্ৰহালয় কক্ষ আৰু কৃষি শিক্ষাৰ বাবে সুকীয়া কোঠা আছে।"
          } 
        },
        { 
          title: { en: "Nutrition Garden & Dedicated Kitchen", as: "পুষ্টি বাগিচা আৰু সুকীয়া পাকঘৰ" }, 
          desc: { 
            en: "An active botanical Nutrition Garden provides fresh organic ingredients for mid-day meals, which are prepared daily under pristine hygienic standards in a newly constructed dedicated Kitchen facility on premises.",
            as: "বিদ্যালয়ৰ চৌহদতে এটা সক্ৰিয় পুষ্টি বাগিচা (Nutrition Garden) আছে আৰু শিক্ষাৰ্থীসকলৰ বাবে এক সুকীয়া সুসজ্জিত পাকঘৰত অত্যন্ত স্বাস্থ্যকৰ মধ্যাহ্ন ভোজন প্ৰস্তুত কৰা হয়।"
          } 
        },
      ]
    }
  };

  const getTranslation = (key: keyof typeof t) => {
    return t[key][lang];
  };

  // Build a search list of all sub-details for the quick filter mechanism
  const allDetails = Object.keys(categories).flatMap((catKey) => {
    const k = catKey as TabType;
    return categories[k].details.map((detail, idx) => ({
      category: k,
      categoryTitle: categories[k].title[lang],
      title: detail.title[lang],
      desc: detail.desc[lang],
      icon: categories[k].icon,
      id: `${k}-${idx}`
    }));
  });

  const filteredDetails = searchQuery.trim() === '' 
    ? [] 
    : allDetails.filter(d => 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        d.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="about-us" className="py-20 bg-brand-dark relative text-white overflow-hidden border-t border-brand-gold/15">
      {/* Background patterns */}
      <div className="absolute inset-0 muga-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <Sparkles size={11} className="text-brand-gold animate-pulse" />
            <span>{getTranslation("sectionBadge")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            {getTranslation("sectionTitle")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            {getTranslation("sectionDesc")}
          </motion.p>

          {/* Quick Interactive Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search size={16} />
            </div>
            <input 
              type="text"
              placeholder={getTranslation("searchLabel")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12241b] border border-brand-gold/20 hover:border-brand-gold/40 focus:border-brand-gold focus:outline-hidden py-2.5 pl-10 pr-4 rounded-xl text-xs text-white placeholder-slate-400/80 shadow-inner transition-all duration-300 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10px] font-bold text-brand-gold hover:text-white transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Results Display */}
        <AnimatePresence>
          {searchQuery.trim() !== '' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#0b1610] border border-brand-gold/20 rounded-2xl p-6 mb-12 shadow-2xl overflow-hidden"
            >
              <h4 className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-1">
                <span>Search Results ({filteredDetails.length})</span>
              </h4>
              
              {filteredDetails.length === 0 ? (
                <p className="text-slate-400 text-xs italic">No matching facilities or details found. Try querying 'library', 'computers', 'boundary', or 'April'.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDetails.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.id} className="bg-brand-green-dark/30 border border-slate-800 p-4 rounded-xl flex gap-3 hover:border-brand-gold/30 transition-colors">
                        <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg h-fit">
                          <ItemIcon size={16} />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">{item.categoryTitle}</span>
                          <h5 className="font-serif text-sm font-semibold text-brand-gold-light mt-0.5">{item.title}</h5>
                          <p className="text-slate-300 text-[11px] leading-relaxed mt-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Interactive Tab Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="interactive-about-dashboard">
          
          {/* Left Navigation Tabs (4 columns on Large Screens) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x">
            <p className="hidden lg:block text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2 ml-1">
              {getTranslation("interactiveGuide")}
            </p>
            {(Object.keys(categories) as TabType[]).map((tabKey) => {
              const category = categories[tabKey];
              const IconComponent = category.icon;
              const isActive = activeTab === tabKey;
              
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`snap-center shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                    isActive 
                      ? "bg-brand-green-dark/90 border-brand-gold text-brand-gold shadow-md shadow-black/20 translate-x-0 lg:translate-x-1" 
                      : "bg-[#0b1610]/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-[#0c1f15]/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${isActive ? "bg-brand-gold/10 text-brand-gold" : "bg-slate-900/40 text-slate-500"}`}>
                    <IconComponent size={18} />
                  </div>
                  <div className="min-w-[120px] sm:min-w-0">
                    <div className="text-xs font-bold font-sans tracking-wide leading-none">{categories[tabKey].title[lang]}</div>
                    <span className="text-[9px] font-mono text-slate-500 mt-1 block uppercase tracking-widest">{category.badge[lang]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Immersive Content Block (8 columns on Large Screens) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-gradient-to-br ${categories[activeTab].bgColor} border border-brand-gold/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
              >
                {/* Visual Glows matching active status */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-brand-gold/15 text-brand-gold rounded-xl">
                        {React.createElement(categories[activeTab].icon, { size: 24 })}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-2 py-0.5 rounded">
                          {categories[activeTab].badge[lang]}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                          {categories[activeTab].title[lang]}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Detail Bullet Points */}
                  <div className="space-y-6">
                    {categories[activeTab].details.map((detail, index) => (
                      <div key={index} className="group/item flex gap-3.5 items-start">
                        <div className="mt-1 p-1 bg-brand-green text-brand-gold-light rounded-full border border-brand-gold/25 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 size={12} />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-gold-light tracking-wide">
                            {detail.title[lang]}
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
                            {detail.desc[lang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Key Performance Metrics Bottom Bar */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 bg-black/20 p-4 rounded-xl">
                  {categories[activeTab].metrics.map((metric, index) => (
                    <div key={index} className="text-center sm:text-left border-r last:border-r-0 border-white/5 pr-2">
                      <p className="text-slate-400 text-[9px] font-mono uppercase tracking-wider">{metric.label[lang]}</p>
                      <p className="text-sm sm:text-base font-sans font-black text-white mt-0.5">{metric.value}</p>
                      {metric.sub && (
                        <p className="text-[8px] text-slate-500 font-sans mt-0.5 truncate hidden sm:block">{metric.sub}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dynamic Interactive Bento Counters Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: { en: "Founded", as: "প্ৰতিষ্ঠা" }, value: "1946", desc: { en: "Historic Era", as: "ঐতিহাসিক কাল" } },
            { label: { en: "Grades", as: "শ্ৰেণী" }, value: "6 - 12", desc: { en: "Co-Ed Curriculum", as: "সহ-শিক্ষা পাঠ্যক্ৰম" } },
            { label: { en: "Smart Classrooms", as: "শ্ৰেণীকোঠা" }, value: "16 Blocks", desc: { en: "With CAL Lab", as: "প্ৰযুক্তি কোঠাৰ সৈতে" } },
            { label: { en: "Library Vault", as: "পুথিভঁৰাল" }, value: "8,000+ Books", desc: { en: "Comprehensive Lit.", as: "প্ৰচুৰ সংগ্ৰহ" } },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#0b1610]/60 border border-slate-800/80 p-4 rounded-2xl text-center group hover:border-brand-gold/35 hover:bg-brand-green-dark/25 transition-all duration-300"
            >
              <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-brand-gold uppercase tracking-widest">{item.label[lang]}</span>
              <p className="text-xl sm:text-2xl font-sans font-black text-white mt-1 group-hover:scale-105 transition-transform duration-300">{item.value}</p>
              <p className="text-[9px] text-slate-500 mt-1 font-sans">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
