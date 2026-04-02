export interface FeaturedPhoto {
  src: string;
  alt: string;
  gridClass: string;
  portrait?: boolean;
}

export const featuredEvent = {
  label: '[000] LATEST DROP',
  date: 'MARCH 24, 2026',
  title: 'TSA Careers Night & Social',
  venue: "Maxwell's, Waterloo",
  attendees: '150+',
  description:
    'Two career panels, a Karagöz puppet show, networking bingo, and a dance floor that didn\'t quit. UWaterloo x McMaster TSA brought together Turkish-Canadian professionals in law, medicine, engineering, and tech for a night that started with real conversations and ended with the DJ.',
};

export const featuredPhotos: FeaturedPhoto[] = [
  {
    src: '/photos/careersnight/1-group.JPG',
    alt: 'All panelists and organizers on stage at Maxwell\'s',
    gridClass: 'col-span-12 md:col-span-8 row-span-2',
  },
  {
    src: '/photos/careersnight/4-networkingbingo.JPG',
    alt: 'Networking Bingo',
    gridClass: 'col-span-6 md:col-span-4 row-span-2',
    portrait: true,
  },
  {
    src: '/photos/careersnight/2-techlawpanel.JPG',
    alt: 'Tech, Law & Business Panel',
    gridClass: 'col-span-12 md:col-span-6',
  },
  {
    src: '/photos/careersnight/3-healthpanel.png',
    alt: 'Health & Clinical Innovation panel',
    gridClass: 'col-span-12 md:col-span-6',
  },
  {
    src: '/photos/careersnight/5-puppetshow.JPG',
    alt: 'Karagöz Puppet Show',
    gridClass: 'col-span-6 md:col-span-4',
    portrait: true,
  },
  {
    src: '/photos/careersnight/6-networking.JPG',
    alt: 'Social Networking',
    gridClass: 'col-span-6 md:col-span-4',
    portrait: true,
  },
  {
    src: '/photos/careersnight/7-food.JPG',
    alt: 'Turkish food served at the event',
    gridClass: 'col-span-12 md:col-span-4',
    portrait: true,
  },
];
