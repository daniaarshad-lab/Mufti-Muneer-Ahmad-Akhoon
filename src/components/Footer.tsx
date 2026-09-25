import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#85BDB3] px-3 sm:px-6 lg:px-8 pb-10 pt-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Highlight Card */}
        <div className="rounded-[28px] bg-gradient-to-r from-[#D4ECE6] via-[#E2F3EF] to-[#ECF7F4] border border-[#C8E5DF] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#008767] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-950">
                Weekly Tazkiyah Majlis & Public Zikr Gathering
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Conducted every Thursday evening following Maghrib prayer at Westchester Muslim Center under the guidance of Mufti Muneer Ahmad Akhoon.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/khanqah/schedule"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008767] text-white text-xs font-bold hover:bg-[#007055] transition-all shadow-xs active:scale-95"
            >
              <span>View Full Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/fatwas/ask"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#C8E5DF] text-gray-800 text-xs font-semibold hover:border-[#008767] hover:text-[#008767] transition-all"
            >
              <span>Submit Fatwa Inquiry</span>
            </Link>
          </div>
        </div>

        {/* Main 4-Column Directory Card */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-gray-100">
            {/* Column 1: Scholar Bio & Accreditation (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#008767] flex items-center justify-center text-white font-serif font-bold text-sm">
                  MA
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-950 tracking-tight">
                    Mufti Muneer Ahmad Akhoon
                  </h3>
                  <p className="text-xs text-[#008767] font-semibold">
                    Islamic Scholar, Jurist & Spiritual Mentor
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Respected Islamic jurist, educator, and spiritual guide based in New York. Dedicated to disseminating authentic sacred knowledge, Hanafi jurisprudence, and heart purification (Tazkiyah) through traditional classical methodology.
              </p>

              <div className="pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF5F2] border border-[#C8E5DF] text-[11px] text-emerald-900 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#008767]" />
                  <span>501(c)(3) Nonprofit Registered in New York</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 space-y-1 pt-1">
                <div>• Jamia Zakariyya New York (Founder & Patron)</div>
                <div>• Westchester Muslim Center (Director of Religious Affairs)</div>
                <div>• Al-Muneer Foundation Inc. (President & Chairman)</div>
              </div>
            </div>

            {/* Column 2: Scholarly Guidance & Fatwas (3 cols) */}
            <div className="lg:col-span-3 text-left">
              <h4 className="text-xs uppercase tracking-wider text-[#008767] font-bold mb-4">
                Jurisprudence & Fatwas
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li>
                  <Link to="/fatwas" className="hover:text-[#008767] transition-colors">
                    Darul Ifta Overview
                  </Link>
                </li>
                <li>
                  <Link to="/fatwas/ask" className="hover:text-[#008767] transition-colors flex items-center gap-1.5">
                    <span>Ask a Fatwa Inquiry</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EBF5F2] text-[#008767] font-bold">Direct</span>
                  </Link>
                </li>
                <li>
                  <Link to="/fatwas/archive" className="hover:text-[#008767] transition-colors">
                    Searchable Fatwa Archive
                  </Link>
                </li>
                <li>
                  <Link to="/about/lineage" className="hover:text-[#008767] transition-colors">
                    Scholarly Lineage & Sanad
                  </Link>
                </li>
                <li>
                  <Link to="/about/education" className="hover:text-[#008767] transition-colors">
                    Teachers & Formal Ijazah
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Khanqah & Spiritual Life (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-xs uppercase tracking-wider text-[#008767] font-bold mb-4">
                Khanqah Yusufia
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li>
                  <Link to="/khanqah" className="hover:text-[#008767] transition-colors">
                    Spiritual Mentorship
                  </Link>
                </li>
                <li>
                  <Link to="/khanqah/bayah" className="hover:text-[#008767] transition-colors">
                    What is Bay'ah?
                  </Link>
                </li>
                <li>
                  <Link to="/khanqah/spiritual-healing" className="hover:text-[#008767] transition-colors">
                    Masnoon Ruqya Principles
                  </Link>
                </li>
                <li>
                  <Link to="/khanqah/schedule" className="hover:text-[#008767] transition-colors">
                    Retreat Schedule
                  </Link>
                </li>
                <li>
                  <Link to="/khanqah/consultation" className="hover:text-[#008767] transition-colors">
                    Book Spiritual Advising
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Key Centers & Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-3.5 text-left">
              <h4 className="text-xs uppercase tracking-wider text-[#008767] font-bold">
                Institutions & Centers
              </h4>

              <div className="space-y-2.5 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#008767] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Westchester Muslim Center</strong>
                    Mount Vernon, NY 10550, USA
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#008767] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Jamia Zakariyya New York</strong>
                    Educational Seminary & Huffaz Academy
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-[#F8FCFB] border border-[#C8E5DF] text-xs font-semibold text-gray-800 hover:border-[#008767] hover:text-[#008767] transition-colors"
                >
                  Official Contact Directory
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <div className="flex items-center gap-3">
              <p>© {new Date().getFullYear()} Mufti Muneer Ahmad Akhoon. All rights reserved.</p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('play_site_intro'))}
                className="text-[11px] font-semibold text-[#008767] hover:underline cursor-pointer bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200"
              >
                Replay Intro Animation ↺
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <span>Classical Hanafi Jurisprudence</span>
              <span className="text-[#008767]">•</span>
              <span>Chishtia Zakariyya Tradition</span>
              <span className="text-[#008767]">•</span>
              <span>New York, USA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
