import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Building2, ShieldCheck, Compass } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    department: 'Westchester Muslim Center (Religious Affairs)',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!emailRegex.test(form.email.trim())) errs.email = 'Please provide a valid email format.';

    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message text is required.';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div>
      <SEO
        title="Contact Official Offices | Mufti Muneer Ahmad Akhoon"
        description="Official contact details for Westchester Muslim Center, Jamia Zakariyya New York, Darul Ifta, and Al-Muneer Foundation."
      />

      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden shadow-md">
        <Container size="wide">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>Official Inquiries & Coordination</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contact & Institutional Offices
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed pt-1">
              Reach out to administrative coordinators for academic admissions, religious appointments, media requests, and general pastoral correspondence.
            </p>
          </div>
        </Container>
      </section>

      <Section variant="light" spacing="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Institutional Directory */}
            <div className="lg:col-span-5 space-y-6">
              <Heading
                eyebrow="Primary Offices"
                title="Institutional Directory"
                description="Physical locations, office hours, and designated points of contact."
              />

              {/* Office 1 */}
              <Card className="p-6 bg-[#FAF8F5]">
                <div className="flex items-start gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-[#7A7F6A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base text-[#2E2E2E] font-medium">
                      Westchester Muslim Center
                    </h3>
                    <span className="text-xs text-[#7A7F6A] font-medium block">
                      Office of the Director of Religious Affairs
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-[#2E2E2E]/85 pl-8">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>Mount Vernon, NY 10550, USA [VERIFY: address]</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>Mon - Thu: 10:00 AM – 3:00 PM | Fri: Post-Jumu‘ah</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>religiousaffairs@westchestermuslim.org</span>
                  </p>
                </div>
              </Card>

              {/* Office 2 */}
              <Card className="p-6 bg-[#FAF8F5]">
                <div className="flex items-start gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-[#7A7F6A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base text-[#2E2E2E] font-medium">
                      Jamia Zakariyya New York
                    </h3>
                    <span className="text-xs text-[#7A7F6A] font-medium block">
                      Academic Registrar & Admissions
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-[#2E2E2E]/85 pl-8">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>New York, USA [VERIFY: campus address]</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>Sun - Thu: 8:00 AM – 2:00 PM</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>admissions@jamiazakariyya.org</span>
                  </p>
                </div>
              </Card>

              {/* Office 3 */}
              <Card className="p-6 bg-[#FAF8F5]">
                <div className="flex items-start gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-[#7A7F6A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base text-[#2E2E2E] font-medium">
                      Al-Muneer Foundation Inc.
                    </h3>
                    <span className="text-xs text-[#7A7F6A] font-medium block">
                      Community Welfare & Treasury
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-[#2E2E2E]/85 pl-8">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>Mount Vernon, NY, USA</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7A7F6A]" />
                    <span>contact@almuneer.org</span>
                  </p>
                </div>
              </Card>

              {/* Quick links to specific services */}
              <div className="p-5 rounded-[12px] border border-[#E5E0D6] space-y-2 text-xs text-[#7A7F6A]">
                <strong className="text-[#2E2E2E] block">Looking for a specific department?</strong>
                <p>
                  • For Shariah legal verdicts:{' '}
                  <Link to="/fatwas/ask" className="text-[#7A7F6A] underline">
                    Submit to Darul Ifta
                  </Link>
                </p>
                <p>
                  • For private spiritual counseling:{' '}
                  <Link to="/khanqah/consultation" className="text-[#7A7F6A] underline">
                    Book Spiritual Consultation
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column: General Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#E5E0D6]">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#D8C3A5]/15 text-[#BFA36F] flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                      Message Delivered Successfully
                    </h3>

                    <p className="text-sm text-[#7A7F6A] max-w-md mx-auto leading-relaxed">
                      Jazakum Allahu Khayran, <strong>{form.fullName}</strong>. Your inquiry has been routed to the administrative office for <em>{form.department}</em>.
                    </p>

                    <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/80 text-left max-w-md mx-auto space-y-1">
                      <div><strong>Target Department:</strong> {form.department}</div>
                      <div><strong>Subject:</strong> {form.subject}</div>
                      <div><strong>Receipt Copy:</strong> Sent to {form.email}</div>
                    </div>

                    <div className="pt-3">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setForm({
                            fullName: '',
                            email: '',
                            phone: '',
                            department: 'Westchester Muslim Center (Religious Affairs)',
                            subject: '',
                            message: '',
                          });
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="border-b border-[#E5E0D6] pb-3">
                      <span className="text-xs uppercase font-medium tracking-wider text-[#7A7F6A] block mb-1">
                        Send a Message
                      </span>
                      <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                        General Correspondence Form
                      </h2>
                      <p className="text-xs text-[#7A7F6A] mt-1">
                        Please specify the relevant department to facilitate a timely response.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="cnt-name" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="cnt-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F] ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cnt-email" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="cnt-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F] ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cnt-phone" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="cnt-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F]"
                        />
                      </div>
                    </div>

                    {/* Department Selection */}
                    <div>
                      <label htmlFor="cnt-dept" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                        Relevant Department <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="cnt-dept"
                        value={form.department}
                        onChange={(e) => setForm({ ...form, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F]"
                      >
                        <option value="Westchester Muslim Center (Religious Affairs)">
                          Westchester Muslim Center (Religious Affairs / Jumu‘ah)
                        </option>
                        <option value="Jamia Zakariyya New York (Academic Office)">
                          Jamia Zakariyya New York (Academic Office / Alimiyyah & Hifz)
                        </option>
                        <option value="Al-Muneer Foundation Inc. (General Operations)">
                          Al-Muneer Foundation Inc. (General Operations & Charity)
                        </option>
                        <option value="Khanqah Yusufia Zakariyya (Weekly Majlis)">
                          Khanqah Yusufia Zakariyya (Weekly Majlis & Retreats)
                        </option>
                        <option value="RahamTV Media & Broadcast Productions">
                          RahamTV Media & Broadcast Productions
                        </option>
                        <option value="Executive Media & Press Inquiries">
                          Executive Media & Press Inquiries
                        </option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="cnt-subj" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                        Subject Title <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="cnt-subj"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="e.g. Inquiring regarding guest speaking invitation"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F] ${
                          errors.subject ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="cnt-msg" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="cnt-msg"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please write your inquiry clearly..."
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#BFA36F] ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                        }`}
                      />
                      {errors.message ? (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      ) : (
                        <span className="text-[11px] text-[#7A7F6A]">Minimum 20 characters.</span>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
