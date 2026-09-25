export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  urduTitle?: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: 'art-sanctity-of-heart',
    slug: 'sanctity-of-heart-in-digital-age',
    title: 'The Sanctity of the Heart in an Age of Digital Distraction',
    author: 'Mufti Muneer Ahmad Akhoon',
    date: 'August 14, 2024',
    category: 'Spiritual Purification',
    readingTime: '6 min read',
    summary: 'A reflection on how modern continuous notifications and trivial debates scatter the mental faculty, and how establishing regular morning and evening Dhikr restores inner equilibrium.',
    tags: ['Tazkiyah', 'Dhikr', 'Mental Health', 'Spiritual Life'],
    content: [
      'In the classical vocabulary of Islamic spirituality, the heart (Qalb) is described not merely as a biological pump, but as the sovereign monarch of the human anatomy. The Messenger of Allah (peace and blessings be upon him) said: “Beware! In the body there is a piece of flesh; if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. Indeed, it is the heart” (Sahih al-Bukhari).',
      'Today, believers inhabit an environment unlike any previous era in human history. The ceaseless influx of algorithmic stimuli, polarizing social media debates, and endless notifications creates a state of continuous psychological agitation - what the classical masters termed "Tashattut al-Khatir" (dispersion of thoughts).',
      'When the mind is persistently dispersed, the capacity for Khushu‘ (humble devotion in prayer) deteriorates. We find ourselves standing on the prayer mat reciting the words of Surah Al-Fatihah while our inner consciousness remains tethered to a digital screen.',
      'The traditional antidote preserved in our Khanqahs is the deliberate cultivation of "Waqt al-Khelwah" - a sacred pocket of daily silence where the believer unplugs from creation to commune with the Creator. Spending even fifteen minutes after Fajr and Maghrib in uninterrupted remembrance of Allah cleanses the spiritual mirror from the accumulated dust of daily exposure.',
      'Let us make a conscious resolve to protect our spiritual sanctuary. The world will constantly demand our attention, but Allah alone deserves our heart.',
    ],
  },
  {
    id: 'art-principles-halal-earnings',
    slug: 'principles-of-halal-earnings-in-western-markets',
    title: 'Foundations of Halal Sustenance in Modern Financial Markets',
    author: 'Mufti Muneer Ahmad Akhoon',
    date: 'July 2, 2024',
    category: 'Islamic Jurisprudence',
    readingTime: '8 min read',
    summary: 'Essential Hanafi legal criteria for evaluating equity investments, employer 401(k) matches, and avoiding subtle manifestations of Riba (interest) and Gharar (excessive ambiguity).',
    tags: ['Islamic Finance', 'Fiqh', 'Halal Income', 'Investments'],
    content: [
      'The preservation of Halal earnings is not an optional virtue for the pious; it is the absolute prerequisite for the acceptance of worship and supplication. The Prophet (peace and blessings be upon him) described a traveler on a long journey, disheveled and dusty, who stretches out his hands to the sky crying, “O Lord, O Lord!” yet his food is unlawful, his drink is unlawful, his clothing is unlawful, and he is nourished by the unlawful; how could his prayer possibly be answered? (Sahih Muslim).',
      'For Muslims working and investing in Western economies, financial contracts are rarely simple. Modern securities frequently bundle debt, interest, and non-permissible corporate activities. Therefore, rigorous Shariah screening is indispensable.',
      'Under the Hanafi school, four primary screens must be applied to any equity or fund investment:',
      '1. Primary Business Activity: The core commercial endeavor of the enterprise must be lawful (free from alcohol, gambling, conventional banking, pork processing, and immoral entertainment).',
      '2. Total Debt Ratio: Interest-bearing debt must not exceed the thresholds established by contemporary juristic bodies (generally under 33% of total assets or market capitalization).',
      '3. Illiquid Asset Proportion: The enterprise must hold tangible assets, inventory, or operational capital; it cannot represent a pure trade in debts or receivables.',
      '4. Income Purification: Any incidental interest or non-compliant revenue earned passively by the corporation must be accurately calculated and donated to charity without the intention of spiritual reward.',
      'By grounding our economic life in cautious adherence to divine boundaries, our sustenance becomes a means of barakah (divine blessing) for ourselves and our progeny.',
    ],
  },
  {
    id: 'art-parenting-american-muslim-youth',
    slug: 'parenting-muslim-youth-with-empathy-and-firmness',
    title: 'Nurturing Faith in Our Children: Empathy, Firmness, and Friendship',
    author: 'Mufti Muneer Ahmad Akhoon',
    date: 'May 19, 2024',
    category: 'Family & Parenting',
    readingTime: '7 min read',
    summary: 'Practical advice for immigrant and American Muslim parents bridging generational divides without compromising fundamental Islamic values.',
    tags: ['Family', 'Parenting', 'Youth', 'Character'],
    content: [
      'One of the most frequent pastoral concerns brought to our counseling sessions at Westchester Muslim Center concerns the growing emotional distance between immigrant parents and their American-born children.',
      'Too often, parents react to teenage cultural pressures with anger, excessive restriction, or emotional withdrawal. Conversely, some parents surrender boundaries entirely, assuming that assimilation is inevitable. Both approaches cause severe spiritual harm.',
      'The Prophetic model (Al-Manhaj al-Nabawi) is built on a sublime balance of unwavering moral firmness and profound gentleness. The Prophet Muhammad (peace and blessings be upon him) never struck a child, nor did he belittle their feelings. When his grandson al-Hasan entered, he would kiss him; when an onlooker expressed shock that he showed such affection, the Prophet replied: “He who does not show mercy will not be shown mercy” (Sahih al-Bukhari).',
      'To build resilient young Muslims in North America, we must create homes where questions about faith are welcomed rather than penalized. When a youth expresses a theological doubt, it should be met with compassionate scholarly dialogue, not accusations of apostasy or shame.',
      'Let our masajid and homes be safe harbors where the youth feel cherished, respected, and guided by wisdom.',
    ],
  },
];
