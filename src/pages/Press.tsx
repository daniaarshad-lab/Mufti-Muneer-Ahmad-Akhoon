import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, FileText, Mail, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export const Press: React.FC = () => {
  const pressReleases = [
    {
      date: 'March 2024',
      outlet: 'Westchester County Civic Bulletin',
      title: 'Westchester Muslim Center Leads Interfaith Food Security Campaign',
      summary: 'Report highlighting the annual spring food drive coordinated under the religious leadership of Mufti Muneer Ahmad Akhoon, serving families across Mount Vernon and Yonkers.',
      category: 'Civic Outreach',
    },
    {
      date: 'December 2023',
      outlet: 'Islamic Horizons & Community News',
      title: 'Traditional Islamic Scholarship in Contemporary American Suburbia',
      summary: 'In-depth profile examining how Jamia Zakariyya New York integrates classical Dars-e-Nizami curricula with modern pastoral care for American youth.',
      category: 'Feature Profile',
    },
    {
      date: 'October 2023',
      outlet: 'Muslim Society of Social Awareness (MSSA)',
      title: 'Joint Communiqué on Youth Mental Health and Spiritual Resilience',
      summary: 'Official joint statement addressing substance abuse prevention, family communication, and establishing supportive peer networks.',
      category: 'Official Statement',
    },
  ];

  return (
    <div>
      <SEO
        title="Press & Civic Statements"
        description="Official media releases, public civic statements, journalistic guidelines, and press inquiries regarding Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="narrow">
          <Link
            to="/media"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Overview</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#8C6B38] font-medium block mb-2">
            Media Relations & Documentation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight mb-2">
            Press & Civic Statements
          </h1>
          <p className="text-sm text-[#6B6B65]">
            Official announcements, media profiles, press kit resources, and journalistic verification standards.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-10">
            {/* Press Releases List */}
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] font-medium block mb-1">
                  Public Record
                </span>
                <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium">
                  Recent News & Statements
                </h2>
              </div>

              <div className="space-y-4">
                {pressReleases.map((pr, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#8C6B38] uppercase tracking-wider">
                        {pr.outlet}
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" size="sm">{pr.category}</Badge>
                        <span className="text-xs text-[#6B6B65]">{pr.date}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg text-[#0F2E2C] font-medium mb-2">
                      {pr.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0F2E2C]/80 leading-relaxed">
                      {pr.summary}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Media Press Kit */}
            <div className="pt-6 border-t border-[#E5E1D8]">
              <Card className="p-6 sm:p-8 bg-[#FAF8F3]">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-[#8C6B38]" />
                  <h3 className="font-serif text-xl text-[#0F2E2C] font-medium">
                    Official Press Kit & Biographical Brief
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#0F2E2C]/85 leading-relaxed mb-6">
                  Members of the press and conference organizers are requested to utilize the standardized biographical summary to prevent inaccurate titles or unverified claims.
                </p>

                <div className="bg-[#FFFFFF] border border-[#E5E1D8] p-4 rounded-[8px] mb-6 text-xs text-[#0F2E2C]/80 leading-relaxed font-mono">
                  “Mufti Muneer Ahmad Akhoon is an Islamic scholar, jurist, and Director of Religious Affairs at Westchester Muslim Center in Mount Vernon, NY. He is the Founder & Chairman of Al-Muneer Foundation Inc. and patron of Jamia Zakariyya New York and Darul Ifta Khatm-e-Nubuwwat.”
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button to="/about/biography" variant="outline" size="sm">
                    Read Full Biography
                  </Button>
                  <Button to="/contact" variant="primary" size="sm">
                    Submit Media Interview Request
                  </Button>
                </div>
              </Card>
            </div>

            {/* Journalistic Inquiries Policy */}
            <div className="p-6 rounded-[12px] bg-[#FAF8F3] border border-[#E5E1D8] text-xs text-[#0F2E2C]/85 space-y-2">
              <strong className="text-sm font-serif text-[#0F2E2C] block">
                Journalistic Guidelines & Interview Inquiries
              </strong>
              <p className="leading-relaxed text-[#6B6B65]">
                Direct all media, documentary, and interview requests to the media coordinator with at least 5 business days advance notice. All interviews are conducted on record with full editorial context. Requests must include the publication name, deadline, and list of interview topics.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
