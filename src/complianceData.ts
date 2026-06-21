import { Language } from './translations';

export interface CompliancePolicy {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  iconName: string;
  content: Record<Language, string[]>;
  statute: Record<Language, string>;
}

export const COMPLIANCE_DATA: CompliancePolicy[] = [
  {
    id: "comp-ragging",
    title: {
      en: "Anti-Ragging and Bullying Directive",
      as: "এণ্টি-ৰ্যাগিং আৰু উৎপীড়ন বিৰোধী নিৰ্দেশনা"
    },
    subtitle: {
      en: "Zero tolerance framework safeguarding physical and psychological trust on school grounds.",
      as: "বিদ্যালয় চৌহদত ছাত্ৰ-ছাত্ৰীৰ মানসিক আৰু শাৰীৰিক নিৰাপত্তা সুৰক্ষিত ৰখাৰ সম্পূৰ্ণ নিশ্চয়তা।"
    },
    iconName: "ShieldAlert",
    content: {
      en: [
        "Ragging and physical harassment in any form is classified as a severe non-bailable offense on campus.",
        "Any pupil found directly or indirectly encouraging, participating in, or committing ragging shall face immediate suspension from academic registry.",
        "An active Anti-Ragging Committee consisting of teachers, local guardians, and administrators inspects secluded spots daily.",
        "Victims or observers can deposit confidential written complaints inside the campus Red Suggestion box or register them with the help desk."
      ],
      as: [
        "বিদ্যালয় চৌহদত যিকোনো ধৰণৰ ৰ্যাগিং বা শাৰীৰিক নিৰ্যাতনক জামিনবিহীন গুৰুতৰ অপৰাধ হিচাপে গণ্য কৰা হয়।",
        "প্ৰত্যক্ষ বা পৰোক্ষভাৱে ৰ্যাগিং কাৰ্যত লিপ্ত বা সহায় কৰা ছাত্ৰ-ছাত্ৰীক বিদ্যালয়ৰ পৰা তাৎক্ষণিকভাৱে বহিস্কাৰ কৰা হ'ব।",
        "শিক্ষক, অভিভাৱক আৰু প্ৰশাসনৰ লোকক লৈ গঠিত সক্ৰিয় এণ্টি-ৰ্যাগিং সমিতিয়ে প্ৰতিদিনে চৌহদ নিৰীক্ষণ কৰে।",
        "নিৰ্যাতিত বা প্ৰত্যক্ষদৰ্শীয়ে কাৰ্যালয়ত বা মহাবিদ্যালয়ৰ ৰঙা অভিযোগ বাকচত গোপনীয় পত্ৰ প্ৰেৰণ কৰিব পাৰিব।"
      ]
    },
    statute: {
      en: "Under the directives of the District Magistrate of Dibrugarh and UGC/Supreme Court norms of India.",
      as: "ডিব্ৰুগড় জিলা ধৰ্মাধিকাৰী তথা উচ্চতম ন্যায়ালয়ৰ কঠোৰ নিয়মাৱলী অনুসৰি।"
    }
  },
  {
    id: "comp-discipline",
    title: {
      en: "General Code of Conduct & Pupil Discipline",
      as: "ছাত্ৰ-ছাত্ৰীৰ আচৰণ আৰু অনুশাসন বিধি"
    },
    subtitle: {
      en: "Core parameters facilitating quiet focus, safety, and mutual dignity.",
      as: "এক শান্তিময় শিক্ষা পৰিৱেশ, সুৰক্ষা আৰু যৌথ মৰ্যাদা বজাই ৰখাৰ মুখ্য নিৰ্দেশনা।"
    },
    iconName: "FileCheck",
    content: {
      en: [
        "Punctuality is mandatory. All secondary and higher secondary candidates must enter before 8:45 AM national assembly bells.",
        "Proper official state-prescribed school uniform is compulsory. Casual jackets or custom alterations are unauthorized.",
        "Mobile phones and other electronic entertainment devices are strictly prohibited inside classrooms. Unauthorized devices will be confiscated permanently.",
        "Any destruction of state assets, writing on desks, or damage to garden biodiversity is liable to penalty fines."
      ],
      as: [
        "সময়ানুবৰ্তিতা বাধ্যতামূলক। জাতীয় সংগীতৰ প্ৰাৰ্থনা সভা আৰম্ভ হোৱা পুৱা ৮:৪৫ বজাৰ আগতেই ছাত্ৰ-ছাত্ৰী উপস্থিত থাকিব লাগিব।",
        "চৰকাৰী নিয়ম অনুসৰি নিৰ্ধাৰিত ইউনিফৰ্ম সঠিকভাৱে পিন্ধি অহা অনুশাসনৰ অংশ। ফেশ্বনযোগ্য সজ্জা বা সালসলনি নিষিদ্ধ।",
        "শ্ৰেণীকোঠালৈ মোবাইল ফোন বা অন্য কোনো ডিজিটেল সা-সঁজুলি অনা সম্পূর্ণ নিষিদ্ধ। ফোন পালে স্থায়ীভাৱে জব্দ কৰা হ’ব।",
        "চৰকাৰী সা-সম্পত্তি বিনষ্ট কৰা, ডেস্কত আখৰ লিখা বা গছ-গছনি ধ্বংস কৰিলে জৰিমনা বিহা হ'ব।"
      ]
    },
    statute: {
      en: "Aligned with secondary school protocol standards of Assam High Board guidelines.",
      as: "অসম চৰকাৰৰ উচ্চ মাধ্যমিক পৰিষদৰ নিয়মাৱলীৰ অনুসৰণত।"
    }
  },
  {
    id: "comp-child-safety",
    title: {
      en: "Child Safety & POCSO Compliance Pledge",
      as: "শিশু সুৰক্ষা আৰু POCSO অনুপালন প্ৰতিশ্ৰুতি"
    },
    subtitle: {
      en: "Vigilant measures ensuring comprehensive emotional and moral physical safety.",
      as: "ছাত্ৰ-ছাত্ৰীৰ সম্পূৰ্ণ আৱেগিক, নৈতিক আৰু শাৰীৰিক সুৰক্ষা সুনিশ্চিত কৰিবলৈ গ্ৰহণ কৰা সক্ৰিয় ব্যৱস্থা।"
    },
    iconName: "HeartHandshake",
    content: {
      en: [
        "A Child Protection Policy Council operates to actively align school procedures with the POCSO Act guidelines of India.",
        "Corporal punishment of any grade is strictly outlawed. Teaching teams employ positive supportive counselling models.",
        "Separate sanitary toilets possess strong bolt closures and secure privacy separations to safeguard girl child rights.",
        "Emergency child helpline contact banners numbers (1098) are permanently painted on the main assembly administrative walls."
      ],
      as: [
        "শিশু সুৰক্ষা আইন (POCSO Act)ৰ অধীনত এখন বিশেষ চৰকাৰী সমিতি নিয়োজিত হৈ আছে যিয়ে ছাত্ৰ-ছাত্ৰীৰ যিকোনো নিৰ্যাতন প্ৰতিহত কৰে ।",
        "শৰীৰিক শাস্তি সম্পূৰ্ণৰূপে নিষিদ্ধ। বিদ্যালয়খনত কেৱল সহমৰ্মিতা আৰু ইতিবাচক পৰামৰ্শৰ শিক্ষাদান গ্ৰহণ কৰা হয়।",
        "ছোৱালী জীয়ৰীসকলৰ বাবে সুৰক্ষিত আৱেষ্টনী থকা শৌচালয় আৰু চাবোনৰ ব্যৱস্থা ৰখা হৈছে।",
        "চৰকাৰী জৰুৰীকালীন শিশু সুৰক্ষা হেল্পলাইন নম্বৰ (১০৯৮) প্ৰতিভা ফলকত স্থায়ীভাৱে লিখা আছে।"
      ]
    },
    statute: {
      en: "Compliant with the Protection of Children from Sexual Offences (POCSO) Act of Parliament of India.",
      as: "ভাৰতীয় সংসদৰ শিশু সুৰক্ষা আইন (POCSO Act) ৰ অনুকূলে সবিশেষ ব্যৱস্থা।"
    }
  },
  {
    id: "comp-rules",
    title: {
      en: "Campus Ground Rules & Bio-Campus Integrity",
      as: "উন্নত চৌহদ আৰু আদৰ্শ সেউজ আৱাসিক নিয়ম"
    },
    subtitle: {
      en: "Promoting visual cleanliness, anti-plastic goals, and biological stewardship.",
      as: "তথ্যভিত্তিক পৰিষ্কাৰ-পৰিচ্ছন্নতা, প্লাষ্টিক বৰ্জন আৰু প্ৰাকৃতিক বৈচিত্ৰ্যৰ ৰক্ষণাবেক্ষণ।"
    },
    iconName: "Leaf",
    content: {
      en: [
        "Single-use plastics of any grade are banned on school grounds to preserve our eco-model classification.",
        "Wastage of clean drinking water from filtration zones is treated as a breach of eco-responsibility.",
        "Proper garbage segregation (biodegradable versus recyclable plastic) has been organized via color-coded bins.",
        "Students are required to participate in gardening, state plantation events, and local cleanliness drives."
      ],
      as: [
        "আমাৰ পৰিৱেশ সংৰক্ষণৰ বাবে বিদ্যালয় চৌহদত এবাৰ ব্যৱহাৰযোগ্য প্লাষ্টিকৰ সামগ্ৰী সম্পূৰ্ণৰূপে নিষিদ্ধ কৰা হৈছে।",
        " খোৱাপানী অপচয় কৰাটো এক অপৰাধ হিচাপে গণ্য কৰা হয় আৰু খোৱাপানী সংৰক্ষণ কৰাটো বাধ্যতামূলক।",
        "শুকান আৰু তিতা জাৰ-জাবৰ পেলাবলৈ বিশেষ ৰঙীন ডাষ্টবিনৰ যোগান নিশ্চিত কৰা হৈছে।",
        "প্ৰতিজন বিদ্যার্থীক গছপুলি ৰোপন কাৰ্যসূচী, বাগিচা পৰিষ্কাৰ কৰা আৰু চাফাই অভিযান অংশগ্ৰহণ কৰোৱা হয়।"
      ]
    },
    statute: {
      en: "In alignment with Swachh Bharat Mission (Gramin) and Assam Green School Council protocols.",
      as: "স্বচ্ছ ভাৰত অভিযান আৰু অসম সেউজ বিদ্যালয় পৰিষদ নীতিৰ সহমতত।"
    }
  },
  {
    id: "comp-govt",
    title: {
      en: "Official Government Compliance Statement",
      as: "অসম চৰকাৰী অনুপালন নিৰ্দেশনা পত্ৰ"
    },
    subtitle: {
      en: "Institutional registration parameters upholding high national accountability standards.",
      as: "ৰাষ্ট্ৰীয় মানদণ্ড আৰু স্বচ্ছতা অটুট ৰাখিবলৈ বিদ্যালয়ৰ পঞ্জীয়ন আৰু নিয়মাৱলীৰ বিৱৰণ।"
    },
    iconName: "Award",
    content: {
      en: [
        "Tingkhong Higher Secondary School is a fully state-aided government institute with standard code registration parameters.",
        "Our official Unified District Information System for Education (UDISE Plus) Code is officially validated as 18210313101.",
        "Academic courses align strictly with standard textbooks prescribed by SEBA and AHSEC boards under Assam state laws.",
        "Finances and development funds are subject to periodic audits performed by the Comptroller and Auditor General (CAG) team."
      ],
      as: [
        "টিংখাং উচ্চতৰ মাধ্যমিক বিদ্যালয়খন অসম চৰকাৰৰ সাহায্যপ্ৰাপ্ত এক অন্যতম পুৰণি চৰকাৰী শিক্ষানুষ্ঠান।",
        "আমাৰ বিদ্যালয়খনৰ চৰকাৰী ইউ-ডাইচ (UDISE Plus) ক'ড হৈছে ১৮২১০৩১৩১০১।",
        "শৈক্ষিক পাঠ্যক্ৰমসমূহ অসম চৰকাৰৰ SEBA আৰু AHSEC ব'ৰ্ডৰ দ্বাৰা নিৰ্ধাৰিত মানদণ্ড বিজ্ঞানসন্মতভাৱে অনুসৰণ কৰে।",
        "বিদ্যালয়ৰ উন্নয়নমূলক পুঁজি আৰু বিত্তীয় সাহায্যসমূহ চৰকাৰী হিচাপ পৰীক্ষক (CAG) ৰ দ্বাৰা নিৰীক্ষণ কৰা হয়।"
      ]
    },
    statute: {
      en: "Registered under the Secondary Education Act of the Government of Assam.",
      as: "অসম চৰকাৰৰ মাধ্যমিক শিক্ষা আইন অনুসৰি পঞ্জীভুক্ত।"
    }
  }
];
