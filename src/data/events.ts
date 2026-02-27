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
  featured?: boolean;
  announcementLabel?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'iftar-night-2026',
    title: 'Flavours of the Mediterranean: Iftar Night',
    date: 'March 4, 2026',
    time: '5:30 PM - 9:30 PM',
    location: 'The Bomber',
    description:
      'Celebrate cultural heritage and community at this collaborative Iftar hosted by NASA, VFP, and TSA. Enjoy a communal dinner, live performances, cultural booths, and more. All proceeds go to charity!',
    ctaLabel: 'Get Tickets',
    ctaUrl: 'https://wusa.ca/event/flavours-of-the-mediterranean-iftar-night/',
    tag: 'Culture',
    imagePath: '/photos/iftar2026.png',
    featured: true,
  },
  {
    id: 'career-event-2026',
    title: 'Career Networking Social',
    date: 'Late March 2026',
    description:
      'Connect with industry professionals from a variety of fields for an evening of career insights and networking, followed by a dancing and social after!',
    ctaLabel: 'Looking to Sponsor?',
    ctaUrl: 'mailto:uwtsa@clubs.wusa.ca',
    tag: 'Career',
    featured: true,
    announcementLabel: 'Learn More',
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
