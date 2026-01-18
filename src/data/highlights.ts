export interface Highlight {
  id: string;
  title: string;
  caption: string;
  photoPath: string;
  tag: 'Food' | 'Dance' | 'Social' | 'Sports' | 'Culture' | 'Collab';
  dateLabel?: string;
}

export const highlights: Highlight[] = [
  {
    id: '1',
    title: 'Taste of Türkiye',
    caption: 'Taste of Türkiye',
    photoPath: '/photos/dancing-fun.JPG',
    tag: 'Dance',
    dateLabel: 'Fall 2024',
  },
  {
    id: '2',
    title: 'Meet & Greet',
    caption: 'Meet & Greet',
    photoPath: '/photos/girls-group.jpg',
    tag: 'Social',
    dateLabel: 'Fall 2025',
  },
  {
    id: '3',
    title: 'Baklava 😋',
    caption: 'Baklava 😋',
    photoPath: '/photos/food.JPG',
    tag: 'Food',
  },
  {
    id: '4',
    title: 'Derby Watch Party',
    caption: 'Derby Watch Party',
    photoPath: '/photos/soccer-watch-party.jpg',
    tag: 'Sports',
    dateLabel: 'Winter 2024',
  },
  {
    id: '5',
    title: 'Iftar Unity Night',
    caption: 'Iftar Unity Night',
    photoPath: '/photos/event-culture-fest.jpg',
    tag: 'Culture',
    dateLabel: 'Winter 2025',
  },
  {
    id: '6',
    title: 'Albanian x TSA Collab',
    caption: 'Joint cultural night celebrating Balkan heritage',
    photoPath: '/photos/albanian-event.jpg',
    tag: 'Collab',
    dateLabel: 'Summer 2025',
  },
  {
    id: '7',
    title: 'Movie Night',
    caption: 'Turkish cinema screenings with snacks and discussions',
    photoPath: '/photos/social-movie-night.jpg',
    tag: 'Social',
  },
  {
    id: '8',
    title: 'Welcome Week',
    caption: 'Welcoming new students with open arms and warm food',
    photoPath: '/photos/social-welcome-week.jpg',
    tag: 'Social',
    dateLabel: 'September 2024',
  },
];
