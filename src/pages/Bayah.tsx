import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck, Heart, Users, HelpCircle, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Accordion } from '../components/Accordion';
import { SEO } from '../components/SEO';

export const Bayah: React.FC = () => {
  const faqItems = [
    {
      id: 'q1',
      title: 'Is Bay‘ah obligatory (fard) in Islam?',
      content: (
        <p>
          Classical Sunni jurists agree that taking formal Bay‘ah to a specific Sufi master is not an obligatory command like the five daily prayers. However, rectifying the heart and purifying oneself from sins (Tazkiyah) is universally fard. Bay‘ah is a time-tested institutional vehicle that aids the seeker in achieving this mandatory purification under expert supervision.
        </p>
      ),
    },
    {
      id: 'q2',
      title: 'Can someone take Bay‘ah if they live far from New York?',
      content: (
        <p>
          Yes. While physical presence is ideal, classical scholars permitted Bay‘ah by correspondence (Bay‘ah bi al-Murasalah) or via contemporary communication channels. The primary obligation of a remote disciple is maintaining regular communication regarding their spiritual condition (Islahi Ta‘alluq) and fulfilling their daily litany.
        </p>
      ),
    },
    {
      id: 'q3',
      title: 'What if a disciple struggles with sins after taking Bay‘ah?',
      content: (
        <p>
          The mentor is a spiritual physician, not a fault-finder. The human being will inevitably slip. What is required is immediate repentance (Tawbah), truthful transparency with the mentor without shame, and renewed resolve to adhere to the prescribed remedies.
        </p>
      ),
    },
    {
      id: 'q4',
      title: 'Does taking Bay‘ah pledge unconditional blind obedience?',
      content: (
        <p>
          No. In Sunni orthodoxy, obedience to any human being is strictly contingent upon obedience to Allah and His Messenger (peace be upon him). The famous legal maxim states: <em>“There is no obedience to the creation in disobedience to the Creator.”</em> The mentor’s instructions must always align with Shariah.
        </p>
      ),
    },
  ];

  return (
    <div>
      <SEO
        title="What is Bay'ah? (Spiritual Discipleship)"
        description="Understanding the traditional Islamic pledge of discipleship (Bay‘ah), the teacher-student relationship, and becoming a mureed under Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="narrow">
          <Link
            to="/khanqah"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Khanqah Overview</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#7A7F6A] font-medium block mb-2">
            Spiritual Initiation & Covenant
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            What is Bay‘ah? Becoming a Mureed
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            A sacred commitment between mentor and student for moral reformation, steadfast adherence to the Sunnah, and continuous remembrance.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8 text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed">
            {/* The Concept of Bay'ah */}
            <div>
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                The Historical & Scriptural Basis of Bay‘ah
              </h2>
              <p className="mb-4">
                The term <em>Bay‘ah</em> originates from the Arabic word <em>Bay‘</em> (transaction or exchange). In the spiritual context, it signifies a mutual covenant wherein the seeker pledges sincere commitment to divine commands, and the spiritual mentor (Shaykh) pledges dedicated spiritual guidance, prayer, and pastoral care.
              </p>
              <p className="mb-4">
                The Companions of the Prophet (peace and blessings be upon him) took various forms of Bay‘ah: the pledge of Islam, the pledge of Jihad (such as Bay‘at al-Ridwan under the tree at Hudaybiyyah), and the pledge of moral rectitude (Bay‘at al-Taqwa) as mentioned in Surah Al-Mumtahanah.
              </p>
              <p>
                In the classical Chishtia tradition preserved by Shaykh al-Hadith Mawlana Muhammad Zakariyya Kandhlawi, Bay‘ah is primarily <em>Bay‘at al-Tawbah wa al-Islah</em> - a pledge of sincere repentance from past misdeeds and dedication to personal moral reformation.
              </p>
            </div>

            {/* What is Required of a Mureed */}
            <Card className="p-6 bg-[#FAF8F5]">
              <h3 className="font-serif text-xl text-[#2E2E2E] font-medium mb-3">
                The Commitments of the Seeker (Mureed)
              </h3>
              <p className="text-xs sm:text-sm text-[#7A7F6A] mb-4">
                Taking Bay‘ah is not a honorary title; it is an active discipline consisting of four practical daily habits:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#2E2E2E]/85">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BFA36F] shrink-0 mt-0.5" />
                  <div>
                    <strong>1. Safeguarding the Obligatory Prayers (Fara’id):</strong> Performing all five daily prayers in their prescribed times, with congregational prayer (Jama‘ah) prioritized for brothers.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BFA36F] shrink-0 mt-0.5" />
                  <div>
                    <strong>2. Abstinence from the Unlawful (Ijtinab al-Muharramat):</strong> Earning strictly Halal income, guarding the tongue from backbiting (Gheebah) and falsehood, and safeguarding eyes and modesty.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BFA36F] shrink-0 mt-0.5" />
                  <div>
                    <strong>3. The Daily Litany (Ma’mulat & Wird):</strong> Completing assigned daily portions of Quran recitation, Istighfar (seeking forgiveness 100x), Salawat upon the Prophet (100x), and the third Kalimah.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BFA36F] shrink-0 mt-0.5" />
                  <div>
                    <strong>4. Periodic Reporting (Islahi Ta‘alluq):</strong> Periodically informing the mentor of one’s spiritual condition, struggles, or changes in disposition, seeking guidance on remedies.
                  </div>
                </div>
              </div>
            </Card>

            {/* How to Seek Initiation */}
            <div className="pt-4 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Process of Becoming a Disciple
              </h2>
              <p className="mb-4">
                Before seeking Bay‘ah with Mufti Muneer Ahmad Akhoon, seekers are advised to follow a traditional probationary period:
              </p>

              <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-[#2E2E2E]/85 mb-6">
                <li>
                  <strong>Attend Discourses:</strong> Listen to the recorded lectures on RahamTV or attend the weekly Thursday Majlis-e-Zikr at Jamia Zakariyya to assess compatibility of temperament and methodology.
                </li>
                <li>
                  <strong>Establish Daily Litany:</strong> Practice the basic morning and evening Adhkar for several weeks with diligence.
                </li>
                <li>
                  <strong>Personal Consultation:</strong> Request an initial spiritual consultation to discuss your intention, religious background, and personal goals.
                </li>
                <li>
                  <strong>Formal Initiation:</strong> If mutual suitability is affirmed, formal Bay‘ah is performed in person or via telephone/written covenant.
                </li>
              </ol>

              <div className="flex flex-wrap items-center gap-3">
                <Button to="/khanqah/consultation" variant="primary" size="md">
                  Request Initial Consultation
                </Button>
                <Button to="/khanqah/spiritual-healing" variant="outline" size="md">
                  Daily Ma’mulat & Duas
                </Button>
              </div>
            </div>

            {/* Common Questions */}
            <div className="pt-6 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-4">
                Frequently Asked Questions About Bay‘ah
              </h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
