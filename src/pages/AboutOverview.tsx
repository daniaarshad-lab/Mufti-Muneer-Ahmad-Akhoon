import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, GitBranch, Award, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { scholarPortrait } from '../assets/images';

export const AboutOverview: React.FC = () => {
  const subSections = [
    {
      title: 'Biography & Early Life',
      path: '/about/biography',
      icon: <BookOpen className="w-5 h-5 text-[#008767]" />,
      desc: 'Early studies, upbringing in traditional scholarly circles, migration to the United States, and over two decades of public service in the New York metropolitan area.',
    },
    {
      title: 'Education & Teachers',
      path: '/about/education',
      icon: <GraduationCap className="w-5 h-5 text-[#008767]" />,
      desc: 'Rigorous Dars-e-Nizami completion, specialized training in Islamic Jurisprudence (Takhassus fi al-Ifta), and authorizations in Hadith transmission.',
    },
    {
      title: 'Spiritual Lineage (Silsila)',
      path: '/about/lineage',
      icon: <GitBranch className="w-5 h-5 text-[#008767]" />,
      desc: 'The unbroken spiritual genealogy connecting Khanqah Yusufia to Shaykh al-Hadith Mawlana Muhammad Zakariyya Kandhlawi and the masters of the Chishtia order.',
    },
    {
      title: 'Achievements & Recognitions',
      path: '/about/achievements',
      icon: <Award className="w-5 h-5 text-[#008767]" />,
      desc: 'Documented institutional milestones, published treatises, educational graduations at Jamia Zakariyya, and civic contributions.',
    },
  ];

  return (
    <div className="bg-[#85BDB3] min-h-screen py-6 px-3 sm:px-6 lg:px-8">
      <SEO
        title="About Hazrat Ji"
        description="Comprehensive overview of Mufti Muneer Ahmad Akhoon - scholarly background, traditional credentials, and institutional leadership."
      />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Top Header Card */}
        <div className="rounded-[32px] bg-gradient-to-r from-[#D4ECE6] via-[#E2F3EF] to-[#ECF7F4] border border-[#C8E5DF] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#008767] font-bold block mb-2">
              Scholarly Profile & Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-3">
              About Mufti Muneer Ahmad Akhoon
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              A veteran Islamic jurist (Mufti), educator, and spiritual mentor whose life work bridges classical Islamic scholarship with the complex realities of Muslim families living in North America.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Scholar Portrait & Quick Facts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[#C8E5DF] shadow-sm bg-[#EBF5F2]">
                <img
                  src={scholarPortrait}
                  alt="Mufti Muneer Ahmad Akhoon"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-[#C8E5DF]">
                  <h3 className="font-bold text-gray-900 text-base">Mufti Muneer Ahmad Akhoon</h3>
                  <p className="text-xs text-gray-500">Founder & Director of Religious Affairs</p>
                  <p className="text-xs text-[#008767] font-semibold mt-1">Westchester Muslim Center & Jamia Zakariyya</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] space-y-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                  Juristic Methodology
                </span>
                <h4 className="text-base font-bold text-gray-900">
                  Traditional Hanafi School
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fatwas and legal guidance issued by Mufti Muneer Ahmad Akhoon adhere strictly to the established Hanafi jurisprudence while addressing contemporary realities with deep contextual awareness of life in the West.
                </p>
                <Link
                  to="/fatwas"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] hover:underline pt-1"
                >
                  <span>Darul Ifta Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] space-y-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                  Spiritual Tradition
                </span>
                <h4 className="text-base font-bold text-gray-900">
                  Chishtia Zakariyya Order
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mentorship emphasizes personal moral rectification (Islah), consistent vocal and silent Zikr, adherence to the Sunnah, and compassion towards all creation without sectarianism.
                </p>
                <Link
                  to="/khanqah"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#008767] hover:underline pt-1"
                >
                  <span>Khanqah & Mentorship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Narrative & Detailed Links */}
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed text-left">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#008767] block mb-1">
                  Introduction
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                  A Life Dedicated to Sacred Sciences
                </h2>
                <p className="text-sm text-gray-500">
                  Rooted in authentic tradition, serving contemporary society with dignity, wisdom, and pastoral care.
                </p>
              </div>

              <p>
                Mufti Muneer Ahmad Akhoon is an esteemed Islamic scholar and spiritual guide currently based in New York, USA. Trained in classical Hanafi jurisprudence and the prophetic sciences, he has dedicated more than two decades to community leadership, teaching, and pastoral counseling.
              </p>

              <p>
                As Director of Religious Affairs at Westchester Muslim Center in Mount Vernon, NY, and Founder & Chairman of Al-Muneer Foundation Inc., he oversees spiritual services, educational curricula, and community welfare initiatives that directly impact thousands of Muslim families.
              </p>

              <div className="bg-[#F8FCFB] border border-[#C8E5DF] p-6 rounded-2xl my-6">
                <h3 className="text-base font-bold text-gray-950 mb-3">
                  Summary of Official Appointments & Roles
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Founder & Chairman:</strong> Al-Muneer Foundation Inc. (Community welfare & outreach)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Director of Religious Affairs:</strong> Westchester Muslim Center, Mount Vernon, NY
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Founder & Senior Patron:</strong> Jamia Zakariyya New York (Full-time Alimiyyah & Tahfiz seminary)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Head Mufti:</strong> Darul Ifta Khatm-e-Nubuwwat (Formal fatwa issuance)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Spiritual Guide (Shaykh):</strong> Khanqah Yusufia Zakariyya Chishtia
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#008767] mt-1 font-bold">•</span>
                    <span>
                      <strong>Principal Broadcaster:</strong> RahamTV Media Network
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-950 pt-4">
                Explore Detailed Sections
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {subSections.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="p-5 rounded-2xl border border-gray-100 bg-[#F8FCFB] hover:border-[#008767] hover:bg-white transition-all flex flex-col justify-between group shadow-xs"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="p-2 rounded-xl bg-[#EBF5F2]">
                          {item.icon}
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#008767] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-[#008767] flex items-center gap-1">
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

