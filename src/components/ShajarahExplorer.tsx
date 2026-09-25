import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, Search, ChevronDown, ChevronUp, Award, CheckCircle2, ArrowUpDown, ArrowDown, ExternalLink, ArrowRight } from 'lucide-react';
import { SHAJARAH_DATA, ShajarahChain, ShajarahNode } from '../data/shajarah';

interface ShajarahExplorerProps {
  showFullPageLink?: boolean;
}

export const ShajarahExplorer: React.FC<ShajarahExplorerProps> = ({ showFullPageLink = true }) => {
  const [selectedChainId, setSelectedChainId] = useState<string>(SHAJARAH_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isReversed, setIsReversed] = useState<boolean>(false); // default: Prophet ﷺ at top down to Mufti Muneer
  const [expandedNodeIndex, setExpandedNodeIndex] = useState<number | null>(null);

  const currentChain = SHAJARAH_DATA.find((c) => c.id === selectedChainId) || SHAJARAH_DATA[0];

  const displayedNodes = React.useMemo(() => {
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
    <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden text-left">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#008767]" />
            <span>Unbroken Spiritual & Academic Lineages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            شجرہ مبارکہ • Authentic Spiritual Sanad (Sajra)
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            Sequential chain of transmission linked directly by unbroken lineage arrows from Sayyidina Rasulullah ﷺ down to Hazrat Maulana Mufti Muneer Ahmad Akhoon.
          </p>
        </div>

        {/* Action controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setIsReversed(!isReversed)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#C8E5DF] bg-[#F8FCFB] hover:bg-emerald-50 text-xs font-semibold text-gray-700 hover:text-[#008767] transition-colors cursor-pointer"
            title="Toggle chronological order"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#008767]" />
            <span>{isReversed ? 'Showing: Akhoon ➔ Prophet ﷺ' : 'Showing: Prophet ﷺ ➔ Akhoon'}</span>
          </button>

          {showFullPageLink && (
            <Link
              to="/shajarah"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold hover:shadow-md transition-all shadow-xs cursor-pointer"
            >
              <span>Dedicated Sajra Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* 6 Shajarah Tabs matching the 6 Uploaded Authentic Lineage Images */}
      <div className="relative z-10">
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
                    : 'bg-[#F8FCFB] text-gray-700 hover:text-gray-950 hover:bg-[#EBF5F2] border border-[#C8E5DF]'
                }`}
              >
                <span>{chain.orderName}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-normal ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {chain.totalSteps}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chain Header Card with Arabic / Urdu Calligraphy & Blessed Dua */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#0D9488] text-white space-y-3 relative overflow-hidden shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
            {currentChain.subtitleUrdu}
          </span>
          <span className="text-xs text-emerald-100 bg-black/20 px-3 py-1 rounded-full font-mono">
            Total Links in Golden Chain: {currentChain.nodes.length} Mashaykh
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-arabic tracking-wide leading-relaxed">
          {currentChain.titleUrdu}
        </h3>

        <div className="p-3.5 rounded-xl bg-black/25 backdrop-blur-xs border border-white/10 text-xs sm:text-sm text-emerald-50 font-arabic leading-loose">
          {currentChain.duaaUrdu}
        </div>
      </div>

      {/* Search Input for Quick Finding any Master in Chain */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-[#008767] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="تلاش کریں / Search Shaykh in this lineage..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full border border-[#C8E5DF] bg-[#F8FCFB] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
          >
            Clear
          </button>
        )}
      </div>

      {/* Sequential Hierarchy Tree with Connected Arrows */}
      <div className="relative pl-6 sm:pl-10 space-y-2 max-h-[640px] overflow-y-auto pr-2 scrollbar-thin">
        {/* Continuous Connecting Line */}
        <div className="absolute left-[19px] sm:left-[35px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-400 via-[#00A878] to-[#008767]" />

        <AnimatePresence mode="popLayout">
          {displayedNodes.map((node, index) => {
            const isFirst = index === 0;
            const isLast = index === displayedNodes.length - 1;
            const isExpanded = expandedNodeIndex === index;

            return (
              <React.Fragment key={`${currentChain.id}-${node.number}-${node.nameUrdu}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.5) }}
                  className="relative flex items-start gap-4 group"
                >
                  {/* Node Number Circle / Connector Bead */}
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 font-serif font-bold text-xs shadow-sm ${
                      isFirst
                        ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 ring-4 ring-amber-100 scale-110'
                        : isLast
                        ? 'bg-gradient-to-tr from-[#008767] to-[#00A878] text-white ring-4 ring-emerald-100 scale-110'
                        : 'bg-white border-2 border-[#00A878] text-[#008767] group-hover:bg-[#008767] group-hover:text-white group-hover:scale-105'
                    }`}
                  >
                    {node.number !== undefined ? node.number : index + 1}
                  </div>

                  {/* Node Card */}
                  <div
                    onClick={() => setExpandedNodeIndex(isExpanded ? null : index)}
                    className={`flex-1 p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isFirst
                        ? 'bg-gradient-to-r from-amber-50 to-yellow-50/50 border-amber-200 hover:border-amber-300 shadow-xs'
                        : isLast
                        ? 'bg-gradient-to-r from-emerald-50 to-teal-50/50 border-emerald-300 hover:border-emerald-400 shadow-xs'
                        : 'bg-[#F8FCFB] border-[#C8E5DF] hover:border-[#00A878] hover:bg-white hover:shadow-xs'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          #{node.number !== undefined ? node.number : index + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-gray-950 group-hover:text-[#008767] transition-colors font-arabic">
                          {node.nameUrdu}
                        </h4>
                      </div>

                      {node.titleUrdu && (
                        <span className="text-xs text-amber-800 bg-amber-100/70 border border-amber-200 px-2.5 py-0.5 rounded-full font-arabic self-start sm:self-auto">
                          {node.titleUrdu}
                        </span>
                      )}
                    </div>

                    {/* Expandable Historical / Spiritual Details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-gray-200/80 space-y-1.5 text-xs text-gray-600"
                      >
                        <p className="flex items-center gap-1.5 text-[#008767] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Unbroken Sanad Link in {currentChain.orderName}</span>
                        </p>
                        <p className="leading-relaxed">
                          Authorized teacher and master through whom the divine light, prophetic hadith transmission, and spiritual litanies flowed to their successor in this chain.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Clear Downward Sequential Arrow Between Nodes */}
                {!isLast && (
                  <div className="flex items-center pl-[19px] sm:pl-[35px] py-1">
                    <div className="w-7 sm:w-9 flex items-center justify-center">
                      <div className="p-1 rounded-full bg-emerald-100 text-[#008767] border border-emerald-200 shadow-2xs group-hover:bg-[#008767] group-hover:text-white transition-colors">
                        <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 pl-3">
                      {isReversed ? 'Authorized by ➔' : 'Passed authorization & Sanad to ➔'}
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
