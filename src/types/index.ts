export interface Institution {
  id: string;
  name: string;
  urduName?: string;
  role: string;
  location: string;
  yearEstablished: string; // e.g. "[VERIFY: exact founding year]" or "2010"
  description: string;
  focusAreas: string[];
  websiteUrl?: string;
  isPrimary?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  honorific?: string;
  subjectOrDiscipline: string;
  institutionOrLocation: string;
  periodNotes: string;
  description: string;
}

export interface SpiritualMaster {
  id: string;
  name: string;
  title: string;
  order: string; // e.g. "Chishtia, Naqshbandia, Qadria, Soharwardia"
  passingYearHijri?: string;
  passingYearCE?: string;
  location: string;
  notes: string;
}

export interface Fatwa {
  id: string;
  title: string;
  question: string;
  answer: string;
  answerSummary?: string;
  category: 'Purification & Prayer' | 'Transactions & Finance' | 'Family & Marriage' | 'Contemporary Issues' | 'Faith & Creed' | 'Dietary & Halal';
  dateIssued: string;
  referenceNo: string;
  mufti: string;
  tags: string[];
  citations?: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  urduTitle?: string;
  series: string;
  category: 'Quranic Exegesis' | 'Hadith & Sunnah' | 'Spiritual Purification (Tazkiyah)' | 'Contemporary Guidance' | 'Jumuah Khutbah';
  duration: string;
  date: string;
  youtubeId: string;
  summary: string;
  description?: string;
  thumbnail: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  caption: string;
  category: 'Lectures & Conferences' | 'Jamia Zakariyya' | 'Khanqah Gatherings' | 'Westchester Muslim Center' | 'Community Work';
  date: string;
  imageUrl: string;
  location: string;
}

export interface PressItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  category: 'Community News' | 'Scholarly Statement' | 'Institutional Milestone' | 'Media Appearance';
  linkText?: string;
  linkUrl?: string;
}

export interface BookItem {
  id: string;
  title: string;
  urduTitle?: string;
  titleUrdu?: string;
  author: string;
  publicationYear?: string;
  year?: string;
  pages: number | string;
  language: string;
  category: string;
  summary: string;
  description?: string;
  tableOfContentsSummary?: string[];
  pdfAvailable?: boolean;
  isAvailableOnline?: boolean;
  downloadUrl?: string;
  printAvailable?: boolean;
  coverImage?: string;
  publisher?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  timezone?: string;
  location: string;
  address: string;
  isOnline?: boolean;
  streamUrl?: string;
  category: string;
  isPast?: boolean;
  isUpcoming?: boolean;
  description: string;
  keyTopics?: string[];
  speakerNotes?: string;
  speaker?: string;
  rsvpRequired?: boolean;
  registrationRequired?: boolean;
  livestreamAvailable?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  urduTitle?: string;
  date: string;
  author: string;
  category: 'Spiritual Reflections' | 'Scholarly Insights' | 'Community Ethics' | 'Guidance for Youth';
  readTime: string;
  excerpt: string;
  content: string[];
  references?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface PrayerTime {
  name: string;
  arabicName?: string;
  athan: string;
  iqamah: string;
  isNext?: boolean;
}
