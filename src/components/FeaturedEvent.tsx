'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { featuredEvent, featuredPhotos } from '@/data/featured-event';

export function FeaturedEvent() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-tsa-dark overflow-hidden"
    >
      <div className="absolute inset-0 retro-grid opacity-20" />

      <motion.div
        style={{ x: bgX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 text-[250px] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        CAREERS NIGHT CAREERS NIGHT
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            {featuredEvent.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none mb-6"
          >
            <span className="text-white">OUR BIGGEST</span>
            <br />
            <span className="text-outline">NIGHT</span>{' '}
            <span className="text-tsa-red">YET</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl text-lg text-gray-400 font-mono leading-relaxed"
          >
            {featuredEvent.description}
          </motion.p>
        </div>

        {/* Bento photo grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-12 md:mb-16 relative">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1.5 : -1.5, zIndex: 10 }}
              className={`${photo.gridClass} relative group cursor-pointer`}
            >
              <div className={`${index === 0 ? 'y2k-border' : index % 2 === 0 ? 'y2k-border-red' : 'y2k-border'} h-full rounded-lg overflow-hidden`}>
                <div className={`relative h-full ${photo.portrait ? 'min-h-[280px] md:min-h-[360px]' : 'min-h-[200px] md:min-h-[300px]'}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      index === 0
                        ? '(max-width: 768px) 100vw, 75vw'
                        : index <= 1
                          ? '(max-width: 768px) 50vw, 40vw'
                          : '(max-width: 768px) 100vw, 50vw'
                    }
                  />

                  {/* Tag label */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm font-mono text-[10px] md:text-xs uppercase tracking-wider text-white/90">
                      {photo.alt}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="absolute -bottom-6 right-4 md:right-8 z-20 hidden md:block"
          >
            <div className="sticker bg-tsa-red text-white px-5 py-3 rounded-full font-mono text-sm font-bold">
              {featuredEvent.attendees} ATTENDEES
            </div>
          </motion.div>
        </div>

        {/* Event info strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { value: featuredEvent.title, label: 'Event' },
            { value: featuredEvent.date, label: 'Date' },
            { value: featuredEvent.venue, label: 'Venue' },
            { value: featuredEvent.attendees, label: 'Attendees' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
              className="y2k-border-thin p-4 md:p-5 bg-tsa-dark cursor-default"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-1">
                {item.label}
              </div>
              <div className="font-display font-bold text-white text-sm md:text-base">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
