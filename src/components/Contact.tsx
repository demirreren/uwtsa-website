'use client';

import { motion } from 'framer-motion';
import { TSA_EMAIL } from '@/config';

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-tsa-cream text-tsa-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 diagonal-stripes opacity-30" />

      {/* Decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-40 h-40 border-4 border-tsa-red/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full border-4 border-tsa-dark/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            [005] GET IN TOUCH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none"
          >
            <span className="text-tsa-dark">LET&apos;S</span>
            <br />
            <span className="text-outline-red">CONNECT</span>
          </motion.h2>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Collabs card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="y2k-border-red p-8 bg-white"
          >
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="font-display font-black text-2xl text-tsa-dark mb-4">
              COLLABS &<br />SPONSORSHIPS
            </h3>
            <p className="font-mono text-gray-600 mb-6">
              Want to partner with us or sponsor an event? Let&apos;s create something amazing.
            </p>
            <a
              href={`mailto:${TSA_EMAIL}?subject=TSA%20Collaboration`}
              className="btn-retro inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              EMAIL US
            </a>
          </motion.div>

          {/* Questions card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 2, scale: 1.02 }}
            className="y2k-border p-8 bg-white"
          >
            <div className="text-5xl mb-6">💬</div>
            <h3 className="font-display font-black text-2xl text-tsa-dark mb-4">
              INCOMING STUDENTS<br />& QUESTIONS
            </h3>
            <p className="font-mono text-gray-600 mb-6">
              New to UW? Have questions? We&apos;re here to help you get connected.
            </p>
            <a
              href={`mailto:${TSA_EMAIL}?subject=TSA%20Question`}
              className="btn-retro inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ASK AWAY
            </a>
          </motion.div>
        </div>

        {/* Direct email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-gray-500 mb-2">Or email us directly at</p>
          <a
            href={`mailto:${TSA_EMAIL}`}
            className="font-display font-bold text-2xl md:text-3xl text-tsa-dark hover:text-tsa-red transition-colors"
          >
            {TSA_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
