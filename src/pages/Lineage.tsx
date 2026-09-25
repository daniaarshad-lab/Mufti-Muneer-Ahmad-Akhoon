import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GitBranch, Shield, MapPin, Compass } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { LINEAGE_DATA } from '../data/teachers';

export const Lineage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Spiritual Lineage (Silsila)"
        description="The unbroken spiritual genealogy connecting Khanqah Yusufia and Mufti Muneer Ahmad Akhoon to the Chishtia masters and the Prophet Muhammad (peace be upon him)."
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
            Spiritual Genealogy & Chain
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Spiritual Lineage (Silsila)
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            The historical transmission of spiritual illumination (Tazkiyat al-Nafs) through the Chishtia Sabiria Zakariyya tradition.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                The Science of Tasawwuf & Spiritual Transmission
              </h2>
              <p>
                In the classical Islamic tradition, Tasawwuf (Sufism) is neither a separate sect nor a departure from orthodoxy. It is the inward dimension of Shariah - the science of purifying the heart from spiritual diseases (arrogance, malice, greed) and adorning it with spiritual virtues (patience, reliance on God, gratitude, and sincerity).
              </p>
              <p>
                Just as Islamic jurisprudence (Fiqh) requires a chain of authoritative jurists, spiritual guidance requires a continuous, documented chain (<em>Silsila</em>) tracing directly back to the Messenger of Allah (peace and blessings be upon him).
              </p>
            </div>

            {/* Khanqah Yusufia Tradition */}
            <Card className="p-6 bg-[#FAF8F5]">
              <span className="text-xs uppercase tracking-wider text-[#7A7F6A] font-medium block mb-1">
                The Chishtia Sabiria Zakariyya Order
              </span>
              <h3 className="font-serif text-lg text-[#2E2E2E] font-medium mb-2">
                Heritage of Shaykh al-Hadith Mawlana Muhammad Zakariyya Kandhlawi
              </h3>
              <p className="text-xs sm:text-sm text-[#7A7F6A] leading-relaxed mb-4">
                The methodology of Khanqah Yusufia follows the balanced path of the Deobandi spiritual giants, synthesizing strict adherence to the Prophetic Sunnah, profound Hadith scholarship, and deep devotion to Allah through continuous remembrance (Dhikr).
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="accent">Chishtia Order</Badge>
                <Badge variant="neutral">Sabiria Branch</Badge>
                <Badge variant="neutral">Zakariyya Lineage</Badge>
              </div>
            </Card>

            {/* Visual Lineage Flow */}
            <div className="pt-6">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-6">
                Chronological Chain of Masters (Extract)
              </h2>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E5E0D6] space-y-6">
                {LINEAGE_DATA.map((node, index) => (
                  <div key={node.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#BFA36F] group-hover:bg-[#D8C3A5] transition-colors" />

                    <div className="p-4 sm:p-5 rounded-[12px] bg-[#FFFFFF] border border-[#E5E0D6] transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <h4 className="font-serif text-base sm:text-lg text-[#2E2E2E] font-medium">
                          {node.name}
                        </h4>
                        <span className="text-xs text-[#7A7F6A] font-medium">
                          {node.title}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A7F6A] mb-2">
                        <span>Order: {node.order}</span>
                        <span>•</span>
                        <span>Location: {node.location}</span>
                        {node.passingYearHijri && (
                          <>
                            <span>•</span>
                            <span>Passed: {node.passingYearHijri}</span>
                          </>
                        )}
                      </div>

                      <p className="text-xs text-[#2E2E2E]/80 leading-relaxed">
                        {node.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#7A7F6A]">
              <strong>Archival Note:</strong> The complete expanded Silsila Shajarah document detailing all intermediate masters between Khwaja Mu’in al-Din Chishti and modern day is preserved in the Khanqah Yusufia archives in New York. [VERIFY: full biographical details of immediate Shaykh].
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
