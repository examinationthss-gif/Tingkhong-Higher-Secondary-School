import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, User, Calendar, Briefcase, Mail, Send, CheckCircle2, Clock, 
  Search, Users, UserPlus, ShieldAlert, Navigation, ArrowRight, 
  MapPin, Phone, Globe, ChevronRight, Gift, Trophy, Star, BookOpen, 
  Facebook, Linkedin, Upload, Building, Megaphone, Flame, Shield, HelpCircle, Heart, DollarSign
} from 'lucide-react';
import { Language } from '../translations';

interface THSSAlumniNetworkProps {
  lang: Language;
}

interface AlumniMember {
  id: string;
  name: string;
  gender: string;
  email: string;
  mobile: string;
  hslcYear: string;
  hsYear: string;
  stream: 'Science' | 'Arts' | string;
  rollNumber?: string;
  profession: string;
  organization: string;
  designation: string;
  location: string;
  linkedin?: string;
  facebook?: string;
  achievements?: string;
  message?: string;
  photoUrl: string;
  isFeatured?: boolean;
  category: 'government' | 'education' | 'business' | 'healthcare' | 'engineering' | 'armed_forces' | 'entrepreneurship' | string;
}

export default function THSSAlumniNetwork({ lang }: THSSAlumniNetworkProps) {
  // 1. STATS DATA
  const stats = useMemo(() => [
    { label: { en: "Registered Alumni", as: "পঞ্জীকৃত প্ৰাক্তন ছাত্ৰ-ছাত্ৰী" }, value: "1,450+", icon: Users, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" },
    { label: { en: "Alumni Entrepreneurs", as: "উদ্যোগী সতীৰ্থ" }, value: "35+", icon: Flame, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30" },
    { label: { en: "Government Employees", as: "চৰকাৰী বিষয়া-কৰ্মচাৰী" }, value: "120+", icon: Building, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30" },
    { label: { en: "Teachers & Academics", as: "শিক্ষক আৰু শিক্ষাবিদ" }, value: "85+", icon: BookOpen, color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30" },
    { label: { en: "Professionals Worldwide", as: "বিশ্বব্যাপী কৰ্মৰত চিকিৎসক-অভিযন্তা" }, value: "310+", icon: Globe, color: "text-rose-600 bg-rose-50 dark:bg-rose-950/30" }
  ], []);

  // 2. PREPOPULATED REALISTIC ALUMNI LIST
  const INITIAL_ALUMNI: AlumniMember[] = [
    {
      id: "alumni-1",
      name: "Dr. Bhaskar Jyoti Gogoi",
      gender: "Male",
      email: "bj.gogoi@gmch.asso.in",
      mobile: "+91 94350 49100",
      hslcYear: "1992",
      hsYear: "1994",
      stream: "Science",
      profession: "Cardiovascular Chief Resident Surgeon",
      organization: "Gauhati Medical College & Hospital",
      designation: "Chief Resident Surgeon",
      location: "Guwahati, Assam",
      linkedin: "https://linkedin.com/in/mock-bhaskar-gogoi",
      facebook: "https://facebook.com/mock.bhaskar",
      achievements: "First class Distinction state awardee. Spearheaded rural healthcare camps in Tingkhong region.",
      message: "Believe in the power of patience. The science halls of Tingkhong gave me my core foundations which helped me clear GMCH medical benchmarks.",
      photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=250",
      isFeatured: true,
      category: "healthcare"
    },
    {
      id: "alumni-2",
      name: "Smt. Manashi Borgohain, ACS",
      gender: "Female",
      email: "manashi.borgohain.acs@assam.gov.in",
      mobile: "+91 88765 11200",
      hslcYear: "2000",
      hsYear: "2002",
      stream: "Arts",
      profession: "Assam Civil Service Administrator",
      organization: "Government of Assam",
      designation: "Joint Commissioner (Finance)",
      location: "Dispur, Guwahati",
      linkedin: "https://linkedin.com/in/mock-manashi-acs",
      facebook: "https://facebook.com/mock.manashi",
      achievements: "Cleared ACS civil services in first attempt. Recipient of District Clean Governance Excellence Seal.",
      message: "Tingkhong Higher Secondary School teaches us administrative discipline and deep human humility. Always stand by your community roots.",
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      isFeatured: true,
      category: "government"
    },
    {
      id: "alumni-3",
      name: "Prof. Kaustabh Mani Sonowal",
      gender: "Male",
      email: "kaustabh.sonowal@dibru.ac.in",
      mobile: "+91 70021 98400",
      hslcYear: "2006",
      hsYear: "2008",
      stream: "Arts",
      profession: "Assamese Philology & Literature Researcher",
      organization: "Dibrugarh University",
      designation: "Asst. Professor • Department of Assamese",
      location: "Dibrugarh, Assam",
      linkedin: "https://linkedin.com/in/mock-kaustabh-sonowal",
      facebook: "https://facebook.com/mock.kaustabh",
      achievements: "Edited several standard textbooks on Srimanta Sankardeva, Assamese folklore, and local tribal dialects.",
      message: "Language is a temple of culture. Our beautiful Assam Bihu legacy is nurtured safely inside Tingkhong's vibrant environment.",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      isFeatured: false,
      category: "education"
    },
    {
      id: "alumni-4",
      name: "Major Jyotishman Borgohain",
      gender: "Male",
      email: "j.borgohain@indianarmy.nic.in",
      mobile: "+91 99540 60000",
      hslcYear: "2003",
      hsYear: "2005",
      stream: "Science",
      profession: "Indian Armed Forces Officer",
      organization: "Indian Army (Kumaon Regiment)",
      designation: "Major",
      location: "Jammu & Kashmir Sector",
      linkedin: "https://linkedin.com/in/mock-major-borgohain",
      facebook: "https://facebook.com/mock.major.jyoti",
      achievements: "Recipient of Sena Medal for distinguished bravery during strategic rescue drills.",
      message: "The local Tingkhong NCC contingent raised me to face extreme environments with absolute physical fortitude and absolute loyalty to our nation.",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      isFeatured: true,
      category: "armed_forces"
    },
    {
      id: "alumni-5",
      name: "Smt. Bornali Borgohain",
      gender: "Female",
      email: "bornali.b@mugaheritage.com",
      mobile: "+91 98642 77100",
      hslcYear: "1996",
      hsYear: "1998",
      stream: "Arts",
      profession: "Muga Silk Heritage Exporter",
      organization: "Assam Heritage Silks & Craft Syndicate",
      designation: "Founder & Chief Executive Officer",
      location: "Sivasagar, Assam",
      linkedin: "https://linkedin.com/in/mock-bornali-muga",
      facebook: "https://facebook.com/bornali.weaving",
      achievements: "Secured Assam State Female Rural Entrepreneurship award, generating livelihood for over 250 local village weavers.",
      message: "The tea estates and community gardens around our school are repositories of unique organic textiles. Dream big, local resources are golden.",
      photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250",
      isFeatured: false,
      category: "entrepreneurship"
    },
    {
      id: "alumni-6",
      name: "Dr. Pallavi Chetia",
      gender: "Female",
      email: "pallavi.chetia@sac.isro.gov.in",
      mobile: "+91 91012 36511",
      hslcYear: "2010",
      hsYear: "2012",
      stream: "Science",
      profession: "Astrophysicist & Remote Sensing Scientist",
      organization: "Space Applications Centre, ISRO",
      designation: "Senior Scientist Grade B",
      location: "Ahmedabad, Gujarat",
      linkedin: "https://linkedin.com/in/mock-pallavi-isro",
      achievements: "Instrumental in calibration software systems for radar payloads in the lunar exploration project.",
      message: "Never let local limitations bracket your universal dreams. Our school science laboratory of Physics first kindled my cosmic queries.",
      photoUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=250",
      isFeatured: true,
      category: "engineering"
    }
  ];

  // Load custom registries from localStorage + combine with existing profiles
  const [alumniRegistry, setAlumniRegistry] = useState<AlumniMember[]>(() => {
    try {
      const saved = localStorage.getItem('thss_all_alumni_portal_data_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ALUMNI;
  });

  // Write registry helper
  const saveAlumniToStore = (data: AlumniMember[]) => {
    setAlumniRegistry(data);
    try {
      localStorage.setItem('thss_all_alumni_portal_data_v2', JSON.stringify(data));
    } catch (e) {
      console.error("Local storage sync error: ", e);
    }
  };

  // 3. REGISTRATION FORM STUFF
  const initialFormState = {
    name: '',
    gender: 'Male',
    mobile: '',
    email: '',
    hslcYear: '',
    hsYear: '',
    stream: 'Science',
    rollNumber: '',
    profession: '',
    organization: '',
    designation: '',
    location: '',
    linkedin: '',
    facebook: '',
    achievements: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Custom Profile Photo Mock Upload Store
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 4. SEARCH & SEARCH FILTERS STATE
  const [searchText, setSearchText] = useState('');
  const [filterYear, setFilterYear] = useState('All');
  const [filterProfession, setFilterProfession] = useState('All');
  const [filterStream, setFilterStream] = useState('All');

  // Filter Categories Option List helper
  const uniqueYears = useMemo(() => {
    const list = new Set<string>();
    alumniRegistry.forEach(al => {
      if (al.hsYear) list.add(al.hsYear);
      if (al.hslcYear) list.add(al.hslcYear);
    });
    return ['All', ...Array.from(list).sort((a,b) => parseInt(b) - parseInt(a))];
  }, [alumniRegistry]);

  const uniqueProfessions = [
    { value: 'All', en: 'All Professions', as: 'সকলো জীৱিকা' },
    { value: 'government', en: 'Government Service', as: 'চৰকাৰী বিষয়া' },
    { value: 'education', en: 'Education / Academics', as: 'শিক্ষা বিভাগ' },
    { value: 'business', en: 'Business Sector', as: 'ব্যৱসায়' },
    { value: 'healthcare', en: 'Healthcare', as: 'চিকিৎসা ক্ষেত্র' },
    { value: 'engineering', en: 'Engineering & Technology', as: 'প্ৰযুক্তি আৰু অভিযন্ত্ৰা' },
    { value: 'armed_forces', en: 'Armed Forces / Security', as: 'সেনাবাহিনী' },
    { value: 'entrepreneurship', en: 'Entrepreneurship', as: 'স্থানীয় উদ্যোগী' }
  ];

  // 5. FILTER WORKFLOW
  const filteredAlumniList = useMemo(() => {
    return alumniRegistry.filter(al => {
      // 1. Search text checks against name, organization, designation, or location
      const query = searchText.toLowerCase().trim();
      const matchSearch = !query || 
        al.name.toLowerCase().includes(query) || 
        al.organization.toLowerCase().includes(query) || 
        al.designation.toLowerCase().includes(query) || 
        al.location.toLowerCase().includes(query) || 
        al.profession.toLowerCase().includes(query);

      // 2. Year filter (checks both HSLC and HS year tags)
      const matchYear = filterYear === 'All' || al.hsYear === filterYear || al.hslcYear === filterYear;

      // 3. Profession Category Filter
      const matchProfession = filterProfession === 'All' || al.category === filterProfession;

      // 4. Stream Filter
      const matchStream = filterStream === 'All' || al.stream === filterStream;

      return matchSearch && matchYear && matchProfession && matchStream;
    });
  }, [alumniRegistry, searchText, filterYear, filterProfession, filterStream]);

  // 6. PHOTO CHANGE HANDLERS
  const handlePhotoSelect = (file: File) => {
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfilePhoto(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handlePhotoSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handlePhotoSelect(e.target.files[0]);
    }
  };

  // Mock Avatar selection helper
  const handleSelectMockAvatar = (url: string) => {
    setProfilePhoto(url);
    setPhotoName("Avatar_Default.jpg");
  };

  const PRESET_AVATARS = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150", // Female Prof
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", // Male Officer
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", // Female Tech
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", // Male Dr
  ];

  // 7. FORM SUBMIT VALIDATION
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const currentYear = new Date().getFullYear();

    if (!formData.name.trim()) {
      errors.name = lang === 'en' ? "Full Name is required." : "সম্পূৰ্ণ নাম উল্লেখ কৰাটো প্ৰয়োজনীয়।";
    }

    if (!formData.mobile.trim() || !/^\+?[0-9\s-]{10,15}$/.test(formData.mobile)) {
      errors.mobile = lang === 'en' ? "Provide a valid mobile number." : "সঠিক ঠিকনা সহ দূৰভাষ নম্বৰ লিখক।";
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = lang === 'en' ? "Provide a valid email address." : "সঠিক ইমেইল ঠিকনা উল্লেখ কৰক।";
    }

    // Validation for years
    const hslcNum = parseInt(formData.hslcYear);
    if (!formData.hslcYear.trim() || isNaN(hslcNum) || hslcNum < 1960 || hslcNum > currentYear) {
      errors.hslcYear = lang === 'en' ? `Enter a valid year (1960 - ${currentYear})` : "সঠিক হাইস্কুল শিক্ষান্ত বৰ্ষ উল্লেখ কৰক।";
    }

    const hsNum = parseInt(formData.hsYear);
    if (!formData.hsYear.trim() || isNaN(hsNum) || hsNum < 1962 || hsNum > currentYear) {
      errors.hsYear = lang === 'en' ? `Enter a valid year (1962 - ${currentYear})` : "সঠিক দ্বাদশ বৰ্ষ উল্লেখ কৰক।";
    }

    if (!formData.profession.trim()) {
      errors.profession = lang === 'en' ? "Provide current professional sector." : "বৰ্তমানৰ বৃত্তিমণ্ডলী উল্লেখ কৰক।";
    }

    if (!formData.organization.trim()) {
      errors.organization = lang === 'en' ? "Organization name required." : "কাৰ্যালয় বা প্ৰতিষ্ঠানৰ নামকৰণ লিখক।";
    }

    if (!formData.designation.trim()) {
      errors.designation = lang === 'en' ? "Designation/Role is required." : "বৰ্তমানৰ পদবী লিখা প্ৰয়োজনীয়।";
    }

    if (!formData.location.trim()) {
      errors.location = lang === 'en' ? "Current location is required." : "বৰ্তমানৰ থকা ঠাই লিখক।";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to error
      const errorEl = document.getElementById('alumni-registration-form-anchor');
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Match a category based on entered profession words if empty
      let computedCategory = 'engineering';
      const profLower = formData.profession.toLowerCase();
      if (profLower.includes('govt') || profLower.includes('civil') || profLower.includes('police') || profLower.includes('officer') || profLower.includes('acs') || profLower.includes('ias')) {
        computedCategory = 'government';
      } else if (profLower.includes('teacher') || profLower.includes('professor') || profLower.includes('lecturer') || profLower.includes('school') || profLower.includes('college')) {
        computedCategory = 'education';
      } else if (profLower.includes('business') || profLower.includes('founder') || profLower.includes('ceo') || profLower.includes('store') || profLower.includes('proprietor')) {
        computedCategory = 'business';
      } else if (profLower.includes('doctor') || profLower.includes('nurse') || profLower.includes('surgeon') || profLower.includes('clinical') || profLower.includes('mbbs') || profLower.includes('health')) {
        computedCategory = 'healthcare';
      } else if (profLower.includes('major') || profLower.includes('army') || profLower.includes('soldier') || profLower.includes('defense') || profLower.includes('assamadvisor')) {
        computedCategory = 'armed_forces';
      } else if (profLower.includes('entrepreneur') || profLower.includes('innovator') || profLower.includes('startup')) {
        computedCategory = 'entrepreneurship';
      }

      const newAlumni: AlumniMember = {
        id: `alumni-user-${Date.now()}`,
        name: formData.name,
        gender: formData.gender,
        email: formData.email,
        mobile: formData.mobile,
        hslcYear: formData.hslcYear,
        hsYear: formData.hsYear,
        stream: formData.stream,
        rollNumber: formData.rollNumber || undefined,
        profession: formData.profession,
        organization: formData.organization,
        designation: formData.designation,
        location: formData.location,
        linkedin: formData.linkedin || undefined,
        facebook: formData.facebook || undefined,
        achievements: formData.achievements || undefined,
        message: formData.message || undefined,
        photoUrl: profilePhoto || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        category: computedCategory
      };

      const updatedList = [newAlumni, ...alumniRegistry];
      saveAlumniToStore(updatedList);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form options
      setFormData(initialFormState);
      setProfilePhoto(null);
      setPhotoName('');
    }, 1500);
  };

  // 8. EVENTS DATA
  const events = useMemo(() => [
    {
      id: "ev-1",
      title: { en: "THSS Golden Era Diamond Reunion 2026", as: "টি.এইচ.এছ.এছ. ডায়মণ্ড সোণালী সতীৰ্থ মিলন উৎসৱ" },
      date: "2026-12-25",
      time: "9:00 AM - 5:00 PM",
      location: "THSS Central Lawn & Auditorium",
      type: "Reunion Event",
      color: "border-l-brand-gold bg-amber-50/50 dark:bg-amber-950/10",
      desc: { en: "A nostalgic assembly of legacy batches from 1972 to 2026. Includes cultural felicitation, Bihu choreographies, and an official Diamond souvenir release.", as: "১৯৭২ ৰ পৰা ২০২৬ লৈ সকলো পুৰণি বেচৰ একক মিলন সমাৰোহ। জ্যেষ্ঠ সতীৰ্থ সন্মিলন।" }
    },
    {
      id: "ev-2",
      title: { en: "Annual Higher Secondary Career Alignment Guidance 2026", as: "বার্ষিক কেৰিয়াৰ দিহানিৰ্দেশনা আৰু গাইডেন্স কৰ্মশালা" },
      date: "2026-08-11",
      time: "10:30 AM - 3:00 PM",
      location: "Institutional IT Hall & Virtual Zoom Sync",
      type: "Career Guidance",
      color: "border-l-blue-600 bg-blue-50/50 dark:bg-blue-950/10",
      desc: { en: "Alumni doctor, engineer, and ACS civil administrators host live panels guiding Class XI/XII scholars on central portal counseling & public sector syllabus.", as: "প্ৰাক্তন চিকিৎসা কৰ্মী, অভিযন্তা আৰু অসামৰিক বিষয়াৰদ্বাৰা বৰ্তমানৰ একাদশ শ্ৰেণীৰ ছাত্ৰ-ছাত্ৰীক কেৰিয়াৰ কউন্সেলিং।" }
    },
    {
      id: "ev-3",
      title: { en: "Alumni Srimanta Sankardeva Cultural Meet", as: "শংকৰদেৱ সংস্কৃতি আৰু সমাজ কল্যাণ অনুষ্ঠান" },
      date: "2026-09-18",
      time: "1:00 PM - 5:30 PM",
      location: "School Community Prayer Hall",
      type: "School Functions",
      color: "border-l-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/10",
      desc: { en: "Deep integration of youth roots. Singing and panel assessments focusing on rural Assamese literature stewardship and local school infrastructure.", as: "মহাপুৰুষ শ্ৰীশ্ৰী শংকৰদেৱৰ তিথি সংলগ্ন সুকুমাৰ কলা সমাৰোহ আৰু বঁটা প্ৰদান।" }
    },
    {
      id: "ev-4",
      title: { en: "Winter Rural Sports & NCC Alumni Meet 2027", as: "শীতকালীন এন.চি.চি আৰু ক্ৰীড়া সতীৰ্থ সন্মিলন ২০২৭" },
      date: "2027-01-08",
      time: "8:00 AM - 2:00 PM",
      location: "THSS Main Stadium Field",
      type: "Alumni Meet",
      color: "border-l-rose-600 bg-rose-50/50 dark:bg-rose-950/10",
      desc: { en: "Friendly cricket duel matching Senior Alumni Eleven vs. School Captains Eleven, combined with NCC drills honoring former cadets.", as: "প্ৰাক্তন এনচিচি কেডেট আৰু ক্ৰীড়াবিদসকলৰ চাহ বাগিচা ক্ৰিকেট সমাৰোহ।" }
    }
  ], []);

  // Clickable custom calendar events selector
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<string>('2026-12-25');
  const [calendarSuggestionSubmitted, setCalendarSuggestionSubmitted] = useState(false);
  const [calendarSuggestionText, setCalendarSuggestionText] = useState('');

  const activeDayEvent = useMemo(() => {
    return events.find(ev => ev.date === selectedCalendarDate);
  }, [events, selectedCalendarDate]);

  // Give Back pledging state
  const [pledgeType, setPledgeType] = useState('Mentorship');
  const [pledgeName, setPledgeName] = useState('');
  const [pledgeYear, setPledgeYear] = useState('');
  const [pledgeData, setPledgeData] = useState({ limitDays: '5 Days / Year', descText: '' });
  const [pledgeSuccess, setPledgeSuccess] = useState(false);

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeName.trim() || !pledgeYear.trim()) {
      alert("Please fill your Name and Batch Year to generate official certificate pledge.");
      return;
    }
    setPledgeSuccess(true);
  };

  return (
    <section id="alumni-network" className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-brand-green/5 dark:bg-brand-green/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-3xl pointer-events-none" />
      
      {/* Container sizing matches premium standard layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* ==========================================================
            HERO MAIN SECTION (PAGE TITLE & TAGLINE)
            ========================================================== */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold border border-brand-gold/30 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Trophy size={14} className="shrink-0 animate-pulse" />
            <span>{lang === 'en' ? "THSS Verified Alumni Network" : "টিংখাং উঃ মাঃ বিদ্যালয় প্ৰাক্তন ছাত্ৰ সংঘ"}</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#0d2a1b] dark:text-brand-cream tracking-tight">
            THSS Alumni Network
          </h2>
          <p className="font-serif font-semibold italic text-base sm:text-lg text-brand-gold-dark dark:text-brand-gold mt-2">
            "Connecting Generations, Inspiring Futures"
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* HERO BANNER SECTION & REALTIME STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Cover Photo card glassmorphism */}
          <div className="lg:col-span-7 bg-brand-green-dark text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Immersive background image with green dark mask overlay */}
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-green-dark/95 to-brand-green-dark/70" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] sm:text-xs font-bold font-mono text-brand-gold uppercase tracking-widest border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 rounded-full">
                {lang === 'en' ? "50+ Years of Academic Heritage" : "৫০ বছৰীয়া শৈক্ষিক ঐতিহ্য"}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-black tracking-tight leading-tight pt-2">
                {lang === 'en' ? "The Legacy Lives on in Every Tea garden & Skyward Horizon" : "সেউজ চাহপাতৰ পৰা মহাকাশ লৈ কঢ়িয়াই নেয়া এক গৌৰৱময় অধ্যায়"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-sans">
                {lang === 'en' 
                  ? "Whether you are leading research in ISRO sat hubs, managing state treasury inside Assamese administrative secretariats, or transforming school laboratories, you are the shining pride of Tingkhong Higher Secondary School."
                  : "ইছৰোৰ মহাকাশ পৰীক্ষাগাৰতেই হওক বা অসম সচিবালয়ৰ বিত্তীয় কোষতেই হওক, আপোনালোক আমাৰ গৌৰৱ!"}
              </p>
            </div>

            <div className="relative z-10 pt-8 sm:pt-12 flex flex-wrap gap-4 font-sans">
              <button 
                onClick={() => {
                  const el = document.getElementById('alumni-register-now');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:scale-103 cursor-pointer flex items-center gap-2"
              >
                <UserPlus size={14} />
                <span>{lang === 'en' ? "Join Alumni Network" : "আজিয়েই পঞ্জীয়ন কৰক"}</span>
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('alumni-events-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all hover:scale-103 cursor-pointer flex items-center gap-2"
              >
                <Calendar size={14} className="text-brand-gold" />
                <span>{lang === 'en' ? "Alumni Events Calendar" : "সংঘৰ দিনপঞ্জী খেলক"}</span>
              </button>
            </div>
          </div>

          {/* Premium Animated stat meters */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4.5">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-slate-50 dark:bg-slate-850 hover:bg-emerald-50/[0.12] border border-slate-200 dark:border-slate-800 rounded-2xl p-4.5 flex items-center gap-4.5 shadow-xs hover:shadow-md transition-all group"
              >
                <div className={`p-3.5 rounded-xl shrink-0 ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                  <stat.icon size={20} className="shrink-0" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-gold transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium font-sans mt-0.5 leading-tight">
                    {stat.label[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ==========================================================
            SUCCESS STORIES (spotlight and categorization cards)
            ========================================================== */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-black tracking-widest text-[#14532d] dark:text-brand-gold bg-brand-green/10 dark:bg-brand-gold/10 px-3.5 py-1 rounded-full uppercase inline-block">
              {lang === 'en' ? "DISTINGUISHED PORTRAITS" : "মেধাৱী কৃতিত্ব"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0d2a1b] dark:text-white mt-2">
              Alumni Success Stories & Spotlights
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-2.5">
              Highlighting historic pathways of candidates who successfully translated primary rural lessons into great accomplishments.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          {/* Featured Alumni Spotlight: Magazine styled Large Card Layout */}
          <div className="bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden mb-12 group">
            <div className="absolute right-[-30px] top-[-30px] w-64 h-64 bg-brand-gold/5 rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo & verified indicators */}
              <div className="lg:col-span-4 relative self-center flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  {/* Dashed Gold Frame */}
                  <div className="absolute -inset-3.5 rounded-2xl border-2 border-dashed border-brand-gold/45 group-hover:border-brand-gold/70 transition-colors duration-300 pointer-events-none" />
                  
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-250 shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                      alt="Featured Alumni" 
                      className="w-full h-full object-cover filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-brand-gold text-brand-dark px-2.5 py-0.8 text-[9px] font-mono font-black uppercase rounded-md shadow-xs">
                      {lang === 'en' ? "FEATURED VERIFIED" : "মনোনীত প্ৰতিভা"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Narrative & Quotes */}
              <div className="lg:col-span-8 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-black text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider block">
                    PUBLIC ADMINISTRATION & CIVIL LEADERSHIP • BATCH 2002
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-black text-[#0d2a1b] dark:text-brand-cream">
                    Smt. Manashi Borgohain, ACS
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-slate-550 dark:text-slate-400 font-bold">
                    Joint Commissioner (Finance), Government of Assam Administration
                  </p>
                </div>

                <div className="bg-brand-green/5 dark:bg-brand-green/10 border-l-4 border-brand-green dark:border-brand-gold p-4 rounded-r-xl">
                  <p className="font-serif italic text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    "Tingkhong Higher Secondary School represents the pure democratic beating heartbeat of Upper Assam. The school taught me that clean governance begins with educational empathy, helping daughters of workers stand side-by-side with global dreamers."
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  <p>
                    <strong>Outstanding Career Route:</strong> After completing Class XII Arts stream examinations with stellar highest-division records, Smt. Manashi completed graduate studies at Cotton University. She successfully passed the Assam Public Service Commission (APSC) exams under ACS civil officer cadres, heading multiple regional subdivisions prior to her integration at Dispur's fiscal planning desks.
                  </p>
                  <p className="flex items-center gap-2 font-mono text-brand-green dark:text-brand-gold font-black text-[10px] uppercase">
                    <Award size={14} />
                    <span>Donor & Sponsor of the THSS Female Literacy Scholarship Board</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Categorized Story grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
            {[
              { category: "government", title: "Government Service", name: "ACS Cabinets", count: "12+ Placed Officers", desc: "Our alumni serve in police, civil services, and regional municipal divisions nationwide.", icon: Building, color: "border-blue-200 dark:border-blue-900 bg-blue-50/10" },
              { category: "healthcare", title: "Doctors & Healthcare", name: "Dr. Bhaskar Jyoti", count: "25+ active workers", desc: "Graduates practicing inside GMCH, AMC Dibrugarh, and private healthcare institutions.", icon: Heart, color: "border-emerald-200 dark:border-emerald-900 bg-emerald-50/10" },
              { category: "armed_forces", title: "Armed Forces & Security", name: "Indian Army & Airforce", count: "18+ serving heroes", desc: "Active-duty commanders hailing from school NCC wings, maintaining border protection.", icon: Shield, color: "border-rose-200 dark:border-rose-900 bg-rose-50/10" }
            ].map((st, i) => (
              <div 
                key={i}
                className={`p-6 border rounded-2xl ${st.color} hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shrink-0 text-brand-gold-dark shadow-2xs">
                      <st.icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-widest">{st.count}</span>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-serif font-black text-slate-900 dark:text-white leading-tight">{st.title}</h4>
                    <p className="text-[10px] uppercase font-mono font-bold text-brand-gold-dark mt-1">Spotlight: {st.name}</p>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 text-left">
                  <button 
                    onClick={() => {
                      setFilterProfession(st.category);
                      const el = document.getElementById('searchable-alumni-directory');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-xs font-black text-brand-green dark:text-brand-gold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Filter Directory</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ==========================================================
            ALUMNI EVENTS & INTERACTIVE CALENDAR
            ========================================================== */}
        <div id="alumni-events-section" className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-black tracking-widest text-brand-gold-dark bg-brand-gold/10 px-3 py-0.8 rounded-full uppercase inline-block">
              {lang === 'en' ? "CALENDAR OF REUNION" : "সতীৰ্থ অনুষ্ঠান সংসূচী"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0d2a1b] dark:text-white mt-1.5">
              Alumni Events & Coordination Schedule
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2 font-sans">
              Connect in physical reunions, local guidance programs, and school celebration projects. Suggest meetups directly.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-50 dark:bg-slate-850 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            
            {/* Interactive Custom Calendar Visual (Clickable Days to change selected date event) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                  <h4 className="font-serif text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Calendar size={18} className="text-brand-green" />
                    <span>Interactive Calendar View</span>
                  </h4>
                  <span className="font-mono text-[10.5px] text-brand-gold-dark font-black bg-brand-gold/15 px-2 py-0.5 rounded uppercase">2026 / 2027</span>
                </div>

                {/* Calendar grid view mockup representation */}
                <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-4 shadow-2xs">
                  
                  {/* Month header selector */}
                  <div className="flex justify-between items-center text-xs font-black text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span>AUGUST / DECEMBER 2026</span>
                    <span className="text-[10px] font-mono font-semibold text-slate-400">SELECT EVENTS DAYS</span>
                  </div>

                  {/* Day header row */}
                  <div className="grid grid-cols-7 text-center gap-1 mb-2 text-[10px] font-black text-slate-400 uppercase">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>

                  {/* Day grid */}
                  <div className="grid grid-cols-7 text-center gap-1.5 font-mono text-xs">
                    {/* Dummy padding block */}
                    <span className="text-slate-300 dark:text-slate-700 p-2 select-none">28</span>
                    <span className="text-slate-300 dark:text-slate-705 p-2 select-none">29</span>
                    <span className="text-slate-300 dark:text-slate-705 p-2 select-none">30</span>
                    
                    {/* Month Days */}
                    {[
                      { day: '1', date: '2026-08-01' },
                      { day: '2', date: '2026-08-02' },
                      { day: '3', date: '2026-08-03' },
                      { day: '4', date: '2026-08-04' },
                      { day: '5', date: '2026-08-05' },
                      { day: '6', date: '2026-08-06' },
                      { day: '7', date: '2026-08-07' },
                      { day: '8', date: '2026-08-08' },
                      { day: '9', date: '2026-08-09' },
                      { day: '10', date: '2026-08-10' },
                      { day: '11', date: '2026-08-11', hasEvent: true, label: "Career Guidance Workshop" },
                      { day: '12', date: '2026-08-12' },
                      { day: '13', date: '2026-08-13' },
                      { day: '14', date: '2026-08-14' },
                      { day: '15', date: '2026-08-15' },
                      { day: '16', date: '2026-08-16' },
                      { day: '17', date: '2026-08-17' },
                      { day: '18', date: '2026-12-25', hasEvent: true, label: "Diamond Reunion Event" }, // December mapping mock
                      { day: '19', date: '2026-08-19' },
                      { day: '20', date: '2026-08-20' },
                      { day: '21', date: '2026-08-21' },
                      { day: '22', date: '2026-08-22' },
                      { day: '23', date: '2026-08-23' },
                      { day: '24', date: '2026-08-24' },
                      { day: '25', date: '2026-08-25' },
                      { day: '26', date: '2026-08-26' },
                    ].map((item, idx) => {
                      const isActive = selectedCalendarDate === item.date;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedCalendarDate(item.date);
                            setCalendarSuggestionSubmitted(false);
                          }}
                          className={`p-1.5 focus:outline-none rounded-lg font-black transition-all text-center flex flex-col items-center justify-between relative cursor-pointer ${
                            isActive 
                              ? 'bg-brand-green text-white shadow-xs scale-110' 
                              : item.hasEvent 
                                ? 'bg-brand-gold/20 text-brand-gold-dark hover:bg-brand-gold/30 ring-2 ring-brand-gold/40 font-black'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100'
                          }`}
                        >
                          <span>{item.day}</span>
                          {item.hasEvent && !isActive && (
                            <span className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-gold-dark" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* Legend indicator */}
                <div className="flex gap-4 text-[10px] font-mono font-bold dark:text-slate-400 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-brand-green rounded" />
                    <span>Selected Date</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-brand-gold/45 rounded ring-2 ring-brand-gold/30" />
                    <span>Active Event Days</span>
                  </div>
                </div>

              </div>

              {/* Suggest a Meetup interactive Form widget */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h5 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Megaphone size={14} className="text-brand-gold" />
                  <span>Propose an Alumni Meetup</span>
                </h5>

                {calendarSuggestionSubmitted ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 p-3 rounded-lg text-[11px] text-emerald-800 dark:text-emerald-300">
                    Your suggested meetup has been logged for regional administrative evaluation. Thank you for taking active leadership!
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder={lang === 'en' ? "e.g., Batch 1998 Coffee Reunion" : "উদাহৰণ: ১৯৯৮ বৰ্ষৰ সতীৰ্থ সভা..."}
                      value={calendarSuggestionText}
                      onChange={(e) => setCalendarSuggestionText(e.target.value)}
                      className="flex-1 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-850 px-3 py-1.5 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                    <button 
                      onClick={() => {
                        if (!calendarSuggestionText.trim()) return;
                        setCalendarSuggestionSubmitted(true);
                      }}
                      className="px-3 bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Propose
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Event Description Panel details responding to calendar change */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                  <h4 className="font-serif text-lg font-black text-slate-900 dark:text-white">
                    {lang === 'en' ? "Associated Event Coordinates" : "দিনপঞ্জী সবিশেষ কৰ্মসূচী"}
                  </h4>
                  <span className="font-mono text-xs text-slate-400">Selected event slot</span>
                </div>

                <AnimatePresence mode="wait">
                  {activeDayEvent ? (
                    <motion.div
                      key={activeDayEvent.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={`p-5 rounded-2xl border-l-4 ${activeDayEvent.color} border border-slate-200 dark:border-slate-800 space-y-3.5 text-left`}
                    >
                      <div className="flex justify-between items-baseline gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-black text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider">
                          {activeDayEvent.type}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                          <Calendar size={11} />
                          <span>{activeDayEvent.date}</span>
                        </div>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-[#0d2a1b] dark:text-brand-cream">
                        {activeDayEvent.title[lang]}
                      </h4>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-605">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-slate-400 shrink-0" />
                          <span>Slot: {activeDayEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-slate-400 shrink-0" />
                          <span className="truncate">Venue: {activeDayEvent.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-150 dark:border-slate-800">
                        {activeDayEvent.desc[lang]}
                      </p>

                      <div className="pt-2">
                        <button 
                          onClick={() => alert(`Seat successfully registered for event: ${activeDayEvent.title.en}. Official access pass sent to school registry.`)}
                          className="px-4 py-1.5 bg-brand-green hover:bg-brand-green-light text-white text-[11px] font-black rounded-lg transition-all"
                        >
                          RSVP & Claim Pass
                        </button>
                      </div>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-event"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                        <HelpCircle size={18} />
                      </div>
                      <p className="font-serif font-black text-slate-850 dark:text-slate-200 text-sm">
                        No official school-wide events scheduled for {selectedCalendarDate}
                      </p>
                      <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm mx-auto">
                        You can propose a regional coffee meetup or batch discussion using the suggestion panel on the left, which will immediately alert other registered members.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* General list of all events for easy scanning */}
              <div className="mt-6 space-y-2.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block text-left">
                  ALL UPCOMING EVENT CHANNELS
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {events.map(ev => (
                    <button
                      key={ev.id}
                      onClick={() => {
                        setSelectedCalendarDate(ev.date);
                        setCalendarSuggestionSubmitted(false);
                      }}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all transition-colors flex items-center justify-between gap-1 cursor-pointer ${
                        selectedCalendarDate === ev.date
                          ? 'border-brand-green bg-brand-green/5 text-brand-green font-extrabold'
                          : 'border-slate-200 hover:border-slate-350 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <span className="truncate pr-1">{ev.title[lang]}</span>
                      <ChevronRight size={14} className="shrink-0 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ==========================================================
            SEARCHABLE ALUMNI DIRECTORY
            ========================================================== */}
        <div id="searchable-alumni-directory" className="mb-24">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-black text-brand-green dark:text-brand-gold bg-brand-green/10 dark:bg-brand-gold/10 px-3 py-1 rounded-full uppercase inline-block font-sans">
              {lang === 'en' ? "GLOBAL DIRECTORY" : "বিশ্বব্যাপী সতীৰ্থ সূচী"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              Browse Registered THSS Alumni
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2 font-sans">
              Fulfill professional connections. Use custom streamlined filters based on graduation batch, streamlined fields, and key occupations.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="bg-slate-50 dark:bg-slate-850 p-4.5 sm:p-6.5 rounded-3xl border border-slate-200 dark:border-slate-800 mb-8 flex flex-col md:flex-row gap-4 items-stretch">
            
            {/* Search inputs */}
            <div className="flex-1 min-w-0 relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={lang === 'en' ? "Search sartyas by name, location, organization, or roles..." : "নাম, বৰ্তমানৰ পদবী বা কাৰ্যালয় অনুসৰি সন্ধান কৰক..."}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </div>

            {/* Filter 1: Stream */}
            <div className="w-full md:w-44">
              <select
                value={filterStream}
                onChange={(e) => setFilterStream(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-xs rounded-xl focus:outline-none"
              >
                <option value="All">{lang === 'en' ? "All Streams" : "সকলো শাখা"}</option>
                <option value="Science">Science Stream</option>
                <option value="Arts">Arts Stream</option>
              </select>
            </div>

            {/* Filter 2: Profession */}
            <div className="w-full md:w-56">
              <select
                value={filterProfession}
                onChange={(e) => setFilterProfession(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-xs rounded-xl focus:outline-none"
              >
                {uniqueProfessions.map(pr => (
                  <option key={pr.value} value={pr.value}>{lang === 'en' ? pr.en : pr.as}</option>
                ))}
              </select>
            </div>

            {/* Filter 3: Batch Passing Year */}
            <div className="w-full md:w-36">
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-xs rounded-xl focus:outline-none"
              >
                <option value="All">{lang === 'en' ? "All Years" : "সকলো বৰ্ষ"}</option>
                {uniqueYears.filter(y => y !== 'All').map(y => (
                  <option key={y} value={y}>{y} Batch</option>
                ))}
              </select>
            </div>

          </div>

          {/* Directory result Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAlumniList.length > 0 ? (
                filteredAlumniList.map((al, idx) => (
                  <motion.div
                    layout
                    key={al.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                  >
                    
                    {/* Header profile panel */}
                    <div className="p-5 space-y-4">
                      
                      <div className="flex gap-3.5 items-start">
                        
                        {/* Profile photo with golden ring for featured status */}
                        <div className="relative shrink-0">
                          <img 
                            src={al.photoUrl} 
                            alt={al.name} 
                            className="w-13 h-13 rounded-xl object-cover filter brightness-95"
                            referrerPolicy="no-referrer"
                          />
                          {al.isFeatured && (
                            <span className="absolute -bottom-1 -right-1 bg-brand-gold text-brand-dark p-0.5 rounded-md border border-white text-[8px] font-black uppercase">
                              STAR
                            </span>
                          )}
                        </div>

                        {/* Name and designations */}
                        <div className="space-y-0.5 text-left min-w-0">
                          <h4 className="font-serif font-black text-slate-950 dark:text-white text-sm sm:text-base truncate group-hover:text-brand-green dark:group-hover:text-brand-gold transition-colors">
                            {al.name}
                          </h4>
                          <p className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight truncate">
                            {al.designation}
                          </p>
                          <p className="text-[10px] text-brand-gold-dark dark:text-brand-gold font-bold flex items-center gap-1">
                            <Building size={10} className="shrink-0" />
                            <span className="truncate">{al.organization}</span>
                          </p>
                        </div>
                      </div>

                      {/* Info lines table */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 text-left">
                        
                        <div className="flex justify-between font-mono">
                          <span className="font-semibold text-slate-400 uppercase text-[9px]">Academic Info:</span>
                          <span className="font-bold text-slate-900 dark:text-white">Batch {al.hsYear ? al.hsYear : al.hslcYear} ({al.stream})</span>
                        </div>

                        <div className="flex justify-between font-mono">
                          <span className="font-semibold text-slate-400 uppercase text-[9px]">Location:</span>
                          <span className="font-bold truncate max-w-[150px]">{al.location}</span>
                        </div>

                        {al.achievements && (
                          <p className="text-[10px] text-slate-500 bg-slate-50 dark:bg-slate-850 p-2 rounded-lg leading-relaxed mt-2 italic font-sans border border-slate-100 dark:border-slate-800">
                            " {al.achievements} "
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Footer connect panel */}
                    <div className="bg-slate-50 dark:bg-slate-850 px-5 py-3 border-t border-slate-150 dark:border-slate-800 flex justify-between items-center gap-3">
                      <div className="flex gap-2">
                        {al.linkedin && (
                          <a href={al.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Linkedin size={14} />
                          </a>
                        )}
                        {al.facebook && (
                          <a href={al.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-800 transition-colors">
                            <Facebook size={14} />
                          </a>
                        )}
                        <a href={`mailto:${al.email}`} className="text-slate-400 hover:text-brand-green transition-colors">
                          <Mail size={14} />
                        </a>
                      </div>

                      {al.message ? (
                        <button 
                          onClick={() => alert(`Direct Mentor Message from ${al.name}:\n\n"${al.message}"`)}
                          className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-350 dark:border-slate-800 text-[10px] font-bold rounded-lg hover:bg-brand-green hover:text-white transition-all cursor-pointer"
                        >
                          Read Mentor Note
                        </button>
                      ) : (
                        <span className="text-[9px] font-mono text-slate-400 uppercase">Verified Member</span>
                      )}
                    </div>

                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center py-16 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-dashed border-slate-300">
                  <p className="text-sm text-slate-400">
                    No registered sartyas match your specific query or filter options.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchText('');
                      setFilterYear('All');
                      setFilterProfession('All');
                      setFilterStream('All');
                    }}
                    className="mt-3 text-xs font-black text-brand-green dark:text-brand-gold underline"
                  >
                    Reset Directory Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* ==========================================================
            ALUMNI REGISTRATION FORM 
            ========================================================== */}
        <div id="alumni-register-now" className="bg-slate-50 dark:bg-slate-850 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-md mb-24 relative overflow-hidden">
          <div id="alumni-registration-form-anchor" className="absolute top-[-200px]" />
          
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-gold/10 rounded-tl-full pointer-events-none" />

          <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-serif text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <UserPlus size={22} className="text-brand-green" />
                <span>Alumni Registration Portal</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Establish your profile on the school registry to mentor Class XI/XII candidates or register reunion seats.
              </p>
            </div>
            
            <div className="bg-brand-green/10 text-brand-green border border-brand-green/20 text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md">
              Secure Government SSL Encryption
            </div>
          </div>

          {submitSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-14 max-w-xl mx-auto space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-300 border border-emerald-150 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={32} className="animate-pulse" />
              </div>
              
              <h4 className="font-serif text-2xl font-black text-slate-900 dark:text-white">
                Registration Profile Cataloged!
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                Thank you for anchoring your credentials with Tingkhong Higher Secondary School Alumni. Your member profile was compiled successfully and synchronized to the Live Directory tab above.
              </p>

              <button 
                onClick={() => {
                  setSubmitSuccess(false);
                  const el = document.getElementById('searchable-alumni-directory');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-6 py-2 bg-brand-green hover:bg-brand-green-light text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all"
              >
                Browse Directory For My Card
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 font-sans text-left">
              
              {/* Grid split for Personal, Academic and Professional sections */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Panel row Left: Personal & Academic */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Field group 1: Personal Coordinates */}
                  <div className="space-y-4.5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-2xs">
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-green dark:text-brand-gold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <User size={14} className="shrink-0" />
                      <span>1. Personal Coordinates Information</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g., Dilip Phukan"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                            formErrors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-green'
                          }`}
                        />
                        {formErrors.name && <p className="text-[10px] text-red-500 font-bold">{formErrors.name}</p>}
                      </div>

                      {/* Gender selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Gender Selection <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-brand-green"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Phone mobile */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="+91 94000 00000"
                            className={`w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                              formErrors.mobile ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-green'
                            }`}
                          />
                        </div>
                        {formErrors.mobile && <p className="text-[10px] text-red-500 font-bold">{formErrors.mobile}</p>}
                      </div>

                      {/* Email profile */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g., dilip@domain.com"
                            className={`w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                              formErrors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-green'
                            }`}
                          />
                        </div>
                        {formErrors.email && <p className="text-[10px] text-red-500 font-bold">{formErrors.email}</p>}
                      </div>

                    </div>
                  </div>

                  {/* Field group 2: Academic Registry at THSS */}
                  <div className="space-y-4.5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-2xs">
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-green dark:text-brand-gold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <BookOpen size={14} className="shrink-0" />
                      <span>2. School Academic Credentials at Tingkhong</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      
                      {/* HSLC Year */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          HSLC Pass Year <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="hslcYear"
                          maxLength={4}
                          value={formData.hslcYear}
                          onChange={handleInputChange}
                          placeholder="e.g., 2004"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                            formErrors.hslcYear ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.hslcYear && <p className="text-[10px] text-red-500 font-bold">{formErrors.hslcYear}</p>}
                      </div>

                      {/* HS Year */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          HS Pass Year <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="hsYear"
                          maxLength={4}
                          value={formData.hsYear}
                          onChange={handleInputChange}
                          placeholder="e.g., 2006"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                            formErrors.hsYear ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.hsYear && <p className="text-[10px] text-red-500 font-bold">{formErrors.hsYear}</p>}
                      </div>

                      {/* Stream */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          HS Stream <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="stream"
                          value={formData.stream}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-brand-green"
                        >
                          <option value="Science">Science Stream</option>
                          <option value="Arts">Arts Stream</option>
                        </select>
                      </div>

                      {/* Roll Number optional */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 font-medium">
                          Roll / Registration (Opt)
                        </label>
                        <input
                          type="text"
                          name="rollNumber"
                          value={formData.rollNumber}
                          onChange={handleInputChange}
                          placeholder="e.g., B02-140"
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Field group 3: Professional Info */}
                  <div className="space-y-4.5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-2xs">
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-green dark:text-brand-gold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <Briefcase size={14} className="shrink-0" />
                      <span>3. Present Professional Coordinates</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Occupation */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Current Area of Occupation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="profession"
                          value={formData.profession}
                          onChange={handleInputChange}
                          placeholder="e.g., Software Engineering or Medical"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                            formErrors.profession ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.profession && <p className="text-[10px] text-red-500 font-bold">{formErrors.profession}</p>}
                      </div>

                      {/* Organization */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Organization / Employer <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="e.g., TATA Consultancy Services"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                            formErrors.organization ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.organization && <p className="text-[10px] text-red-500 font-bold">{formErrors.organization}</p>}
                      </div>

                      {/* Designation */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Designation / Designative Role <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          placeholder="e.g., Senior Systems Analyst"
                          className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                            formErrors.designation ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.designation && <p className="text-[10px] text-red-500 font-bold">{formErrors.designation}</p>}
                      </div>

                      {/* Location */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Current Location / Operations Base <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g., Pune, Maharashtra"
                            className={`w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm rounded-xl focus:outline-none ${
                              formErrors.location ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {formErrors.location && <p className="text-[10px] text-red-500 font-bold">{formErrors.location}</p>}
                      </div>

                    </div>
                  </div>

                  {/* Field group 4: Social Coordinates & Mentoring text */}
                  <div className="space-y-4.5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-2xs">
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-green dark:text-brand-gold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <Megaphone size={14} className="shrink-0" />
                      <span>4. Social Links & Peer Mentorship note</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* LinkedIn link */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-405 flex items-center gap-1">
                          <Linkedin size={12} />
                          <span>LinkedIn Address (Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourname"
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none"
                        />
                      </div>

                      {/* Facebook link */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-405 flex items-center gap-1">
                          <Facebook size={12} />
                          <span>Facebook Profile (Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleInputChange}
                          placeholder="https://facebook.com/yourprofile"
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-2">
                      {/* Achievements text */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Your Key Achievements (Optional)
                        </label>
                        <textarea
                          name="achievements"
                          rows={2}
                          value={formData.achievements}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "List any state board awards, service entries or college milestones..." : "আপোনাৰ সফলতাসমূহ চমুকৈ লিখক..."}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                        />
                      </div>

                      {/* Message to current student */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Message / Advice for Current THSS Students (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={lang === 'en' ? "Share words of courage regarding exams or local career directions..." : "বৰ্তমানৰ ছাত্ৰ-ছাত্ৰী সতীৰ্থলৈ অনুপ্ৰেৰণাদায়ক বাণী..."}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                        />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Panel row Right: PROFILE PHOTO UPLOAD */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-5 shadow-2xs space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0d2a1b] dark:text-brand-gold border-b border-slate-100 dark:border-slate-800 pb-2">
                    Profile Photo Attachment
                  </h4>

                  <div 
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={`border-2 border-dashed rounded-2xl p-6.5 text-center transition-all ${
                      dragActive 
                        ? 'border-brand-green bg-brand-green/5' 
                        : profilePhoto 
                          ? 'border-brand-gold/50 bg-brand-gold/5' 
                          : 'border-slate-250 dark:border-slate-800 hover:border-brand-green/40'
                    }`}
                  >
                    {profilePhoto ? (
                      <div className="space-y-4">
                        <img 
                          src={profilePhoto} 
                          alt="Cropped Preview" 
                          className="w-24 h-24 rounded-2xl object-cover mx-auto border-2 border-brand-gold shadow-sm"
                        />
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-slate-850 dark:text-white truncate max-w-[180px] mx-auto">
                            {photoName}
                          </p>
                          <p className="text-[10px] text-emerald-600 font-bold">✓ Upload successfully cropped</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setProfilePhoto(null);
                            setPhotoName('');
                          }}
                          className="text-[10px] font-bold text-red-500 hover:underline"
                        >
                          Remove Photo
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 rounded-xl flex items-center justify-center mx-auto text-slate-400">
                          <Upload size={18} />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-slate-800 dark:text-white">
                            Drag & Drop Profile photo
                          </p>
                          <p className="text-[10px] text-slate-400">
                            or click to select file
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3 py-1 bg-brand-green/10 text-brand-green font-bold text-[11px] rounded-lg border border-brand-green/20"
                        >
                          Choose JPG/PNG
                        </button>
                        <input 
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    )}
                  </div>

                  {/* Preset alternative avatars layout in case the user does not want to upload a private photo */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10.5px] font-mono font-bold text-slate-400 uppercase text-left">
                      OR CHOOSE AN OFFICIAL PRESET AVATAR:
                    </p>
                    <div className="flex gap-2.5 justify-between">
                      {PRESET_AVATARS.map((av, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSelectMockAvatar(av)}
                          className={`w-11 h-11 rounded-xl overflow-hidden border-2 transition-all cursor-pointer hover:scale-105 ${
                            profilePhoto === av ? 'border-brand-green scale-110 shadow-xs' : 'border-slate-200'
                          }`}
                        >
                          <img src={av} alt="Preset Avatar" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Validation alert banner if errors exist */}
              {Object.keys(formErrors).length > 0 && (
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl flex items-center gap-3 text-xs text-red-750 dark:text-red-300">
                  <ShieldAlert size={18} className="shrink-0" />
                  <div>
                    <strong>Registration Form Incomplete:</strong> Please fill out all required fields marked with an asterisk (*) correctly before publishing to directory.
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3.5 bg-brand-green hover:bg-brand-green-light disabled:bg-slate-400 font-extrabold text-[#faf9f5] rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing Credentials...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Publish Profile to Registry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* ==========================================================
            GIVE BACK TO SCHOOL OPPORTUNITIES 
            ========================================================== */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-black text-brand-green dark:text-brand-gold bg-brand-green/10 dark:bg-brand-gold/10 px-3.5 py-1 rounded-full uppercase inline-block">
              {lang === 'en' ? "GIVE BACK OPTIONS" : "শিক্ষানুষ্ঠানলৈ বৰঙণি"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0d2a1b] dark:text-white mt-1.5">
              Support Core School Development
            </h3>
            <p className="text-xs text-gray-500 max-w-xl mx-auto mt-2 font-sans">
              Help current Tingkhong scholars match global standards. Choose from multiple volunteer pipelines.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Opportunities descriptions cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { type: 'Mentorship', label: { en: "1-on-1 Academic Mentorship Map", as: "একক শৈক্ষিক পৰামৰ্শদাতৃত্ব" }, icon: User, text: { en: "Provide direct advice to Class XII Science/Arts students clearing entrance state tests or selecting colleges.", as: "পৰীক্ষাৰ প্ৰস্তুতিৰ বাবে ছাত্ৰ-ছাত্ৰীক পোনপটীয়া সহায় কৰক।" } },
                { type: 'Career Guidance', label: { en: "Live Career Guidance Seminars", as: "কেৰিয়াৰ গাইডেন্স অনুষ্ঠান" }, icon: Briefcase, text: { en: "Coordinate interactive visual sessions inside our digital lab, explaining government public syllabus pathways.", as: "বিদ্যাৰ্থীক ডিজিটেল প্ৰযুক্তি বিষয়ক কৰ্মশালা প্ৰদান কৰক।" } },
                { type: 'Guest Lectures', label: { en: "Practical Science Guest Lectures", as: "শৈক্ষিক বিশেষ বক্তৃতা" }, icon: BookOpen, text: { en: "Present hands-on chemical experiments, coding paradigms, or physics calibrations during your regional visits to Assam.", as: "বিজ্ঞান আৰু প্ৰযুক্তিৰ ব্যৱহাৰিক দিশ সামৰি বিশেষ শ্ৰেণী লওক।" } },
                { type: 'School Development Support', label: { en: "Smart Class Infrastructure Sponsorship", as: "বিদ্যালয় আন্তঃগাঁথনি উন্নয়নমূলক বৰঙণি" }, icon: Building, text: { en: "Assist our administrative committee in procuring advanced projection setups, green blackboards, or reference books.", as: "কম্পিউটাৰ লেব বা পুথিভঁৰাললৈ প্ৰয়োজনীয় সামগ্ৰী দান কৰক।" } },
                { type: 'Scholarship Sponsorship', label: { en: "Ashok Gogoi Academic Excellence Scholarship", as: "অশোক গগৈ মেধা জলপানি পুজি" }, icon: Gift, text: { en: "Directly sponsor the tuition sheets & enrollment fees for bright pupils belonging to tea community families in Dibrugarh.", as: "চাহ বাগিচা সম্প্ৰদায়ৰ অভাৱগ্ৰস্ত মেধাৱী ছাত্ৰ-ছাত্ৰীলৈ জলপানি প্ৰদান।" } }
              ].map((opt, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setPledgeType(opt.type);
                    setPledgeSuccess(false);
                    let limitVal = "5 Days / Year";
                    if (opt.type === 'School Development Support') limitVal = "Infrastructure Gift Pledge";
                    else if (opt.type === 'Scholarship Sponsorship') limitVal = "INR 10,000 / Scholar Yearly";
                    else if (opt.type === 'Guest Lectures') limitVal = "1 Lecture / Semester";
                    setPledgeData({ limitDays: limitVal, descText: '' });
                  }}
                  className={`w-full p-4.5 rounded-2xl border text-left flex items-start gap-4 transition-all cursor-pointer ${
                    pledgeType === opt.type 
                      ? 'border-brand-green bg-brand-green/5 dark:bg-brand-green/10 shadow-sm scale-[1.01]' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-350 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${pledgeType === opt.type ? 'bg-brand-green text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-505 dark:text-slate-400'}`}>
                    <opt.icon size={18} />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-950 dark:text-white leading-tight">
                      {opt.label[lang]}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {opt.text[lang]}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Give Back Pledging Form Widget */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                  PLEDGE GENERATOR
                </span>
                <h4 className="font-serif text-lg font-black text-brand-green-dark dark:text-brand-cream mt-1">
                  Commit Voluntary Support Pledge
                </h4>
                <div className="w-12 h-0.5 bg-brand-gold mt-2 rounded" />

                <AnimatePresence mode="wait">
                  {pledgeSuccess ? (
                    <motion.div
                      key="pledge-success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-5 border border-emerald-250 bg-white dark:bg-slate-900 rounded-2xl text-center space-y-4"
                    >
                      <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-300 border border-emerald-150 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 size={22} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                          Official Pledge Authenticated!
                        </h4>
                        <p className="text-[11.5px] text-slate-505 dark:text-slate-400 leading-relaxed font-sans">
                          Thank you <strong>{pledgeName}</strong> (Batch of {pledgeYear})! You have committed to the <strong>{pledgeType}</strong> support pipeline with benchmark metric: <strong>{pledgeData.limitDays}</strong>.
                        </p>
                        <p className="text-[10.5px] text-slate-400 pt-1">
                          Our vice-principal administrative coordination cell will reach out to schedule this contribution opportunity.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setPledgeSuccess(false);
                          setPledgeName('');
                          setPledgeYear('');
                        }}
                        className="text-[10px] font-bold text-brand-green hover:underline cursor-pointer"
                      >
                        Reset Pledge Generator
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handlePledgeSubmit} className="mt-6 space-y-4 text-left font-sans">
                      
                      {/* Interactive details */}
                      <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-150 dark:border-slate-800 text-xs">
                        <span className="font-semibold text-slate-400 uppercase text-[9px] block">Selected Engagement:</span>
                        <p className="font-extrabold text-[#0d2a1b] dark:text-brand-gold mt-0.5">{pledgeType}</p>
                      </div>

                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={pledgeName}
                          onChange={(e) => setPledgeName(e.target.value)}
                          placeholder="Shri Kaustabh Sonowal"
                          className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 text-xs rounded-xl focus:outline-none"
                        />
                      </div>

                      {/* Year */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Graduation Year (Batch)</label>
                        <input
                          type="text"
                          required
                          maxLength={4}
                          value={pledgeYear}
                          onChange={(e) => setPledgeYear(e.target.value)}
                          placeholder="e.g., 2008"
                          className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 text-xs rounded-xl focus:outline-none"
                        />
                      </div>

                      {/* Metric options based on type */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Support Intensity Metric</label>
                        <select
                          value={pledgeData.limitDays}
                          onChange={(e) => setPledgeData(p => ({ ...p, limitDays: e.target.value }))}
                          className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 text-xs rounded-xl focus:outline-none"
                        >
                          {pledgeType.includes('Sponsorship') ? (
                            <>
                              <option value="INR 10,000 / Scholar Yearly">INR 10,000 / Scholar Yearly</option>
                              <option value="INR 25,000 / Lab Expansion">INR 25,000 / Lab Expansion</option>
                              <option value="Sponsor UDISE Smart Class Project">Sponsor UDISE Smart Class Project</option>
                            </>
                          ) : pledgeType.includes('Support') ? (
                            <>
                              <option value="Infrastructure Gift Pledge">Infrastructure Gift Pledge</option>
                              <option value="Procure Physics Laboratory Equipments">Procure Physics Laboratory Equipments</option>
                              <option value="Library reference book blocks">Library reference book blocks</option>
                            </>
                          ) : (
                            <>
                              <option value="5 Days / Year">5 Days / Year</option>
                              <option value="1 Lecture / Semester">1 Lecture / Semester</option>
                              <option value="10 Hours virtual consulting">10 Hours virtual consulting</option>
                            </>
                          )}
                        </select>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-brand-green hover:bg-brand-green-light text-white text-xs font-extrabold rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                          Generate Official Support Pledge
                        </button>
                      </div>

                    </form>
                  )}
                </AnimatePresence>
              </div>

              <div className="bg-[#eff5f1] dark:bg-slate-900/50 p-3.5 border border-brand-green/20 dark:border-brand-gold/20 rounded-xl text-[10.5px] text-brand-green-dark dark:text-brand-gold font-sans leading-relaxed text-left opacity-90 mt-5">
                <strong>Administrative compliance:</strong> All alumni development pledges correspond fully with SEBA & AHSEC ethical donor provisions. Pledges do not violate regional school committee rules.
              </div>

            </div>

          </div>
        </div>

        {/* ==========================================================
            ALUMNI WALL OF PRIDE (interactive vertical timeline)
            ========================================================== */}
        <div>
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-black text-[#14532d] dark:text-brand-gold bg-brand-green/10 dark:bg-brand-gold/10 px-3.5 py-1 rounded-full uppercase inline-block font-sans">
              {lang === 'en' ? "PRIDE CHRONOLOGY" : "গৌৰৱময় সময়ৰেখা"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5">
              Alumni Wall of Pride Chronology
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              Iterating historical milestones and outstanding community accomplishments achieved by pupils of this rural temple of knowledge.
            </p>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-brand-gold/40 space-y-10 pl-6 sm:pl-12 text-left">
            {[
              { year: "2024", title: "Smart-Class Projection Campaign", category: "Community Contributions", label: "Led by Batch of 1998, alumni successfully gathered funds to equip 12 Higher Secondary rooms with high-tech projector setups." },
              { year: "2022", title: "ISRO radar payload citation", category: "Professional Achievements", label: "Astrophysicist alumna Dr. Pallavi Chetia cited officially by national councils for software payload calibrations." },
              { year: "2015", title: "National Science Congress entries", category: "Academic Achievements", label: "THSS students registered perfect 100/100 science board scores, rewarded directly by Dibrugarh district magistrates." },
              { year: "2002", title: "First District ACS Civil entry", category: "Notable Alumni Placement", label: "Smt. Manashi Borgohain successfully cleared the civil services exams, establishing first official cadre representation at Dispur." },
              { year: "1994", title: "AMC Cardiology Gold Medallist", category: "Notable Alumni Placement", label: "Dr. Bhaskar Jyoti Gogoi secured top board placement in cardiac surgical credentials, leading to GMCH surgeon seats." },
              { year: "1972", title: "Alumni Association foundation", category: "Notable Alumni Placement", label: "First batch of matriculates convened the secondary committee, raising initial funds for library building planks." }
            ].map((node, i) => (
              <div key={i} className="relative group text-left">
                {/* Visual orange dot */}
                <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ring-4 ring-brand-gold/25 bg-brand-gold group-hover:scale-110 transition-transform" />
                
                <div className="bg-slate-50 dark:bg-slate-850 hover:bg-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                    <span className="font-mono text-xs font-black text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider">{node.year}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{node.category}</span>
                  </div>
                  
                  <h4 className="font-serif text-base sm:text-lg font-black text-brand-green-dark dark:text-brand-cream">
                    {node.title}
                  </h4>
                  
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-sans mt-1.5">
                    {node.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
