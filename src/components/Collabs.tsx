'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { CollabBadge } from './Badge';
import { collabPartners } from '@/data/sponsors';

export function Collabs() {
  return (
    <Section id="collabs" className="bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-tsa-red font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-tsa-charcoal mb-4"
          >
            We build with other communities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Cross-cultural events, joint celebrations, and shared experiences. 
            We&apos;re stronger together.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative mb-12">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex overflow-hidden"
          >
            <div className="flex gap-4 animate-marquee">
              {[...collabPartners, ...collabPartners].map((partner, index) => (
                <CollabBadge
                  key={`${partner.id}-${index}`}
                  name={partner.name}
                  shortName={partner.shortName}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grid layout for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden grid grid-cols-2 gap-3"
        >
          {collabPartners.map((partner) => (
            <CollabBadge
              key={partner.id}
              name={partner.name}
              shortName={partner.shortName}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-tsa-cream to-tsa-warm rounded-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 text-tsa-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="font-semibold text-tsa-charcoal">Interested in partnering?</span>
          </div>
          <p className="text-gray-600 mb-4">
            Want to host something together? We&apos;d love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-tsa-red font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
              }
            }}
          >
            Send a note below
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}

