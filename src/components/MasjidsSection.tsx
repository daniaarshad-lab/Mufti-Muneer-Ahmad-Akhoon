import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { MASJIDS_DATA, MasjidInfo } from '../data/masjids';

export const MasjidsSection: React.FC = () => {
  return (
    <div className="rounded-[32px] bg-gradient-to-br from-white/80 via-white/60 to-emerald-50/40 backdrop-blur-xl border border-white/80 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden text-left">
      {/* Decorative ambient glass glowing accents */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

      {/* Header with vibrant badges */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <Building2 className="w-3.5 h-3.5 text-[#008767]" />
            <span>Sacred Sanctuaries & Mosques</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Masajid Founded & Patronized by Hazrat Mufti Muneer Ahmad Akhoon
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            Spiritual sanctuaries providing five daily congregational prayers, weekly gatherings of remembrance (Zikr), and Quranic education across New York and Long Island.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] bg-white/80 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs shrink-0 self-start md:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>4 Active Sanctuaries</span>
        </span>
      </div>

      {/* 4 Masjids Grid with Modern Glassy Card Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {MASJIDS_DATA.map((masjid: MasjidInfo, idx: number) => (
          <motion.div
            key={masjid.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group rounded-3xl bg-white/75 backdrop-blur-lg border border-white/90 hover:border-[#00A878] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_45px_rgba(0,168,120,0.16)] hover:-translate-y-1.5 transition-all duration-500 space-y-5"
          >
            <div className="space-y-4">
              {/* Masjid Image Frame with Sheen and Glassy Badge */}
              <div className="picture-card aspect-[16/9] rounded-2xl overflow-hidden bg-emerald-950 relative shadow-md">
                <img
                  src={masjid.image}
                  alt={masjid.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Shimmer light beam */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                {/* Glassy overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Bottom title inside image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {masjid.location}
                    </span>
                    <span className="font-arabic text-sm text-emerald-200">
                      {masjid.urduName}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-tight mt-0.5">
                    {masjid.name}
                  </h3>
                </div>
              </div>

              {/* Description & Address */}
              <div className="space-y-2">
                <div className="flex items-start gap-1.5 text-xs text-emerald-800 font-medium bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100/80">
                  <MapPin className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" />
                  <span className="leading-snug">{masjid.address}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1">
                  {masjid.description}
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                  Key Services & Assemblies
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {masjid.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-[11px] text-gray-700 bg-white/90 px-2.5 py-1.5 rounded-lg border border-gray-100 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#008767] shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-gray-100/90 flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#008767]" />
                <span>5 Daily Prayers Active</span>
              </span>

              {masjid.directionsUrl && (
                <a
                  href={masjid.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold shadow-xs hover:shadow-md hover:shadow-emerald-500/20 transition-all active:scale-95 group-hover:scale-102"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-300" />
                  <span>Get Directions</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
