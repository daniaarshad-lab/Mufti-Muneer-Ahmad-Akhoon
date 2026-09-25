import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, ShieldCheck, Heart, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export const SpiritualHealing: React.FC = () => {
  const masnoonDuas = [
    {
      title: 'Ayat al-Kursi (Surah Al-Baqarah, 2:255)',
      description: 'The greatest verse of the Quran, recited after every fard prayer and before sleep for divine guarding from evil whisperings and malice.',
      usage: 'Morning & evening, and upon retiring to bed.',
    },
    {
      title: 'The Mu‘awwidhat (Surahs Al-Ikhlas, Al-Falaq, and An-Nas)',
      description: 'The primary prophetic fortress against envy (Hasad), witchcraft (Sihr), and the whisperings of unseen evil.',
      usage: 'Recite three times each morning and evening; blow over hands and wipe over the entire body.',
    },
    {
      title: 'Prophetic Invocation for Protection',
      description: '“A‘udhu bi-kalimatillahi al-tammati min sharri ma khalaq” (I seek refuge in the perfect words of Allah from the evil of that which He created).',
      usage: 'Recited three times every evening.',
    },
    {
      title: 'Dua Against Harm & Illness',
      description: '“Bismillahilladhi la yadurru ma‘asmihi shay’un fi al-ardi wa la fi al-sama’i wa huwa al-Samee‘ al-‘Aleem.”',
      usage: 'Recited three times in the morning and evening for comprehensive divine shield.',
    },
  ];

  return (
    <div>
      <SEO
        title="Spiritual Healing (Ruqya & Wazaif)"
        description="Authentic Islamic guidance on Shariah-compliant Ruqya, Masnoon supplications, spiritual protection, and clear medical disclaimers."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="narrow">
          <Link
            to="/khanqah"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Khanqah Overview</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#8C6B38] font-medium block mb-2">
            Spiritual Solace & Divine Protection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight mb-2">
            Spiritual Healing (Masnoon Ruqya & Wazaif)
          </h1>
          <p className="text-sm text-[#6B6B65]">
            Authentic Quranic remedies and supplications for emotional serenity, spiritual fortitude, and divine refuge.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8 text-sm sm:text-base text-[#0F2E2C]/90 leading-relaxed">
            {/* MANDATORY MEDICAL DISCLAIMER BANNER */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[#FAF8F3] border-2 border-[#8C6B38]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#8C6B38] font-semibold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Mandatory Medical & Health Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0F2E2C]/85 leading-relaxed">
                Spiritual supplications, Ruqya, and Quranic wazaif are sacred religious devotions intended solely for spiritual peace, psychological resilience, and seeking Allah’s divine mercy. <strong>They do NOT constitute medical, psychiatric, or therapeutic diagnosis, treatment, or cures.</strong>
              </p>
              <p className="text-xs text-[#6B6B65] leading-relaxed">
                The Messenger of Allah (peace and blessings be upon him) explicitly commanded: <em>“Seek medical treatment, O servants of Allah, for Allah did not create a disease without creating its cure”</em> (Sunan Abi Dawud). Individuals experiencing physical illness, clinical depression, anxiety, or medical symptoms must immediately seek care from licensed medical physicians and mental health professionals.
              </p>
            </div>

            {/* Understanding Ruqya according to Shariah */}
            <div>
              <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium mb-3">
                The Three Inviolable Conditions of Valid Ruqya
              </h2>
              <p className="mb-4">
                Islamic scholars, including Imam Ibn Hajar al-Asqalani and Imam al-Nawawi, established unanimous consensus (Ijma‘) that Ruqya (incantations/recitations for protection) is permissible only when three fundamental conditions are fulfilled:
              </p>

              <div className="space-y-3 my-4">
                <Card className="p-4 bg-[#FAF8F3]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C9A15E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2E2C] block">1. Must Be with the Words of Allah or His Attributes:</strong>
                      <span className="text-xs text-[#6B6B65]">
                        Recitations must consist solely of verses from the Noble Quran, authentic Masnoon supplications of the Prophet, or supplications in praise of Allah.
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-[#FAF8F3]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C9A15E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2E2C] block">2. Must Be in the Arabic Language or Understandable Speech:</strong>
                      <span className="text-xs text-[#6B6B65]">
                        Any unintelligible words, cryptic numerical charts, occult symbols, or names of unknown entities are strictly forbidden and nullify the practice.
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-[#FAF8F3]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C9A15E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2E2C] block">3. Believing That the Ruqya Has No Inherent Independent Power:</strong>
                      <span className="text-xs text-[#6B6B65]">
                        The recitation has no autonomous effect. Relief and healing occur purely and exclusively by the divine decree and will of Allah alone.
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Warning Against Superstitious Charlatans */}
            <div className="pt-4 border-t border-[#E5E1D8]">
              <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium mb-3">
                Rejecting Superstition & Fraudulent Practitioners
              </h2>
              <p className="mb-4">
                Mufti Muneer Ahmad Akhoon consistently educates the community against predatory "spiritual healers" and fraudulent amils who exploit vulnerable families during moments of distress.
              </p>

              <div className="p-5 rounded-[12px] bg-red-50/50 border border-red-200/60 space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-red-800 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>Signs of Unlawful / Occult Practitioners to Avoid:</span>
                </span>
                <ul className="text-xs text-red-900/80 space-y-1.5 pl-4 list-disc">
                  <li>Asking for the mother’s name instead of the father’s name.</li>
                  <li>Demanding personal garments or hair for ritual incineration.</li>
                  <li>Writing amulets with reversed Arabic letters, planetary signs, or numerical squares.</li>
                  <li>Claiming guaranteed cures or demanding extortionate sums of money.</li>
                  <li>Isolating vulnerable seekers or prescribing practices contrary to basic Shariah modesty.</li>
                </ul>
              </div>
            </div>

            {/* Masnoon Adhkar & Protection */}
            <div className="pt-4 border-t border-[#E5E1D8]">
              <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium mb-3">
                Recommended Daily Prophetic Invocations
              </h2>
              <p className="text-sm text-[#6B6B65] mb-4">
                The most effective spiritual shield is self-recited Masnoon Adhkar. Muslims do not need an intermediary to call upon Allah:
              </p>

              <div className="space-y-3">
                {masnoonDuas.map((item, idx) => (
                  <Card key={idx} className="p-4 bg-[#FAF8F3]">
                    <h3 className="font-serif text-base text-[#0F2E2C] font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#0F2E2C]/85 mb-2">
                      {item.description}
                    </p>
                    <span className="text-[11px] font-medium text-[#8C6B38]">
                      Recommended Frequency: {item.usage}
                    </span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Need Personal Consultation */}
            <div className="pt-6 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg text-[#0F2E2C] font-medium">
                  Need Private Spiritual Counseling?
                </h3>
                <p className="text-xs text-[#6B6B65]">
                  Discuss personal spiritual obstacles with Mufti Muneer Ahmad Akhoon.
                </p>
              </div>
              <Button to="/khanqah/consultation" variant="primary" size="md">
                Book Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
