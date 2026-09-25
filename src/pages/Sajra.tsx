import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowDown,
  Search,
  BookOpen,
  Share2,
  CheckCircle2,
  ChevronDown,
  Filter,
  Info,
  Compass,
  Download,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SHAJARAH_DATA, ShajarahChain, ShajarahNode } from '../data/shajarah';

export const Sajra: React.FC = () => {
  const [selectedChainId, setSelectedChainId] = useState<string>('chishtia-sabiria');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'arrow-chain' | 'connected-grid'>('arrow-chain');
  const [activeModalNode, setActiveModalNode] = useState<{ node: ShajarahNode; index: number } | null>(null);

  const activeChain = useMemo(() => {
    return SHAJARAH_DATA.find((c) => c.id === selectedChainId) || SHAJARAH_DATA[0];
  }, [selectedChainId]);

  const filteredNodes = useMemo(() => {
    if (!searchQuery.trim()) return activeChain.nodes;
    const q = searchQuery.toLowerCase().trim();
    return activeChain.nodes.filter(
      (node) =>
        node.nameUrdu.toLowerCase().includes(q) ||
        (node.titleUrdu && node.titleUrdu.toLowerCase().includes(q)) ||
        (node.city && node.city.toLowerCase().includes(q)) ||
        (node.number && String(node.number).includes(q))
    );
  }, [activeChain, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB] text-slate-900">
      <SEO
        title="Shajarah Mubarakah (Sajra) | Spiritual Lineage & Sanad"
        description="Authentic unbroken spiritual chains (Sajra Mubarakah) of Hazrat Mufti Muneer Ahmad Akhoon connecting to Sayyiduna Rasulullah ﷺ through Chishtia, Suhrawardiyya, Qadiriyya, Naqshbandiyya, and Hadith lineages."
      />

      {/* Hero Header with Vibrant Emerald Gradient & Crystal Clear Legibility */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden shadow-md">
        {/* Subtle geometric background motif */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Silsilah Aaliyah • Unbroken Spiritual Transmission</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Shajarah Mubarakah (Sajra Sharif)
            </h1>

            <p className="font-arabic text-xl sm:text-2xl text-amber-300 font-bold leading-relaxed pt-1">
              شَجَرَہ مُبَارَکَہ وَ اَسَانِیْدِ سِلْسِلَہ عَالِیَہ
            </p>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed pt-1">
              Explore the documented, unbroken spiritual genealogy tracing teacher-to-student and master-to-disciple from Hazrat Maulana Mufti Muneer Ahmad Akhoon up to the Master of Creation, Sayyiduna wa Mawlana Muhammad ﷺ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-8">
        {/* 6 Silsila Tabs */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#C8E5DF] shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#008767]" />
              <span>Select Spiritual Order (Silsila):</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('arrow-chain')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'arrow-chain'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#F8FCFB] text-slate-700 border border-[#C8E5DF] hover:bg-slate-100'
                }`}
              >
                Connected Arrow Chain
              </button>
              <button
                onClick={() => setViewMode('connected-grid')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'connected-grid'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#F8FCFB] text-slate-700 border border-[#C8E5DF] hover:bg-slate-100'
                }`}
              >
                Dual-Column Ladder
              </button>
            </div>
          </div>

          {/* Silsila Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {SHAJARAH_DATA.map((chain) => {
              const isSelected = selectedChainId === chain.id;
              return (
                <button
                  key={chain.id}
                  onClick={() => {
                    setSelectedChainId(chain.id);
                    setSearchQuery('');
                  }}
                  className={`p-3 rounded-2xl text-center transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#008767] to-[#00A878] text-white border-[#00A878] shadow-md scale-[1.02]'
                      : 'bg-[#F8FCFB] text-slate-700 border-[#C8E5DF] hover:border-[#00A878] hover:bg-white'
                  }`}
                >
                  <span className="font-arabic text-sm block font-bold truncate">
                    {chain.orderName}
                  </span>
                  <span className={`text-[10px] block mt-0.5 font-medium ${isSelected ? 'text-amber-200' : 'text-slate-500'}`}>
                    {chain.nodes.length} Masters in Chain
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Chain Details Banner & Search */}
          <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1 w-full md:w-auto">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-950 font-arabic">
                {activeChain.titleUrdu}
              </h2>
              <p className="text-xs text-[#008767] font-semibold italic">
                "{activeChain.duaaUrdu}"
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#008767] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Shaykh in chain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-[#00A878]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Legend / Guidance Note */}
        <div className="p-4 rounded-2xl bg-white border border-[#C8E5DF] text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3 shadow-2xs text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#008767] shrink-0" />
            <span>
              Follow the <strong>golden directional arrows (↓)</strong> descending from the Holy Prophet Muhammad ﷺ down through the Sahabah, classical saints of Chisht, Sarhind, and Thana Bhawan down to Hazrat Mufti Muneer Ahmad Akhoon.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px] font-semibold text-[#008767]">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span>Prophetic Origin</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008767] inline-block" />
              <span>Spiritual Link</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block" />
              <span>Living Mentor</span>
            </span>
          </div>
        </div>

        {/* =========================================================
            ARROW CHAIN VIEW (Step-by-step with prominent downward arrows)
            ========================================================= */}
        {viewMode === 'arrow-chain' ? (
          <div className="max-w-3xl mx-auto space-y-0">
            {filteredNodes.map((node, index) => {
              const isFirst = index === 0;
              const isLast = index === filteredNodes.length - 1;
              const isMuftiMuneer = node.nameUrdu.includes('منیر احمد اکھون') || isLast;

              return (
                <React.Fragment key={index}>
                  {/* Master Card Node */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.5) }}
                    onClick={() => setActiveModalNode({ node, index })}
                    className={`group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border shadow-sm hover:shadow-md text-left ${
                      isFirst
                        ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white border-amber-400 shadow-amber-500/20'
                        : isMuftiMuneer
                        ? 'bg-gradient-to-r from-[#008767] via-[#00A878] to-[#0D9488] text-white border-[#00A878] shadow-emerald-500/25 scale-[1.02]'
                        : 'bg-white hover:bg-[#F8FCFB] border-[#C8E5DF] hover:border-[#00A878]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Left Step Badge */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${
                            isFirst || isMuftiMuneer
                              ? 'bg-white/20 text-white border border-white/30'
                              : 'bg-emerald-50 text-[#008767] border border-emerald-200'
                          }`}
                        >
                          {node.number ?? index + 1}
                        </span>

                        <div>
                          {node.titleUrdu && (
                            <span
                              className={`text-[11px] font-semibold block leading-tight ${
                                isFirst || isMuftiMuneer ? 'text-amber-200' : 'text-[#008767]'
                              }`}
                            >
                              {node.titleUrdu}
                            </span>
                          )}
                          <h3
                            className={`text-lg sm:text-xl font-bold font-arabic tracking-wide mt-0.5 ${
                              isFirst || isMuftiMuneer ? 'text-white' : 'text-slate-950'
                            }`}
                          >
                            {node.nameUrdu}
                          </h3>
                        </div>
                      </div>

                      {/* Right Era / Status Pill */}
                      <div className="text-right shrink-0">
                        {isFirst && (
                          <span className="px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider text-amber-100 border border-white/30">
                            Source of Light ﷺ
                          </span>
                        )}
                        {isMuftiMuneer && (
                          <span className="px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider text-emerald-100 border border-white/30">
                            Living Shaykh
                          </span>
                        )}
                        {node.city && !isFirst && !isMuftiMuneer && (
                          <span className="text-[11px] text-slate-500 block">
                            {node.city}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* PROMINENT DIRECTIONAL ARROW (Connecting this master to the next) */}
                  {!isLast && (
                    <div className="flex flex-col items-center justify-center py-2 relative">
                      {/* Vertical line indicator */}
                      <div className="w-0.5 h-3 bg-gradient-to-b from-[#008767] to-amber-500" />
                      
                      {/* Arrow Capsule */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#008767] to-[#00A878] text-white flex items-center justify-center shadow-sm border-2 border-white my-0.5 hover:scale-110 transition-transform">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </div>

                      {/* Small transmission label */}
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#008767] bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs mt-0.5">
                        Transmission of Khilafah / Sanad ↓
                      </span>

                      <div className="w-0.5 h-3 bg-gradient-to-b from-amber-500 to-[#008767]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          /* =========================================================
             DUAL-COLUMN LADDER VIEW (Left & Right alternating with arrows)
             ========================================================= */
          <div className="relative max-w-4xl mx-auto py-4">
            {/* Central Vertical Timeline Cord with gradient */}
            <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 via-[#008767] to-teal-600 rounded-full" />

            <div className="space-y-8 relative z-10">
              {filteredNodes.map((node, index) => {
                const isLeft = index % 2 === 0;
                const isFirst = index === 0;
                const isLast = index === filteredNodes.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Node Card (half width) */}
                    <div className="w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => setActiveModalNode({ node, index })}
                        className={`p-5 rounded-3xl border shadow-sm hover:shadow-md transition-all cursor-pointer text-left ${
                          isFirst
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white border-amber-400'
                            : isLast
                            ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white border-[#00A878]'
                            : 'bg-white border-[#C8E5DF] hover:border-[#00A878] hover:bg-[#F8FCFB]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span
                            className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                              isFirst || isLast
                                ? 'bg-white/20 text-white'
                                : 'bg-emerald-50 text-[#008767]'
                            }`}
                          >
                            {node.number ?? index + 1}
                          </span>
                          {node.titleUrdu && (
                            <span
                              className={`text-[10px] font-semibold truncate ${
                                isFirst || isLast ? 'text-amber-200' : 'text-[#008767]'
                              }`}
                            >
                              {node.titleUrdu}
                            </span>
                          )}
                        </div>
                        <h4
                          className={`text-base font-bold font-arabic leading-snug ${
                            isFirst || isLast ? 'text-white' : 'text-slate-950'
                          }`}
                        >
                          {node.nameUrdu}
                        </h4>
                      </motion.div>
                    </div>

                    {/* Center Connector Dot & Arrow */}
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#008767] text-[#008767] flex items-center justify-center shrink-0 shadow-md relative z-20">
                      <ArrowDown className="w-4 h-4 text-[#008767]" />
                    </div>

                    {/* Spacer for opposite half */}
                    <div className="w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Invocation & Certification Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C8E5DF] text-left space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008767]">
            <CheckCircle2 className="w-4 h-4 text-[#008767]" />
            <span>Spiritual Lineage Verification & Discipleship</span>
          </div>

          <p className="font-arabic text-xl sm:text-2xl text-slate-950 font-bold leading-relaxed text-right dir-rtl">
            اَللّٰهُمَّ اجْعَلْ حُبَّكَ أَحَبَّ الْأَشْيَاءِ إِلَيَّ وَاخْشَكَ أَخْوَفَ الْأَشْيَاءِ عِنْدِي
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The Shajarah Mubarakah establishes an authentic, certified golden chain of transmission directly transmitting the spiritual blessings (Faiz) of the Chishtia, Qadiriyya, Suhrawardiyya, and Naqshbandiyya paths. Disciples taking the oath of allegiance (Bay'ah) with Hazrat Mufti Muneer Ahmad Akhoon are formally entered into this spiritual registry.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="/khanqah/bayah"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold hover:shadow-md transition-all shadow-xs"
            >
              <span>Learn About Discipleship (Bay'ah)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/khanqah"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8FCFB] border border-[#C8E5DF] text-slate-800 text-xs font-bold hover:bg-emerald-50 transition-all shadow-xs"
            >
              <Compass className="w-3.5 h-3.5 text-[#008767]" />
              <span>Khanqah Yusufia Spiritual Guidance</span>
            </a>
          </div>
        </div>
      </main>

      {/* Node Details Modal */}
      <AnimatePresence>
        {activeModalNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-[#C8E5DF] max-w-lg w-full p-6 sm:p-8 space-y-4 text-left shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#008767] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Step {activeModalNode.node.number ?? activeModalNode.index + 1} of {activeChain.nodes.length}
                </span>
                <button
                  onClick={() => setActiveModalNode(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="space-y-1">
                {activeModalNode.node.titleUrdu && (
                  <span className="text-xs font-semibold text-[#008767] block">
                    {activeModalNode.node.titleUrdu}
                  </span>
                )}
                <h3 className="text-2xl font-bold font-arabic text-slate-950">
                  {activeModalNode.node.nameUrdu}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Silsilah Chain:</span>
                  <span className="font-bold text-slate-900">{activeChain.orderName}</span>
                </div>
                {activeModalNode.node.city && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Resting Place / City:</span>
                    <span className="font-bold text-slate-900">{activeModalNode.node.city}</span>
                  </div>
                )}
                {activeModalNode.node.deathYearHijri && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Passing Year:</span>
                    <span className="font-bold text-slate-900">{activeModalNode.node.deathYearHijri} AH</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                May Allah sanctify their noble secret and grant us their spiritual blessings and upright adherence to the Sunnah.
              </p>

              <button
                onClick={() => setActiveModalNode(null)}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold shadow-xs hover:shadow-md cursor-pointer"
              >
                Back to Shajarah Chain
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
