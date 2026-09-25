import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Download, FileText, Globe, Search, Filter, ShieldCheck, ArrowRight, X, CheckCircle2, Sparkles, BookMarked } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { BOOKS_DATA } from '../data/books';
import { BookItem } from '../types';

export const Books: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBookModal, setActiveBookModal] = useState<BookItem | null>(null);

  const languages = ['All', 'English', 'Urdu', 'Arabic'];
  const categories = ['All', 'Tazkiyah & Sufism', 'Fiqh', 'Contemporary Topics'];

  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      const matchesLang =
        selectedLanguage === 'All' ||
        book.language.toLowerCase().includes(selectedLanguage.toLowerCase());
      
      const matchesCat =
        selectedCategory === 'All' ||
        book.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        book.title.toLowerCase().includes(q) ||
        (book.urduTitle && book.urduTitle.toLowerCase().includes(q)) ||
        book.summary.toLowerCase().includes(q) ||
        book.category.toLowerCase().includes(q);

      return matchesLang && matchesCat && matchesSearch;
    });
  }, [selectedLanguage, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB]">
      <SEO
        title="Books & Treatises | Hazrat Mufti Muneer Ahmad Akhoon"
        description="Authored treatises, juristic compilations, prophetic supplications, and spiritual manuals by Mufti Muneer Ahmad Akhoon."
      />

      {/* Vibrant High-Contrast Header Section with Zero Blending */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden shadow-md">
        {/* Subtle decorative geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Scholarly Treatises & Manuals</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Publications & Books by Hazrat Mufti Muneer Ahmad Akhoon
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed pt-1">
              Juristic research manuals, spiritual devotion guides, and educational texts written to anchor contemporary Muslims in orthodox Sunni practice and classical Hanafi scholarship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Publications Catalog */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-8">
        {/* Search & Dynamic Filter Controls */}
        <div className="p-6 rounded-3xl bg-white border border-[#C8E5DF] shadow-sm space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#008767]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatises by title, Arabic/Urdu topic, or subject..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-[#00A878] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#008767]" />
                <span>Subject:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                      : 'bg-[#F8FCFB] text-slate-700 border border-[#C8E5DF] hover:bg-emerald-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Language Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#008767]" />
                <span>Language:</span>
              </span>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    selectedLanguage === lang
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-[#F8FCFB] text-slate-700 border border-[#C8E5DF] hover:bg-slate-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Modern Books Grid with Gilded Spines and High Contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white border border-[#C8E5DF] hover:border-[#00A878] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 justify-between shadow-sm hover:shadow-[0_20px_45px_rgba(0,168,120,0.16)] transition-all duration-300"
            >
              {/* Left: 3D Book Cover Card */}
              <div className="sm:w-48 shrink-0">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#008767] p-4 text-white flex flex-col justify-between shadow-md relative overflow-hidden group-hover:scale-104 transition-transform duration-500 border border-emerald-400/30">
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/25 border-r border-white/20" />
                  
                  {/* Foil sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                  <div className="pl-2 space-y-1 relative z-10">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-amber-300 block">
                      Al-Muneer Series
                    </span>
                    <h3 className="text-sm font-bold font-serif text-white leading-snug">
                      {book.title}
                    </h3>
                  </div>

                  <div className="pl-2 space-y-1 border-t border-white/20 pt-2 relative z-10">
                    <p className="text-[10px] text-amber-200 font-medium">
                      Mufti Muneer Akhoon
                    </p>
                    <div className="flex items-center justify-between text-[9px] text-emerald-100">
                      <span>{book.pages} Pages</span>
                      <span>{book.language}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Book Details & Actions */}
              <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-[#008767] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {book.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Ref: BK-{book.id}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-[#008767] transition-colors">
                    {book.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {book.summary}
                  </p>

                  {book.tableOfContentsSummary && (
                    <div className="p-3 rounded-xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-700 space-y-1 mt-2">
                      <span className="font-bold text-slate-900 block text-[11px]">
                        Core Chapters:
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                        {book.tableOfContentsSummary.slice(0, 2).map((ch, i) => (
                          <li key={i} className="truncate">{ch}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions: Excerpt Preview & Download */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveBookModal(book)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Chapters & Excerpt</span>
                  </button>

                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveBookModal(book);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold hover:shadow-md transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Open-Access Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C8E5DF] text-left space-y-2">
          <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#008767]" />
            <span>Academic Distribution & Free Open-Access Policy</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Treatises authored by Hazrat Mufti Muneer Ahmad Akhoon on prayer, dhikr, fasting, and family jurisprudence are made freely accessible in digital format for non-commercial educational study circles and mosques across North America.
          </p>
        </div>
      </main>

      {/* Interactive Modal for Book Chapter Details & PDF Request */}
      <AnimatePresence>
        {activeBookModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-[#C8E5DF] max-w-2xl w-full p-6 sm:p-8 space-y-5 text-left shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveBookModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#008767] uppercase tracking-wider">
                  {activeBookModal.category} • {activeBookModal.language}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  {activeBookModal.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Authored by Hazrat Maulana Mufti Muneer Ahmad Akhoon
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeBookModal.summary}
              </p>

              {activeBookModal.tableOfContentsSummary && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Table of Contents Outline:
                  </h4>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {activeBookModal.tableOfContentsSummary.map((ch, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-800 flex items-center gap-2"
                      >
                        <BookMarked className="w-3.5 h-3.5 text-[#008767] shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Total Length: {activeBookModal.pages} Pages
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      alert('A digital copy of this treatise is being emailed to your registered session or downloaded.');
                      setActiveBookModal(null);
                    }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold shadow-md cursor-pointer hover:shadow-lg"
                  >
                    Confirm Digital PDF Download
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
