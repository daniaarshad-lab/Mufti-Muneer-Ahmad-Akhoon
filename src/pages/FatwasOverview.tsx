import React from 'react';
import { Link } from 'react-router-dom';
import { Scroll, CheckCircle, Search, HelpCircle, ArrowRight, ShieldCheck, BookOpen, AlertTriangle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FATWAS_DATA } from '../data/fatwas';

export const FatwasOverview: React.FC = () => {
  return (
    <div className="bg-[#85BDB3] min-h-screen py-6 px-3 sm:px-6 lg:px-8">
      <SEO
        title="Darul Ifta Khatm-e-Nubuwwat | Mufti Muneer Ahmad Akhoon"
        description="Official fatwa and Islamic jurisprudence department directed by Mufti Muneer Ahmad Akhoon in New York."
      />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Top Header Card */}
        <div className="rounded-[32px] bg-gradient-to-r from-[#D4ECE6] via-[#E2F3EF] to-[#ECF7F4] border border-[#C8E5DF] p-6 sm:p-10 shadow-sm text-left">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#008767] font-bold block mb-2">
              Juristic Authority & Research
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-3">
              Darul Ifta Khatm-e-Nubuwwat
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Providing authoritative written decrees (fatwas) in accordance with classical Hanafi jurisprudence to address personal worship, financial contracts, family disputes, and contemporary bioethical dilemmas in North America under the direction of Mufti Muneer Ahmad Akhoon.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="rounded-[32px] bg-white border border-[#C8E5DF] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-8 text-left">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#008767] block mb-1">
                  Methodology & Heritage
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                  Juristic Principles & Classical Standards
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  The issuance of a religious verdict is a solemn trust (Amanah). Our juristic methodology follows established classical standards to ensure consistency and prevent arbitrary personal opinion.
                </p>

                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    Mufti Muneer Ahmad Akhoon, assisted by resident scholars of Jamia Zakariyya, reviews all questions submitted by individuals, masajid, and corporate entities. The department adheres to the authoritative positions (Mufta Bihi) of the Hanafi school as articulated by Imam Abu Hanifa, Imam Abu Yusuf, Imam Muhammad al-Shaybani, and later authorities such as Ibn Abidin al-Shami.
                  </p>
                  <p>
                    Where modern challenges arise - such as decentralized digital assets, Islamic mortgage contracts, or reproductive technology - the department analyzes contemporary rulings issued by international fiqh academies to formulate cautious, practical solutions.
                  </p>
                </div>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <Scroll className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      Search Fatwa Archive
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Browse cataloged written rulings organized by topic: prayer, zakat, marital laws, and halal commerce.
                    </p>
                  </div>
                  <Link
                    to="/fatwas/archive"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#C8E5DF] text-xs font-bold text-gray-800 hover:border-[#008767] hover:text-[#008767] transition-all"
                  >
                    <span>Open Archive ({FATWAS_DATA.length} rulings)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] flex items-center justify-center text-[#008767] mb-3">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 mb-1">
                      Ask a Question
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Submit your personal question for formal written response under the direct supervision of Mufti Akhoon.
                    </p>
                  </div>
                  <Link
                    to="/fatwas/ask"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#008767] text-white text-xs font-bold hover:bg-[#007055] transition-all shadow-xs"
                  >
                    <span>Submit New Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Sample Recent Decrees */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-950">
                    Recent Verified Rulings
                  </h3>
                  <Link to="/fatwas/archive" className="text-xs font-bold text-[#008767] hover:underline">
                    View full archive →
                  </Link>
                </div>

                <div className="space-y-3">
                  {FATWAS_DATA.slice(0, 3).map((fatwa) => (
                    <div key={fatwa.id} className="p-5 rounded-2xl bg-[#F8FCFB] border border-gray-100 space-y-2">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EBF5F2] text-[#008767] text-[10px] font-bold uppercase">
                          {fatwa.category}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">
                          {fatwa.referenceNo}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-950">
                        {fatwa.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {fatwa.question}
                      </p>
                      <Link
                        to="/fatwas/archive"
                        className="text-xs font-bold text-[#008767] hover:underline inline-flex items-center gap-1 pt-1"
                      >
                        <span>Read complete verdict</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Guidelines & Policies */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#008767] font-bold block">
                  Darul Ifta Regulations
                </span>
                <h3 className="text-base font-bold text-gray-950">
                  Submission Guidelines
                </h3>
                <ul className="space-y-2.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" />
                    <span>State questions clearly with concrete factual contexts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" />
                    <span>Inquiries regarding active court litigations require both parties’ statements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" />
                    <span>Hypothetical or combative theological debates are declined.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" />
                    <span>Written fatwas bear official stamp and archival reference number.</span>
                  </li>
                </ul>
              </div>

              {/* Legal Notice */}
              <div className="p-5 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-gray-600 space-y-2">
                <strong className="text-gray-900 block">Jurisdiction & Legal Limitation:</strong>
                <p className="leading-relaxed">
                  Fatwas issued by Darul Ifta Khatm-e-Nubuwwat constitute religious guidance for conscience and personal compliance under Islamic divine law. They do not constitute civil legal advice or replace the statutory jurisdiction of United States civil or criminal courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
