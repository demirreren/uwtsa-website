export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  tag: string;
  imagePath?: string;
  imageAspect?: 'square' | 'landscape';
  featured?: boolean;
  announcementLabel?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'career-event-2026',
    title: 'TSA Careers Night & Social',
    date: 'March 24, 2026',
    time: '6:00 PM - 10:00 PM',
    location: "Maxwell's Concerts and Events",
    description:
      'Connect with industry professionals from a variety of fields for an evening of career insights and networking, followed by a dancing and social after!',
    ctaLabel: 'Register (Free)',
    ctaUrl: 'https://luma.com/sxtdj1sk',
    tag: 'Career',
    imagePath: '/photos/career-night.png',
    imageAspect: 'square',
    featured: true,
    announcementLabel: 'Register (Free)',
  },
  {
    id: 'turkiye-vs-romania-2026',
    title: 'Turkiye vs Romania Watch Party',
    date: 'March 26, 2026',
    time: '1:00 PM - 3:00 PM',
    description:
      'Watch the World Cup Qualifiers semi-final with TSA x Romanian Student Association! Pick a side and cheer your team on. The losing side gets pied in the face. More info coming soon!',
    ctaLabel: 'Stay Tuned',
    ctaUrl: 'https://chat.whatsapp.com/H3hOepBFbQzK4WoU2mLIPv',
    tag: 'Sports',
    imagePath: '/photos/turkiye-vs-romania.png',
    featured: true,
    announcementLabel: 'Learn More',
  },
];
