import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image, X, MapPin, Calendar, ZoomIn, Filter } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  url: string;
  description: string;
}

const PHOTOS_DATA: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Jamia Zakariyya Annual Dastar-e-Fazeelat (Graduation)',
    category: 'Graduation',
    location: 'New York, USA',
    date: 'Shawwal 1445 AH / 2024',
    url: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1000&auto=format&fit=crop',
    description: 'Ceremony honoring graduating Huffaz of the Holy Quran and scholars completing the Dawrah-e-Hadith curriculum.',
  },
  {
    id: 'p2',
    title: 'Khanqah Yusufia Weekly Majlis-e-Zikr Gathering',
    category: 'Khanqah',
    location: 'Jamia Zakariyya Sanctuary',
    date: 'Weekly Assembly',
    url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1000&auto=format&fit=crop',
    description: 'Brothers gathered in contemplative remembrance and listening to the discourse on Tazkiyah by Mufti Muneer Ahmad Akhoon.',
  },
  {
    id: 'p3',
    title: 'Westchester Muslim Center Jumu‘ah Congregation',
    category: 'Congregations',
    location: 'Mount Vernon, NY',
    date: '2024',
    url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1000&auto=format&fit=crop',
    description: 'Friday prayer congregation led by Director of Religious Affairs Mufti Muneer Ahmad Akhoon.',
  },
  {
    id: 'p4',
    title: 'Ramadan Khatm-ul-Quran & Collective Dua',
    category: 'Congregations',
    location: 'Westchester Muslim Center',
    date: 'Ramadan 1445 AH',
    url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1000&auto=format&fit=crop',
    description: 'The night of the 27th of Ramadan, featuring the annual Khatm ceremony and supplication for the global Muslim community.',
  },
  {
    id: 'p5',
    title: 'MSSA Youth Awareness & Mentorship Seminar',
    category: 'Community',
    location: 'White Plains, NY',
    date: '2023',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    description: 'Interactive forum engaging high school and college youth on preserving Islamic identity and overcoming peer pressures.',
  },
  {
    id: 'p6',
    title: 'Al-Muneer Foundation Community Food Distribution',
    category: 'Community',
    location: 'Mount Vernon, NY',
    date: 'Ongoing Program',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    description: 'Volunteers preparing halal grocery boxes and essential provisions for underprivileged local families.',
  },
];

export const Photos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const categories = ['All', 'Graduation', 'Khanqah', 'Congregations', 'Community'];

  const filteredPhotos = PHOTOS_DATA.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <div>
      <SEO
        title="Photo Archive | Institutional Gallery"
        description="Archival photographic gallery documenting the milestones, assemblies, graduations, and communal programs led by Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="wide">
          <Link
            to="/media"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Overview</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight">
            Institutional Photo Archive
          </h1>
          <p className="text-sm text-[#6B6B65] mt-1">
            Visual chronicle of educational milestones, spiritual gatherings, and humanitarian outreach.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-medium text-[#6B6B65] mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Filter:</span>
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

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="overflow-hidden cursor-pointer group flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,168,120,0.18)] hover:border-[#00A878]"
              >
                <div>
                  <div className="picture-card relative aspect-[4/3] bg-[#FAF8F3] overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-0.5 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#008767] to-[#00A878] text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between text-[11px] text-[#6B6B65] mb-1.5">
                      <Badge variant="neutral" size="sm">{photo.category}</Badge>
                      <span>{photo.date}</span>
                    </div>

                    <h3 className="font-serif text-base text-[#0F2E2C] font-medium line-clamp-2 mb-1 group-hover:text-[#008767] transition-colors">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-[#6B6B65] line-clamp-2">
                      {photo.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1 flex items-center gap-1.5 text-[11px] text-[#6B6B65]">
                  <MapPin className="w-3 h-3 text-[#008767]" />
                  <span>{photo.location}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal */}
          {activePhoto && (
            <div
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FFFFFF] rounded-[12px] max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E5E1D8]"
              >
                <div className="relative aspect-video bg-black">
                  <img
                    src={activePhoto.url}
                    alt={activePhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B6B65] mb-2">
                    <Badge variant="accent" size="sm">{activePhoto.category}</Badge>
                    <div className="flex items-center gap-3">
                      <span>{activePhoto.date}</span>
                      <span>•</span>
                      <span>{activePhoto.location}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#0F2E2C] font-medium mb-2">
                    {activePhoto.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0F2E2C]/80 leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};
