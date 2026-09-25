import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { BLOG_POSTS_DATA } from '../data/blog';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return ['All', ...new Set(BLOG_POSTS_DATA.map((p) => p.category))];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <SEO
        title="Scholarly Articles & Reflections"
        description="Written reflections, Quranic commentaries, and contemporary analyses authored by Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="primary" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#BFA36F] font-medium block mb-2">
              Contemporary Scholarly Insights
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium tracking-tight mb-3">
              Articles & Reflections
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
              Thoughtful essays addressing spiritual purification, classical jurisprudence, family harmony, and the ethical responsibilities of Muslims in modern society.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          {/* Search & Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7F6A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E5E0D6] bg-[#FAF8F5] text-sm text-[#2E2E2E] placeholder-[#6B6B65] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#7A7F6A] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                <span>Topic:</span>
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

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} hoverable className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A7F6A] mb-3">
                    <Badge variant="accent" size="sm">{post.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl text-[#2E2E2E] font-medium mb-1">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#7A7F6A] transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  {post.urduTitle && (
                    <p dir="rtl" className="text-xs font-serif text-[#BFA36F] mb-3 opacity-90">
                      {post.urduTitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D6] flex items-center justify-between text-xs">
                  <span className="text-[#7A7F6A]">{post.date}</span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-medium text-[#2E2E2E] hover:text-[#7A7F6A] flex items-center gap-1"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
