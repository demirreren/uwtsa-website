'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { number: '200+', label: 'MEMBERS' },
  { number: '25+', label: 'EVENTS' },
  { number: '10+', label: 'COLLABS' },
  { number: '∞', label: 'MEMORIES' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 bg-tsa-dark overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Floating decorative text */}
      <motion.div
        style={{ x: x1 }}
        className="absolute top-20 left-0 text-[200px] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none"
      >
        CULTURE FOOD DANCE MUSIC
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="absolute bottom-20 right-0 text-[200px] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none"
      >
        COMMUNITY FRIENDS FAMILY
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            [001] WHO WE ARE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none"
          >
            <span className="text-white">NOT JUST A</span>
            <br />
            <span className="text-outline relative inline-block">
              CLUB
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-tsa-red transform -translate-y-1/2" style={{ transform: 'translateY(-50%) skewY(-2deg)' }}></span>
            </span>
            <br />
            <span className="text-white">A FAMILY</span>
          </motion.h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Photo collage */}
          <div className="relative h-[600px]">
            {/* Main photo */}
            <motion.div
              style={{ rotate: rotate1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-3/4"
            >
              <div className="y2k-border rounded-lg overflow-hidden">
                <Image
                  src="/photos/presentation.jpg"
                  alt="TSA Presentation"
                  width={400}
                  height={500}
                  className="object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>

            {/* Overlapping photo */}
            <motion.div
              style={{ rotate: rotate2 }}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-0 w-2/3"
            >
              <div className="y2k-border-red rounded-lg overflow-hidden">
                <Image
                  src="/photos/club-fair.jpg"
                  alt="TSA Club Fair"
                  width={350}
                  height={400}
                  className="object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>

            {/* Floating sticker */}
            <motion.div
              initial={{ opacity: 0, rotate: -20, scale: 0 }}
              whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute top-1/2 right-0 z-20"
            >
              <div className="sticker bg-white text-tsa-dark px-6 py-4 rounded-lg font-display font-bold text-lg">
                EVERYONE
                <br />
                WELCOME! ✦
              </div>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl font-display text-white leading-relaxed">
                TSA brings students together through{' '}
                <span className="text-tsa-red font-bold">Turkish culture</span>,
                food, music, and genuine connection.
              </p>
              <p className="text-lg text-gray-400 font-mono leading-relaxed">
                Whether you&apos;re Turkish, curious about the culture, or just looking for 
                a community that feels like home—you belong here. No experience required. 
                Just bring yourself.
              </p>

              {/* Highlight box */}
              <div className="y2k-border-thin p-6 bg-tsa-dark">
                <p className="font-mono text-sm text-gray-300 mb-2">// WHAT WE DO</p>
                <div className="flex flex-wrap gap-3">
                  {['Food Nights', 'Dance Events', 'Movie Nights', 'Watch Parties', 'Tea Time', 'Culture Fests'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 border border-tsa-red text-tsa-red font-mono text-sm hover:bg-tsa-red hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="y2k-border p-6 text-center bg-tsa-dark cursor-default"
            >
              <div className={`font-display font-black text-tsa-red mb-2 ${
                stat.label === 'MEMBERS' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
              }`}>
                {stat.number}
              </div>
              <div className="font-mono text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
