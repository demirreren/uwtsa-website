'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { sponsors, Sponsor } from '@/data/sponsors';

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const roleColors: Record<string, string> = {
    Sponsor: 'bg-amber-100 text-amber-700',
    Venue: 'bg-blue-100 text-blue-700',
    Caterer: 'bg-orange-100 text-orange-700',
    Partner: 'bg-tsa-red/10 text-tsa-red',
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)' }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all"
    >
      {sponsor.logoPath ? (
        <div className="relative w-20 h-20 mb-4">
          <Image
            src={sponsor.logoPath}
            alt={sponsor.name}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-tsa-red/10 to-tsa-red/5 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-tsa-red">
            {sponsor.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        </div>
      )}
      <h3 className="font-bold text-tsa-charcoal mb-2">{sponsor.name}</h3>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColors[sponsor.role]}`}>
        {sponsor.role}
      </span>
    </motion.div>
  );
}

export function Sponsors() {
  return (
    <Section id="sponsors" className="bg-tsa-cream">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-tsa-red font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Our Supporters
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-tsa-charcoal mb-4"
          >
            Thanks to our supporters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our events wouldn&apos;t be possible without the support of these amazing partners and sponsors.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SponsorCard sponsor={sponsor} />
            </motion.div>
          ))}
          
          {/* Become a sponsor card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sponsors.length * 0.1 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  const navHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
                }
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(208, 0, 0, 0.15)' }}
              className="h-full bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-tsa-red/30 flex flex-col items-center justify-center text-center transition-all hover:border-tsa-red cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-tsa-red/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-tsa-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-bold text-tsa-charcoal mb-1">Become a Sponsor</span>
              <span className="text-sm text-gray-500">Partner with us</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8"
        >
          ❤️ We appreciate every contribution to our community
        </motion.p>
      </Container>
    </Section>
  );
}

