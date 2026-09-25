export interface AssemblyEvent {
  id: string;
  day: string;
  dateLabel: string;
  time: string;
  title: string;
  urduTitle?: string;
  type: 'in-person' | 'live-broadcast';
  location: string;
  address?: string;
  description: string;
  isRecurringWeekly?: boolean;
}

export const REAL_WEEKLY_SCHEDULE: AssemblyEvent[] = [
  {
    id: 'thursday-durood',
    day: 'Thursday',
    dateLabel: 'Every Thursday Dawn',
    time: '4:30 AM to 5:30 AM EST',
    title: 'Mehfil-e-Durood-o-Salaam',
    urduTitle: 'محفل درود و سلام بر سید الانبیاء ﷺ',
    type: 'in-person',
    location: 'Masjid Darut Tazkiya',
    address: '705 Nassau Rd, Uniondale, NY 11553, USA',
    description:
      'Spiritual pre-dawn assembly reciting blessed salawat, collective litanies, and personal supplication led in-person by Hazrat Mufti Muneer Ahmad Akhoon.',
    isRecurringWeekly: true,
  },
  {
    id: 'friday-rooh',
    day: 'Friday',
    dateLabel: 'Every Friday Morning',
    time: '6:00 AM EST',
    title: 'Live: Rooh Ki Baatein',
    urduTitle: 'روح کی باتیں - لائیو روحانی نشریات',
    type: 'live-broadcast',
    location: 'Live Worldwide via RahamTV & Online Stream',
    description:
      'Heartfelt Friday morning spiritual discourse on purifying the soul, conquering spiritual ailments, and cultivating sincere divine love.',
    isRecurringWeekly: true,
  },
  {
    id: 'friday-khutba',
    day: 'Friday',
    dateLabel: 'Every Friday Jumu’ah',
    time: '1:15 PM & 10:00 PM Broadcast',
    title: 'Live: Juma Khutba & Islamic Guidance',
    urduTitle: 'خطبہ جمعۃ المبارک و لائیو نشریات',
    type: 'in-person',
    location: 'Masjid Darut Tazkiya',
    address: '705 Nassau Rd, Uniondale, NY 11553',
    description:
      'Official Friday Khutbah followed by contemporary questions and communal dua. Rebroadcast worldwide on official media channels.',
    isRecurringWeekly: true,
  },
  {
    id: 'sunday-majlis',
    day: 'Sunday',
    dateLabel: 'Every Sunday Night',
    time: '10:00 PM EST',
    title: 'Weekly Majlis-e-Zikr & Spiritual Dars',
    urduTitle: 'ہفتہ وار مجلس ذکر و درس اخلاق',
    type: 'live-broadcast',
    location: 'Online Broadcast & Khanqah Assembly',
    description:
      'Structured spiritual discipleship gathering: recitation of Muraqabah, silent and audible remembrance (Zikr), and questions on Islamic living.',
    isRecurringWeekly: true,
  },
];

export interface PrayerTime {
  name: string;
  arabicName?: string;
  athan: string;
  iqamah: string;
  isNext?: boolean;
}

export const PRAYER_TIMES: PrayerTime[] = [
  { name: 'Fajr', arabicName: 'الفجر', athan: '5:30 AM', iqamah: '6:00 AM' },
  { name: 'Sunrise', arabicName: 'الشروق', athan: '6:45 AM', iqamah: '-' },
  { name: 'Dhuhr', arabicName: 'الظهر', athan: '1:00 PM', iqamah: '1:30 PM', isNext: true },
  { name: 'Asr', arabicName: 'العصر', athan: '4:45 PM', iqamah: '5:15 PM' },
  { name: 'Maghrib', arabicName: 'المغرب', athan: 'Sunset', iqamah: '5 Mins' },
  { name: 'Isha', arabicName: 'العشاء', athan: '8:00 PM', iqamah: '8:30 PM' },
];

export const WEEKLY_PROGRAMS = REAL_WEEKLY_SCHEDULE;
