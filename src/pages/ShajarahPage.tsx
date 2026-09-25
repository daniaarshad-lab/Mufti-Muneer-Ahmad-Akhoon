import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowDown,
  ArrowRight,
  ArrowUpDown,
  Search,
  BookOpen,
  CheckCircle2,
  Share2,
  Download,
  Info,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SHAJARAH_DATA, ShajarahChain, ShajarahNode } from '../data/shajarah';

export const ShajarahPage: React.FC = () => {
  const [selectedChainId, setSelectedChainId] = useState<string>(SHAJARAH_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [expandedNodeIndex, setExpandedNodeIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'arrows' | 'compact'>('arrows');

  const currentChain = useMemo(() => {
    return SHAJARAH_DATA.find((c) => c.id === selectedChainId) || SHAJARAH_DATA[0];
  }, [selectedChainId]);

  const displayedNodes = useMemo(() => {
    let list = [...currentChain.nodes];
    if (isReversed) {
      list = list.slice().reverse();
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (n) =>
          n.nameUrdu.toLowerCase().includes(q) ||
          (n.titleUrdu && n.titleUrdu.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentChain, isReversed, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB]">
      <SEO
        title="شجرہ مبارکہ • Authentic Spiritual Sanad (Sajra) | Hazrat Mufti Muneer Ahmad Akhoon"
        description="Explore the unbroken spiritual lineages (Chishtia, Suhrawardiyya, Qadiriyya, Naqshbandiyya) and Hadith Sanad of Hazrat Maulana Mufti Muneer Ahmad Akhoon with sequential directional arrows."
      />

      {/* Vibrant High-Contrast Header Section with Zero Blending */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden shadow-md text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Unbroken Chain of Transmission (Sanad & Sajra)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            شجرہ مبارکہ • Authentic Spiritual Sanad
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            In orthodox Islamic mysticism (Tasawwuf) and Hadith transmission, the Sanad is the essential lifeline proving direct discipleship and spiritual authorization back to the Prophet Muhammad ﷺ. Below are the six verified, unbroken chains linking Hazrat Maulana Mufti Muneer Ahmad Akhoon sequentially through blessed masters.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>6 Major Canonical Lineages</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Sequential Flow with Step-by-Step Arrows</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Authentic Urdu / Arabic Calligraphy</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Shajarah Hierarchy Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 space-y-8 text-left">
        {/* Six Orders Tabs */}
        <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#008767] block">
                Select Silsilah / Spiritual Order
              </span>
              <h2 className="text-xl font-bold text-slate-950 mt-0.5">
                The 6 Sacred Transmissions
              </h2>
            </div>

            {/* View Mode & Reverse Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsReversed(!isReversed)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C8E5DF] bg-[#F8FCFB] hover:bg-emerald-50 text-xs font-semibold text-slate-700 hover:text-[#008767] transition-all cursor-pointer"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-[#008767]" />
                <span>{isReversed ? 'Akhoon ➔ Prophet ﷺ' : 'Prophet ﷺ ➔ Akhoon'}</span>
              </button>

              <button
                onClick={() => setViewMode(viewMode === 'arrows' ? 'compact' : 'arrows')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C8E5DF] bg-[#F8FCFB] hover:bg-emerald-50 text-xs font-semibold text-slate-700 hover:text-[#008767] transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#008767]" />
                <span>{viewMode === 'arrows' ? 'View: Arrow Chain' : 'View: Compact Grid'}</span>
              </button>
            </div>
          </div>

          {/* Silsilah Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {SHAJARAH_DATA.map((chain) => {
              const isSelected = chain.id === selectedChainId;
              return (
                <button
                  key={chain.id}
                  onClick={() => {
                    setSelectedChainId(chain.id);
                    setExpandedNodeIndex(null);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white shadow-md shadow-emerald-600/20 scale-102'
                      : 'bg-[#F8FCFB] text-slate-700 hover:text-slate-950 hover:bg-[#EBF5F2] border border-[#C8E5DF]'
                  }`}
                >
                  <span>{chain.orderName}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {chain.totalSteps} Links
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Chain Banner Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#0D9488] text-white p-6 sm:p-8 space-y-4 shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {currentChain.subtitleUrdu}
            </span>
            <span className="text-xs text-emerald-100 bg-black/25 px-3 py-1 rounded-full font-mono self-start sm:self-auto">
              Total Mashaykh in Chain: {currentChain.nodes.length}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-arabic leading-relaxed text-amber-200">
            {currentChain.titleUrdu}
          </h3>

          <div className="p-4 rounded-2xl bg-black/25 backdrop-blur-xs border border-white/10 text-xs sm:text-sm text-emerald-50 font-arabic leading-loose">
            {currentChain.duaaUrdu}
          </div>
        </div>

        {/* Search Shaykh Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#008767] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="تلاش کریں / Search any master by Urdu name or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#C8E5DF] bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all shadow-xs"
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

        {/* ========================================================
            VIEW MODE 1: SEQUENTIAL ARROW CHAIN (EXPLICIT DOWNWARD ARROWS)
            ======================================================== */}
        {viewMode === 'arrows' && (
          <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Lineage Sequence With Direct Transmission Arrows
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Showing {displayedNodes.length} of {currentChain.nodes.length} Masters
              </span>
            </div>

            <div className="space-y-1 max-w-3xl mx-auto pt-4">
              {displayedNodes.map((node, index) => {
                const isFirst = index === 0;
                const isLast = index === displayedNodes.length - 1;
                const isExpanded = expandedNodeIndex === index;

                return (
                  <React.Fragment key={`${currentChain.id}-${node.number}-${node.nameUrdu}-${index}`}>
                    {/* Node Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setExpandedNodeIndex(isExpanded ? null : index)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-xs ${
                        isFirst
                          ? 'bg-gradient-to-r from-amber-50/90 via-yellow-50/60 to-white border-amber-300 hover:border-amber-400 ring-2 ring-amber-100'
                          : isLast
                          ? 'bg-gradient-to-r from-emerald-50/90 via-teal-50/60 to-white border-emerald-400 hover:border-emerald-500 ring-2 ring-emerald-100'
                          : 'bg-[#F8FCFB] border-[#C8E5DF] hover:border-[#00A878] hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-xs shadow-xs ${
                              isFirst
                                ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 font-serif ring-2 ring-amber-200'
                                : isLast
                                ? 'bg-gradient-to-tr from-[#008767] to-[#00A878] text-white ring-2 ring-emerald-200'
                                : 'bg-emerald-100 text-[#008767] font-mono border border-emerald-200'
                            }`}
                          >
                            {node.number !== undefined ? node.number : index + 1}
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-950 font-arabic">
                              {node.nameUrdu}
                            </h3>
                            <span className="text-[11px] text-slate-500 font-medium">
                              Link #{node.number !== undefined ? node.number : index + 1} in unbroken chain
                            </span>
                          </div>
                        </div>

                        {node.titleUrdu && (
                          <span className="text-xs text-amber-900 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full font-arabic self-start sm:self-auto font-medium">
                            {node.titleUrdu}
                          </span>
                        )}
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs text-slate-600 space-y-1">
                          <p className="font-semibold text-[#008767] flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Authorized transmission confirmed in {currentChain.orderName}</span>
                          </p>
                          <p className="leading-relaxed">
                            Holy predecessor and Shaykh holding direct authorization (Khilafah and Sanad-e-Hadith) linking forward to their disciple.
                          </p>
                        </div>
                      )}
                    </motion.div>

                    {/* Prominent Downward Lineage Arrow */}
                    {!isLast && (
                      <div className="flex flex-col items-center justify-center py-2 text-center group">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-[#008767] to-[#00A878]" />
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008767] text-[11px] font-bold shadow-2xs group-hover:bg-[#008767] group-hover:text-white transition-all">
                          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                          <span>{isReversed ? 'Authorized by' : 'Transmitted sacred Sanad & Khilafah to'}</span>
                          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                        </div>
                        <div className="w-0.5 h-3 bg-gradient-to-b from-[#00A878] to-[#008767]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: COMPACT HORIZONTAL GRID
            ======================================================== */}
        {viewMode === 'compact' && (
          <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedNodes.map((node, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] hover:border-[#00A878] hover:bg-white transition-all shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#008767] text-xs font-bold flex items-center justify-center font-mono">
                      {node.number !== undefined ? node.number : index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 font-arabic">
                        {node.nameUrdu}
                      </h4>
                      {node.titleUrdu && (
                        <p className="text-[11px] text-amber-700 font-arabic">
                          {node.titleUrdu}
                        </p>
                      )}
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explanatory Context Footer on Sanad */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C8E5DF] space-y-3">
          <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#008767]" />
            <span>The Traditional Importance of Sanad (Lineage of Discipleship)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            As famously declared by Imam Abdullah ibn al-Mubarak (رحمه الله): <em>"The Sanad (chain of transmission) is part of religion. Were it not for the Sanad, whoever wished would say whatever he wished."</em> Every practice, litany (Wazifa), and Hadith taught by Hazrat Maulana Mufti Muneer Ahmad Akhoon is protected by these verifiable chains stretching through the scholars of Deoband, Saharanpur, Gangoh, Thanbhawan, and back to the blessed Companions and Sayyidina Rasulullah ﷺ.
          </p>
        </div>
      </main>
    </div>
  );
};
