import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, BookOpen, Heart, Shield } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { SEO } from '../components/SEO';

export const Biography: React.FC = () => {
  return (
    <div>
      <SEO
        title="Biography & Early Life"
        description="Biographical background, early education, migration to North America, and institutional foundations of Mufti Muneer Ahmad Akhoon."
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
            Historical Record & Journey
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Biography & Early Life
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            A documented overview of upbringing, scholarly formation, and institutional founding in North America.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8 text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed">
            {/* Early Years & Upbringing */}
            <div>
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Early Life & Heritage
              </h2>
              <p className="mb-4">
                Mufti Muneer Ahmad Akhoon was born into a family rooted in religious knowledge and piety in [VERIFY: exact birth city/region and birth year]. From an early age, he was placed under the tutelage of prominent traditional scholars, developing an affinity for Quranic sciences, Arabic grammar, and the devotional literature of Islam.
              </p>
              <p>
                He completed the memorization of the Noble Quran (Hifz) at an early age [VERIFY: specific age and madrasa], followed by foundational studies in classical Arabic literature, morphology (Sarf), syntax (Nahw), and Islamic history.
              </p>
            </div>

            {/* Traditional Madrasa Education */}
            <div className="pt-4 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Scholarly Apprenticeship & Dars-e-Nizami
              </h2>
              <p className="mb-4">
                To pursue advanced Islamic sciences, he enrolled in [VERIFY: primary traditional seminary name, e.g. leading institution in South Asia] to undertake the rigorous multi-year Dars-e-Nizami curriculum. His studies spanned:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#2E2E2E]/85 mb-4">
                <li>
                  <strong>Tafsir (Quranic Exegesis):</strong> Deep textual engagement with classical commentaries including Tafsir al-Jalalayn, Tafsir al-Baydawi, and Ibn Kathir.
                </li>
                <li>
                  <strong>Hadith Transmission:</strong> Completion of the <em>Dawrah-e-Hadith</em> (master level study of the Sihah Sittah: Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami‘ al-Tirmidhi, Sunan al-Nasa’i, and Sunan Ibn Majah) under renowned Hadith masters.
                </li>
                <li>
                  <strong>Fiqh & Usul (Jurisprudence & Legal Theory):</strong> In-depth mastery of the Hanafi legal canon, studying al-Hidayah, Usul al-Shashi, and Nur al-Anwar.
                </li>
              </ul>
              <p>
                Following the completion of the Alimiyyah degree, he undertook advanced specialization in Islamic Jurisprudence (<em>Takhassus fi al-Ifta</em>), training under senior muftis in drafting legal decrees, case analysis, and commercial arbitration.
              </p>
            </div>

            {/* Migration and Public Work in New York */}
            <div className="pt-4 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Migration to the United States & Community Leadership
              </h2>
              <p className="mb-4">
                In [VERIFY: exact year of arrival in USA], Mufti Muneer Ahmad Akhoon relocated to the United States. Recognizing the pressing need for authentic scholarly leadership among the rapidly growing Muslim diaspora in New York and surrounding states, he immediately engaged in community education and pastoral care.
              </p>
              <p className="mb-4">
                Over the past two decades, he has spearheaded key institutions designed to address the multifaceted requirements of Muslim life in the West:
              </p>

              <div className="space-y-3 my-4">
                <Card className="p-4 bg-[#FAF8F5]">
                  <h3 className="font-serif text-base text-[#2E2E2E] font-medium mb-1">
                    Jamia Zakariyya New York
                  </h3>
                  <p className="text-xs text-[#7A7F6A]">
                    Established to offer formal Islamic higher education locally, preventing the necessity of sending American-born youth overseas for traditional Alimiyyah and Hifz studies.
                  </p>
                </Card>

                <Card className="p-4 bg-[#FAF8F5]">
                  <h3 className="font-serif text-base text-[#2E2E2E] font-medium mb-1">
                    Westchester Muslim Center (Mount Vernon, NY)
                  </h3>
                  <p className="text-xs text-[#7A7F6A]">
                    Appointed Director of Religious Affairs, overseeing congregational prayers, Friday sermons, dispute resolution, youth empowerment, and interfaith engagement.
                  </p>
                </Card>

                <Card className="p-4 bg-[#FAF8F5]">
                  <h3 className="font-serif text-base text-[#2E2E2E] font-medium mb-1">
                    Al-Muneer Foundation Inc.
                  </h3>
                  <p className="text-xs text-[#7A7F6A]">
                    Founded as a registered community masjid and non-profit organization dedicated to neighborhood welfare, food distributions, and family counseling.
                  </p>
                </Card>
              </div>
            </div>

            {/* Pastoral and Spiritual Role */}
            <div className="pt-4 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Spiritual Guidance in the Sufi Tradition
              </h2>
              <p className="mb-4">
                Parallel to his juristic work, Mufti Muneer Ahmad Akhoon was formally authorized (Ijazah and Khilafah) in the Chishtia spiritual lineage. Through <em>Khanqah Yusufia Zakariyya Chishtia</em>, he maintains a regular schedule of spiritual discourses, individual counseling, and collective Zikr assemblies.
              </p>
              <p>
                His disciples (mureeds) and students span across North America, the United Kingdom, and South Asia, seeking structured guidance in moral rectification, purification of the heart, and sincere adherence to the Sunnah.
              </p>
            </div>

            {/* Editorial / Verification Note */}
            <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#7A7F6A]">
              <strong className="text-[#2E2E2E] block mb-1">Biographical Accuracy Policy:</strong>
              All biographical entries are maintained according to strict non-superlative and factual standards. Specific institutional dates and historical locations marked with <code>[VERIFY]</code> tags are subject to ongoing client verification and official archival records.
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
