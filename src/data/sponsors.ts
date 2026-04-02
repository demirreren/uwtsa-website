export interface Sponsor {
  id: string;
  name: string;
  logoPath?: string;
  role: 'Sponsor' | 'Venue' | 'Caterer' | 'Partner';
  website?: string;
}

export interface CollabPartner {
  id: string;
  name: string;
  logoPath: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'wusa',
    name: 'WUSA',
    logoPath: '/sponsors/wusaa.jpeg',
    role: 'Partner',
    website: 'https://wusa.ca',
  },
  {
    id: 'pasha-bbq',
    name: 'Pasha BBQ',
    logoPath: '/sponsors/pashabbq.jpg',
    role: 'Sponsor',
    website: 'https://pashabbq.com/',
  },
  {
    id: 'agha-turkish',
    name: 'Agha Turkish Cuisine',
    logoPath: '/sponsors/agha.jpg',
    role: 'Sponsor',
    website: 'https://agharestaurant.ca/waterloo-menu/',
  },
  {
    id: 'cc-kanada',
    name: 'C&C Education, Visa & Immigration',
    logoPath: '/sponsors/cc_logo.png',
    role: 'Partner',
    website: 'https://www.cc-kanadadaegitim.com/',
  },
  {
    id: 'slef',
    name: 'SLEF — Student Life Endowment Fund',
    logoPath: '/sponsors/slef_logo.png',
    role: 'Partner',
    website: 'https://wusa.ca/about/your-money/funding/',
  },
  {
    id: 'nev-turkish',
    name: 'NEV Turkish Cuisine',
    logoPath: '/sponsors/nev_logo.png',
    role: 'Sponsor',
    website: 'https://nevturkishcuisine.com/',
  },
  {
    id: 'canadian-istanbul',
    name: 'Canadian Istanbul',
    logoPath: '/sponsors/canadianistanbul_logo.jpg',
    role: 'Sponsor',
    website: 'https://canadianistanbul.ca/',
  },
];

export const collabPartners: CollabPartner[] = [
  {
    id: 'albanians',
    name: 'Albanians of WLU & UW',
    logoPath: '/collabs/albaniansofwluanduw.jpg',
  },
  {
    id: 'iranian',
    name: 'Iranian Students Association of Waterloo',
    logoPath: '/collabs/iranianstudentassociation.jpg',
  },
  {
    id: 'mssa',
    name: 'UWaterloo Malaysian and Singaporean Student Association',
    logoPath: '/collabs/mssa.jpg',
  },
  {
    id: 'rsa',
    name: 'UW Romanian Student Association',
    logoPath: '/collabs/rsa.jpg',
  },
  {
    id: 'tea-club',
    name: 'UW Tea Club',
    logoPath: '/collabs/uwteaclub.jpg',
  },
];

