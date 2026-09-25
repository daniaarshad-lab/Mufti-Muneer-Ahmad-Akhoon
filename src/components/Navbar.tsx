import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from './Container';

interface NavSubItem {
  label: string;
  path: string;
  description: string;
  tag?: string;
}

interface NavSection {
  label: string;
  path?: string;
  items?: NavSubItem[];
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navSections: NavSection[] = [
    {
      label: 'About',
      path: '/about',
      items: [
        { label: 'Mufti Muneer Ahmad Akhoon', path: '/about', description: 'Institutional leadership and 30+ years of scholarly service' },
        { label: 'Biography & Early Life', path: '/about/biography', description: 'Upbringing, education and Dars-e-Nizami' },
        { label: 'Teachers & Sanad', path: '/about/education', description: 'Unbroken chains of transmission in Hadith' },
        { label: 'Spiritual Lineage', path: '/about/lineage', description: 'Chishtia Zakariyya silsila and mentors' },
      ],
    },
    {
      label: 'Masajid',
      path: '/#masjids',
    },
    {
      label: 'Sajra Sharif',
      path: '/sajra',
    },
    {
      label: 'Events & Registration',
      path: '/events',
    },
    {
      label: 'Darul Ifta',
      path: '/fatwas',
      items: [
        { label: 'Darul Ifta Overview', path: '/fatwas', description: 'Hanafi legal research methodology' },
        { label: 'Ask a Fatwa', path: '/fatwas/ask', description: 'Confidential legal inquiry to Mufti Akhoon', tag: 'Direct' },
      ],
    },
    {
      label: 'Books',
      path: '/books',
    },
    {
      label: 'Khanqah',
      path: '/khanqah',
      items: [
        { label: 'Spiritual Purification', path: '/khanqah', description: 'Tazkiyah, heart remedies and moral discipline' },
        { label: "What is Bay'ah?", path: '/khanqah/bayah', description: 'Traditional spiritual pledge and mentorship' },
        { label: 'Spiritual Healing (Ruqya)', path: '/khanqah/spiritual-healing', description: 'Sunnah supplications and ethical standards' },
        { label: 'Weekly Majlis', path: '/khanqah/schedule', description: 'Thursdays after Maghrib' },
        { label: 'Consultation', path: '/khanqah/consultation', description: 'Private advising session', tag: 'Booking' },
      ],
    },
    {
      label: 'Media',
      path: '/media/videos',
      items: [
        { label: 'RahamTV Video Library', path: '/media/videos', description: 'Recorded discourses and Tafseer lessons', tag: 'RahamTV' },
        { label: 'Photo Archive', path: '/media/photos', description: 'Historical convocations and gatherings' },
      ],
    },
  ];

  const isItemActive = (item: NavSection) => {
    if (item.path) {
      if (item.path === '/' && location.pathname === '/') return true;
      if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    }
    if (item.items) {
      return item.items.some(
        (sub) => location.pathname === sub.path || (sub.path !== '/' && location.pathname.startsWith(sub.path))
      );
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3 pb-2 transition-all">
      {/* Curved floating header card */}
      <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-full bg-white/95 backdrop-blur-md border border-[#C8E5DF] shadow-sm px-4 sm:px-6 py-2.5 sm:py-3 transition-all">
        <div className="flex items-center justify-between" ref={dropdownRef}>
          {/* Brand Emblem & Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            {/* Distinctive Emerald Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#008767] via-[#00A878] to-[#0D9488] flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:shadow-emerald-500/25 transition-all shrink-0 font-serif font-bold text-sm border border-emerald-300/40 relative">
              <span>MA</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-white" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-bold text-base sm:text-lg tracking-tight text-gray-900 leading-tight group-hover:text-[#008767] transition-colors">
                Mufti Muneer Akhoon
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#008767] font-semibold flex items-center gap-1">
                <span>Islamic Scholar & Spiritual Mentor</span>
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>New York</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links in Modern Sans Pills */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navSections.map((section) => {
              const active = isItemActive(section);
              const isOpen = activeDropdown === section.label;

              if (section.items) {
                return (
                  <div key={section.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isOpen ? null : section.label)}
                      className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                        active
                          ? 'bg-[#008767] text-white'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-[#EBF5F2]'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{section.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'opacity-60'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white border border-[#C8E5DF] p-2.5 z-50 shadow-xl"
                        >
                          <div className="space-y-1">
                            {section.items.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className="block p-2.5 rounded-xl hover:bg-[#EBF5F2] transition-colors group"
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#008767] transition-colors">
                                    {sub.label}
                                  </span>
                                  {sub.tag && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#EBF5F2] text-[#008767] font-medium border border-[#C8E5DF]">
                                      {sub.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                                  {sub.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={section.path}
                  to={section.path!}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-[#EBF5F2]'
                  }`}
                >
                  {section.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Ask a Fatwa button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/fatwas/ask"
              className="relative group px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white hover:shadow-md hover:shadow-emerald-500/25 transition-all shadow-xs hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Ask a Fatwa</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/fatwas/ask"
              className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs"
            >
              Ask Fatwa
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 rounded-2xl bg-white border border-[#C8E5DF] p-4 shadow-xl overflow-hidden"
          >
            <div className="space-y-3">
              {navSections.map((sec) => (
                <div key={sec.label} className="pb-2 border-b border-gray-100">
                  <div className="text-xs uppercase font-semibold text-gray-500 mb-1">
                    {sec.label}
                  </div>
                  {sec.items ? (
                    <div className="space-y-1 pl-2">
                      {sec.items.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-sm text-gray-800 hover:text-[#008767]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={sec.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-gray-800 hover:text-[#008767] pl-2"
                    >
                      {sec.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 flex items-center justify-between">
                <Link
                  to="/get-involved/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-[#008767] text-white font-medium text-sm"
                >
                  Support Jamia Zakariyya
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

