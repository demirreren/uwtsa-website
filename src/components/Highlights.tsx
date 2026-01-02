'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { highlights } from '@/data/highlights';
import { INSTAGRAM_URL } from '@/config';

const tagStyles: Record<string, string> = {
  Food: 'bg-orange-500 text-white',
  Dance: 'bg-purple-500 text-white',
  Social: 'bg-blue-500 text-white',
  Sports: 'bg-green-500 text-white',
  Culture: 'bg-tsa-red text-white',
  Collab: 'bg-pink-500 text-white',
};

export function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="relative py-32 bg-tsa-cream text-tsa-dark overflow-hidden"
    >
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 diagonal-stripes opacity-50" />

      {/* Giant background text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 left-0 text-[300px] font-display font-black text-tsa-red/5 whitespace-nowrap pointer-events-none"
      >
        VIBES VIBES VIBES VIBES
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            [002] HIGHLIGHT REEL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none"
          >
            <span className="text-tsa-dark">THE</span>{' '}
            <span className="text-outline-red">VIBES</span>
          </motion.h2>
        </div>

        {/* Creative photo grid - asymmetric */}
        <div className="grid grid-cols-12 gap-4 mb-20">
          {highlights.slice(0, 6).map((highlight, index) => {
            // Different sizes for visual interest
            const sizes = [
              'col-span-12 md:col-span-8 row-span-2',
              'col-span-6 md:col-span-4',
              'col-span-6 md:col-span-4',
              'col-span-12 md:col-span-5',
              'col-span-6 md:col-span-4',
              'col-span-6 md:col-span-3',
            ];
            
            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2, zIndex: 10 }}
                className={`${sizes[index]} relative group cursor-pointer`}
              >
                <div className="y2k-border h-full rounded-lg overflow-hidden bg-white">
                  <div className="relative h-full min-h-[200px] md:min-h-[300px]">
                    <Image
                      src={highlight.photoPath}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 font-mono text-xs uppercase tracking-wider ${tagStyles[highlight.tag]}`}>
                        {highlight.tag}
                      </span>
                    </div>

                    {/* Title on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-display font-bold text-white text-xl">
                        {highlight.title}
                      </h3>
                      {highlight.dateLabel && (
                        <p className="font-mono text-sm text-white/70">{highlight.dateLabel}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="y2k-border-red p-8 md:p-12 bg-white rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="font-mono text-sm uppercase tracking-wider text-gray-500">@uwtsa</span>
                </div>
                
                <h3 className="text-4xl font-display font-black text-tsa-dark mb-4">
                  FOLLOW THE
                  <br />
                  <span className="text-tsa-red">JOURNEY</span>
                </h3>
                
                <p className="text-gray-600 font-mono mb-6">
                  Behind-the-scenes, event drops, memes, and more. Join the party.
                </p>
                
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-retro"
                >
                  FOLLOW US
                  <span className="text-xl">→</span>
                </a>
              </div>

              {/* Right: Instagram preview */}
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 3, scale: 1.02 }}
                  className="photo-stack rounded-lg overflow-hidden"
                >
                  <Image
                    src="/photos/instagram-preview.png"
                    alt="TSA Instagram"
                    width={500}
                    height={500}
                    className="object-cover aspect-square"
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-tsa-red text-white px-4 py-2 rounded-full font-mono text-sm font-bold"
                >
                  NEW! ✦
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
