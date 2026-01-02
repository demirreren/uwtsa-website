export interface Sponsor {
  id: string;
  name: string;
  logoPath?: string;
  role: 'Sponsor' | 'Venue' | 'Caterer' | 'Partner';
  website?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'wusa',
    name: 'WUSA',
    logoPath: '/sponsors/wusa.png',
    role: 'Partner',
    website: 'https://wusa.ca',
  },
  {
    id: 'venue-partner',
    name: 'SLC',
    role: 'Venue',
  },
  {
    id: 'caterer-1',
    name: 'Istanbul Kitchen',
    role: 'Caterer',
  },
  // Add more sponsors here as needed
];

export const collabPartners = [
  {
    id: 'albanian',
    name: 'Albanian Student Association',
    shortName: 'ASA',
  },
  {
    id: 'persian',
    name: 'Persian Student Association',
    shortName: 'PSA',
  },
  {
    id: 'romanian',
    name: 'Romanian Student Association',
    shortName: 'RSA',
  },
  {
    id: 'tea-club',
    name: 'UW Tea Club',
    shortName: 'Tea',
  },
  {
    id: 'more',
    name: 'And more...',
    shortName: '+',
  },
];

