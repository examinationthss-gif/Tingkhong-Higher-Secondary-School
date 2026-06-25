import { Language } from './translations';

export interface StaffMember {
  id: string;
  name: Record<Language, string>;
  designation: Record<Language, string>;
  category: 'principal' | 'vice_principal' | 'teaching' | 'administrative';
  department: Record<Language, string>;
  qualification: Record<Language, string>;
  experience: Record<Language, string>;
  gender: 'M' | 'F';
}

export interface AcademicTopper {
  id: string;
  name: Record<Language, string>;
  examination: Record<Language, string>;
  percentage: string;
  year: string;
  achievements: Record<Language, string>;
  gender: 'M' | 'F';
}

export interface SMDCRepresentative {
  role: Record<Language, string>;
  name: Record<Language, string>;
  designation: Record<Language, string>;
}

export const STAFF_DATA: StaffMember[] = [
  {
    id: "staff-ashok",
    name: { en: "Shri Ashok Gogoi", as: "শ্ৰী অশোক গগৈ" },
    designation: { en: "Principal & Member Secretary", as: "অধ্যক্ষ তথা পঞ্জীয়ক সদস্য" },
    category: "principal",
    department: { en: "Administration & Leadership", as: "প্ৰশাসন আৰু নেতৃত্ব" },
    qualification: { en: "M.A., B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "25+ Years in Educational Governance", as: "২৫+ বছৰৰ প্ৰশাসনিক আৰু শৈক্ষিক অভিজ্ঞতা" },
    gender: "M"
  },
  {
    id: "staff-ash-bahadur",
    name: { en: "Shri Ash Bahadur Rai", as: "শ্ৰী আশ বাহাদুৰ ৰায়" },
    designation: { en: "Grade-IV Staff", as: "চতুৰ্থ বৰ্গৰ কৰ্মচাৰী" },
    category: "administrative",
    department: { en: "Office Administration", as: "কাৰ্যালয় প্ৰশাসন" },
    qualification: { en: "HSLC Passed", as: "হাইস্কুল শিক্ষান্ত উৰ্ত্তীণ" },
    experience: { en: "10 Years of Campus Service", as: "১০ বছৰৰ কেম্পাছ সেৱা" },
    gender: "M"
  },
  {
    id: "staff-bikalpa",
    name: { en: "Shri Bikalpa Gogoi", as: "শ্ৰী বিকল্প গগৈ" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.Sc., B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "12 Years of Classroom Pedagogy", as: "১২ বছৰৰ শিক্ষাদানৰ অভিজ্ঞতা" },
    gender: "M"
  },
  {
    id: "staff-daradi",
    name: { en: "Smt. Daradi Chutia", as: "শ্ৰীমতী দৰদী চুতীয়া" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "8 Years of Teaching Experience", as: "৮ বছৰৰ শিক্ষাদানৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-doli",
    name: { en: "Smt. Doli Boruah", as: "শ্ৰীমতী ডলী বৰুৱা" },
    designation: { en: "Post Graduate Teacher (PGT) - History", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (ইতিহাস)" },
    category: "teaching",
    department: { en: "Department of History", as: "ইতিহাস বিভাগ" },
    qualification: { en: "M.A. (History), B.Ed.", as: "এম.এ (ইতিহাস), বি.এড" },
    experience: { en: "14 Years of History Pedagogy", as: "১৪ বছৰৰ বুৰঞ্জী শিক্ষাদান" },
    gender: "F"
  },
  {
    id: "staff-grace",
    name: { en: "Smt. Grace Ruhani Toon", as: "শ্ৰীমতী গ্ৰেচ ৰুহানী টুন" },
    designation: { en: "Junior Assistant", as: "কনিষ্ঠ সহায়ক" },
    category: "administrative",
    department: { en: "Office Administration", as: "কাৰ্যালয় প্ৰশাসন" },
    qualification: { en: "B.A. (Office Mgmt)", as: "বি.এ" },
    experience: { en: "6 Years of Registry Maintenance", as: "৬ বছৰৰ কাৰ্যালয় নথি ব্যৱস্থাপনা" },
    gender: "F"
  },
  {
    id: "staff-hemonti",
    name: { en: "Smt. Hemonti Das", as: "শ্ৰীমতী হেমন্তী দাস" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "Language Studies", as: "ভাষা অধ্যয়ন বিভাগ" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "9 Years of Language Instruction", as: "৯ বছৰৰ ভাষা শিক্ষাদান" },
    gender: "F"
  },
  {
    id: "staff-himangshu",
    name: { en: "Shri Himangshu Dewria", as: "শ্ৰী হিমাংশু দেউৰীয়া" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.Sc. (Physics), B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "11 Years of Science Education", as: "১১ বছৰৰ বিজ্ঞান শিক্ষাদান" },
    gender: "M"
  },
  {
    id: "staff-himoshree",
    name: { en: "Smt. Himoshree Gogoi", as: "শ্ৰীমতী হিমাশ্ৰী গগৈ" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "Social Science", as: "সমাজ বিজ্ঞান" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "7 Years of Pedagogy", as: "৭ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-jayanta",
    name: { en: "Shri Jayanta Boruah", as: "শ্ৰী জয়ন্ত বৰুৱা" },
    designation: { en: "Post Graduate Teacher (PGT) - Political Science", as: "উচ্চতৰ মাধ্যমিক শিক্ষক (ৰাজনীতি বিজ্ঞান)" },
    category: "teaching",
    department: { en: "Department of Political Science", as: "ৰাজনীতি বিজ্ঞান বিভাগ" },
    qualification: { en: "M.A. (Pol Science), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "15 Years of Board Examination Prep", as: "১৫ বছৰৰ ব’ৰ্ড পৰীক্ষা প্ৰস্তুতি" },
    gender: "M"
  },
  {
    id: "staff-jharna",
    name: { en: "Smt. Jharna Borah", as: "শ্ৰীমতী ঝৰ্ণা বৰা" },
    designation: { en: "Post Graduate Teacher (PGT) - Assamese", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (অসমীয়া)" },
    category: "teaching",
    department: { en: "Department of Assamese", as: "অসমীয়া বিভাগ" },
    qualification: { en: "M.A. (Assamese), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "13 Years of Assamese Literature Pedagogy", as: "১৩ বছৰৰ অসমীয়া সাহিত্য শিক্ষাদান" },
    gender: "F"
  },
  {
    id: "staff-julfikar",
    name: { en: "Shri Julfikar Rahman Zinnah", as: "শ্ৰী জুলফিক্কাৰ ৰহমান জিন্নাহ" },
    designation: { en: "Post Graduate Teacher (PGT) - Education", as: "উচ্চতৰ মাধ্যমিক শিক্ষক (শিক্ষা বিজ্ঞান)" },
    category: "teaching",
    department: { en: "Department of Education", as: "শিক্ষা বিজ্ঞান বিভাগ" },
    qualification: { en: "M.A. (Education), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "16 Years of Pedagogy & Counseling", as: "১৬ বছৰৰ শিক্ষণ আৰু পৰামৰ্শ" },
    gender: "M"
  },
  {
    id: "staff-juri",
    name: { en: "Smt. Juri Sahariah", as: "শ্ৰীমতী জুৰি সাহাৰীয়া" },
    designation: { en: "Post Graduate Teacher (PGT) - Sociology", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (সমাজতত্ত্ব)" },
    category: "teaching",
    department: { en: "Department of Sociology", as: "সমাজতত্ত্ব বিভাগ" },
    qualification: { en: "M.A. (Sociology), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "10 Years of Social Science Teaching", as: "১০ বছৰৰ সমাজ বিজ্ঞান পাঠদান" },
    gender: "F"
  },
  {
    id: "staff-mallika",
    name: { en: "Smt. Mallika Bokolial", as: "শ্ৰীমতী মল্লিকা বকলীয়াল" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "9 Years of Experience", as: "৯ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-nilakshi",
    name: { en: "Smt. Nilakshi Gogoi", as: "শ্ৰীমতী নীলাক্ষী গগৈ" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "Science & Tech", as: "বিজ্ঞান আৰু প্ৰযুক্তি" },
    qualification: { en: "B.Sc., B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "11 Years of Teaching", as: "১১ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-pallabi",
    name: { en: "Smt. Pallabi Baruah", as: "শ্ৰীমতী পল্লৱী বৰুৱা" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "8 Years of Teaching", as: "৮ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-pranjal",
    name: { en: "Shri Pranjal Baruah", as: "শ্ৰী প্ৰাঞ্জল বৰুৱা" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.Sc., B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "12 Years of Mathematics Coaching", as: "১২ বছৰৰ গণিত শিক্ষাদান" },
    gender: "M"
  },
  {
    id: "staff-preeti",
    name: { en: "Smt. Preeti Rekha Das", as: "শ্ৰীমতী প্ৰীতি ৰেখা দাস" },
    designation: { en: "Post Graduate Teacher (PGT) - English", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (ইংৰাজী)" },
    category: "teaching",
    department: { en: "Department of English", as: "ইংৰাজী বিভাগ" },
    qualification: { en: "M.A. (English), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "15 Years of Phonetics & Grammar Coaching", as: "১৫ বছৰৰ ধ্বনিবিজ্ঞান আৰু ব্যাকৰণ" },
    gender: "F"
  },
  {
    id: "staff-puja",
    name: { en: "Smt. Puja Gogoi", as: "শ্ৰীমতী পূজা গগৈ" },
    designation: { en: "Post Graduate Teacher (PGT) - Adv Assamese", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (উচ্চতৰ অসমীয়া)" },
    category: "teaching",
    department: { en: "Department of Assamese", as: "অসমীয়া বিভাগ" },
    qualification: { en: "M.A. (Assamese Literature), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "7 Years of High Board Literary Training", as: "৭ বছৰৰ সাহিত্য প্ৰশিক্ষণ" },
    gender: "F"
  },
  {
    id: "staff-pulin",
    name: { en: "Shri Pulin Chutia", as: "শ্ৰী পুলিন চুতীয়া" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "14 Years of Secondary Guidance", as: "১৪ বছৰৰ নিৰীক্ষণ অভিজ্ঞতা" },
    gender: "M"
  },
  {
    id: "staff-rajashree",
    name: { en: "Smt. Rajashree Dey", as: "শ্ৰীমতী ৰাজশ্ৰী দে" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "Social Sciences", as: "সমাজ বিজ্ঞান" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "10 Years of Classroom Pedagogy", as: "১০ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-reetuporna",
    name: { en: "Smt. Reetuporna Murari", as: "শ্ৰীমতী ঋতুপৰ্ণা মুৰাৰী" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "8 Years of Teaching", as: "৮ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-rimpee",
    name: { en: "Smt. Rimpee Bakalial", as: "শ্ৰীমতী ৰিম্পী বকলীয়াল" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "Science & Math", as: "বিজ্ঞান আৰু গণিত" },
    qualification: { en: "B.Sc., B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "6 Years of Modern Sci-Lab Training", as: "৬ বছৰৰ লেব প্ৰশিক্ষণ" },
    gender: "F"
  },
  {
    id: "staff-rituraj",
    name: { en: "Shri Rituraj Gogoi", as: "শ্ৰী ঋতুৰাজ গগৈ" },
    designation: { en: "Grade-IV Staff", as: "চতুৰ্থ বৰ্গৰ কৰ্মচাৰী" },
    category: "administrative",
    department: { en: "Office Administration", as: "কাৰ্যালয় প্ৰশাসন" },
    qualification: { en: "HS Passed", as: "উচ্চতৰ মাধ্যমিক উৰ্ত্তীণ" },
    experience: { en: "5 Years of Technical Assistance", as: "৫ বছৰৰ কাৰ্যালয় সেৱা" },
    gender: "M"
  },
  {
    id: "staff-rumi",
    name: { en: "Smt. Rumi Saikia", as: "শ্ৰীমতী ৰুমী শইকীয়া" },
    designation: { en: "Post Graduate Teacher (PGT) - Economics", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (অৰ্থনীতি)" },
    category: "teaching",
    department: { en: "Department of Economics", as: "অৰ্থনীতি বিভাগ" },
    qualification: { en: "M.A. (Economics), B.Ed.", as: "এম.এ, বি.এড" },
    experience: { en: "16 Years of Economic Board Prep", as: "১৬ বছৰৰ অৰ্থনীতি পাঠদান" },
    gender: "F"
  },
  {
    id: "staff-saurabh",
    name: { en: "Shri Saurabh Boruah", as: "শ্ৰী সৌৰভ বৰুৱা" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "Language & Literature", as: "ভাষা আৰু সাহিত্য" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "9 Years of Linguistic Guidance", as: "৯ বছৰৰ ভাষিক অভিজ্ঞতা" },
    gender: "M"
  },
  {
    id: "staff-sultana",
    name: { en: "Smt. Sultana Mahmuda", as: "শ্ৰীমতী চুলতানা মাহমুদা" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষয়িত্ৰী" },
    category: "teaching",
    department: { en: "General Studies", as: "সাধাৰণ অধ্যয়ন" },
    qualification: { en: "B.A., B.Ed.", as: "বি.এ, বি.এড" },
    experience: { en: "10 Years of Pedagogy", as: "১০ বছৰৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-tapan",
    name: { en: "Shri Tapan Jyoti Dihingia", as: "শ্ৰী তপন জ্যোতি দিহিঙীয়া" },
    designation: { en: "Graduate Teacher", as: "স্নাতক শিক্ষক" },
    category: "teaching",
    department: { en: "Department of Mathematics", as: "গণিত বিভাগ" },
    qualification: { en: "B.Sc. (Mathematics), B.Ed.", as: "বি.এছচি, বি.এড" },
    experience: { en: "11 Years of Quantitative Guidance", as: "১১ বছৰৰ গণিত অভিজ্ঞতা" },
    gender: "M"
  }
];

export const TOPPER_DATA: AcademicTopper[] = [
  {
    id: "topper-1",
    name: { en: "Priyanka Phukan", as: "প্ৰিয়ংকা ফুকন" },
    examination: { en: "AHSEC (Science stream) Final", as: "উচ্চতৰ মাধ্যমিক (বিজ্ঞান) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "97.4%",
    year: "2025",
    achievements: { en: "District Rank 3 • Star Marks in 5 subjects", as: "জিলা স্তৰত তৃতীয় স্থান • ৫ টা বিষয়ত ষ্টাৰ মাৰ্ক্স" },
    gender: "F"
  },
  {
    id: "topper-2",
    name: { en: "Abhinav Gogoi", as: "অভিনৱ গগৈ" },
    examination: { en: "AHSEC (Arts stream) Final", as: "উচ্চতৰ মাধ্যমিক (কলা) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "96.2%",
    year: "2025",
    achievements: { en: "Distinction • Assamese literature school topper", as: "ডিশ্বল মৰ্যাদা • অসমীয়া সাহিত্যত সৰ্বোচ্চ নম্বৰ" },
    gender: "M"
  },
  {
    id: "topper-3",
    name: { en: "Rupjyoti Sonowal", as: "ৰূপজ্যোতি সোণোৱাল" },
    examination: { en: "SEBA HSLC (Class X) Board Exam", as: "ছেবা হাইস্কুল শিক্ষান্ত (Class X) পৰীক্ষা" },
    percentage: "95.8%",
    year: "2025",
    achievements: { en: "Star Marks • Perfect 100/100 in General Science", as: "ষ্টাৰ মাৰ্ক্স • সাধাৰণ বিজ্ঞানত ১০০ ভিতৰত ১০০ নম্বৰ" },
    gender: "M"
  },
  {
    id: "topper-4",
    name: { en: "Parash Jyoti Baruah", as: "পৰাশ জ্যোতি বৰুৱা" },
    examination: { en: "AHSEC (Science stream) Final", as: "উচ্চতৰ মাধ্যমিক (বিজ্ঞান) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "96.8%",
    year: "2024",
    achievements: { en: "Distinction • Selected in National Science Meet", as: "ডিশ্বল মৰ্যাদা • ৰাষ্ট্ৰীয় বিজ্ঞান সন্মিলনলৈ নিৰ্বাচিত" },
    gender: "M"
  },
  {
    id: "topper-5",
    name: { en: "Nilakshi Chetia", as: "নীলাক্ষী চেতিয়া" },
    examination: { en: "AHSEC (Arts stream) Final", as: "উচ্চতৰ মাধ্যমিক (কলা) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "95.4%",
    year: "2024",
    achievements: { en: "Assamese High Board Excellence Awardee", as: "অসমীয়া বিভাগৰ ৰাজ্যিক সৰ্বোচ্চ মৰ্যাদা বঁটাপ্ৰাপ্ত" },
    gender: "F"
  },
  {
    id: "topper-6",
    name: { en: "Subham Dey", as: "শুভম দে" },
    examination: { en: "SEBA HSLC (Class X) Board Exam", as: "ছেবা হাইস্কুল শিক্ষান্ত (Class X) পৰীক্ষা" },
    percentage: "94.6%",
    year: "2024",
    achievements: { en: "Star Marks • Perfect 100/100 in General Maths", as: "ষ্টাৰ মাৰ্ক্স • সাধাৰণ গণিতত ১০০ ভিতৰত ১০০ নম্বৰ" },
    gender: "M"
  },
  {
    id: "topper-7",
    name: { en: "Jyotishman Borgohain", as: "জ্যোতিষ্মান বৰগোঁহাই" },
    examination: { en: "AHSEC (Science stream) Final", as: "উচ্চতৰ মাধ্যমিক (বিজ্ঞান) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "95.6%",
    year: "2023",
    achievements: { en: "Dibrugarh District Merit list rank 5", as: "ডিব্ৰুগড় জিলাৰ মেধা তালিকাত পঞ্চম স্থান" },
    gender: "M"
  },
  {
    id: "topper-8",
    name: { en: "Mousumi Duarah", as: "মৌচুমী দুৱৰা" },
    examination: { en: "AHSEC (Arts stream) Final", as: "উচ্চতৰ মাধ্যমিক (কলা) চূড়ান্ত ব'ৰ্ড পৰীক্ষা" },
    percentage: "94.8%",
    year: "2023",
    achievements: { en: "Distinction Marks in all literature subjects", as: "সাহিত্য শাখাৰ আটাইকেইটা বিষয়তে ডিশ্বল নম্বৰ" },
    gender: "F"
  },
  {
    id: "topper-9",
    name: { en: "Anurag Saikia", as: "অনুৰাগ শইকীয়া" },
    examination: { en: "SEBA HSLC (Class X) Board Exam", as: "ছেবা হাইস্কুল শিক্ষান্ত (Class X) পৰীক্ষা" },
    percentage: "93.8%",
    year: "2023",
    achievements: { en: "Star Marks Group • Dibrugarh Sports team lead", as: "ষ্টাৰ মাৰ্ক্স গ্ৰুপ • ডিব্ৰুগড় ক্ৰীড়া দলৰ অধিনায়ক" },
    gender: "M"
  }
];

export const SMDC_MEMBERS: SMDCRepresentative[] = [
  {
    role: { en: "Chairman & Community Patron", as: "সভাপতি তথা সমাজ হিতৈষী" },
    name: { en: "Shri Jitu Phukan", as: "শ্ৰী জিতু ফুকন" },
    designation: { en: "Eminent Social Leader & MLA nominee", as: "বিশিষ্ট সমাজকৰ্মী আৰু সমষ্টি বিধায়ক মনোনীত" }
  },
  {
    role: { en: "Member Secretary (Ex-Officio)", as: "সদস্য সচিব (পদেন)" },
    name: { en: "Shri Ashok Gogoi", as: "শ্ৰী অশোক গগৈ" },
    designation: { en: "Principal of Tingkhong HSS", as: "অধ্যক্ষ, টিংখাং উঃ মাঃ বিদ্যালয়" }
  },
  {
    role: { en: "Teacher Representatives", as: "শিক্ষক প্ৰতিনিধি" },
    name: { en: "Smt. Preeti Rekha Das", as: "শ্ৰীমতী প্ৰীতি ৰেখা দাস" },
    designation: { en: "PGT English & Senior Faculty Member", as: "জ্যেষ্ঠ ইংৰাজী শিক্ষক" }
  },
  {
    role: { en: "Teacher Representatives", as: "শিক্ষক প্ৰতিনিধি" },
    name: { en: "Shri Jayanta Boruah", as: "শ্ৰী জয়ন্ত বৰুৱা" },
    designation: { en: "PGT Political Science & Senior Faculty Member", as: "জ্যেষ্ঠ ৰাজনীতি বিজ্ঞান শিক্ষক" }
  },
  {
    role: { en: "Parent Representatives", as: "অভিভাৱক প্ৰতিনিধি" },
    name: { en: "Shri Sarat Sonowal", as: "শ্ৰী শৰৎ সোণোৱাল" },
    designation: { en: "Progressive Agriculturist, Tingkhong Area", as: "উন্নত কৃষক, টিংখাং অঞ্চল" }
  },
  {
    role: { en: "Parent Representatives", as: "অভিভাৱক প্ৰতিনিধি" },
    name: { en: "Smt. Lily Baruah", as: "শ্ৰীমতী লিলি বৰুৱা" },
    designation: { en: "Active Homemaker & Guardians Council Leader", as: "সক্ৰিয় গৃহিণী আৰু অভিভাবক মঞ্চৰ সদস্যা" }
  },
  {
    role: { en: "Community General Representative", as: "সাধাৰণ সমাজ প্ৰতিনিধি" },
    name: { en: "Shri Bipul Chetia", as: "শ্ৰী বিপুল চেতিয়া" },
    designation: { en: "Secretary, Local Tea Plantation Welfare League", as: "সম্পাদক, স্থানীয় চাহ বাগিচা কল্যাণ মঞ্চ" }
  },
  {
    role: { en: "Medical health Representative", as: "স্বাস্থ্য বিভাগৰ প্ৰতিনিধি" },
    name: { en: "Dr. Nabajyoti Phukan", as: "ড° নৱজ্যোতি ফুকন" },
    designation: { en: "Medical Officer, Tingkhong State PHC", as: "চিকিৎসা বিষয়া, টিংখাং ৰাজ্যিক চিকিৎসালয়" }
  }
];
