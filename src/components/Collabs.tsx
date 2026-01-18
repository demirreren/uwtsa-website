'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { collabPartners } from '@/data/sponsors';

export function Collabs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="collabs"
      className="relative py-32 bg-tsa-dark overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 retro-grid opacity-30" />

      {/* Floating shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-20 w-32 h-32 border-4 border-tsa-red rotate-45 opacity-20"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-40 left-20 w-24 h-24 rounded-full border-4 border-white opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            [003] PARTNERSHIPS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none"
          >
            <span className="text-white">WE BUILD</span>
            <br />
            <span className="text-outline">TOGETHER</span>
          </motion.h2>
        </div>

        {/* Collabs marquee */}
        <div className="relative mb-16">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-tsa-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-tsa-dark to-transparent z-10" />

          <div className="overflow-hidden py-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="marquee-track"
            >
              {[...collabPartners, ...collabPartners, ...collabPartners].map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="inline-flex items-center gap-4 mx-4 px-8 py-5 y2k-border bg-tsa-dark cursor-default"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <img
                      src={partner.logoPath}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-display font-bold text-lg whitespace-nowrap">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Collab stories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Joint Events', desc: 'Cultural nights that blend traditions', icon: '🎭' },
            { title: 'Shared Spaces', desc: 'Building community across groups', icon: '🤝' },
            { title: 'New Friends', desc: 'Connections that last beyond events', icon: '✨' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, rotate: index === 1 ? 0 : index === 0 ? 2 : -2 }}
              className="y2k-border-thin p-8 bg-tsa-dark"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
              <p className="font-mono text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="y2k-border-glow inline-block p-8 bg-tsa-dark">
            <p className="font-display font-bold text-2xl text-white mb-4">
              Want to collab with us? 🤝
            </p>
            <p className="font-mono text-gray-400 mb-6">
              Let&apos;s create something amazing together.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-tsa-red font-mono font-bold uppercase tracking-wider hover:text-white transition-colors"
            >
              GET IN TOUCH
              <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
