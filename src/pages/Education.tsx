import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { TEACHERS_DATA } from '../data/teachers';

export const Education: React.FC = () => {
  return (
    <div>
      <SEO
        title="Education & Teachers"
        description="Formal Islamic education, Dars-e-Nizami degree, Ifta specialization, and scholarly authorizations (Ijazat) of Mufti Muneer Ahmad Akhoon."
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
            Academic & Traditional Credentials
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Education & Teachers
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            Classical curriculum, specialized juristic training (Ifta), and documented chains of transmission (Sanad).
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-10">
            {/* Academic Credentials Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                Academic Milestones & Degrees
              </h2>
              <p className="text-sm sm:text-base text-[#2E2E2E]/85 leading-relaxed">
                Traditional Islamic education relies upon the direct transmission of sacred sciences from master to student. Mufti Muneer Ahmad Akhoon completed the standard eight-year Dars-e-Nizami curriculum followed by specialized post-graduate training in legal verdicts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <Card className="p-5 bg-[#FAF8F5]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#7A7F6A] uppercase tracking-wider mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Dars-e-Nizami (Alimiyyah)</span>
                  </div>
                  <h3 className="font-serif text-base text-[#2E2E2E] font-medium mb-1">
                    Master of Sacred Islamic Sciences
                  </h3>
                  <p className="text-xs text-[#7A7F6A] mb-3">
                    [VERIFY: exact seminary name, e.g. Darul Uloom / Jamia Farooqia]
                  </p>
                  <p className="text-xs text-[#2E2E2E]/80 leading-relaxed">
                    Comprehensive mastery of Arabic lexicography, rhetoric (Balaghah), Quranic exegesis (Tafsir), and the Six Canonical Hadith texts.
                  </p>
                </Card>

                <Card className="p-5 bg-[#FAF8F5]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#7A7F6A] uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#BFA36F]" />
                    <span>Takhassus fi al-Ifta</span>
                  </div>
                  <h3 className="font-serif text-base text-[#2E2E2E] font-medium mb-1">
                    Specialization in Islamic Jurisprudence
                  </h3>
                  <p className="text-xs text-[#7A7F6A] mb-3">
                    [VERIFY: institution and supervising senior jurist]
                  </p>
                  <p className="text-xs text-[#2E2E2E]/80 leading-relaxed">
                    Rigorous practical apprenticeship in legal verdict drafting, Usul al-Ifta, contemporary contract law, and bioethics.
                  </p>
                </Card>
              </div>
            </div>

            {/* Renowned Teachers & Mentors */}
            <div className="pt-6 border-t border-[#E5E0D6]">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#7A7F6A] font-medium block mb-1">
                  Scholarly Lineage
                </span>
                <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                  Esteemed Teachers & Shuyukh
                </h2>
                <p className="text-xs sm:text-sm text-[#7A7F6A] mt-1">
                  Learned from distinguished scholars of the Indian subcontinent representing the authentic Deobandi intellectual tradition.
                </p>
              </div>

              <div className="space-y-4">
                {TEACHERS_DATA.map((teacher) => (
                  <Card key={teacher.id} className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-serif text-lg text-[#2E2E2E] font-medium">
                          {teacher.name}
                        </h3>
                        <div className="text-xs text-[#7A7F6A] font-medium">
                          {teacher.subjectOrDiscipline}
                        </div>
                      </div>
                      <Badge variant="outline" size="sm">
                        {teacher.institutionOrLocation}
                      </Badge>
                    </div>

                    <p className="text-xs text-[#2E2E2E]/80 leading-relaxed pt-2">
                      {teacher.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#E5E0D6] text-[11px] text-[#7A7F6A]">
                      <span>Instruction Period: {teacher.periodNotes}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Chains of Authorization (Ijazah) */}
            <div className="pt-6 border-t border-[#E5E0D6]">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium mb-3">
                Chains of Transmission (Sanad)
              </h2>
              <p className="text-sm text-[#2E2E2E]/85 leading-relaxed mb-4">
                The concept of <em>Sanad</em> (unbroken chain of transmission) is the hallmark of authentic Sunni Islam. Abdullah ibn al-Mubarak famously declared: <em>“The Isnad is from the religion; were it not for the Isnad, anyone would say whatever they wished.”</em>
              </p>
              <p className="text-sm text-[#2E2E2E]/85 leading-relaxed mb-4">
                Mufti Muneer Ahmad Akhoon holds continuous, unbroken chains of authorization connecting him directly to the classical compilers of Hadith (Imam al-Bukhari, Imam Muslim, Imam Abu Dawud, Imam al-Tirmidhi) and through them back to the Messenger of Allah (peace and blessings be upon him).
              </p>

              <div className="p-5 rounded-[12px] bg-[#FAF8F5] border border-[#E5E0D6] flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#BFA36F] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#2E2E2E]/85">
                  <strong className="text-[#2E2E2E] block mb-1">
                    Formal Ijazah & Spiritual Khilafah:
                  </strong>
                  In addition to academic diplomas, he holds formal spiritual authorization (Khilafah) to initiate seekers, supervise the spiritual path (Suluk), and conduct assemblies of Zikr in the Chishtia Yusufia Zakariyya tradition.
                </div>
              </div>
            </div>

            {/* Note on Verification */}
            <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#7A7F6A]">
              [VERIFY: Exact teacher names and certificates are cataloged in institutional archives at Jamia Zakariyya and Darul Ifta Khatm-e-Nubuwwat].
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
