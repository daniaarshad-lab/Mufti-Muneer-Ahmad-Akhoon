import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Radio, Users, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { REAL_WEEKLY_SCHEDULE, AssemblyEvent } from '../data/schedule';

export const WeeklyScheduleSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'in-person' | 'live-broadcast'>('all');

  const filteredEvents = REAL_WEEKLY_SCHEDULE.filter((ev) => {
    if (filterType === 'all') return true;
    return ev.type === filterType;
  });

  return (
    <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-left">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-200">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Weekly Sacred Gatherings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Official Weekly Assembly Schedule
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            Attend live in-person spiritual gatherings in New York or join the worldwide broadcast for remembrance (Zikr), Durood-o-Salaam, and sacred knowledge.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#F8FCFB] p-1 rounded-full border border-[#C8E5DF] shrink-0 self-start md:self-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Gatherings
          </button>
          <button
            onClick={() => setFilterType('in-person')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'in-person'
                ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            In-Person Only
          </button>
          <button
            onClick={() => setFilterType('live-broadcast')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'live-broadcast'
                ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Live Broadcast
          </button>
        </div>
      </div>

      {/* Vertical Animated Timeline with Side-Dot Visual Effect matching real screenshots */}
      <div className="relative pl-6 sm:pl-10 space-y-6 relative z-10">
        {/* Continuous Connected Vertical Line */}
        <div className="absolute left-[19px] sm:left-[35px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#00A878] via-emerald-400 to-teal-600 rounded-full" />

        {filteredEvents.map((event: AssemblyEvent, idx: number) => {
          const isInPerson = event.type === 'in-person';

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex items-start gap-4 sm:gap-6 group"
            >
              {/* Pulsing Side Dot Anchor on the Line */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 ${
                    isInPerson
                      ? 'bg-gradient-to-tr from-[#008767] to-[#00A878] ring-4 ring-emerald-100'
                      : 'bg-gradient-to-tr from-cyan-600 to-blue-600 ring-4 ring-cyan-100'
                  }`}
                >
                  {isInPerson ? (
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200" />
                  ) : (
                    <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                  )}
                </div>
                {/* Ping animation on first event */}
                {idx === 0 && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-40"></span>
                )}
              </div>

              {/* Event Details Card */}
              <div className="flex-1 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] p-5 sm:p-6 hover:border-[#00A878] hover:bg-white hover:shadow-[0_15px_35px_rgba(0,168,120,0.12)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isInPerson
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                          : 'bg-cyan-100 text-cyan-900 border border-cyan-200'
                      }`}
                    >
                      {event.dateLabel}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {event.day}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-[#008767]" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-950 group-hover:text-[#008767] transition-colors">
                      {event.title}
                    </h3>
                    {event.urduTitle && (
                      <span className="font-arabic text-sm text-emerald-800 font-bold">
                        {event.urduTitle}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-4 h-4 text-[#008767] shrink-0" />
                      <span>
                        <strong className="text-gray-900">{event.location}</strong>
                        {event.address && ` • ${event.address}`}
                      </span>
                    </div>

                    {event.address && (
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008767] hover:underline shrink-0"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>View Location Map</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
