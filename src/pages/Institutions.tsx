import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ExternalLink, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { INSTITUTIONS_DATA } from '../data/institutions';

export const Institutions: React.FC = () => {
  return (
    <div>
      <SEO
        title="Institutions & Projects Directory"
        description="Comprehensive directory of institutions, seminaries, media networks, and community organizations founded and directed by Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="primary" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#BFA36F] font-medium block mb-2">
              Enduring Infrastructure & Service
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium tracking-tight mb-3">
              Institutions & Projects Directory
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
              An institutional network dedicated to Islamic higher education, authentic legal counsel, spiritual purification, community welfare, and global digital outreach.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {INSTITUTIONS_DATA.map((item) => (
              <Card key={item.id} className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#7A7F6A] uppercase tracking-wider">
                      {item.role}
                    </span>
                    <Badge variant="neutral" size="sm">
                      <MapPin className="w-3 h-3 mr-1 text-[#7A7F6A]" />
                      <span>{item.location}</span>
                    </Badge>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-[#2E2E2E] font-medium mb-1">
                    {item.name}
                  </h2>

                  {item.urduName && (
                    <p dir="rtl" className="text-sm font-serif text-[#BFA36F] mb-3 opacity-90">
                      {item.urduName}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#2E2E2E]">
                      Core Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E5E0D6] text-[#2E2E2E]/85"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E0D6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A7F6A]">
                  <span>Est: {item.yearEstablished}</span>

                  <div className="flex items-center gap-3">
                    {item.id === 'jamia-zakariyya' && (
                      <Button to="/get-involved/donate" variant="primary" size="sm">
                        Support Students
                      </Button>
                    )}
                    {item.id === 'khanqah-yusufia' && (
                      <Button to="/khanqah" variant="secondary" size="sm">
                        Khanqah Details
                      </Button>
                    )}
                    {item.id === 'darul-ifta' && (
                      <Button to="/fatwas" variant="secondary" size="sm">
                        Darul Ifta Portal
                      </Button>
                    )}
                    {item.id === 'raham-tv' && (
                      <Button to="/media/videos" variant="secondary" size="sm">
                        Watch Videos
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Institutional Integrity & Governance Note */}
          <div className="mt-12 p-6 rounded-[12px] bg-[#F4F0E8] border border-[#E5E0D6] text-xs sm:text-sm text-[#2E2E2E]/85 max-w-4xl mx-auto space-y-2">
            <h3 className="font-serif text-base text-[#2E2E2E] font-medium">
              Governance & Institutional Transparency
            </h3>
            <p className="leading-relaxed text-[#7A7F6A]">
              Each institution operates with designated committees, transparent financial stewardship, and compliance with local municipal and federal requirements. Charitable donations are strictly allocated to their designated purpose (e.g. general sadqah, zakat, student stipends, or operational funds).
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};
