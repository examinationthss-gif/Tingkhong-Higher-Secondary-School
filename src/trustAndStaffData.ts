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
    id: "staff-1",
    name: { en: "Shri Ashok Gogoi", as: "শ্ৰী অশোক গগৈ" },
    designation: { en: "Principal & Member Secretary", as: "অধ্যক্ষ তথা পঞ্জীয়ক সদস্য" },
    category: "principal",
    department: { en: "Administration & Leadership", as: "প্ৰশাসন আৰু নেতৃত্ব" },
    qualification: { en: "M.A., B.Ed., LL.B.", as: "এম.এ, বি.এড, এল.এল.বি" },
    experience: { en: "25+ Years in Educational Governance", as: "২৫+ বছৰৰ প্ৰশাসনিক আৰু শৈক্ষিক অভিজ্ঞতা" },
    gender: "M"
  },
  {
    id: "staff-2",
    name: { en: "Smt. Anuradha Chutia", as: "শ্ৰীমতী অনুৰাধা চুতীয়া" },
    designation: { en: "Vice Principal", as: "উপাধ্যক্ষ" },
    category: "vice_principal",
    department: { en: "Department of Assamese", as: "অসমীয়া বিভাগ" },
    qualification: { en: "M.A. (Assamese), B.Ed.", as: "এম.এ (অসমীয়া), বি.এড" },
    experience: { en: "25 Years in Senior teaching guidelines", as: "২৫ বছৰৰ জ্যেষ্ঠ শিক্ষাদানৰ অভিজ্ঞতা" },
    gender: "F"
  },
  {
    id: "staff-3",
    name: { en: "Shri Debajit Saikia", as: "শ্ৰী দেৱজিৎ শইকীয়া" },
    designation: { en: "Post Graduate Teacher (PGT)", as: "উচ্চতৰ মাধ্যমিক শিক্ষক (PGT)" },
    category: "teaching",
    department: { en: "Department of Physics", as: "পদাৰ্থ বিজ্ঞান বিভাগ" },
    qualification: { en: "M.Sc. (Physics), B.Ed.", as: "এম.এছচি (পদাৰ্থ বিজ্ঞান), বি.এড" },
    experience: { en: "18 Years of Board Examination evaluation", as: "১৮ বছৰৰ বোৰ্ড পৰীক্ষা মূল্যায়ন গাইডেন্স" },
    gender: "M"
  },
  {
    id: "staff-4",
    name: { en: "Dr. Karabi Duarah", as: "ড° কৰৱী দুৱৰা" },
    designation: { en: "Post Graduate Teacher (PGT)", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (PGT)" },
    category: "teaching",
    department: { en: "Department of History", as: "ইতিহাস বিভাগ" },
    qualification: { en: "Ph.D., M.A. (History), B.Ed.", as: "পিএইচ.ডি, এম.এ (ইতিহাস), বি.এড" },
    experience: { en: "12 Years in Humanities research guidance", as: "১২ বছৰৰ ইতিহাস আৰু সমাজ বিজ্ঞান গৱেষণা" },
    gender: "F"
  },
  {
    id: "staff-5",
    name: { en: "Shri Monideep Sonowal", as: "শ্ৰী মনিদীপ সোণোৱাল" },
    designation: { en: "Graduate Teacher & ICT Head", as: "কম্পিউটাৰ শিক্ষক তথা আইচিটি মুৰব্বী" },
    category: "teaching",
    department: { en: "Department of Computer Science & IT", as: "কম্পিউটাৰ বিজ্ঞান আৰু তথ্য প্ৰযুক্তি বিভাগ" },
    qualification: { en: "M.Sc. (Computer Science), MCA", as: "এম.এছচি (কম্পিউটাৰ বিজ্ঞান), এম.চি.এ" },
    experience: { en: "8 Years in Digital Smart-Class planning", as: "৮ বছৰৰ ডিজিটেল ক্ৰাফ্টিং আৰু শিক্ষাদান" },
    gender: "M"
  },
  {
    id: "staff-6",
    name: { en: "Smt. Swapnali Baruah", as: "শ্ৰীমতী স্বপ্নালী বৰুৱা" },
    designation: { en: "Post Graduate Teacher (PGT)", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (PGT)" },
    category: "teaching",
    department: { en: "Department of English", as: "ইংৰাজী বিভাগ" },
    qualification: { en: "M.A. (English Literature), B.Ed.", as: "এম.এ (ইংৰাজী সাহিত্য), বি.এড" },
    experience: { en: "15 Years of Phonetics & Grammar coaching", as: "১৫ বছৰৰ ইংৰাজী ব্যাকৰণ আৰু ধ্বনিবিজ্ঞান" },
    gender: "F"
  },
  {
    id: "staff-7",
    name: { en: "Shri Dilip Kumar Gogoi", as: "শ্ৰী দিলীপ কুমাৰ গগৈ" },
    designation: { en: "Post Graduate Teacher (PGT)", as: "উচ্চতৰ মাধ্যমিক শিক্ষক (PGT)" },
    category: "teaching",
    department: { en: "Department of Chemistry", as: "ৰসায়ন বিজ্ঞান বিভাগ" },
    qualification: { en: "M.Sc. (Chemistry), B.Ed.", as: "এম.এছচি (ৰসায়ন বিজ্ঞান), বি.এড" },
    experience: { en: "20 Years of Practical Lab administration", as: "২০ বছৰৰ ব্যৱহাৰিক পৰীক্ষাগাৰ শিক্ষাদান" },
    gender: "M"
  },
  {
    id: "staff-8",
    name: { en: "Smt. Bornali Borgohain", as: "শ্ৰীমতী বৰ্ণালী বৰগোঁহাই" },
    designation: { en: "Post Graduate Teacher (PGT)", as: "উচ্চতৰ মাধ্যমিক শিক্ষয়িত্ৰী (PGT)" },
    category: "teaching",
    department: { en: "Department of Political Science", as: "ৰাজনীতি বিজ্ঞান বিভাগ" },
    qualification: { en: "M.A. (Political Science), B.Ed.", as: "এম.এ (ৰাজনীতি বিজ্ঞান), বি.এড" },
    experience: { en: "10 Years in Civics & Constitution studies", as: "১০ বছৰৰ ৰাষ্ট্ৰনীতি আৰু সংবিধানৰ পাঠদান" },
    gender: "F"
  },
  {
    id: "staff-9",
    name: { en: "Shri Hemanta Phukan", as: "শ্ৰী হেমন্ত ফুকন" },
    designation: { en: "Senior Assistant & Registrar", as: "মুখ্য সহায়ক তথা কাৰ্যালয় পঞ্জীয়ক" },
    category: "administrative",
    department: { en: "Office Administration", as: "কাৰ্যালয় প্ৰশাসন" },
    qualification: { en: "B.Com. (Accountancy)", as: "বি.কম (হিচাপ বিজ্ঞান)" },
    experience: { en: "22 Years of Scholarship & Benefit coordination", as: "২২ বছৰৰ চৰকাৰী জলপানি আৰু ধন লেনদেন প্ৰশাসনিক" },
    gender: "M"
  },
  {
    id: "staff-10",
    name: { en: "Shri Biren Sonowal", as: "শ্ৰী বীৰেণ সোণোৱাল" },
    designation: { en: "Accounts Officer", as: "হিচাপ সংৰক্ষক" },
    category: "administrative",
    department: { en: "Finance & Welfare Accounts", as: "বিত্ত আৰু কল্যাণ শিতান" },
    qualification: { en: "M.Com (Finance)", as: "এম.কম (বিত্ত শিতান)" },
    experience: { en: "15 Years school board auditing assistance", as: "১৫ বছৰৰ চৰকাৰী পুঁজি আৰু হিচাপ সংৰক্ষণ" },
    gender: "M"
  },
  {
    id: "staff-11",
    name: { en: "Smt. Junu Baruah", as: "শ্ৰীমতী জুনু বৰুৱা" },
    designation: { en: "Librarian & Cataloguer", as: "গ্ৰন্থাগাৰিক" },
    category: "administrative",
    department: { en: "School Library Vault", as: "গ্ৰন্থাগাৰ মহলা" },
    qualification: { en: "B.Lib. (Library Science)", as: "বি.লিব (গ্ৰন্থাগাৰ বিজ্ঞান)" },
    experience: { en: "11 Years of Digital index registry", as: "১১ বছৰৰ গ্ৰন্থাগাৰ ব্যৱস্থাপনা আৰু সূচী সমল" },
    gender: "F"
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
    name: { en: "Smt. Anuradha Chutia", as: "শ্ৰীমতী অনুৰাধা চুতীয়া" },
    designation: { en: "Vice Principal & Senior Faculty of Assamese", as: "উপাধ্যক্ষ তথা জ্যেষ্ঠ অসমীয়া শিক্ষক" }
  },
  {
    role: { en: "Teacher Representatives", as: "শিক্ষক প্ৰতিনিধি" },
    name: { en: "Shri Debajit Saikia", as: "শ্ৰী দেৱজিৎ শইকীয়া" },
    designation: { en: "Senior PGT Physics Instructor", as: "জ্যেষ্ঠ পদাৰ্থ বিজ্ঞান শিক্ষক" }
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
