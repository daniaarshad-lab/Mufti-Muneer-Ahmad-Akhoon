import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { BLOG_POSTS_DATA } from '../data/blog';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const post = BLOG_POSTS_DATA.find((p) => p.slug === id || p.id === id) || BLOG_POSTS_DATA[0];

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div>
      <SEO
        title={`${post.title} | Articles`}
        description={post.summary}
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="narrow">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent" size="sm">{post.category}</Badge>
            <span className="text-xs text-[#7A7F6A]">•</span>
            <span className="text-xs text-[#7A7F6A] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E2E2E] font-medium tracking-tight mb-3">
            {post.title}
          </h1>

          {post.urduTitle && (
            <p dir="rtl" className="text-lg sm:text-xl font-serif text-[#7A7F6A] mb-4 opacity-90">
              {post.urduTitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7F6A] pt-2 border-t border-[#E5E0D6]">
            <span className="font-medium text-[#2E2E2E]">By {post.author}</span>
            <span>•</span>
            <span>Published on {post.date}</span>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          {/* Article Body */}
          <article className="prose prose-stone max-w-none text-[#2E2E2E]/90 space-y-6 text-base sm:text-lg leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Tags */}
          <div className="pt-8 mt-10 border-t border-[#E5E0D6] flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#7A7F6A] font-medium flex items-center gap-1 mr-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Tags:</span>
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E5E0D6] text-[#2E2E2E]/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Signature Box */}
          <Card className="p-6 sm:p-7 mt-8 bg-[#FAF8F5]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2E302B] text-[#FAF8F5] flex items-center justify-center font-serif text-xl shrink-0 font-medium">
                M
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <h4 className="font-serif text-base text-[#2E2E2E] font-medium">
                  {post.author}
                </h4>
                <p className="text-[#7A7F6A]">
                  Director of Religious Affairs at Westchester Muslim Center, Mount Vernon, NY, and Founder of Al-Muneer Foundation Inc. and Jamia Zakariyya New York.
                </p>
                <div className="pt-2">
                  <Link to="/about" className="text-xs font-medium text-[#7A7F6A] hover:underline">
                    View full scholarly profile →
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E5E0D6]">
              <h3 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-6">
                Related Reflections
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Card key={rel.id} hoverable className="p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-medium text-[#7A7F6A] uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-base text-[#2E2E2E] font-medium mb-2">
                        <Link to={`/blog/${rel.slug}`} className="hover:text-[#7A7F6A]">
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#7A7F6A] line-clamp-2 mb-4">
                        {rel.summary}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-xs font-medium text-[#2E2E2E] hover:text-[#7A7F6A] flex items-center gap-1"
                    >
                      <span>Read reflection</span>
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};
