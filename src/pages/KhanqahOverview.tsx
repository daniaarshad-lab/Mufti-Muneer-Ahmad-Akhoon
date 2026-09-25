import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Calendar, ShieldCheck, ArrowRight, Clock, Users, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export const KhanqahOverview: React.FC = () => {
  return (
    <div className="bg-[#85BDB3] min-h-screen py-6 px-3 sm:px-6 lg:px-8">
      <SEO
        title="Khanqah Yusufia Zakariyya Chishtia | Mufti Muneer Ahmad Akhoon"
        description="Traditional center for spiritual purification (Tazkiyah), regular assemblies of Zikr, spiritual counseling, and personal moral mentorship."
      />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Top Header Card */}
        <div className="rounded-[32px] bg-gradient-to-r from-[#D4ECE6] via-[#E2F3EF] to-[#ECF7F4] border border-[#C8E5DF] p-6 sm:p-10 shadow-sm text-left">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#008767] font-bold block mb-2">
              Spiritual Purification & Moral Mentorship
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-3">
              Khanqah Yusufia Zakariyya Chishtia
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              A serene haven established in New York to nurture the human heart through the unbroken methodology of the Chishtia masters, guiding seekers toward inner peace, sincere repentance, and closeness to Allah under the mentorship of Mufti Muneer Ahmad Akhoon.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Core Philosophy */}
            <div className="lg:col-span-8 space-y-8 text-left">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#008767] block mb-1">
                  The Traditional Science of the Heart
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                  What is Tazkiyah and the Khanqah Tradition?
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  In classical Islam, the Khanqah served as an educational and spiritual sanctuary where Muslims learned to master their lower desires (nafs) through the constant remembrance of God and companionship with the pious.
                </p>

                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    Allah the Almighty declares in the Noble Quran: <em>“He has certainly succeeded who purifies it, and he has certainly failed who instills it [with corruption]”</em> (Surah Ash-Shams, 91:9-10).
                  </p>
                  <p>
                    While the madrasa trains the intellect in legal texts and Arabic syntax, the Khanqah trains the heart in sincerity, patience (Sabr), humility (Tawadu‘), and absolute reliance upon God (Tawakkul). It is the clinic for spiritual illnesses such as jealousy (Hasad), ostentation (Riya), and arrogance (Kibr).
                  </p>
                  <p>
                    Khanqah Yusufia operates under the direct spiritual supervision of Mufti Muneer Ahmad Akhoon, whose authorized lineage in the Chishtia Sabiria Zakariyya tradition provides seekers with structured, time-tested guidance grounded strictly in the Quran and authentic Sunnah.
                  </p>
                </div>
              </div>

              {/* Core Offerings & Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      Weekly Majlis-e-Zikr
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every Thursday evening following Maghrib prayer. Features collective vocal and silent remembrance, Quran recitation, and an open spiritual discourse.
                    </p>
                  </div>
                  <Link
                    to="/khanqah/schedule"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline"
                  >
                    <span>View Majlis schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      What is Bay‘ah?
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Learn the nature of the sacred pledge of discipleship, how to choose a spiritual mentor, and the duties of a mureed in the Chishtia tradition.
                    </p>
                  </div>
                  <Link
                    to="/khanqah/bayah"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline"
                  >
                    <span>Understanding Bay‘ah</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      Spiritual Healing & Wazaif
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Authentic morning and evening supplications, Shariah-compliant Ruqya, and daily litanies (Ma’mulat) for protection and peace of mind.
                    </p>
                  </div>
                  <Link
                    to="/khanqah/spiritual-healing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline"
                  >
                    <span>Healing & Ruqya guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      Spiritual Consultation
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Book a private confidential meeting or online session with Mufti Muneer Ahmad Akhoon for spiritual diagnosis, marital guidance, or personal Islah.
                    </p>
                  </div>
                  <Link
                    to="/khanqah/consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008767] hover:underline"
                  >
                    <span>Book consultation session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Key Tenets & Information */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#008767] font-bold block">
                  Four Foundations
                </span>
                <h3 className="text-base font-bold text-gray-950">
                  Pillars of the Khanqah Path
                </h3>
                <ul className="space-y-3 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008767]">1.</span>
                    <span>
                      <strong className="text-gray-900">Tawbah (Repentance):</strong> Turning away from intentional and habitual sin.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008767]">2.</span>
                    <span>
                      <strong className="text-gray-900">Halal Sustenance:</strong> Ensuring every morsel of food and dollar of income is lawful.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008767]">3.</span>
                    <span>
                      <strong className="text-gray-900">Dhikr Allah:</strong> Regular morning and evening remembrance of God.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008767]">4.</span>
                    <span>
                      <strong className="text-gray-900">Suhbah (Companionship):</strong> Consistent connection with righteous mentors and students.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] space-y-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                  Weekly Gathering
                </span>
                <h4 className="text-base font-bold text-gray-950">
                  Majlis-e-Zikr Attendance
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Open to all brothers and families. No prior registration is required for the general Thursday night assembly.
                </p>
                <div className="text-xs text-gray-700 space-y-1.5 py-1">
                  <div><strong className="text-gray-900">Day:</strong> Every Thursday Evening</div>
                  <div><strong className="text-gray-900">Time:</strong> After Maghrib (approx. 7:30 PM)</div>
                  <div><strong className="text-gray-900">Location:</strong> Jamia Zakariyya New York campus</div>
                </div>
                <Link
                  to="/khanqah/schedule"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-[#008767] text-white text-xs font-bold hover:bg-[#007055] transition-all shadow-xs"
                >
                  Complete Schedule & Retreats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
