import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, CheckCircle, GraduationCap, Building2, BookOpen, Globe } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export const Achievements: React.FC = () => {
  const milestones = [
    {
      category: 'Educational Foundation',
      title: 'Founding of Jamia Zakariyya New York',
      date: '[VERIFY: exact founding year]',
      description: 'Established a full-fledged Islamic seminary in the New York metropolitan area providing accredited Hifz-ul-Quran and Dars-e-Nizami Alimiyyah courses, graduating cohorts of Huffaz and scholars serving across the United States.',
    },
    {
      category: 'Institutional Leadership',
      title: 'Director of Religious Affairs at Westchester Muslim Center',
      date: '[VERIFY: appointment date]',
      description: 'Serving as the religious authority for Westchester Muslim Center in Mount Vernon, NY, leading daily congregations, Friday khutbahs, family mediation, and cross-communal dialogue.',
    },
    {
      category: 'Jurisprudence & Legal Service',
      title: 'Establishment of Darul Ifta Khatm-e-Nubuwwat',
      date: '[VERIFY: establishment year]',
      description: 'Formed a research-driven council issuing researched Shariah rulings (fatwas) in English and Urdu, resolving complex contractual, inheritance, and marital disputes in diaspora communities.',
    },
    {
      category: 'Spiritual Mentorship',
      title: 'Khanqah Yusufia Zakariyya Chishtia Programs',
      date: 'Ongoing Weekly Assembly',
      description: 'Maintaining a vibrant spiritual sanctuary in New York offering regular Thursday night Majalis of remembrance (Zikr), spiritual retreats (I‘tikaf), and individual moral training (Islah).',
    },
    {
      category: 'Global Broadcasting',
      title: 'RahamTV Media Network Launch',
      date: '[VERIFY: launch year]',
      description: 'Broadcasting educational discourses, Quranic Tafseer, and youth counseling series to a worldwide audience across North America, the UK, and South Asia.',
    },
    {
      category: 'Community Welfare',
      title: 'Al-Muneer Foundation Humanitarian Operations',
      date: 'Ongoing Community Service',
      description: 'Organizing seasonal food drives, winter coat distributions, and zakat disbursements to underserved families across Westchester County and New York.',
    },
  ];

  return (
    <div>
      <SEO
        title="Achievements & Recognitions"
        description="Factual overview of institutional milestones, educational graduations, and community contributions of Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="narrow">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to About Hazrat Ji</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#7A7F6A] font-medium block mb-2">
            Documented Milestones & Service
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Achievements & Recognitions
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            A factual, non-superlative record of institutional building, academic instruction, and community service.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8">
            <div className="text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed space-y-4">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                Commitment to Enduring Institutions
              </h2>
              <p>
                In accordance with prophetic teachings, true scholarly achievement is measured not by transient personal accolades, but by the establishment of enduring institutions (<em>Sadaqah Jariyah</em>) that transmit sacred knowledge and preserve faith for future generations.
              </p>
              <p>
                Mufti Muneer Ahmad Akhoon’s public life has centered upon creating self-sustaining seminaries, masajid, media infrastructure, and charitable foundations that operate transparently within the framework of local and federal laws.
              </p>
            </div>

            {/* Milestones List */}
            <div className="space-y-4 pt-4">
              {milestones.map((m, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-[#7A7F6A] uppercase tracking-wider">
                      {m.category}
                    </span>
                    <Badge variant="outline" size="sm">
                      {m.date}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-lg text-[#2E2E2E] font-medium mb-2">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2E2E2E]/80 leading-relaxed">
                    {m.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Community & Civic Recognition */}
            <div className="pt-6 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Civic Engagement & Inter-Communal Relations
              </h2>
              <p className="text-sm text-[#2E2E2E]/85 leading-relaxed mb-4">
                Through his work at Westchester Muslim Center and Muslim Society of Social Awareness (MSSA), Mufti Muneer Ahmad Akhoon has collaborated with local municipal officials, school boards, and interfaith leaders in Mount Vernon and Westchester County to promote social stability, combat drug abuse among youth, and foster mutual understanding.
              </p>

              <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#7A7F6A]">
                <strong>Policy on Titles and Honors:</strong> In accordance with scholarly humility, titles like "Grand Mufti" or unverified honorary titles are strictly avoided. All references accurately reflect official appointments (Founder, Director of Religious Affairs, and Senior Mufti).
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
