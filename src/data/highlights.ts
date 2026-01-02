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
    title: 'Turkish Night Dance',
    caption: 'Traditional folk dance performance at our annual Turkish Night celebration',
    photoPath: '/photos/dance.jpg',
    tag: 'Dance',
    dateLabel: 'Fall 2024',
  },
  {
    id: '2',
    title: 'Çay Time Social',
    caption: 'Weekly tea gatherings where new friends become family',
    photoPath: '/photos/tea.jpg',
    tag: 'Social',
  },
  {
    id: '3',
    title: 'Kebab Night',
    caption: 'Authentic Turkish cuisine shared with 100+ students',
    photoPath: '/photos/food.jpg',
    tag: 'Food',
    dateLabel: 'Winter 2024',
  },
  {
    id: '4',
    title: 'World Cup Watch Party',
    caption: 'Cheering together for Türkiye in epic match nights',
    photoPath: '/photos/sports.jpg',
    tag: 'Sports',
  },
  {
    id: '5',
    title: 'Cultural Exchange',
    caption: 'Learning and sharing traditions with diverse communities',
    photoPath: '/photos/culture.jpg',
    tag: 'Culture',
  },
  {
    id: '6',
    title: 'Albanian x TSA Collab',
    caption: 'Joint cultural night celebrating Balkan heritage',
    photoPath: '/photos/collab.jpg',
    tag: 'Collab',
  },
  {
    id: '7',
    title: 'Movie Night',
    caption: 'Turkish cinema screenings with snacks and discussions',
    photoPath: '/photos/movie.jpg',
    tag: 'Social',
  },
  {
    id: '8',
    title: 'Welcome Week',
    caption: 'Welcoming new students with open arms and warm food',
    photoPath: '/photos/welcome.jpg',
    tag: 'Social',
    dateLabel: 'September 2024',
  },
];

