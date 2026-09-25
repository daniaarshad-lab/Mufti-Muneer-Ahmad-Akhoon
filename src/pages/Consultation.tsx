import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Calendar, ShieldCheck, Mail, Phone, Clock } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  consultationType: string;
  mode: 'in-person' | 'online';
  preferredDays: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  consultationType?: string;
  message?: string;
}

export const Consultation: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    consultationType: 'Spiritual Mentorship (Tazkiyah & Islah)',
    mode: 'in-person',
    preferredDays: 'Weekday Evenings',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for appointment confirmation.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact number.';
    }

    if (!formData.location.trim()) {
      errs.location = 'City and State/Country is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your inquiry.';
    } else if (formData.message.trim().length < 25) {
      errs.message = 'Please provide at least 25 characters describing your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <SEO
        title="Book a Spiritual Consultation"
        description="Schedule a confidential spiritual guidance consultation with Mufti Muneer Ahmad Akhoon for Tazkiyah, family counseling, or Islah."
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
            Confidential Spiritual Guidance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E] font-medium tracking-tight mb-2">
            Book a Spiritual Consultation
          </h1>
          <p className="text-sm text-[#7A7F6A]">
            Individual private appointments for moral counsel, spiritual obstacles, marital advice, or initiation into the Chishtia order.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          {isSubmitted ? (
            <Card className="p-8 sm:p-10 text-center space-y-4 bg-[#FFFFFF]">
              <div className="w-14 h-14 rounded-full bg-[#D8C3A5]/15 text-[#BFA36F] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h2 className="font-serif text-2xl text-[#2E2E2E] font-medium">
                Consultation Request Received
              </h2>

              <p className="text-sm sm:text-base text-[#7A7F6A] max-w-md mx-auto leading-relaxed">
                Jazakum Allahu Khayran, <strong>{formData.fullName}</strong>. Your consultation request has been delivered to the administrative office of Mufti Muneer Ahmad Akhoon.
              </p>

              <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] text-xs text-[#2E2E2E]/80 text-left max-w-md mx-auto space-y-1.5">
                <div><strong>Requested Mode:</strong> {formData.mode === 'in-person' ? 'In-Person (New York)' : 'Online Video (Zoom)'}</div>
                <div><strong>Inquiry Topic:</strong> {formData.consultationType}</div>
                <div><strong>Preferred Timing:</strong> {formData.preferredDays}</div>
                <div><strong>Confirmation Email Sent To:</strong> {formData.email}</div>
              </div>

              <p className="text-xs text-[#7A7F6A] pt-2">
                The office typically confirms appointment slots within 2 to 4 business days. For urgent matters, please contact Westchester Muslim Center during office hours.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      location: '',
                      consultationType: 'Spiritual Mentorship (Tazkiyah & Islah)',
                      mode: 'in-person',
                      preferredDays: 'Weekday Evenings',
                      message: '',
                    });
                  }}
                  variant="outline"
                  size="sm"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Privacy Notice */}
              <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#E5E0D6] flex items-start gap-3 text-xs text-[#7A7F6A]">
                <ShieldCheck className="w-4 h-4 text-[#BFA36F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2E2E2E] block mb-0.5">Strict Confidentiality Policy:</strong>
                  All consultation discussions and personal information are treated with absolute religious pastoral confidentiality (Amanah). Details are never shared with third parties.
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <Card className="p-6 sm:p-8 space-y-6 bg-[#FFFFFF]">
                  <h3 className="font-serif text-xl text-[#2E2E2E] font-medium pb-2 border-b border-[#E5E0D6]">
                    Applicant Details
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Full Legal Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ahmad Khan"
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 transition-colors ${
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
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 transition-colors ${
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
                      <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location & Preferred Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        City, State & Country <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. White Plains, NY or London, UK"
                        className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 transition-colors ${
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
                      <label htmlFor="mode" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Appointment Mode <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="mode"
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value as 'in-person' | 'online' })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                      >
                        <option value="in-person">In-Person (Westchester / Jamia NY)</option>
                        <option value="online">Online Video Conference (Zoom)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Category & Best Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="consultationType" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Subject of Consultation
                      </label>
                      <select
                        id="consultationType"
                        value={formData.consultationType}
                        onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                      >
                        <option value="Spiritual Mentorship (Tazkiyah & Islah)">Spiritual Mentorship (Tazkiyah & Islah)</option>
                        <option value="Seeking Bay‘ah in Chishtia Order">Seeking Bay‘ah in Chishtia Order</option>
                        <option value="Family & Marital Reconciliation">Family & Marital Reconciliation</option>
                        <option value="Youth Religious Doubts & Counseling">Youth Religious Doubts & Counseling</option>
                        <option value="Bereavement & Grief Support">Bereavement & Grief Support</option>
                        <option value="Other Spiritual Concern">Other Spiritual Concern</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDays" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                        Preferred Availability
                      </label>
                      <select
                        id="preferredDays"
                        value={formData.preferredDays}
                        onChange={(e) => setFormData({ ...formData, preferredDays: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E0D6] text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50"
                      >
                        <option value="Weekday Evenings">Weekday Evenings (6 PM - 9 PM)</option>
                        <option value="Weekend Mornings">Weekend Mornings (10 AM - 1 PM)</option>
                        <option value="Weekend Afternoons">Weekend Afternoons (2 PM - 5 PM)</option>
                        <option value="Flexible / Any Time Available">Flexible / Any Time Available</option>
                      </select>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                      Brief Description of Inquiry <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your situation or question briefly to assist the Mufti in preparing for your session..."
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#2E2E2E] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/50 transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E5E0D6]'
                      }`}
                    />
                    {errors.message ? (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    ) : (
                      <span className="text-[11px] text-[#7A7F6A]">Minimum 25 characters required.</span>
                    )}
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Processing Request...' : 'Submit Consultation Request'}
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
