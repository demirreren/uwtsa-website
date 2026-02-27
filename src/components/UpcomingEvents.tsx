'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { upcomingEvents, type UpcomingEvent } from '@/data/events';

const tagColors: Record<string, string> = {
  Culture: 'bg-tsa-red text-white',
  Career: 'bg-white text-tsa-dark',
  Social: 'bg-tsa-red/80 text-white',
  Food: 'bg-tsa-red text-white',
  Sports: 'bg-green-600 text-white',
};

function EventCard({ event, index }: { event: UpcomingEvent; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          event.imagePath ? 'md:flex-row' : ''
        } ${isEven ? '' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}
      >
        {event.imagePath && (
          <motion.div
            whileHover={{ rotate: 0 }}
            className="w-full md:w-2/5 flex-shrink-0"
          >
            <div className="y2k-border rounded-lg overflow-hidden">
              <Image
                src={event.imagePath}
                alt={event.title}
                width={500}
                height={350}
                className="object-cover aspect-[3/2] w-full"
              />
            </div>
          </motion.div>
        )}

        <div className={`flex-1 space-y-4 ${!event.imagePath ? 'max-w-2xl mx-auto text-center' : ''}`}>
          <div className={`flex items-center gap-3 ${!event.imagePath ? 'justify-center' : ''}`}>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                tagColors[event.tag] || 'bg-white/10 text-white'
              }`}
            >
              {event.tag}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-none">
            {event.title}
          </h3>

          <div className={`flex flex-wrap gap-4 font-mono text-sm text-white/60 ${!event.imagePath ? 'justify-center' : ''}`}>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-tsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.date}
            </span>
            {event.time && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-tsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-tsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            )}
          </div>

          <p className={`text-white/70 text-base md:text-lg leading-relaxed max-w-lg ${!event.imagePath ? 'mx-auto' : ''}`}>
            {event.description}
          </p>

          <motion.a
            href={event.ctaUrl}
            target={event.ctaUrl.startsWith('http') ? '_blank' : undefined}
            rel={event.ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block btn-retro text-white text-sm"
          >
            {event.ctaLabel} →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function UpcomingEvents() {
  if (upcomingEvents.length === 0) return null;

  return (
    <section id="events" className="relative py-20 md:py-32 bg-tsa-dark overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border-2 border-tsa-red text-tsa-red font-mono text-sm font-bold uppercase tracking-widest mb-6">
            Don&apos;t Miss Out
          </span>
          <h2 className="text-huge font-display font-black text-white">
            UPCOMING <span className="text-outline-red">EVENTS</span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
