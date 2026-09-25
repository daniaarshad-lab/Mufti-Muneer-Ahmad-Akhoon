import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Scroll, ShieldCheck, Info } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

interface FatwaFormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  subject: string;
  questionDetails: string;
  isCourtDispute: boolean;
  termsAgreed: boolean;
}

interface FatwaErrors {
  fullName?: string;
  email?: string;
  location?: string;
  category?: string;
  subject?: string;
  questionDetails?: string;
  termsAgreed?: string;
}

export const AskFatwa: React.FC = () => {
  const [form, setForm] = useState<FatwaFormState>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    category: 'Purification & Prayer',
    subject: '',
    questionDetails: '',
    isCourtDispute: false,
    termsAgreed: false,
  });

  const [errors, setErrors] = useState<FatwaErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FatwaErrors = {};

    if (!form.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    } else if (form.fullName.trim().length < 3) {
      errs.fullName = 'Please enter a valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(form.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!form.location.trim()) {
      errs.location = 'City and state/country are required.';
    }

    if (!form.subject.trim()) {
      errs.subject = 'Question subject is required.';
    } else if (form.subject.trim().length < 5) {
      errs.subject = 'Subject should be at least 5 characters.';
    }

    if (!form.questionDetails.trim()) {
      errs.questionDetails = 'Detailed question description is required.';
    } else if (form.questionDetails.trim().length < 30) {
      errs.questionDetails = 'Please provide at least 30 characters explaining your scenario thoroughly.';
    }

    if (!form.termsAgreed) {
      errs.termsAgreed = 'You must confirm that your question contains truthful, factual facts.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `DAR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
    }, 600);
  };

  return (
    <div>
      <SEO
        title="Ask a Question | Darul Ifta"
        description="Submit your Shariah question to Mufti Muneer Ahmad Akhoon and the scholars of Darul Ifta Khatm-e-Nubuwwat."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E0D6]">
        <Container size="narrow">
          <Link
            to="/fatwas"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A7F6A] hover:text-[#2E2E2E] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Darul Ifta Overview</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#7A7F6A] font-medium block mb-2">
            Formal Inquiry Submission
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Ask a Fatwa Question
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            Submit your personal, financial, or religious questions directly to the juristic council.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          {referenceId ? (
            <Card className="p-8 sm:p-10 text-center space-y-4 bg-[#FFFFFF]">
              <div className="w-14 h-14 rounded-full bg-[#D8C3A5]/15 text-[#BFA36F] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                Fatwa Inquiry Successfully Submitted
              </h2>

              <p className="text-sm text-[#7A7F6A] max-w-md mx-auto leading-relaxed">
                Your question has been securely logged into the Darul Ifta registry under reference number:
              </p>

              <div className="inline-block px-5 py-2.5 rounded-[8px] bg-[#2E302B] text-[#FAF8F5] font-mono font-medium text-base sm:text-lg">
                {referenceId}
              </div>

              <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/80 text-left max-w-md mx-auto space-y-1.5 mt-4">
                <div><strong>Inquirer:</strong> {form.fullName}</div>
                <div><strong>Category:</strong> {form.category}</div>
                <div><strong>Subject:</strong> {form.subject}</div>
                <div><strong>Notification Target:</strong> {form.email}</div>
              </div>

              <p className="text-xs text-[#7A7F6A] max-w-md mx-auto pt-2">
                Standard queries receive written answers within 3 to 7 business days. Complex marital and financial contracts require longer scholarly review.
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <Button
                  onClick={() => {
                    setReferenceId(null);
                    setForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      location: '',
                      category: 'Purification & Prayer',
                      subject: '',
                      questionDetails: '',
                      isCourtDispute: false,
                      termsAgreed: false,
                    });
                  }}
                  variant="outline"
                  size="sm"
                >
                  Submit Another Question
                </Button>
                <Button to="/fatwas/archive" variant="primary" size="sm">
                  Browse Fatwa Archive
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Guidance Box */}
              <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/85 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#7A7F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2E2E2E] block mb-1">Before Submitting Your Inquiry:</strong>
                  Please search the <Link to="/fatwas/archive" className="text-[#7A7F6A] underline">Fatwa Archive</Link> first. Many common rulings on prayer timings, fasting rules, and contemporary transactions are already answered.
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <Card className="p-6 sm:p-8 space-y-6 bg-[#FFFFFF]">
                  <h3 className="font-serif text-xl text-[#2E2E2E] font-medium pb-2 border-b border-[#E5E0D6]">
                    Inquirer Information
                  </h3>

                  {/* Name */}
                  <div>
                    <label htmlFor="fatwa-name" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fatwa-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Tariq Mahmood"
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 ${
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
                      <label htmlFor="fatwa-email" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fatwa-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tariq@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 ${
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
                      <label htmlFor="fatwa-phone" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        id="fatwa-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                      />
                    </div>
                  </div>

                  {/* Location & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fatwa-loc" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        City & Country <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fatwa-loc"
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Brooklyn, NY"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 ${
                          errors.location ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.location}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="fatwa-cat" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Fiqh Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="fatwa-cat"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                      >
                        <option value="Purification & Prayer">Purification & Prayer (Taharah & Salah)</option>
                        <option value="Transactions & Finance">Transactions & Finance (Buyu‘, Stocks, Zakat)</option>
                        <option value="Family & Marriage">Family & Marriage (Nikah, Talaq, Custody)</option>
                        <option value="Dietary & Halal">Dietary & Halal Standards (Slaughter, Food)</option>
                        <option value="Faith & Creed">Faith & Creed (‘Aqeedah)</option>
                        <option value="Contemporary Issues">Contemporary & Biomedical Ethics</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="fatwa-subj" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Subject Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fatwa-subj"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Zakat calculation on employer matched 401(k)"
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 ${
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

                  {/* Details */}
                  <div>
                    <label htmlFor="fatwa-details" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Detailed Question <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="fatwa-details"
                      rows={6}
                      value={form.questionDetails}
                      onChange={(e) => setForm({ ...form, questionDetails: e.target.value })}
                      placeholder="Please present all relevant facts truthfully without omitting critical details. If financial contracts or figures are involved, specify them clearly..."
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 ${
                        errors.questionDetails ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                      }`}
                    />
                    {errors.questionDetails ? (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.questionDetails}</span>
                      </p>
                    ) : (
                      <span className="text-[11px] text-[#7A7F6A]">Minimum 30 characters required.</span>
                    )}
                  </div>

                  {/* Dispute Checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      id="isDispute"
                      type="checkbox"
                      checked={form.isCourtDispute}
                      onChange={(e) => setForm({ ...form, isCourtDispute: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-[#E5E0D6] text-[#2E2E2E] focus:ring-[#BFA36F]"
                    />
                    <label htmlFor="isDispute" className="text-xs text-[#7A7F6A]">
                      Is this matter currently pending before a civil court or legal dispute? (If yes, Darul Ifta may require supplementary verification from opposing parties).
                    </label>
                  </div>

                  {/* Terms Confirmation Checkbox */}
                  <div>
                    <div className="flex items-start gap-2.5">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={form.termsAgreed}
                        onChange={(e) => setForm({ ...form, termsAgreed: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-[#E5E0D6] text-[#2E2E2E] focus:ring-[#BFA36F]"
                      />
                      <label htmlFor="terms" className="text-xs text-[#2E2E2E]/85">
                        I solemnly affirm that the facts presented in this question are true, accurate, and submitted solely for religious compliance before Allah. <span className="text-red-600">*</span>
                      </label>
                    </div>
                    {errors.termsAgreed && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.termsAgreed}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Submitting to Darul Ifta...' : 'Submit Fatwa Question'}
                    </Button>
                  </div>
                </Card>
              </form>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};
