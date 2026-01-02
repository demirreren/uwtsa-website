'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { Accordion } from './Accordion';
import { faqItems } from '@/data/faq';

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-tsa-red font-semibold text-sm uppercase tracking-wider mb-3"
            >
              Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-tsa-charcoal mb-4"
            >
              Frequently asked
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Have a question? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, 
              reach out to us directly.
            </motion.p>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="bg-gradient-to-br from-tsa-cream to-tsa-warm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-tsa-red/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-tsa-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-tsa-charcoal">Still have questions?</p>
                    <p className="text-sm text-gray-500">We&apos;re here to help</p>
                  </div>
                </div>
                <a
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
                  className="inline-flex items-center text-tsa-red font-semibold hover:underline"
                >
                  Contact us
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

