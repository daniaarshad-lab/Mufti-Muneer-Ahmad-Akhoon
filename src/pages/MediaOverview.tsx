import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Image, Newspaper, Play, ArrowRight, Radio, ExternalLink } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { VIDEOS_DATA } from '../data/videos';
import { VideoEmbed } from '../components/VideoEmbed';

export const MediaOverview: React.FC = () => {
  const mediaSections = [
    {
      title: 'RahamTV Video Discourses',
      path: '/media/videos',
      icon: <Video className="w-5 h-5 text-[#8C6B38]" />,
      desc: 'Weekly lectures, Quranic Tafseer series, youth advising, and Urdu/English Friday sermons broadcast on the RahamTV network.',
      count: `${VIDEOS_DATA.length}+ Curated Series`,
    },
    {
      title: 'Institutional Photo Archive',
      path: '/media/photos',
      icon: <Image className="w-5 h-5 text-[#8C6B38]" />,
      desc: 'Dignified photographs of educational graduations, communal prayers, Khanqah assemblies, and campus developments.',
      count: 'Historical Gallery',
    },
    {
      title: 'Press & Civic Appearances',
      path: '/media/press',
      icon: <Newspaper className="w-5 h-5 text-[#8C6B38]" />,
      desc: 'Documented interviews, interfaith civic statements, community relief initiatives, and official media contact details.',
      count: 'Official Statements',
    },
  ];

  return (
    <div>
      <SEO
        title="Media & Broadcasts (RahamTV)"
        description="Multimedia portal for Mufti Muneer Ahmad Akhoon  -  video discourses, RahamTV broadcasts, lectures, and photo archives."
      />

      <Section variant="primary" spacing="compact" className="border-b border-[#204945]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#C9A15E] font-medium block mb-2">
              Global Digital Broadcasting
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-medium tracking-tight mb-3">
              Media, Discourses & RahamTV
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed">
              Disseminating authentic Islamic knowledge, Quranic reflections, and pastoral youth guidance across international digital platforms.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          {/* Sub-sections cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {mediaSections.map((sec) => (
              <Card key={sec.path} hoverable className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-[8px] bg-[#FAF8F3] border border-[#E5E1D8]">
                      {sec.icon}
                    </div>
                    <span className="text-xs text-[#8C6B38] font-medium">
                      {sec.count}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-[#0F2E2C] font-medium mb-2">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-[#6B6B65] leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <Link
                  to={sec.path}
                  className="text-xs font-medium text-[#0F2E2C] hover:text-[#8C6B38] flex items-center gap-1 pt-2 border-t border-[#E5E1D8]"
                >
                  <span>Explore {sec.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>

          {/* Featured Video Highlight */}
          <div className="pt-6 border-t border-[#E5E1D8]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] font-medium block mb-1">
                  Featured Discourse
                </span>
                <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium">
                  Recent RahamTV Broadcast
                </h2>
              </div>
              <Button to="/media/videos" variant="secondary" size="sm">
                View All Videos
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <VideoEmbed
                  videoId={VIDEOS_DATA[0].youtubeId}
                  title={VIDEOS_DATA[0].title}
                  description={VIDEOS_DATA[0].description}
                />
              </div>

              <div className="lg:col-span-4 space-y-4">
                <Card className="p-6 bg-[#FAF8F3]">
                  <span className="text-xs uppercase tracking-wider text-[#8C6B38] font-medium block mb-1">
                    About RahamTV
                  </span>
                  <h4 className="font-serif text-base text-[#0F2E2C] font-medium mb-2">
                    Principled Islamic Broadcasting
                  </h4>
                  <p className="text-xs text-[#6B6B65] leading-relaxed mb-4">
                    RahamTV was established under the vision of Mufti Muneer Ahmad Akhoon to produce high-definition educational discourses free of commercial sensationalism or sectarian polemics.
                  </p>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0F2E2C] hover:text-[#8C6B38]"
                  >
                    <span>Visit Official YouTube Channel</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Card>

                <div className="p-4 rounded-[8px] border border-[#E5E1D8] text-xs text-[#6B6B65]">
                  <strong className="text-[#0F2E2C] block mb-1">Livestream Schedule:</strong>
                  Weekly Thursday Majlis discourses and Friday sermons are streamed live with English & Urdu translation notes.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
