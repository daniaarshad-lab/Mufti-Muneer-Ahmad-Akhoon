import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  ArrowRight,
  Search,
  Filter,
  Users,
  CheckCircle2,
  Sparkles,
  Ticket,
  ChevronRight,
  Radio,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { EVENTS_DATA } from '../data/events';
import { REAL_WEEKLY_SCHEDULE } from '../data/schedule';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [eventTypeFilter, setEventTypeFilter] = useState<'all' | 'in-person' | 'live-broadcast'>('all');

  // Unified event list combining special convocations and weekly assemblies
  const allEvents = useMemo(() => {
    // Convert weekly assemblies into event items for complete directory
    const weeklyAsEvents = REAL_WEEKLY_SCHEDULE.map((s) => ({
      id: s.id,
      title: s.title,
      slug: s.id,
      date: s.dateLabel,
      time: s.time,
      location: s.location,
      address: s.address || 'New York, USA',
      description: s.description,
      speaker: 'Hazrat Maulana Mufti Muneer Ahmad Akhoon',
      isUpcoming: true,
      category: s.type === 'in-person' ? 'Weekly Assembly' : 'Live Broadcast',
      registrationRequired: true,
      livestreamAvailable: s.type === 'live-broadcast' || s.id === 'friday-khutba',
      isRecurringWeekly: true,
      urduTitle: s.urduTitle,
    }));

    const regularEvents = EVENTS_DATA.map((e) => ({
      ...e,
      isRecurringWeekly: false,
      urduTitle: undefined,
    }));

    return [...weeklyAsEvents, ...regularEvents];
  }, []);

  const categories = ['All', 'Weekly Assembly', 'Live Broadcast', 'Graduation & Convocation', 'Spiritual Retreat', 'Educational Seminar'];

  const filteredEvents = useMemo(() => {
    return allEvents.filter((ev) => {
      const matchesCat =
        selectedCategory === 'All' ||
        ev.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesType =
        eventTypeFilter === 'all' ||
        (eventTypeFilter === 'in-person' && !ev.category.includes('Live')) ||
        (eventTypeFilter === 'live-broadcast' && (ev.livestreamAvailable || ev.category.includes('Live')));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q);

      return matchesCat && matchesType && matchesSearch;
    });
  }, [allEvents, selectedCategory, eventTypeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB]">
      <SEO
        title="Events & Convocations Schedule | Hazrat Mufti Muneer Ahmad Akhoon"
        description="Official schedule of upcoming convocations, weekly assemblies, spiritual retreats, and Islamic finance seminars with Hazrat Mufti Muneer Ahmad Akhoon in New York."
      />

      {/* High-Contrast Header Section with Zero Blending */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden shadow-md text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Sacred Assemblies & Community Gatherings</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Events, Convocations & Weekly Majalis
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            Register for in-person spiritual gatherings, weekly pre-dawn Durood majlis, Dars-e-Nizami graduation ceremonies, and live broadcasts led by Hazrat Maulana Mufti Muneer Ahmad Akhoon.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Complimentary Community Registration</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Dedicated Family & Sisters Accommodations</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Worldwide Live Streaming Available</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Events Catalog */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-8 text-left">
        {/* Search & Filter Bar */}
        <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#008767] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search gatherings by title, location (Uniondale, Mount Vernon), or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
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
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#008767]" />
                <span>Type:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                      : 'bg-[#F8FCFB] text-slate-700 border border-[#C8E5DF] hover:bg-emerald-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Attendance Format Switcher */}
            <div className="flex items-center gap-1 bg-[#F8FCFB] p-1 rounded-full border border-[#C8E5DF]">
              <button
                onClick={() => setEventTypeFilter('all')}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  eventTypeFilter === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Modes
              </button>
              <button
                onClick={() => setEventTypeFilter('in-person')}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  eventTypeFilter === 'in-person'
                    ? 'bg-[#008767] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                In-Person
              </button>
              <button
                onClick={() => setEventTypeFilter('live-broadcast')}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  eventTypeFilter === 'live-broadcast'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Live Broadcast
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white border border-[#C8E5DF] hover:border-[#00A878] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_45px_rgba(0,168,120,0.15)] transition-all duration-300 space-y-5"
            >
              <div className="space-y-3.5">
                {/* Event Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#008767] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {event.category}
                  </span>

                  {event.livestreamAvailable && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                      <Radio className="w-3 h-3 text-amber-600" />
                      <span>Live Stream Available</span>
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#008767] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  {event.urduTitle && (
                    <p className="font-arabic text-sm text-emerald-800 font-semibold pt-1">
                      {event.urduTitle}
                    </p>
                  )}
                </div>

                {/* Event Schedule Info */}
                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#008767] shrink-0" />
                    <span className="font-semibold text-slate-900">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#008767] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#008767] shrink-0" />
                    <span>{event.location} {event.address ? `• ${event.address}` : ''}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed pt-1">
                  {event.description}
                </p>
              </div>

              {/* Action Buttons: Navigate to Registration & Details Page */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-[#008767]" />
                  <span>Free RSVP / Registration</span>
                </span>

                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95 group-hover:translate-x-0.5"
                >
                  <span>Event Details & Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Instructions & Etiquette Note */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C8E5DF] text-left space-y-2">
          <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#008767]" />
            <span>Etiquette (Adab) of Sacred Assemblies</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Attendees are requested to maintain ritual purity (Wudu), observe modest Islamic dress, silence mobile devices upon entering the prayer hall, and arrive 15 minutes before the stated start time. Segregated accommodations are provided for sisters at all regional sanctuaries.
          </p>
        </div>
      </main>
    </div>
  );
};
