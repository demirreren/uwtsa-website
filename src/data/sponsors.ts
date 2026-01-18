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
    id: 'waterloo',
    name: 'University of Waterloo',
    logoPath: '/sponsors/waterloo.jpg',
    role: 'Partner',
    website: 'https://uwaterloo.ca',
  },
  {
    id: 'pasha-bbq',
    name: 'Pasha BBQ',
    logoPath: '/sponsors/pashabbq.jpg',
    role: 'Sponsor',
    website: 'https://www.instagram.com/pashabbqcom/',
  },
  {
    id: 'agha-turkish',
    name: 'Agha Turkish Cuisine',
    logoPath: '/sponsors/agha.jpg',
    role: 'Sponsor',
    website: 'https://www.instagram.com/agharestaurantwaterloo/',
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

