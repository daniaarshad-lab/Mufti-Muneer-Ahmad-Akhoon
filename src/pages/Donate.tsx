import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck, Heart, DollarSign, Copy, Check } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export const Donate: React.FC = () => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(150);
  const [customAmount, setCustomAmount] = useState('');
  const [allocation, setAllocation] = useState('Jamia Zakariyya Student Sponsorship');
  const [copiedZelle, setCopiedZelle] = useState(false);
  const [simulatedComplete, setSimulatedComplete] = useState(false);

  const presetAmounts = [50, 100, 150, 250, 500, 1000];

  const handleCopyZelle = () => {
    navigator.clipboard?.writeText('donations@almuneer.org');
    setCopiedZelle(true);
    setTimeout(() => setCopiedZelle(false), 2000);
  };

  const handleSimulateDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setSimulatedComplete(true);
  };

  return (
    <div>
      <SEO
        title="Donate | Support Jamia Zakariyya & Community Funds"
        description="Donate and sponsor students of sacred knowledge at Jamia Zakariyya New York and support Khanqah Yusufia and Al-Muneer Foundation."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="narrow">
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Get Involved</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#7A7F6A] font-medium block mb-2">
            Invest in Sacred Knowledge
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Donate & Sponsor a Student
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            Empower the next generation of American-trained scholars, teachers, and Huffaz of the Noble Quran.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Interactive Donation Builder Card */}
            <Card className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#E5E0D6]">
              {simulatedComplete ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D8C3A5]/15 text-[#BFA36F] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                    Jazakum Allahu Khayran
                  </h3>
                  <p className="text-sm text-[#7A7F6A] max-w-md mx-auto leading-relaxed">
                    May Allah accept your noble contribution of{' '}
                    <strong className="text-[#2E2E2E]">${customAmount ? customAmount : amount}</strong> towards{' '}
                    <em>{allocation}</em> ({frequency}).
                  </p>
                  <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/80 text-left max-w-md mx-auto space-y-1">
                    <div><strong>Tax Receipt:</strong> Deductible under 501(c)(3) tax laws.</div>
                    <div><strong>Payment Mode:</strong> Please complete transfer via Zelle or Check as detailed below.</div>
                  </div>
                  <div className="pt-3">
                    <Button onClick={() => setSimulatedComplete(false)} variant="outline" size="sm">
                      Make Another Pledge
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSimulateDonation} className="space-y-6">
                  {/* Frequency Switcher */}
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-2">
                      Donation Frequency
                    </span>
                    <div className="grid grid-cols-2 gap-2 max-w-sm">
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`py-2 text-xs font-medium rounded-[8px] border transition-colors ${
                          frequency === 'monthly'
                            ? 'bg-[#2E302B] text-[#FAF8F5] border-[#2E2E2E]'
                            : 'bg-[#FAF8F5] text-[#7A7F6A] border-[#E5E0D6]'
                        }`}
                      >
                        Monthly Sustainer
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('one-time')}
                        className={`py-2 text-xs font-medium rounded-[8px] border transition-colors ${
                          frequency === 'one-time'
                            ? 'bg-[#2E302B] text-[#FAF8F5] border-[#2E2E2E]'
                            : 'bg-[#FAF8F5] text-[#7A7F6A] border-[#E5E0D6]'
                        }`}
                      >
                        One-Time Gift
                      </button>
                    </div>
                  </div>

                  {/* Fund Allocation */}
                  <div>
                    <label htmlFor="allocation" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Designate Your Gift
                    </label>
                    <select
                      id="allocation"
                      value={allocation}
                      onChange={(e) => setAllocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                    >
                      <option value="Jamia Zakariyya Student Sponsorship">
                        Jamia Zakariyya Student Sponsorship (Tuition & Room/Board)
                      </option>
                      <option value="Zakat-Eligible Needy Student Fund">
                        Zakat-Eligible Needy Student & Family Relief (100% Direct)
                      </option>
                      <option value="Khanqah Yusufia Majlis Operations">
                        Khanqah Yusufia Spiritual Sanctuary & Majlis Operations
                      </option>
                      <option value="Westchester Muslim Center General Operating">
                        Westchester Muslim Center General Operating Fund
                      </option>
                      <option value="Al-Muneer Community Food Distribution">
                        Al-Muneer Community Food Bank & Relief
                      </option>
                    </select>
                  </div>

                  {/* Amount Presets */}
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-2">
                      Select Amount (USD)
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-2 text-sm font-serif font-medium rounded-[8px] border transition-colors ${
                            amount === amt && !customAmount
                              ? 'bg-[#D8C3A5] text-[#2E2E2E] border-[#BFA36F] font-bold'
                              : 'bg-[#FAF8F5] text-[#2E2E2E] border-[#E5E0D6] hover:border-[#A8A190]'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="relative">
                      <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7F6A]" />
                      <input
                        type="number"
                        min="5"
                        placeholder="Or enter custom amount..."
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setAmount(Number(e.target.value));
                        }}
                        className="w-full pl-9 pr-4 py-2 rounded-[8px] border border-[#E5E0D6] text-sm bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    Proceed with ${customAmount || amount} {frequency === 'monthly' ? '/ Month' : ' Gift'}
                  </Button>
                </form>
              )}
            </Card>

            {/* Direct Giving Channels */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                Direct Giving Methods
              </h2>

              {/* Zelle */}
              <Card className="p-6 bg-[#FAF8F5]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#7A7F6A]">
                        Recommended (Zero Processing Fees)
                      </span>
                      <Badge variant="support" size="sm">Instant</Badge>
                    </div>
                    <h3 className="font-serif text-lg text-[#2E2E2E] font-medium">
                      Zelle Transfer
                    </h3>
                    <p className="text-xs text-[#7A7F6A] mt-0.5">
                      Send funds directly to: <strong>donations@almuneer.org</strong> [VERIFY: verified Zelle ID]
                    </p>
                  </div>

                  <button
                    onClick={handleCopyZelle}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[8px] border border-[#E5E0D6] bg-[#FFFFFF] text-xs font-medium text-[#2E2E2E] hover:bg-[#FAF8F5] transition-colors self-start sm:self-center"
                  >
                    {copiedZelle ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#BFA36F]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Zelle ID</span>
                      </>
                    )}
                  </button>
                </div>
              </Card>

              {/* Mail / Check */}
              <Card className="p-6 bg-[#FAF8F5]">
                <h3 className="font-serif text-lg text-[#2E2E2E] font-medium mb-1">
                  Mail a Check / Postal Order
                </h3>
                <p className="text-xs text-[#7A7F6A] mb-2">
                  Make checks payable to <strong>Al-Muneer Foundation Inc.</strong> (specify student fund or zakat on the memo line) and mail to:
                </p>
                <div className="p-3 bg-[#FFFFFF] border border-[#E5E0D6] rounded-[6px] text-xs font-mono text-[#2E2E2E]/85">
                  Al-Muneer Foundation Inc.<br />
                  Attn: Accounting & Treasury<br />
                  Mount Vernon, NY 10550, USA [VERIFY: full postal address]
                </div>
              </Card>
            </div>

            {/* Zakat & Tax Deductibility Policy */}
            <div className="p-6 rounded-[12px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/85 space-y-2">
              <strong className="text-sm font-serif text-[#2E2E2E] block">
                Zakat Compliance & Fiduciary Oversight
              </strong>
              <p className="leading-relaxed text-[#7A7F6A]">
                Under the direct supervision of Mufti Muneer Ahmad Akhoon, all funds marked as Zakat are segregated into a dedicated account. They are disbursed strictly to individuals who qualify as legitimate recipients according to the Quranic categories (Masarif al-Zakat) and Hanafi legal requirements (Tamleek).
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
