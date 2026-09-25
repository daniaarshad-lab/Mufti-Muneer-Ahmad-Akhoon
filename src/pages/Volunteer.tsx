import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Users, Heart, Clock, Award } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

interface VolunteerFormState {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  availability: string;
  experience: string;
}

export const Volunteer: React.FC = () => {
  const [form, setForm] = useState<VolunteerFormState>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interests: ['Event Coordination & Guest Hospitality'],
    availability: 'Weekends (Saturdays & Sundays)',
    experience: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Event Coordination & Guest Hospitality',
    'Audio, Video & RahamTV Editing',
    'Language Translation & Transcripts (English / Urdu / Arabic)',
    'Community Food Distribution & Relief Logistics',
    'Youth Tutoring & Academic Support',
    'Graphic Design & Social Media Publishing',
  ];

  const toggleInterest = (opt: string) => {
    setForm((prev) => {
      const exists = prev.interests.includes(opt);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== opt) };
      } else {
        return { ...prev, interests: [...prev.interests, opt] };
      }
    });
  };

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!emailRegex.test(form.email.trim())) errs.email = 'Please provide a valid email.';

    if (!form.phone.trim()) errs.phone = 'Phone number is required.';
    if (!form.city.trim()) errs.city = 'City and state/region is required.';
    if (form.interests.length === 0) errs.interests = 'Please select at least one area of interest.';

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
        title="Volunteer with Us | Al-Muneer Foundation & Jamia Zakariyya"
        description="Join the community volunteer corps supporting events, broadcasts, youth initiatives, and humanitarian operations."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="narrow">
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Get Involved</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#8C6B38] font-medium block mb-2">
            Service to Creation (Khidmah)
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight mb-2">
            Join the Volunteer Corps
          </h1>
          <p className="text-sm text-[#6B6B65]">
            Contribute your time, skills, and energy to support community services, events, and education.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          {isSubmitted ? (
            <Card className="p-8 sm:p-10 text-center space-y-4 bg-[#FFFFFF]">
              <div className="w-14 h-14 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium">
                Thank You for Answering the Call to Service
              </h2>

              <p className="text-sm text-[#6B6B65] max-w-md mx-auto leading-relaxed">
                Jazakum Allahu Khayran, <strong>{form.fullName}</strong>. Your volunteer application has been placed in our coordinator roster.
              </p>

              <div className="p-4 rounded-[8px] bg-[#FAF8F3] border border-[#E5E1D8] text-xs text-[#0F2E2C]/80 text-left max-w-md mx-auto space-y-1">
                <div><strong>Selected Focus:</strong> {form.interests.join(', ')}</div>
                <div><strong>Availability:</strong> {form.availability}</div>
                <div><strong>Coordinator Notice:</strong> We will email you at {form.email} prior to our next event orientation.</div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      city: '',
                      interests: ['Event Coordination & Guest Hospitality'],
                      availability: 'Weekends (Saturdays & Sundays)',
                      experience: '',
                    });
                  }}
                  variant="outline"
                  size="sm"
                >
                  Submit Another Profile
                </Button>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <Card className="p-6 sm:p-8 space-y-6 bg-[#FFFFFF]">
                <h3 className="font-serif text-xl text-[#0F2E2C] font-medium pb-2 border-b border-[#E5E1D8]">
                  Volunteer Application Form
                </h3>

                {/* Name */}
                <div>
                  <label htmlFor="vol-name" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="vol-name"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="Your full legal name"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50 ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E5E1D8]'
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
                    <label htmlFor="vol-email" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="vol-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50 ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E5E1D8]'
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
                    <label htmlFor="vol-phone" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="vol-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50 ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E5E1D8]'
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

                {/* City & Region */}
                <div>
                  <label htmlFor="vol-city" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                    City, State or Metropolitan Area <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="vol-city"
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="e.g. Mount Vernon, NY / Queens, NY / Remote"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50 ${
                      errors.city ? 'border-red-500 bg-red-50/20' : 'border-[#E5E1D8]'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.city}</span>
                    </p>
                  )}
                </div>

                {/* Areas of Interest */}
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-2">
                    Areas Where You Wish to Serve <span className="text-red-600">*</span>
                  </span>
                  <div className="space-y-2">
                    {interestOptions.map((opt) => {
                      const isChecked = form.interests.includes(opt);
                      return (
                        <label
                          key={opt}
                          className={`flex items-center gap-2.5 p-3 rounded-[8px] border cursor-pointer text-xs sm:text-sm transition-colors ${
                            isChecked
                              ? 'bg-[#FAF8F3] border-[#8C6B38] text-[#0F2E2C] font-medium'
                              : 'bg-[#FFFFFF] border-[#E5E1D8] text-[#6B6B65]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleInterest(opt)}
                            className="w-4 h-4 rounded border-[#E5E1D8] text-[#0F2E2C] focus:ring-[#C9A15E]"
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.interests && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.interests}</span>
                    </p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="vol-avail" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                    General Availability
                  </label>
                  <select
                    id="vol-avail"
                    value={form.availability}
                    onChange={(e) => setForm({ ...form, availability: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E1D8] text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50"
                  >
                    <option value="Weekends (Saturdays & Sundays)">Weekends (Saturdays & Sundays)</option>
                    <option value="Thursday Evenings (Khanqah Majlis)">Thursday Evenings (Khanqah Majlis)</option>
                    <option value="Weekday Mornings">Weekday Mornings</option>
                    <option value="Weekday Evenings">Weekday Evenings</option>
                    <option value="Flexible / As Needed for Special Events">Flexible / As Needed for Special Events</option>
                  </select>
                </div>

                {/* Background / Skills */}
                <div>
                  <label htmlFor="vol-exp" className="block text-xs font-medium uppercase tracking-wider text-[#0F2E2C] mb-1.5">
                    Professional Background or Relevant Skills (Optional)
                  </label>
                  <textarea
                    id="vol-exp"
                    rows={3}
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. IT networking, audio mixing, teaching, certified CPR, logistics..."
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E1D8] text-sm text-[#0F2E2C] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A15E]/50"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    {isSubmitting ? 'Registering...' : 'Submit Volunteer Registration'}
                  </Button>
                </div>
              </Card>
            </form>
          )}
        </Container>
      </Section>
    </div>
  );
};
