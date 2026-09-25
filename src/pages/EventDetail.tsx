import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Video,
  CheckCircle2,
  AlertCircle,
  User,
  Users,
  Share2,
  Sparkles,
  Ticket,
  ExternalLink,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  FileText,
  Radio,
  Printer,
  Compass,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { EVENTS_DATA } from '../data/events';
import { REAL_WEEKLY_SCHEDULE } from '../data/schedule';

export const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find event across both weekly schedule and special events
  const event = useMemo(() => {
    // Check weekly schedule first
    const weeklyMatch = REAL_WEEKLY_SCHEDULE.find((s) => s.id === id);
    if (weeklyMatch) {
      return {
        id: weeklyMatch.id,
        title: weeklyMatch.title,
        slug: weeklyMatch.id,
        date: weeklyMatch.dateLabel,
        time: weeklyMatch.time,
        location: weeklyMatch.location,
        address: weeklyMatch.address || '705 Nassau Rd, Uniondale, NY 11553, USA',
        description: weeklyMatch.description,
        speaker: 'Hazrat Maulana Mufti Muneer Ahmad Akhoon',
        isUpcoming: true,
        category: weeklyMatch.type === 'in-person' ? 'Weekly Assembly' : 'Live Broadcast',
        registrationRequired: true,
        livestreamAvailable: weeklyMatch.type === 'live-broadcast' || weeklyMatch.id === 'friday-khutba',
        urduTitle: weeklyMatch.urduTitle,
      };
    }

    // Check special events
    const eventMatch = EVENTS_DATA.find((e) => e.id === id || e.slug === id);
    if (eventMatch) {
      return eventMatch;
    }

    // Default to first event if not found
    return EVENTS_DATA[0];
  }, [id]);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attendeesCount, setAttendeesCount] = useState('1');
  const [attendanceMode, setAttendanceMode] = useState<'in-person' | 'live-stream'>('in-person');
  const [specialNotes, setSpecialNotes] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; email?: string; phone?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email)) {
      newErrors.email = 'Please provide a valid email address for your confirmation ticket.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please enter a contact phone number.';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = `REG-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(generatedCode);
      setIsRegistered(true);
    }, 600);
  };

  const handleCalendarExport = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(`${event.location}, ${event.address}`);
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F5] via-[#E8F4F0] to-[#DEF0EB]">
      <SEO
        title={`${event.title} • Event Details & Registration | Hazrat Mufti Muneer Ahmad Akhoon`}
        description={event.description}
      />

      {/* High-Contrast Header Section with Zero Blending */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#047857] text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden shadow-md text-left">
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Events</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-bold text-amber-900 bg-amber-300 px-3 py-0.5 rounded-full uppercase tracking-wider">
              {event.category}
            </span>
            {event.livestreamAvailable && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-100 bg-emerald-800/80 px-3 py-0.5 rounded-full border border-emerald-500/40">
                <Radio className="w-3 h-3 text-amber-300" />
                <span>Live Broadcast Available</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {event.title}
          </h1>

          {'urduTitle' in event && event.urduTitle && (
            <p className="font-arabic text-xl text-amber-200">
              {event.urduTitle as string}
            </p>
          )}

          {/* Quick Schedule Bar */}
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-emerald-100 pt-2 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span className="font-semibold text-white">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout: Details on Left, Registration Form on Right */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Column: Comprehensive Event Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Overview & Description Card */}
            <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#008767]" />
                <span>Event Overview & Purpose</span>
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                {event.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-700 space-y-2 mt-4">
                <span className="font-bold text-slate-900 block text-sm">
                  Presiding Scholar & Teachers:
                </span>
                <p className="leading-relaxed">
                  {event.speaker || 'Hazrat Maulana Mufti Muneer Ahmad Akhoon'} along with resident faculty and scholars of Jamia Zakariyya New York.
                </p>
              </div>
            </div>

            {/* Program Schedule & Agenda Card */}
            <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#008767]" />
                <span>Program Agenda & Itinerary</span>
              </h2>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF]">
                  <span className="text-xs font-mono font-bold text-[#008767] bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                    Part 1
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Opening Recitation & Prophetic Salawat
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Recitation of the Holy Quran followed by collective Durood-o-Salaam and praise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF]">
                  <span className="text-xs font-mono font-bold text-[#008767] bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                    Part 2
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Main Scholarly Discourse (Dars) by Mufti Muneer Ahmad Akhoon
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      In-depth exposition addressing spiritual rectification (Islah), classical jurisprudence, and contemporary solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF]">
                  <span className="text-xs font-mono font-bold text-[#008767] bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                    Part 3
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Open Questions & Answers Session
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Attendees can submit written questions or ask directly regarding personal and juristic matters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF]">
                  <span className="text-xs font-mono font-bold text-[#008767] bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                    Part 4
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Heartfelt Concluding Dua & Community Musafahah
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Collective emotional supplication for the Muslim Ummah, followed by personal greeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue, Map & Directions Card */}
            <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008767]" />
                <span>Sanctuary Location & Parking Details</span>
              </h2>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-950 text-base">
                  {event.location}
                </p>
                <p className="text-slate-600">
                  {event.address}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">
                    Parking Accommodations:
                  </span>
                  <p className="text-slate-600">
                    Free on-site designated mosque parking lot. Additional street parking available on adjacent roads.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">
                    Sisters Accommodations:
                  </span>
                  <p className="text-slate-600">
                    Full audio-visual connection and dedicated segregated facilities for sisters and children.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address || event.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C8E5DF] bg-[#F8FCFB] hover:bg-emerald-50 text-xs font-bold text-[#008767] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration & RSVP Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-white border border-[#C8E5DF] p-6 sm:p-8 shadow-lg space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008767] flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Free Community RSVP</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    No Fee Required
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Event Registration Form
                </h3>
                <p className="text-xs text-slate-500">
                  Please register your attendance to ensure adequate seating and materials.
                </p>
              </div>

              {/* Registration Form / Success Confirmation */}
              <AnimatePresence mode="wait">
                {!isRegistered ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleRegister}
                    className="space-y-4"
                  >
                    {/* Attendance Mode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        How will you be attending?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setAttendanceMode('in-person')}
                          className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                            attendanceMode === 'in-person'
                              ? 'bg-gradient-to-r from-[#008767] to-[#00A878] text-white border-transparent shadow-xs'
                              : 'bg-[#F8FCFB] text-slate-700 border-[#C8E5DF] hover:bg-emerald-50'
                          }`}
                        >
                          In-Person at Venue
                        </button>
                        <button
                          type="button"
                          onClick={() => setAttendanceMode('live-stream')}
                          className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                            attendanceMode === 'live-stream'
                              ? 'bg-[#0284C7] text-white border-transparent shadow-xs'
                              : 'bg-[#F8FCFB] text-slate-700 border-[#C8E5DF] hover:bg-slate-100'
                          }`}
                        >
                          Online Live Stream
                        </button>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Muhammad Farooq"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Mobile Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Number of Attendees */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Total Attendees / Family Members
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={attendeesCount}
                          onChange={(e) => setAttendeesCount(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
                        >
                          <option value="1">1 Person (Self)</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons (Family)</option>
                          <option value="5+">5+ Persons (Large Family)</option>
                        </select>
                      </div>
                    </div>

                    {/* Special Notes / Questions for Mufti Sahib */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Questions for Mufti Sahib or Special Requests (Optional)
                      </label>
                      <textarea
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        rows={2}
                        placeholder="Any question you wish to pose during the open Q&A..."
                        className="w-full p-3 rounded-xl border border-[#C8E5DF] bg-[#F8FCFB] text-sm text-slate-900 focus:outline-none focus:border-[#00A878] focus:ring-2 focus:ring-emerald-200 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#008767] via-[#00A878] to-[#0D9488] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Confirming Your Reservation...' : 'Complete Free Registration'}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center">
                      Registration confirmation will be sent immediately to your email address.
                    </p>
                  </motion.form>
                ) : (
                  /* ========================================================
                     REGISTRATION SUCCESS TICKET CONFIRMATION CARD
                     ======================================================== */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5 text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-[#00A878] flex items-center justify-center text-[#008767] shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#008767] uppercase tracking-wider">
                        Registration Confirmed!
                      </span>
                      <h4 className="text-xl font-extrabold text-slate-950">
                        We Look Forward to Welcoming You
                      </h4>
                      <p className="text-xs text-slate-600">
                        Your pass has been secured for <strong>{fullName}</strong> ({attendeesCount} {attendeesCount === '1' ? 'Attendee' : 'Attendees'}).
                      </p>
                    </div>

                    {/* Digital Pass Ticket Box */}
                    <div className="p-4 rounded-2xl bg-[#F8FCFB] border-2 border-dashed border-[#00A878] text-left space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          CONFIRMATION ID:
                        </span>
                        <span className="text-xs font-mono font-bold text-[#008767] bg-white px-2 py-0.5 rounded border border-emerald-200">
                          {confirmationCode}
                        </span>
                      </div>

                      <div className="text-xs text-slate-700 space-y-1">
                        <p className="font-bold text-slate-900">{event.title}</p>
                        <p className="text-slate-600">{event.date} • {event.time}</p>
                        <p className="text-slate-600">{event.location}</p>
                        <p className="text-[11px] text-[#008767] font-semibold">
                          Mode: {attendanceMode === 'in-person' ? 'In-Person Attendance' : 'Online Live Stream'}
                        </p>
                      </div>
                    </div>

                    {/* Calendar & Share Actions */}
                    <div className="space-y-2 pt-1">
                      <button
                        onClick={handleCalendarExport}
                        className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#008767] to-[#00A878] text-white text-xs font-bold hover:shadow-md transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-amber-300" />
                        <span>Add Event to Google Calendar</span>
                      </button>

                      <button
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: event.title,
                              text: `I've registered for ${event.title} with Hazrat Mufti Muneer Ahmad Akhoon!`,
                              url: window.location.href,
                            });
                          } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Event link copied to clipboard!');
                          }
                        }}
                        className="w-full py-2 rounded-full bg-white border border-[#C8E5DF] text-slate-700 hover:border-[#00A878] hover:text-[#008767] text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share with Family & Friends</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsRegistered(false);
                          setFullName('');
                          setEmail('');
                          setPhone('');
                        }}
                        className="text-xs text-slate-500 hover:text-slate-700 underline pt-2 block mx-auto cursor-pointer"
                      >
                        Register another attendee
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
