import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, ShieldCheck, ArrowRight, DollarSign, GraduationCap, Building2 } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

export const GetInvolvedOverview: React.FC = () => {
  return (
    <div>
      <SEO
        title="Get Involved | Support Sacred Knowledge & Community"
        description="Support Jamia Zakariyya, Khanqah Yusufia, and Al-Muneer Foundation through donations, student sponsorships, and volunteer service."
      />

      <Section variant="primary" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#BFA36F] font-medium block mb-2">
              Enduring Charity & Service (Sadaqah Jariyah)
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-medium tracking-tight mb-3">
              Get Involved & Support
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
              Partner with Mufti Muneer Ahmad Akhoon’s institutional mission to sustain traditional Islamic education, feed local families, and preserve sacred scholarship for generations to come.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Donate Card */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] flex items-center justify-center mb-4 text-[#7A7F6A]">
                  <DollarSign className="w-6 h-6" />
                </div>

                <span className="text-xs uppercase tracking-wider text-[#7A7F6A] font-semibold block mb-1">
                  Financial Stewardship
                </span>

                <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                  Donate & Sponsor Students
                </h2>

                <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed mb-6">
                  Direct your Zakat, Sadaqah, and general contributions to full-time Huffaz and Alimiyyah students at Jamia Zakariyya, masjid operations, and local humanitarian relief.
                </p>

                <ul className="space-y-2 text-xs text-[#2E2E2E]/85 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Sponsor an Alimiyyah or Hifz Student ($150/month)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Zakat-eligible fund with 100% verified distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Tax-deductible under 501(c)(3) federal regulations</span>
                  </li>
                </ul>
              </div>

              <Button to="/get-involved/donate" variant="primary" size="md">
                View Donation Options
              </Button>
            </Card>

            {/* Volunteer Card */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] flex items-center justify-center mb-4 text-[#7A7F6A]">
                  <Users className="w-6 h-6" />
                </div>

                <span className="text-xs uppercase tracking-wider text-[#7A7F6A] font-semibold block mb-1">
                  Volunteer & Skill Contribution
                </span>

                <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                  Serve as a Community Volunteer
                </h2>

                <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed mb-6">
                  Lend your professional expertise, administrative skills, media production talents, or event hospitality to support weekly Majalis and educational seminars.
                </p>

                <ul className="space-y-2 text-xs text-[#2E2E2E]/85 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Event coordination & guest hospitality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Audio/Video production & RahamTV editing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                    <span>Youth tutoring & academic mentorship</span>
                  </li>
                </ul>
              </div>

              <Button to="/get-involved/volunteer" variant="outline" size="md">
                Join Volunteer Roster
              </Button>
            </Card>
          </div>

          {/* Transparency & Financial Governance Statement */}
          <div className="p-6 sm:p-8 rounded-[12px] bg-[#FAF8F5] border border-[#E5E0D6] max-w-3xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-[#2E2E2E] font-serif text-lg font-medium">
              <ShieldCheck className="w-5 h-5 text-[#BFA36F]" />
              <span>Financial Governance & Fiduciary Trust</span>
            </div>
            <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed">
              All financial operations are managed through registered non-profit entities governed by independent boards of trustees. Zakat accounts are strictly sequestered from operational overheads in full accordance with Hanafi jurisprudence (Tamleek requirements). Official annual contribution receipts are issued for US tax reporting.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};
