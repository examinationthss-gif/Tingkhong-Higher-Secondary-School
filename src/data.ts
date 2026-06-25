import { Notice, StatItem, StreamDetail, TrustIndicator, Testimonial, HighlightItem } from './types';

export const SCHOOL_NAME = "Tingkhong Higher Secondary School";
export const SCHOOL_LOCATION = "Tingkhong, Dibrugarh, Assam";
export const SCHOOL_AFFILIATION = "Affiliated with AHSEC & SEBA, Govt. of Assam";
export const SCHOOL_ESTD = "Established 1972";

export const PRINCIPAL_INFO = {
  name: "Ashok Gogoi",
  designation: "Principal, M.A., B.Ed.",
  image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400", // High quality professional portrait of a senior Indian educator
  messageQuote: "To build a temple of knowledge where academic rigour matches moral rectitude, preparing the youth of Tingkhong for global horizons while holding fast to their Assamese roots.",
  messageBody: [
    "It gives me immense pleasure to welcome you to Tingkhong Higher Secondary School. As Principal, my core vision is to elevate this historic institution into a leading hub of academic excellence and holistic character formation under the AHSEC and SEBA guidelines.",
    "Our goal is to foster an atmosphere of high scholastic achievement. Through rigorous testing, modern laboratory equipment, and robust digital integration, we empower every student—including those from local agricultural and tea community families—to discover their ultimate potential.",
    "Let us work hand-in-hand to cultivate secondary and higher secondary models that showcase top divisions, high state board ranks, and clean community ethics."
  ],
  credentials: [
    "Over 25 Years of Academic Leadership & Administration",
    "Special Awardee for Promoting Excellence in Secondary Education",
    "District Academic Advisory Council Committee Panelist"
  ]
};

export const NOTICES: Notice[] = [
  {
    id: "notice-1",
    title: "Admissions open for Class XI (Arts & Science) for Academic Session 2026-27",
    date: "June 18, 2026",
    category: "admission",
    isUrgent: true,
    content: "Online applications are invited from eligible candidates for admission into Class XI Arts and Science streams. Forms are available at the main office or can be submitted through our Darpan Admission Portal. Last date of registration is June 30, 2026."
  },
  {
    id: "notice-2",
    title: "AHSEC Class XII Final Examination Excellence Awards Ceremony",
    date: "June 15, 2026",
    category: "academic",
    isUrgent: false,
    content: "Our annual achievement felicitation ceremony will be held in the main assembly hall. 18 of our students achieved distinction marks in Assamese, English, and Physics. All parents are cordially invited to witness this proud moment on Saturday at 10:00 AM."
  },
  {
    id: "notice-3",
    title: "Class VI to VIII Half Yearly Assessment Schedule Released",
    date: "June 12, 2026",
    category: "academic",
    isUrgent: true,
    content: "The half-yearly examinations for Classes VI, VII, and VIII will commence on July 5, 2026. The absolute syllabus details, class-wise timetable, and room allotment details have been pasted on class notice councils. Students must secure 75% attendance to qualify."
  },
  {
    id: "notice-4",
    title: "Eco-Club Plantation Drive & Organic Tea Appreciation Workshop",
    date: "June 08, 2026",
    category: "event",
    isUrgent: false,
    content: "To foster natural environmental stewardship, the Tingkhong HSS Eco-Club is hosting a campus-wide tree plantation drive. Local field experts from surrounding tea estates will brief classes on organic cultivation techniques and sustainable farming."
  },
  {
    id: "notice-5",
    title: "Selection Trials for District Inter-School Football Tournament",
    date: "June 05, 2026",
    category: "event",
    isUrgent: false,
    content: "The physical education department will conduct open selection trials for the under-17 boys and girls football teams. Selected students will represent the school at the upcoming Dibrugarh District Tournament next month. Register on the pitch."
  }
];

export const SCHOOL_STATS: StatItem[] = [
  {
    id: "stat-1",
    label: "Total Students",
    value: "1,250+",
    iconName: "Users",
    description: "Diverse academic community growing in harmony"
  },
  {
    id: "stat-2",
    label: "Pass Percentage (AHSEC)",
    value: "98.6%",
    iconName: "Award",
    description: "Consistent outstanding performance in State Boards"
  },
  {
    id: "stat-3",
    label: "Expert Faculty",
    value: "45+",
    iconName: "Glasses",
    description: "Experienced, passionate teachers and state examiners"
  },
  {
    id: "stat-4",
    label: "Legacy of Excellence",
    value: "54 Years",
    iconName: "History",
    description: "Cultivating moral leaders and scholars since 1972"
  }
];

