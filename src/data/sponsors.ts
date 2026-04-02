export interface Sponsor {
  id: string;
  name: string;
  logoPath?: string;
  tier: 'Major Sponsor' | 'Supporting Partner';
  featured?: boolean;
  description?: string;
  website?: string;
}

export interface CollabPartner {
  id: string;
  name: string;
  logoPath: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'pasha-bbq',
    name: 'Pasha BBQ',
    logoPath: '/sponsors/pashabbq.jpg',
    tier: 'Major Sponsor',
    featured: true,
    description:
      'Pasha BBQ has generously provided catering for our events and even shared their event space for community gatherings, including soccer watch parties. We are also excited about their new Kitchener location at 29 King St E, Kitchener, ON N2G 2K6.',
    website: 'https://pashabbq.com/',
  },
  {
    id: 'agha-turkish',
    name: 'Agha Turkish Cuisine',
    logoPath: '/sponsors/agha.jpg',
    tier: 'Supporting Partner',
    website: 'https://agharestaurant.ca/waterloo-menu/',
  },
  {
    id: 'cc-kanada',
    name: 'C&C Education, Visa & Immigration',
    logoPath: '/sponsors/cc_logo.png',
    tier: 'Major Sponsor',
    featured: true,
    description:
      'C&C has been a lead supporter of our careers programming, helping students and young professionals navigate education, visas, work permits, PR, and immigration pathways with confidence.',
    website: 'https://www.cc-kanadadaegitim.com/',
  },
  {
    id: 'slef',
    name: 'SLEF — Student Life Endowment Fund',
    logoPath: '/sponsors/slef_logo.png',
    tier: 'Major Sponsor',
    featured: true,
    description:
      'SLEF empowers student-led initiatives at the University of Waterloo and has made this event possible by investing in ambitious ideas, innovation, and community-driven impact.',
    website: 'https://wusa.ca/about/your-money/funding/',
  },
  {
    id: 'nev-turkish',
    name: 'NEV Turkish Cuisine',
    logoPath: '/sponsors/nev_logo.png',
    tier: 'Supporting Partner',
    website: 'https://nevturkishcuisine.com/',
  },
  {
    id: 'canadian-istanbul',
    name: 'Canadian Istanbul',
    logoPath: '/sponsors/canadianistanbul_logo.jpg',
    tier: 'Supporting Partner',
    website: 'https://canadianistanbul.ca/',
  },
];

export const collabPartners: CollabPartner[] = [
  {
    id: 'mactsa',
    name: 'McMaster TSA',
    logoPath: '/collabs/mactsa.jpg',
  },
  {
    id: 'uofg-tcc',
    name: 'UofG Turkish Culture Club',
    logoPath: '/collabs/uofgtcc.png',
  },
  {
    id: 'rsa',
    name: 'UW Romanian Student Association',
    logoPath: '/collabs/uwrsa.png',
  },
  {
    id: 'albanians',
    name: 'Albanians of WLU & UW',
    logoPath: '/collabs/albaniansofwluanduw.jpg',
  },
  {
    id: 'tea-club',
    name: 'UW Tea Club',
    logoPath: '/collabs/uwteaclub.jpg',
  },
  {
    id: 'wlubalkans',
    name: 'Laurier Balkan Student Club',
    logoPath: '/collabs/wlubalkans.png',
  },
  {
    id: 'uw-polish',
    name: 'Polish Society of UW',
    logoPath: '/collabs/uwpolish.png',
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
    id: 'uw-serbian',
    name: 'UW Serbian Student Association',
    logoPath: '/collabs/uwssa.jpg',
  },
];

