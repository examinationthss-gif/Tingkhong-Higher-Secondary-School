import { Language } from './translations';

export interface FAQItem {
  id: string;
  category: 'admissions' | 'academics' | 'examination' | 'scholarships' | 'facilities' | 'contact';
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-adm-1",
    category: "admissions",
    question: {
      en: "How do I apply for Class XI Arts or Science admission at Tingkhong HSS?",
      as: "টিংখাং উচ্ছতৰ মাধ্যমিক বিদ্যালয়ত একাদশ শ্ৰেণীৰ কলা বা বিজ্ঞান শাখাত নামভৰ্তিৰ বাবে কেনেকৈ আবেদন কৰিব পাৰি?"
    },
    answer: {
      en: "All admissions for Higher Secondary (Class XI) are processed exclusively through the Government of Assam's central DARPAN Admission Portal (darpan.ahsec.assam.gov.in). Students must register with their HSLC Examination credentials, select Tingkhong Higher Secondary School as their preferred institution, and choose either the Science or Arts stream. Direct offline admissions are not allowed as per board parameters.",
      as: "উচ্চতৰ মাধ্যমিক (একাদশ শ্ৰেণী)ৰ নামভৰ্তি প্ৰক্ৰিয়া সম্পূৰ্ণৰূপে অসম চৰকাৰৰ কেন্দ্ৰীয় 'দৰ্পণ পৰ্টেল' (darpan.ahsec.assam.gov.in) ৰ জৰিয়তে সম্পাদন কৰা হয়। ছাত্ৰ-ছাত্ৰীসকলে তেওঁলোকৰ মেট্ৰিক পৰীক্ষাৰ তথ্যৰ সৈতে পঞ্জীয়ন কৰি নিৰ্বাচিত তালিকাত টিংখাং উচ্চতৰ মাধ্যমিক বিদ্যালয় বাচনি কৰিব লাগিব। শিক্ষা সংসদৰ নিয়মানুসাৰি অফলাইনযোগে পোনে পোনে নামভৰ্তি কৰাটো গ্ৰহণযোগ্য নহয়।"
    }
  },
  {
    id: "faq-adm-2",
    category: "admissions",
    question: {
      en: "What are the reservation criteria for seat allocation?",
      as: "নামভৰ্তিৰ সংৰক্ষণ সীমা সংক্ৰান্তীয় নিয়মসমূহ কি কি?"
    },
    answer: {
      en: "In line with the Department of Secondary Education, Govt. of Assam guidelines, seat reservations apply for Scheduled Castes (SC), Scheduled Tribes (ST-Plains & ST-Hills), OBC/MOBC, tea-garden community candidates, and specially-abled (PwD) students. Verification certificate issued by a competent revenue authority must be produced during physical document validation.",
      as: "অসম চৰকাৰৰ নিয়ম অনুসৰি অনুসূচীত জাতি (SC), অনুসূচীত জনজাতি (ST), অন্যান্য পিছপৰা শ্ৰেণী (OBC/MOBC), চাহ জনজাতি সম্প্ৰদায়ৰ ছাত্ৰ-ছাত্ৰী আৰু বিকলাঙ্গ শিক্ষাৰ্থীসকলৰ বাবে আসন সংৰক্ষিত থাকে। দস্তাবেজ পৰীক্ষাৰ সময়ত চৰকাৰী প্ৰমাণপত্ৰ দাখিল কৰাটো বাধ্যতামূলক।"
    }
  },
  {
    id: "faq-aca-1",
    category: "academics",
    question: {
      en: "What is the medium of instruction for Arts and Science streams?",
      as: "কলা আৰু বিজ্ঞান শাখাৰ শিক্ষাদানৰ মাধ্যম কি?"
    },
    answer: {
      en: "For Class XI & XII Higher Secondary, instruction is bilingual in both English and Assamese. Textbooks specified by AHSEC are available in both mediums. Teachers explain concepts in both languages so that students from Assamese-medium HSLC schools and English-medium backgrounds feel comfortably guided.",
      as: "একাদশ আৰু দ্বাদশ শ্ৰেণীৰ বাবে ইংৰাজী আৰু অসমীয়া দুয়োটা মাধ্যমতে পাঠদান কৰা হয়। শিক্ষা সংসদে নিৰ্ধাৰণ কৰি দিয়া কিতাপসমূহ দুয়োটা ভাষাত উপলব্ধ। অসমীয়া মাধ্যমৰ চৰকাৰী বিদ্যালয়ৰ পৰা অহা ছাত্ৰ-ছাত্ৰীসকলে যাতে বুজি পায়, তাৰ বাবে শিক্ষকসকলে দুয়োটা ভাষাতে বুজাই দিয়ে।"
    }
  },
  {
    id: "faq-aca-2",
    category: "academics",
    question: {
      en: "Is computer education compulsory for secondary pupils?",
      as: "মাধ্যমিক স্তৰৰ বাবে কম্পিউটাৰ শিক্ষা বাধ্যতামূলক নেকি?"
    },
    answer: {
      en: "Under the SEBA/AHSEC guidelines, Computer Science is offered as an elective subject in Class IX-X and Class XI-XII levels. In addition, our integrated computer laboratory conducts mandatory weekly practical foundation workshops for Classes VI through VIII for general technological exposure.",
      as: "SEBA আৰু AHSEC ৰ নিৰ্দেশনাত কম্পিউটাৰ বিজ্ঞান বিষয়ক এক বৈকল্পিক বিষয় হিচাপে নৱম-দশম আৰু একাদশ-দ্বাদশ শ্ৰেণীত আগবঢ়োৱা হয়। ইয়াৰ উপৰিও, আমাৰ উন্নত কম্পিউটাৰ গৱেষণাগাৰত ষষ্ঠৰ পৰা অষ্টম শ্ৰেণীৰ ছাত্ৰ-ছাত্ৰীৰ বাবে সাপ্তাহিক ব্যৱহাৰিক কম্পিউটাৰ প্ৰশিক্ষণ কৰোৱা হয়।"
    }
  },
  {
    id: "faq-exam-1",
    category: "examination",
    question: {
      en: "What are the rules regarding compulsory class attendance for exams?",
      as: "চূড়ান্ত পৰীক্ষাত অৱতীৰ্ণ হ'বলৈ কেনেকুৱা উপস্থিতিৰ নিয়ম আছে?"
    },
    answer: {
      en: "As mandated by SEBA & AHSEC, a minimum of 75% class attendance is absolutely compulsory for a candidate to be declared eligible to sit for the annual high school final assessments or Board test evaluations. Medical exceptions require certificate authorizations from District Health Officials.",
      as: "SEBA আৰু AHSEC ৰ নিৰ্দেশানুসাৰি বাৰ্ষিক আৰু ব'ৰ্ডৰ মূল পৰীক্ষাত অৱতীৰ্ণ হ'বলৈ ছাত্ৰ-ছাত্ৰীৰ ন্যূনতম ৭৫ শতাংশ শ্ৰেণীকোঠাত উপস্থিতি থকাটো অপৰিহাৰ্য। চিকিৎসাজনিত কাৰণত উপস্থিতি কম হ'লে স্বাস্থ্য বিভাগৰ আধিকাৰিক প্ৰমাণপত্ৰ দাখিল কৰিব লাগিব।"
    }
  },
  {
    id: "faq-sch-1",
    category: "scholarships",
    question: {
      en: "Does the school provide free textbooks and uniform benefits?",
      as: "বিদ্যালয়খনে বিনামূলীয়া পাঠ্যপুথি আৰু ইউনিফৰ্মৰ সুবিধা প্ৰদান কৰেনে?"
    },
    answer: {
      en: "Yes. Under the dynamic state policy of the Govt. of Assam, all enrolled students of Classes VI through X receive fully free textbook sets at the start of each session. Furthermore, Direct Benefit Transfer (DBT) uniform grants and textbook benefits are distributed annually to eligible accounts of secondary and higher secondary candidates.",
      as: "হয়। অসম চৰকাৰৰ অভিলাষী আঁচনিৰ অধীনত ষষ্ঠ শ্ৰেণীৰ পৰা দশম শ্ৰেণীলৈ অধ্যয়নৰত প্ৰতিজন শিক্ষাৰ্থীক প্ৰতিটো শৈক্ষিক বৰ্ষৰ আৰম্ভণিতে সম্পূৰ্ণ বিনামূলীয়া কিতাপ যোগান ধৰা হয়। ইয়াৰ উপৰিও ইউনিফৰ্ম ক্ৰয় আৰু উচ্চতৰ মাধ্যমিকৰ ছাত্ৰ-ছাত্ৰীৰ পুথি ক্ৰয়ৰ বাবে চৰকাৰী DBT আঁচনিৰ জৰিয়তে পোনপটীয়াকৈ ছাত্ৰ-ছাত্ৰীৰ বেংক একাউণ্টত পুঁজি প্ৰদান কৰা হয়।"
    }
  },
  {
    id: "faq-sch-2",
    category: "scholarships",
    question: {
      en: "Are there special welfare schemes for tea community parents?",
      as: "চাহ বাগান অঞ্চলৰ পৰিয়ালৰ সন্তানৰ বাবে কিবা বিশেষ আঁচনি আছে নেকি?"
    },
    answer: {
      en: "Tingkhong Higher Secondary School is fully aligned with the Directorate of Tea Tribes and Adivasi Welfare, Assam. Our eligible students receive dedicated financial pre-matric and post-matric state scholarship stipends directly, boosting student retention in the plantation belts of Dibrugarh district.",
      as: "টিংখাং উচ্ছতৰ মাধ্যমিক বিদ্যালয়খনে চাহ জনজাতি কল্যাণ সঞ্চালকালয়ৰ নিৰ্দেশনা অনুযায়ী কাম কৰে। আমাৰ চাহ সম্প্ৰদায়ৰ ছাত্ৰ-ছাত্ৰীসকলে নিয়মীয়াকৈ প্ৰাক-মেট্ৰিক আৰু মেট্ৰিকত্তৰ চৰকাৰী জলপানি লাভ কৰে, যাৰ ফলত ছাত্ৰ-ছাত্ৰীৰ শিক্ষাৰ ধাৰাবাহিকতা অক্ষুণ্ণ থাকে।"
    }
  },
  {
    id: "faq-fac-1",
    category: "facilities",
    question: {
      en: "Is there a clean segregated washroom facility for boys and girls?",
      as: "ল’ৰা আৰু ছোৱালীৰ বাবে সুকীয়া পৰিষ্কাৰ শৌচালয়ৰ ব্যৱস্থা আছেনে?"
    },
    answer: {
      en: "Yes. We possess separate, highly sanitized brick-lined toilet blocks for male and female pupils. They are equipped with overhead running water connections, active hygienic hand washing counters, and regular maintenance handled daily by the local cleaning staff.",
      as: "হয়, ল’ৰা আৰু ছোৱালী শিক্ষার্থীৰ বাবে সুকীয়া আৰু অত্যন্ত পৰিষ্কাৰ শৌচালয়ৰ ভৱন আছে। ইয়াত অহৰহ পানীৰ সংযোগ আৰু হাত ধোৱাৰ সু-ব্যৱস্থা ৰখা হৈছে। দৈনিক পৰিষ্কাৰ-পৰিচ্ছন্নতাৰ বাবে বিশেষ কৰ্মচাৰী নিয়োজিত আছে।"
    }
  },
  {
    id: "faq-con-1",
    category: "contact",
    question: {
      en: "When can parents meet the principal or academic coordinators?",
      as: "অভিভাৱকসকলে অধ্যক্ষ বা শিক্ষকসকলৰ সৈতে কেতিয়া আলোচনা কৰিব পাৰে?"
    },
    answer: {
      en: "Parents and local guardians are highly encouraged to visit the campus. The official visiting hours for the Principal are Saturday mornings from 10:30 AM to 1:00 PM, and on regular weekdays from 2:00 PM to 3:00 PM. Periodic parent-teacher council alignments are organized at the physical block hall.",
      as: "অভিভাৱকসকলক বিদ্যালয় চৌহদলৈ সদায় আদৰণি জনোৱা হয়। অধ্যক্ষ মহোদয়ক সাক্ষাৎ কৰাৰ চৰকাৰী সময় হৈছে প্ৰতি শনিবাৰে ক্ৰমে পুৱা ১০:৩০ বজাৰ পৰা বিয়লি ১:০০ বজালৈ আৰু আন বাৰসমূহত আবেলি ২:০০ বজাৰ পৰা ৩:০০ বজালৈ। তদুপৰি সময়ে সময়ে অভিভাৱক-শিক্ষক মেল অনুষ্ঠিত কৰা হয়।"
    }
  }
];