export const ACADEMICS_STREAM: StreamDetail[] = [
  {
    name: "Higher Secondary (Science Stream)",
    description: "Fully affiliated with AHSEC. Focused on research spirit, state engineering/medical foundation, and scientific innovation.",
    subjects: ["English", "MIL (Assamese/Alternative English)", "Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"]
  },
  {
    name: "Higher Secondary (Arts Stream)",
    description: "Enabling comprehensive analytical mindset looking towards civics, Assamese literature mastery, economics, and humanities.",
    subjects: ["English", "Alternative English / Assamese", "Political Science", "Economics", "History", "Logic & Philosophy", "Education", "Sociology"]
  },
  {
    name: "Secondary Education (Classes IX - X)",
    description: "Following the SEBA curriculum, laying solid frameworks for higher streams with high emphasis on General Science and Advanced Maths.",
    subjects: ["General Science", "Social Science", "General Mathematics", "Assamese (MIL)", "English", "Advanced Mathematics / Computer Science"]
  },
  {
    name: "Lower Secondary Level (Classes VI - VIII)",
    description: "Joyful, holistic multi-disciplinary primary layout keeping learning extremely interactive with regional Assamese modules and crafts.",
    subjects: ["Regional Language (Assamese)", "English Language", "Basic Mathematics", "Environmental Studies", "Creative Arts & Assam Culture"]
  }
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    id: "trust-1",
    title: "Govt. Smart-Class Rooms",
    description: "Interactive visual smart projection boards backed by digital content packages for multi-sensory core learning.",
    metric: "10 Full-Sized Smart Rooms",
    iconName: "Tv"
  },
  {
    id: "trust-2",
    title: "Darpan Affiliated Admission",
    description: "Direct, transparent seat allocation and reservation compliance under the AHSEC central student intake engine.",
    metric: "100% Secure Process",
    iconName: "ShieldCheck"
  },
  {
    id: "trust-3",
    title: "Regional & State Laurel Holders",
    description: "Students regularly score high first-divisions (Star Marks & Distinction) and gold medals in sports and state debate fairs.",
    metric: "Top 5 Dibrugarh Schools",
    iconName: "Trophy"
  },
  {
    id: "trust-4",
    title: "Lush Tea-Garden Green Campus",
    description: "Spacious, ecofriendly campus containing large active sports arena, flora nurseries, and beautiful Assam identity motifs.",
    metric: "4.5 Acre Eco Campus",
    iconName: "Trees"
  }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "hl-1",
    title: "Assamese Heritage & Values",
    description: "Classes include regular sessions on Assamese historical achievements, Srimanta Sankardeva arts, Lachit Borphukan leadership, and local culture.",
    iconName: "Sprout"
  },
  {
    id: "hl-2",
    title: "Active NCC & Sports Cult",
    description: "Highly celebrated National Cadet Corps (NCC) unit grooming future service officers. Annual Assam state sports participations.",
    iconName: "ShieldAlert"
  },
  {
    id: "hl-3",
    title: "Modern Computer & Science Labs",
    description: "Equipped with advanced desktop setups, high-speed regional net connection, physics spectrometers, and bio-chemical visual aids.",
    iconName: "Cpu"
  },
  {
    id: "hl-4",
    title: "Clean Drink & Sanitized Spaces",
    description: "High volume drinking water filtration, safe sanitized separate washrooms, and strict zero-waste ecological campus protocols.",
    iconName: "Sparkles"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Himanta Jyoti Neog",
    role: "Alumni",
    batch: "HS Science Batch 2012 (Assistant Professor, Cotton University)",
    comment: "Tingkhong Higher Secondary School gave me wings. The teachers did not just guide me for the exam books, they instilled in me a passion for active research. Studying amidst the fresh scent of green fields was the absolute best phase of my childhood.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Smt. Pranati Phukan",
    role: "Parent",
    comment: "Both my children are students here. The focus on discipline, along with computer education and the traditional Assamese Bihu programs, makes this school truly stand out in entire upper Assam. Highly safe and modern enviorment.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Bhaskar Sonowal",
    role: "Student",
    batch: "Class XII Science",
    comment: "The smart classrooms make complex physics and mathematics layouts incredibly easy to learn. Our science club regularly goes to district exhibitions, and our principal helps us push our boundaries. I feel extremely proud to wear this school badge.",
    rating: 5
  }
];
