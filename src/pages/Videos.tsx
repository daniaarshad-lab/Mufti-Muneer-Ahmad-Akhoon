import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Globe, Search, Filter, ExternalLink } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { VideoEmbed } from '../components/VideoEmbed';
import { SEO } from '../components/SEO';
import { VIDEOS_DATA } from '../data/videos';

export const Videos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const categories = useMemo(() => {
    return ['All', ...new Set(VIDEOS_DATA.map((v) => v.category))];
  }, []);

  const filteredVideos = useMemo(() => {
    return VIDEOS_DATA.filter((video) => {
      const matchesCat = selectedCategory === 'All' || video.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        video.title.toLowerCase().includes(q) ||
        video.description.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeVideo = useMemo(() => {
    return VIDEOS_DATA.find((v) => v.id === activeVideoId) || null;
  }, [activeVideoId]);

  return (
    <div>
      <SEO
        title="RahamTV Video Discourses"
        description="Lectures, Quranic Tafseer, and spiritual advice from Mufti Muneer Ahmad Akhoon on the RahamTV network."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link
                to="/media"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Media Overview</span>
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight">
                RahamTV Video Discourses
              </h1>
              <p className="text-sm text-[#6B6B65] mt-1">
                Lectures, tafseer series, and pastoral guidance recorded at Jamia Zakariyya and community masajid.
              </p>
            </div>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[#0F2E2C] text-[#FAF8F3] text-xs font-medium hover:bg-[#1A4542] transition-colors"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          {/* Active Modal / Sticky Player if video selected */}
          {activeVideo && (
            <div className="mb-10 p-6 rounded-[12px] bg-[#FAF8F3] border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
                <div className="flex items-center gap-2">
                  <Badge variant="accent" size="sm">Now Playing</Badge>
                  <h3 className="font-serif text-base text-[#0F2E2C] font-medium">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoId(null)}
                  className="text-xs text-[#6B6B65] hover:text-[#0F2E2C] font-medium"
                >
                  Close Player
                </button>
              </div>

              <div className="max-w-4xl mx-auto">
                <VideoEmbed
                  videoId={activeVideo.youtubeId}
                  title={activeVideo.title}
                  description={activeVideo.description}
                />
              </div>
            </div>
          )}

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B65]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lectures by title or topic..."
                className="w-full pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E5E1D8] bg-[#FAF8F3] text-sm text-[#0F2E2C] placeholder-[#6B6B65] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#6B6B65] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                <span>Topic:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-[6px] border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#0F2E2C] text-[#FAF8F3] border-[#0F2E2C]'
                      : 'bg-[#FFFFFF] text-[#6B6B65] border-[#E5E1D8] hover:border-[#A8A190]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* Video Thumbnail with Play Overlay */}
                  <div
                    onClick={() => setActiveVideoId(video.id)}
                    className="relative aspect-video bg-[#0F2E2C] cursor-pointer overflow-hidden flex items-center justify-center"
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute w-12 h-12 rounded-full bg-[#FFFFFF]/90 text-[#0F2E2C] flex items-center justify-center shadow-sm group-hover:bg-[#C9A15E] group-hover:text-[#FAF8F3] transition-colors">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[11px] font-mono text-white">
                      {video.duration}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-[#6B6B65] mb-2">
                      <Badge variant="accent" size="sm">{video.category}</Badge>
                      <span>{video.date}</span>
                    </div>

                    <h3
                      onClick={() => setActiveVideoId(video.id)}
                      className="font-serif text-base text-[#0F2E2C] font-medium line-clamp-2 cursor-pointer hover:text-[#8C6B38] mb-2"
                    >
                      {video.title}
                    </h3>

                    <p className="text-xs text-[#6B6B65] line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#6B6B65]">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#8C6B38]" />
                    <span>Language: {video.language}</span>
                  </div>

                  <button
                    onClick={() => setActiveVideoId(video.id)}
                    className="text-xs font-medium text-[#0F2E2C] hover:text-[#8C6B38] flex items-center gap-1"
                  >
                    <span>Watch Now</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
