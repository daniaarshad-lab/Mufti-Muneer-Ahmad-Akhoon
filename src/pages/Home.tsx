import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  Video,
  Bookmark,
  Users,
  Building2,
  FileCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Radio,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { AmbientFloatingShapes } from '../components/AnimatedShapes';
import { MasjidsSection } from '../components/MasjidsSection';
import { WeeklyScheduleSection } from '../components/WeeklyScheduleSection';
import { ShajarahExplorer } from '../components/ShajarahExplorer';
import { FATWAS_DATA } from '../data/fatwas';
import { BOOKS_DATA } from '../data/books';
import { VIDEOS_DATA } from '../data/videos';
import {
  scholarPortrait,
  masjidDarutTazkiya,
  akhoonJamaMasjid,
  kashmirIslamicCenter,
  masjidYusifain,
  scholarSenior,
  scholarHadith,
  scholarJurist,
  scholarQuran,
  mintMosqueHero,
  kaabaMecca,
  quranHolding,
} from '../assets/images';

export const Home: React.FC = () => {
  // State for interactive Fatwa Finder
  const [fatwaSearch, setFatwaSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFatwaId, setSelectedFatwaId] = useState<string>(FATWAS_DATA[0]?.id || '1');

  // Categories for Fatwa Filter
  const categories = [
    'All',
    'Financial & Zakat',
    'Worship & Salah',
    'Halal Dietary',
    'Family & Marriage',
    'Contemporary Issues',
  ];

  // Filtered fatwas
  const filteredFatwas = FATWAS_DATA.filter((fatwa) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      fatwa.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Financial & Zakat' && fatwa.category.toLowerCase().includes('finance')) ||
      (selectedCategory === 'Worship & Salah' &&
        (fatwa.category.toLowerCase().includes('prayer') || fatwa.category.toLowerCase().includes('fasting')));

    const matchesSearch =
      fatwaSearch.trim() === '' ||
      fatwa.title.toLowerCase().includes(fatwaSearch.toLowerCase()) ||
      fatwa.question.toLowerCase().includes(fatwaSearch.toLowerCase()) ||
      fatwa.referenceNo.toLowerCase().includes(fatwaSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const activeFatwa = FATWAS_DATA.find((f) => f.id === selectedFatwaId) || FATWAS_DATA[0];

  // The Four Pillars of Sacred Leadership (tags removed from top of image as requested)
  // Image links provided here for easy user customization:
  const pillars = [
    {
      id: 'darul-ifta',
      title: 'Darul Ifta Khatm-e-Nubuwwat',
      subtitle: 'Classical Hanafi Jurisprudence Council',
      description:
        'Authoritative written decrees, matrimonial arbitration, Islamic estate wills, and commercial halal verification under strict traditional Hanafi methodology.',
      stats: '12,500+ Decrees Issued',
      link: '/fatwas',
      linkText: 'Access Darul Ifta',
      image: scholarJurist, // File: /src/assets/images/scholar_jurist_1789494955832.jpg
      accentBorder: 'hover:border-[#00A878]',
    },
    {
      id: 'jamia-zakariyya',
      title: 'Jamia Zakariyya New York',
      subtitle: 'Higher Islamic Seminary & Huffaz Academy',
      description:
        'Comprehensive multi-year Dars-e-Nizami Alimiyyah curriculum, full-time Quran Tahfiz, and foundational Islamic Arabic sciences for youth and adults.',
      stats: '180+ Active Students',
      link: '/institutions#jamia',
      linkText: 'Explore Seminary',
      image: scholarQuran, // File: /src/assets/images/scholar_quran_1789494975840.jpg
      accentBorder: 'hover:border-[#0284C7]',
    },
    {
      id: 'khanqah-yusufia',
      title: 'Khanqah Yusufia Zakariyya',
      subtitle: 'Chishtia Spiritual Mentorship & Tazkiyah',
      description:
        'A spiritual haven dedicated to purifying the human heart (Tazkiyat al-Nafs), weekly Thursday assemblies of Zikr, and structured discipleship (Suluk).',
      stats: 'Weekly Public Majlis',
      link: '/khanqah',
      linkText: 'Spiritual Mentorship',
      image: scholarSenior, // File: /src/assets/images/scholar_senior_1789494902673.jpg
      accentBorder: 'hover:border-[#F59E0B]',
    },
    {
      id: 'wmc-muneer',
      title: 'Westchester Muslim Center & Masajid',
      subtitle: 'Community Hub & 4 Regional Sanctuaries',
      description:
        'Mount Vernon congregation, Friday Jumu’ah khutbahs, family counseling, and patronized regional masajid across Long Island and New York.',
      stats: 'New York & Long Island',
      link: '#masjids',
      linkText: 'View 4 Masajid',
      image: masjidDarutTazkiya, // File: /src/assets/images/masjid_darut_tazkiya_1790099676119.jpg
      accentBorder: 'hover:border-[#4F46E5]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB] py-6 px-3 sm:px-6 lg:px-8 relative overflow-hidden text-slate-900">
      <SEO
        title="Mufti Muneer Ahmad Akhoon | Islamic Scholar & Spiritual Mentor"
        description="Official portal of Hazrat Maulana Mufti Muneer Ahmad Akhoon - Islamic scholar, founder of Jamia Zakariyya New York, and spiritual mentor."
      />

      {/* Global Ambient Background Floating Shapes & Glowing Orbs */}
      <AmbientFloatingShapes />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        {/* =========================================================
            LIVE BROADCAST & UPCOMING MAJLIS ANNOUNCEMENT TICKER
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-gradient-to-r from-[#008767] via-[#059669] to-[#0D9488] p-1 shadow-md text-white border border-emerald-400/40"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-1.5 flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
              </span>
              <span className="font-bold tracking-wide uppercase text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full text-amber-200">
                Weekly Majlis
              </span>
              <span className="font-medium text-emerald-50 hidden sm:inline">
                Weekly Gathering of Durood-o-Salaam at Masjid Darut Tazkiya, Uniondale NY & Online via RahamTV
              </span>
              <span className="font-medium text-emerald-50 sm:hidden">
                Durood Majlis at Masjid Darut Tazkiya
              </span>
            </div>

            <a
              href="#schedule"
              className="inline-flex items-center gap-1.5 font-bold text-amber-200 hover:text-white transition-colors text-xs underline underline-offset-2 ml-auto cursor-pointer"
            >
              <span>View Full Schedule</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            SECTION 1: SCHOLAR HERO BENTO WITH JITTER-STYLE ENTRANCE
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Welcome & Authority Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-[32px] bg-white/95 backdrop-blur-md border border-[#C8E5DF] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between text-left"
          >
            {/* Subtle background mosque architectural motif with gentle float */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1.5, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none -mr-16 -mt-16"
            >
              <img
                src={mintMosqueHero}
                alt="Mosque architectural motif"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Decorative Gold Arch SVG Curve */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-10 -right-10 w-44 h-44 opacity-25 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <circle cx="50" cy="50" r="45" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M50 5 C75 5 95 25 95 50 C95 75 75 95 50 95" stroke="#00A878" strokeWidth="2.5" />
              </svg>
            </motion.div>

            <div className="relative z-10 space-y-5">
              {/* Top Verification & Accreditations */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                  <span>Official Scholarly Portal • New York, USA</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>501(c)(3) Nonprofit Religious & Educational Organization</span>
                </span>
              </div>

              {/* Scholar Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-arabic text-emerald-800 font-extrabold tracking-wider bg-emerald-100/70 px-3 py-0.5 rounded-full border border-emerald-200">
                    حَفِظَهُ اللَّهُ وَرَعَاهُ
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs uppercase font-extrabold text-emerald-700 tracking-wider">
                    Senior Islamic Scholar & Spiritual Mentor
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                  Hazrat Maulana Mufti Muneer Ahmad Akhoon
                </h1>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl pt-1">
                  Prominent Islamic scholar, founder of <strong className="text-emerald-900 font-bold">Jamia Zakariyya New York</strong>, Director of Religious Affairs at <strong className="text-emerald-900 font-bold">Westchester Muslim Center</strong>, patron of regional masajid, and authorized spiritual mentor in the Chishtia Sabiria & Zakariyya traditions. Guiding the North American Muslim community for over thirty years through classical Hanafi jurisprudence, authentic Hadith transmission, and Tazkiyat al-Nafs.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/fatwas/ask"
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#008767] via-[#00A878] to-[#0D9488] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Submit a Confidential Fatwa Inquiry</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Link>

                <Link
                  to="/sajra"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F8FCFB] border border-[#C8E5DF] text-slate-800 text-xs sm:text-sm font-bold hover:border-[#00A878] hover:text-[#008767] hover:bg-emerald-50 transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Explore Spiritual Sanad (Sajra)</span>
                </Link>

                <a
                  href="#masjids"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-bold text-[#008767] hover:text-[#005B45] hover:underline cursor-pointer"
                >
                  <span>View 4 Masajid</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom 4-Metric Grid with High Contrast & Vibrant Accents */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-6 border-t border-slate-200">
              <div className="p-3 rounded-2xl bg-[#F8FCFB] border border-slate-200/80 hover:bg-white hover:border-[#00A878] transition-all hover:-translate-y-0.5 shadow-2xs group">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-950 font-serif block group-hover:text-[#008767] transition-colors">
                  30+ Years
                </span>
                <span className="text-[11px] text-slate-600 leading-tight block mt-0.5">
                  Scholarly leadership in North America
                </span>
                <div className="w-6 h-0.5 bg-amber-400 mt-2 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FCFB] border border-slate-200/80 hover:bg-white hover:border-[#00A878] transition-all hover:-translate-y-0.5 shadow-2xs group">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-950 font-serif block group-hover:text-[#008767] transition-colors">
                  12,500+
                </span>
                <span className="text-[11px] text-slate-600 leading-tight block mt-0.5">
                  Written fatwas & legal decrees issued
                </span>
                <div className="w-6 h-0.5 bg-emerald-500 mt-2 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FCFB] border border-slate-200/80 hover:bg-white hover:border-[#00A878] transition-all hover:-translate-y-0.5 shadow-2xs group">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-950 font-serif block group-hover:text-[#008767] transition-colors">
                  4 Institutions
                </span>
                <span className="text-[11px] text-slate-600 leading-tight block mt-0.5">
                  Founded and patronized in New York
                </span>
                <div className="w-6 h-0.5 bg-cyan-500 mt-2 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FCFB] border border-slate-200/80 hover:bg-white hover:border-[#00A878] transition-all hover:-translate-y-0.5 shadow-2xs group">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-950 font-serif block group-hover:text-[#008767] transition-colors">
                  Unbroken Sanad
                </span>
                <span className="text-[11px] text-slate-600 leading-tight block mt-0.5">
                  Chishtia Sabiria & Hadith lineage
                </span>
                <div className="w-6 h-0.5 bg-amber-400 mt-2 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Right Scholar Profile Card with JITTER-STYLE WEBSITE-PROMO ENTRANCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-lg flex flex-col justify-between space-y-6 text-left relative overflow-hidden"
          >
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Jitter-Style Multi-Layered Floating Scholar Card with 3D Tilt and Spring Hover */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-3xl p-2 bg-gradient-to-br from-emerald-100 via-white to-amber-50 border border-emerald-200/80 shadow-md group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-emerald-950 shadow-inner">
                  {/* Real Photo of Mufti Muneer Ahmad Akhoon */}
                  <img
                    src={scholarPortrait}
                    alt="Hazrat Maulana Mufti Muneer Ahmad Akhoon"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                    referrerPolicy="no-referrer"
                  />

                  {/* Shimmer Light Beam Sweep across the picture */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Clean Bottom Name & Location (Removed "Verified Jurist & Shaykh" tag as requested) */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-extrabold leading-tight drop-shadow-md">
                      Mufti Muneer Ahmad Akhoon
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium drop-shadow-sm flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      <span>New York & Long Island</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Weekly In-Person Majlis Notice with vibrant emerald highlight */}
              <div className="p-4 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] hover:border-[#00A878] transition-all space-y-2 hover:bg-[#F0FAF7]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#008767] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A878] animate-pulse" />
                    <span>In-Person Gathering</span>
                  </span>
                  <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                    Every Thursday
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Thursday Mehfil-e-Durood-o-Salaam
                </h4>

                <div className="space-y-1 text-xs text-slate-600 pt-0.5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#008767]" />
                    <span>4:30 AM – 5:30 AM EST</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#008767]" />
                    <span>Masjid Darut Tazkiya, Uniondale, NY</span>
                  </div>
                </div>
              </div>

              {/* Scholarly Wisdom Quote with Warm Amber Border */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/60 to-teal-50/60 border-l-4 border-amber-500 text-xs text-slate-700 italic leading-relaxed shadow-2xs">
                "Sacred knowledge is not merely memorized texts; it is a divine light that illuminates the heart only when purified of pride, envy, and worldly attachment."
                <span className="block not-italic font-bold text-slate-950 mt-1.5 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  Hazrat Mufti Muneer Ahmad Akhoon
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-1 relative z-10">
              <a
                href="#schedule"
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white font-bold text-xs text-center hover:opacity-95 transition-all shadow-xs hover:shadow-md block hover:-translate-y-0.5 cursor-pointer"
              >
                View Full Assembly Schedule
              </a>
              <Link
                to="/contact"
                className="w-full py-2 rounded-full bg-white border border-[#C8E5DF] text-slate-800 font-semibold text-xs text-center hover:border-[#008767] hover:text-[#008767] hover:bg-emerald-50 transition-all block"
              >
                Official Office Contact Details
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SECTION 2: THE FOUR PILLARS OF SACRED LEADERSHIP
            (Tags removed from top of image as requested)
            ========================================================= */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#008767]" />
                <span>Foundations & Institutional Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Four Pillars of Sacred Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Serving North American Muslims through traditional juristic councils, classical Dars-e-Nizami higher education, spiritual mentorship, and regional masajid.
              </p>
            </div>

            <Link
              to="/institutions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline shrink-0"
            >
              <span>Explore all institutions & centers</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Cards Grid with Picture Hover Animations (Tags removed from top of images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] p-5 flex flex-col justify-between text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,168,120,0.18)] ${pillar.accentBorder} space-y-4`}
              >
                <div className="space-y-3.5">
                  {/* Picture Frame with Sheen & Zoom Hover Effects (Tag removed from image) */}
                  <div className="picture-card aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative shadow-2xs">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-0.5"
                      referrerPolicy="no-referrer"
                    />

                    {/* Shimmer sweep on picture hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#008767] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#008767] font-semibold mt-0.5">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 font-mono">
                    {pillar.stats}
                  </span>
                  {pillar.link.startsWith('#') ? (
                    <a
                      href={pillar.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={pillar.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SECTION 3: MASJIDS SECTION (GLASSY EFFECT)
            Displaying the 4 Masjids Founded & Patronized by Mufti Muneer:
            1. Masjid Darut Tazkiya - Uniondale
            2. Akhoon Jama Masjid - Hollis Ave, NY
            3. Kashmir Islamic Center
            4. Masjid Yusifain - Mastic Beach
            ========================================================= */}
        <div id="masjids">
          <MasjidsSection />
        </div>

        {/* =========================================================
            SECTION 4: OFFICIAL WEEKLY ASSEMBLY SCHEDULE (SIDE DOTS EFFECT)
            Real events: Thursday Durood, Friday Rooh Ki Baatein, Juma, Sunday Majlis
            ========================================================= */}
        <div id="schedule">
          <WeeklyScheduleSection />
        </div>

        {/* =========================================================
            SECTION 5: SAJRA MUBARAKAH (AUTHENTIC SPIRITUAL SANAD EXPLORER)
            All 6 lineages extracted directly from user's attached images:
            Chishtia Sabiria, Suhrawardiyya, Hadith Sanad Qasmi,
            Qadiriyya Lahoria, Naqshbandiyya, Chishtia Husainia
            ========================================================= */}
        <div id="shajarah">
          <ShajarahExplorer />
        </div>

        {/* =========================================================
            SECTION 6: INTERACTIVE JURISTIC ARCHIVE & FATWA FINDER
            Smooth rolling, interactive search & category filter
            ========================================================= */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-6 relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Darul Ifta Khatm-e-Nubuwwat</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Interactive Fatwa & Jurisprudence Finder
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Browse cataloged verdicts formulated according to authoritative Hanafi texts and contemporary juristic councils.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/fatwas/ask"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <span>Ask New Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Search & Category Filter Pills */}
          <div className="space-y-3 pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[#008767] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search legal decrees by keyword (e.g. halal mortgage, zakat on stocks, prayer times)..."
                value={fatwaSearch}
                onChange={(e) => setFatwaSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
              />
              {fatwaSearch && (
                <button
                  onClick={() => setFatwaSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                      : 'bg-[#F8FCFB] text-slate-600 hover:text-slate-900 border border-[#C8E5DF] hover:bg-emerald-50/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Two-Column Interactive Master-Detail Fatwa View with Rolling Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            {/* Left List: Fatwas */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredFatwas.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-[#F8FCFB] border border-dashed border-[#C8E5DF]">
                  <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">No matching decrees found</p>
                  <p className="text-xs text-slate-500 mt-1">Try another search term or ask a new fatwa.</p>
                </div>
              ) : (
                filteredFatwas.map((fatwa) => (
                  <div
                    key={fatwa.id}
                    onClick={() => setSelectedFatwaId(fatwa.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      selectedFatwaId === fatwa.id
                        ? 'bg-[#EBF5F2] border-[#00A878] shadow-xs scale-[1.01]'
                        : 'bg-[#F8FCFB] border-[#C8E5DF] hover:border-[#00A878] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono text-[#008767] font-bold">
                        {fatwa.referenceNo}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {fatwa.dateIssued}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 line-clamp-1">
                      {fatwa.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {fatwa.question}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Right Card: Active Fatwa Full Verdict Preview with ROLLING APPEARING ANIMATION */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFatwa?.id || 'none'}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] p-6 space-y-4 text-left shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#008767] bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                        Ref: {activeFatwa?.referenceNo}
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                        {activeFatwa?.category}
                      </span>
                    </div>

                    <span className="text-xs text-slate-500 font-medium">
                      Date Issued: {activeFatwa?.dateIssued}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                      {activeFatwa?.title}
                    </h3>
                  </div>

                  {/* Question Box */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Inquiry Posed to Mufti Muneer:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{activeFatwa?.question}"
                    </p>
                  </div>

                  {/* Juristic Ruling Box with Emerald Accent */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-200/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008767] block">
                      Juristic Decree (Al-Jawab):
                    </span>
                    <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                      {activeFatwa?.answerSummary || activeFatwa?.answer}
                    </p>
                  </div>

                  {/* Classical Authority Citations */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Canonical Hanafi Authorities Cited:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeFatwa?.citations?.map((s, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 font-serif"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008767]" />
                      <span>Certified Seal of Darul Ifta Khatm-e-Nubuwwat</span>
                    </span>

                    <Link
                      to={`/fatwas/${activeFatwa?.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] hover:underline"
                    >
                      <span>Read Complete Decree</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 7: PUBLICATIONS & SCHOLARLY TREATISES
            Modern interactive presentation with real book spine & 3D hover
            ========================================================= */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-6 relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#008767]" />
                <span>Sacred Literature & Treatises</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Books by Hazrat Mufti Muneer Ahmad Akhoon
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Authored treatises covering prophetic supplications, contemporary Hanafi jurisprudence, spiritual journeying (Suluk), and orthodox theology.
              </p>
            </div>

            <Link
              to="/books"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline shrink-0"
            >
              <span>View all treatises & digital PDFs</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Book Treatises Cards with 3D Spine and Rich Contrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {BOOKS_DATA.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] p-5 flex flex-col justify-between text-left hover:shadow-[0_20px_45px_rgba(0,168,120,0.18)] hover:border-[#00A878] hover:-translate-y-2 transition-all duration-500 space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Styled Book Cover with 3D Spine and Gilded Foil Accents */}
                  <div className="picture-card aspect-[3/4] rounded-xl bg-gradient-to-br from-[#044E3D] via-[#05634E] to-[#008767] p-5 text-white flex flex-col justify-between shadow-md transition-all duration-500 group-hover:scale-103 group-hover:rotate-1 relative overflow-hidden border border-emerald-400/30">
                    {/* Shimmer sweep effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                    <div className="space-y-1 relative z-10">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                        Al-Muneer Publications
                      </span>
                      <h4 className="text-sm sm:text-base font-bold font-serif leading-tight text-white">
                        {book.title}
                      </h4>
                      {book.urduTitle && (
                        <p className="font-arabic text-sm text-emerald-200 pt-1">
                          {book.urduTitle}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1 border-t border-white/20 pt-3 relative z-10">
                      <p className="text-[10px] text-amber-200 font-medium">
                        By Mufti Muneer Ahmad Akhoon
                      </p>
                      <div className="flex items-center justify-between text-[9px] text-white/80">
                        <span>{book.pages} Pages</span>
                        <span>{book.language}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#008767] tracking-wider block">
                      {book.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 mt-0.5 line-clamp-1 group-hover:text-[#008767] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {book.summary || book.title}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <Link
                    to="/books"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] group-hover:underline"
                  >
                    <span>Read synopsis & download</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SECTION 8: MEDIA DISCOURSES & RAHAMTV BROADCASTS
            ========================================================= */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-6 relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Radio className="w-3.5 h-3.5 text-cyan-700" />
                <span>RahamTV Broadcasts & Lectures</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Televised Discourses & Hadith Heritage
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Recorded Friday Khutbahs, Quranic exegesis series, and weekly spiritual lectures broadcasted worldwide.
              </p>
            </div>

            <Link
              to="/media/videos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline shrink-0"
            >
              <span>Explore full video archive</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Video Cards with Hover Scale & Pulsing Play Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS_DATA.slice(0, 3).map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] overflow-hidden flex flex-col justify-between text-left hover:shadow-[0_20px_45px_rgba(0,168,120,0.18)] hover:border-[#00A878] hover:-translate-y-2 transition-all duration-500"
              >
                <div>
                  <div className="picture-card aspect-video bg-slate-900 relative overflow-hidden">
                    <img
                      src={scholarHadith}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85"
                      referrerPolicy="no-referrer"
                    />

                    {/* Shimmer sweep effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                    {/* Play Button with Pulsing Glow on Hover */}
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#008767] to-[#00A878] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
                        <Video className="w-6 h-6 ml-0.5 text-white" />
                      </div>
                    </div>

                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/85 text-[10px] font-mono text-amber-200">
                      {video.duration}
                    </span>
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-[10px] font-bold text-white uppercase shadow-sm">
                      {video.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] text-slate-500 block">
                      {video.series || 'RahamTV Official Broadcast'}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#008767] transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {video.summary || video.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/media/videos"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Watch video discourse</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SECTION 9: SPIRITUAL LITANY & CONSULTATION BANNER
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] bg-gradient-to-r from-emerald-900 via-teal-900 to-[#0B2520] text-white p-6 sm:p-10 shadow-xl text-left relative overflow-hidden"
        >
          {/* Subtle Islamic Geometry Star Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <span>Khanqah Yusufia Zakariyya Chishtia</span>
              </div>

              <div className="space-y-2">
                <p className="font-arabic text-2xl sm:text-3xl text-amber-300 font-bold leading-relaxed">
                  أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Spiritual Mentorship, Heart Purification & Personal Islah
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-2xl">
                  Seekers facing inner unrest, marital turmoil, or seeking discipleship (Bay'ah) under the authorized Chishtia lineage may schedule a confidential consultation with Hazrat Mufti Muneer Ahmad Akhoon.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-emerald-100">
                <div className="flex items-center gap-2 p-2.5 bg-white/10 backdrop-blur-xs rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Confidential One-on-One Sessions</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white/10 backdrop-blur-xs rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sunnah-Based Ruqya Guidelines</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white/10 backdrop-blur-xs rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Daily Prescribed Litanies (Ma'mulat)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/khanqah/consultation"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm text-center hover:opacity-95 transition-all shadow-md active:scale-95 hover:-translate-y-0.5"
              >
                Schedule Private Consultation
              </Link>
              <Link
                to="/khanqah/spiritual-healing"
                className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm text-center transition-all shadow-xs hover:-translate-y-0.5"
              >
                Authentic Masnoon Ruqya Principles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
