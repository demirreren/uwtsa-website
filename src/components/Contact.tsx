'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { Button } from './Button';
import { TSA_EMAIL } from '@/config';

const contactCards = [
  {
    title: 'Collaborations & Sponsorships',
    description: 'Want to partner with us or sponsor an event? Let\'s create something amazing together.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    subject: 'TSA collaboration',
    buttonText: 'Email about partnerships',
  },
  {
    title: 'Incoming Students & Questions',
    description: 'New to UW? Have questions about TSA? We\'re here to help you get connected.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    subject: 'TSA question',
    buttonText: 'Email with questions',
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-tsa-cream">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-tsa-red font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-tsa-charcoal mb-4"
          >
            Let&apos;s connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Whether you want to collaborate, sponsor, or just say hi, we&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-tsa-red/10 text-tsa-red flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-tsa-charcoal mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
              <Button
                href={`mailto:${TSA_EMAIL}?subject=${encodeURIComponent(card.subject)}`}
                variant="outline"
                className="w-full justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {card.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

