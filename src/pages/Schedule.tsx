import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export const Schedule: React.FC = () => {
  const recurringAssemblies = [
    {
      title: 'Weekly Majlis-e-Zikr & Spiritual Discourse',
      day: 'Every Thursday Evening',
      time: 'After Maghrib Prayer (approx. 7:30 PM)',
      location: 'Jamia Zakariyya New York Campus',
      address: 'New York, USA [VERIFY: exact address]',
      stream: 'Broadcast Live on RahamTV YouTube Channel',
      notes: 'Includes collective loud/silent Dhikr, reading from classic works of Tazkiyah, and a comprehensive dua for the Ummah. Open to all brothers and sisters.',
    },
    {
      title: 'Weekly Friday Jumuah Khutbah & Prayer',
      day: 'Every Friday',
      time: 'First Khutbah: 1:15 PM | Second Khutbah: 2:15 PM',
      location: 'Westchester Muslim Center',
      address: 'Mount Vernon, NY',
      stream: 'In-person congregation',
      notes: 'Delivered by Mufti Muneer Ahmad Akhoon with English translation and pastoral address addressing current communal realities.',
    },
    {
      title: 'Sunday Morning Dars-e-Hadith & Youth Circle',
      day: 'Every Sunday',
      time: '11:00 AM - 12:30 PM',
      location: 'Westchester Muslim Center / Online',
      address: 'Mount Vernon, NY',
      stream: 'Zoom & RahamTV Livestream',
      notes: 'Systematic reading and commentary of prophetic narrations tailored for high school and university students.',
    },
  ];

  const seasonalRetreats = [
    {
      title: 'Quarterly Three-Day Spiritual Seclusion (Khanqah Intensive)',
      frequency: 'Every Quarter (Next: October 18 - 20, 2024)',
      timing: 'Friday 5:00 PM through Sunday 2:00 PM',
      focus: 'Muraqabah, intensive Quran recitation, silent contemplation, and personal consultation sessions.',
      rsvp: 'Pre-registration required due to limited dormitory space.',
    },
    {
      title: 'Annual Ramadan Last Ten Days I‘tikaf',
      frequency: 'Final 10 days of Ramadan',
      timing: '20th Ramadan Maghrib to Eid Night',
      focus: 'Complete seclusion in the masjid, collective Khatm-ul-Quran, nightly Tahajjud prayers, and repentance gatherings.',
      rsvp: 'Formal application opens during Sha’ban.',
    },
  ];

  return (
    <div>
      <SEO
        title="Zikr Nights & Retreats Schedule"
        description="Schedule of weekly Majalis of remembrance, Friday khutbahs, spiritual retreats, and livestream broadcasts of Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="cream" spacing="compact" className="border-b border-[#E5E1D8]">
        <Container size="narrow">
          <Link
            to="/khanqah"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B65] hover:text-[#0F2E2C] mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Khanqah Overview</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#8C6B38] font-medium block mb-2">
            Assemblies of Remembrance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F2E2C] font-medium tracking-tight mb-2">
            Zikr Nights & Retreats Schedule
          </h1>
          <p className="text-sm text-[#6B6B65]">
            Regular weekly gatherings, Friday services, and quarterly intensive spiritual retreats in New York.
          </p>
        </Container>
      </Section>

      <Section variant="light" spacing="default">
        <Container size="narrow">
          <div className="space-y-10">
            {/* Recurring Weekly Schedule */}
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] font-medium block mb-1">
                  Weekly Program
                </span>
                <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium">
                  Regular Weekly Assemblies
                </h2>
              </div>

              <div className="space-y-4">
                {recurringAssemblies.map((item, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg text-[#0F2E2C] font-medium">
                        {item.title}
                      </h3>
                      <Badge variant="accent" size="sm">
                        {item.day}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B6B65] mb-3">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#8C6B38]" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8C6B38]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#0F2E2C]/85 leading-relaxed mb-3">
                      {item.notes}
                    </p>

                    <div className="pt-3 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#6B6B65]">
                      <span className="flex items-center gap-1 text-[#C9A15E]">
                        <Video className="w-3.5 h-3.5" />
                        <span>{item.stream}</span>
                      </span>
                      <span className="text-[11px] text-[#8C6B38] font-medium">
                        No RSVP Needed
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Seasonal Spiritual Retreats */}
            <div className="pt-6 border-t border-[#E5E1D8]">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] font-medium block mb-1">
                  Intensives & Seclusion
                </span>
                <h2 className="font-serif text-2xl text-[#0F2E2C] font-medium">
                  Spiritual Retreats (Khanqah Intensives)
                </h2>
                <p className="text-xs text-[#6B6B65] mt-1">
                  Structured multi-day immersions designed to cultivate stillness, break bad habits, and establish deep spiritual routines.
                </p>
              </div>

              <div className="space-y-4">
                {seasonalRetreats.map((retreat, idx) => (
                  <Card key={idx} className="p-6 bg-[#FAF8F3]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg text-[#0F2E2C] font-medium">
                        {retreat.title}
                      </h3>
                      <Badge variant="support" size="sm">
                        {retreat.frequency}
                      </Badge>
                    </div>

                    <div className="text-xs text-[#6B6B65] mb-2">
                      <strong>Schedule:</strong> {retreat.timing}
                    </div>

                    <p className="text-xs sm:text-sm text-[#0F2E2C]/85 leading-relaxed mb-3">
                      {retreat.focus}
                    </p>

                    <div className="pt-3 border-t border-[#E5E1D8] text-xs font-medium text-[#8C6B38] flex items-center justify-between">
                      <span>{retreat.rsvp}</span>
                      <Button to="/contact" variant="outline" size="sm">
                        Inquire About Retreats
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Venue Details & Directions */}
            <div className="p-6 rounded-[12px] bg-[#FAF8F3] border border-[#E5E1D8] text-xs text-[#0F2E2C]/85 space-y-2">
              <strong className="text-sm font-serif text-[#0F2E2C] block">
                Venue Etiquette & Attendance Notes:
              </strong>
              <p>
                Attendees are requested to arrive in a state of ritual purity (Wudu), observe dignified silence inside the prayer hall, and dress modestly in accordance with Islamic tradition. Modest accommodations for sisters are provided for all major events.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
