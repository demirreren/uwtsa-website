export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'turkish',
    question: 'Do I need to be Turkish to join?',
    answer: 'No. Everyone is welcome! TSA is open to all students regardless of background. We love sharing our culture with anyone curious about it.',
  },
  {
    id: 'events',
    question: 'What types of events do you run?',
    answer: 'Social nights, culture nights, food events, traditional dance, games, sports watch parties, and collaborations with other student clubs.',
  },
  {
    id: 'updates',
    question: 'How do I stay updated?',
    answer: 'Join our WhatsApp community for instant updates, and follow us on Instagram for photos, announcements, and event highlights.',
  },
  {
    id: 'collabs',
    question: 'How do collabs work?',
    answer: 'Reach out to us with an idea, pick a theme together, and co-host an event. We love partnering with other cultural clubs and student organizations.',
  },
  {
    id: 'international',
    question: "I'm an incoming international student. Who do I contact?",
    answer: 'Email us! We help connect you with current students, share resources, and make your transition to UW smoother.',
  },
  {
    id: 'sponsor',
    question: 'How do I sponsor TSA?',
    answer: 'Email us with your idea and we\'ll share our simple sponsorship deck. We welcome partnerships with local businesses and organizations.',
  },
];

