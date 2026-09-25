import {
  masjidDarutTazkiya,
  akhoonJamaMasjid,
  kashmirIslamicCenter,
  masjidYusifain,
} from '../assets/images';

export interface MasjidInfo {
  id: string;
  name: string;
  urduName: string;
  address: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  directionsUrl?: string;
  contactNumber?: string;
  imam?: string;
}

export const MASJIDS_DATA: MasjidInfo[] = [
  {
    id: 'masjid-darut-tazkiya',
    name: 'Masjid Darut Tazkiya',
    urduName: 'مسجد دار التزکیہ',
    location: 'Uniondale, Long Island, NY',
    address: '705 Nassau Rd, Uniondale, NY 11553, USA',
    image: masjidDarutTazkiya,
    description:
      'The central spiritual headquarters and sanctuary for Tazkiyat al-Nafs, five daily congregational prayers, and the weekly Mehfil-e-Durood-o-Salaam under Hazrat Mufti Muneer Ahmad Akhoon.',
    highlights: [
      'Weekly Mehfil-e-Durood-o-Salaam (Thursdays 4:30 AM)',
      'Full Tahfiz-ul-Quran & Youth Spiritual Halaqahs',
      'Daily 5 Congregational Salah & Friday Jumu’ah',
      'Sister Prayer Facility & Community Hall',
    ],
    directionsUrl: 'https://maps.google.com/?q=705+Nassau+Rd,+Uniondale,+NY+11553',
  },
  {
    id: 'akhoon-jama-masjid',
    name: 'Akhoon Jama Masjid',
    urduName: 'اخون جامع مسجد',
    location: 'Hollis Ave, Queens, NY',
    address: 'Hollis Ave, Queens, New York, NY, USA',
    image: akhoonJamaMasjid,
    description:
      'Historic Queens community mosque founded and sustained by the Akhoon scholarly family, providing authentic Islamic education, Friday sermons, and family pastoral guidance.',
    highlights: [
      'Congregational 5 Daily Prayers & Large Jumu’ah Gathering',
      'Maktab Quran Classes for Children and Teenagers',
      'Matrimonial Services & Islamic Arbitration',
      'Monthly Tafseer & Hadith Discourses',
    ],
    directionsUrl: 'https://maps.google.com/?q=Hollis+Ave,+Queens,+NY',
  },
  {
    id: 'kashmir-islamic-center',
    name: 'Kashmir Islamic Center',
    urduName: 'کشمیر اسلامک سنٹر',
    location: 'New York, USA',
    address: 'Greater New York Metropolitan Area, NY, USA',
    image: kashmirIslamicCenter,
    description:
      'Vibrant community and educational center fostering authentic Islamic tradition, social harmony, Quranic learning, and traditional scholarly values.',
    highlights: [
      'Community Islamic Assembly & Friday Khutbahs',
      'Youth Mentorship & Classical Arabic Primer',
      'Charity Distribution & Ramadan Iftar Gatherings',
      'Family Counseling & Welfare Programs',
    ],
    directionsUrl: 'https://maps.google.com/?q=Kashmir+Islamic+Center+New+York',
  },
  {
    id: 'masjid-yusifain',
    name: 'Masjid Yusifain',
    urduName: 'مسجد یوسفین',
    location: 'Mastic Beach, Long Island, NY',
    address: 'Mastic Beach, Long Island, NY, USA',
    image: masjidYusifain,
    description:
      'Serene waterfront community masjid dedicated in honor of the pious elders, providing daily prayer services, Quran memorization, and spiritual retreats in eastern Long Island.',
    highlights: [
      'Congregational Daily Prayers in Long Island',
      'Spiritual Weekend Retreats (Itikaf & Zikr)',
      'Community Dawah & Inter-community Outreach',
      'Youth Weekend Islamic School',
    ],
    directionsUrl: 'https://maps.google.com/?q=Mastic+Beach,+NY',
  },
];
