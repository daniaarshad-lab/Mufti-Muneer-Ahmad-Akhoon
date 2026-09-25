import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Scroll, ChevronDown, ChevronUp, BookOpen, CheckCircle, Tag, Share2 } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { FATWAS_DATA } from '../data/fatwas';

export const FatwaArchive: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFatwaId, setExpandedFatwaId] = useState<string | null>(FATWAS_DATA[0]?.id || null);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(FATWAS_DATA.map((f) => f.category))];
    return cats;
  }, []);

  const filteredFatwas = useMemo(() => {
    return FATWAS_DATA.filter((fatwa) => {
      const matchesCategory = selectedCategory === 'All' || fatwa.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        !searchQuery.trim() ||
        fatwa.title.toLowerCase().includes(q) ||
        fatwa.question.toLowerCase().includes(q) ||
        fatwa.answerSummary.toLowerCase().includes(q) ||
        fatwa.referenceNo.toLowerCase().includes(q) ||
        fatwa.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedFatwaId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <SEO
        title="Fatwa Archive | Darul Ifta Khatm-e-Nubuwwat"
        description="Searchable archive of verified Shariah rulings (fatwas) issued by Mufti Muneer Ahmad Akhoon in New York."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link
                to="/fatwas"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Darul Ifta Overview</span>
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight">
                Fatwa Archive
              </h1>
              <p className="text-sm text-[#7A7F6A] mt-1">
                Authoritative legal rulings published for the benefit of students and community members.
              </p>
            </div>

            <div>
              <Button to="/fatwas/ask" variant="primary" size="sm">
                Ask a New Question
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          {/* Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7F6A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or reference number (e.g. DAR-2024-104)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E5E0D6] bg-[#FAF8F5] text-sm text-[#2E2E2E] placeholder-[#6B6B65] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#7A7F6A] hover:text-[#2E2E2E]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium text-[#7A7F6A] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                <span>Category:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-[6px] border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#2E302B] text-[#FAF8F5] border-[#2E2E2E]'
                      : 'bg-[#FFFFFF] text-[#7A7F6A] border-[#E5E0D6] hover:border-[#A8A190]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-[#7A7F6A] mb-4 pb-2 border-b border-[#E5E0D6]">
            <span>
              Showing <strong>{filteredFatwas.length}</strong> of {FATWAS_DATA.length} rulings
            </span>
            {selectedCategory !== 'All' && (
              <span>Filtered by: <strong>{selectedCategory}</strong></span>
            )}
          </div>

          {/* Fatwas List */}
          {filteredFatwas.length === 0 ? (
            <Card className="p-12 text-center max-w-lg mx-auto space-y-4">
              <Scroll className="w-10 h-10 text-[#A8A190] mx-auto" />
              <h3 className="font-serif text-lg text-[#2E2E2E] font-medium">
                No Fatwas Found Matching Your Search
              </h3>
              <p className="text-xs text-[#7A7F6A] leading-relaxed">
                We could not find any archived rulings matching "{searchQuery}". You may reset your filter or submit a question directly to the Darul Ifta.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                  size="sm"
                >
                  Reset Filters
                </Button>
                <Button to="/fatwas/ask" variant="primary" size="sm">
                  Submit Question
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-5">
              {filteredFatwas.map((fatwa) => {
                const isExpanded = expandedFatwaId === fatwa.id;
                return (
                  <Card key={fatwa.id} className="overflow-hidden transition-colors">
                    {/* Header bar / preview */}
                    <div
                      onClick={() => toggleExpand(fatwa.id)}
                      className="p-5 sm:p-6 cursor-pointer hover:bg-[#FAF8F5]/50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <Badge variant="accent" size="sm">
                            {fatwa.category}
                          </Badge>
                          <span className="font-mono text-[11px] text-[#7A7F6A]">
                            {fatwa.referenceNo}
                          </span>
                          <span className="text-[#7A7F6A]">•</span>
                          <span className="text-[11px] text-[#7A7F6A]">{fatwa.date}</span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl text-[#2E2E2E] font-medium">
                          {fatwa.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#7A7F6A] line-clamp-2">
                          <strong>Question:</strong> {fatwa.question}
                        </p>
                      </div>

                      <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2">
                        <div className="text-xs text-[#2E2E2E] font-medium flex items-center gap-1">
                          <span>{isExpanded ? 'Collapse' : 'Read Verdict'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#7A7F6A]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#7A7F6A]" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable full verdict */}
                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-[#E5E0D6] bg-[#FAF8F5] space-y-6">
                        {/* Question Block */}
                        <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-[8px] border border-[#E5E0D6]">
                          <span className="text-xs uppercase font-medium tracking-wider text-[#7A7F6A] block mb-1">
                            Question Received
                          </span>
                          <p className="text-xs sm:text-sm text-[#2E2E2E]/90 leading-relaxed italic">
                            "{fatwa.question}"
                          </p>
                        </div>

                        {/* Legal Verdict & Reasoning */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs uppercase font-medium tracking-wider text-[#2E2E2E]">
                              Official Juristic Answer (Al-Jawab)
                            </span>
                          </div>

                          <div className="text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed bg-[#FFFFFF] p-5 sm:p-6 rounded-[8px] border border-[#E5E0D6] space-y-3">
                            <p className="font-serif font-medium text-[#2E2E2E] border-b border-[#E5E0D6] pb-2">
                              {fatwa.answerSummary}
                            </p>
                            <p className="text-xs sm:text-sm text-[#2E2E2E]/85 leading-relaxed whitespace-pre-line">
                              {fatwa.answerDetailed}
                            </p>
                          </div>
                        </div>

                        {/* Classical Citations */}
                        <div className="space-y-2">
                          <span className="text-xs uppercase font-medium tracking-wider text-[#7A7F6A] block">
                            Classical Juristic Citations (Maraji‘):
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {fatwa.citations.map((cite, cIdx) => (
                              <div
                                key={cIdx}
                                className="text-xs font-mono px-3 py-1.5 rounded-[6px] bg-[#FFFFFF] border border-[#E5E0D6] text-[#2E2E2E]"
                              >
                                {cite}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sign-off Seal */}
                        <div className="pt-4 border-t border-[#E5E0D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#7A7F6A]">
                          <div>
                            <span className="block font-medium text-[#2E2E2E]">
                              Issued & Endorsed by:
                            </span>
                            <span>{fatwa.muftiSignature}</span>
                          </div>

                          <div className="text-right">
                            <span className="font-mono text-[11px] block">
                              Record: {fatwa.referenceNo}
                            </span>
                            <span>Darul Ifta Khatm-e-Nubuwwat, New York</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};
