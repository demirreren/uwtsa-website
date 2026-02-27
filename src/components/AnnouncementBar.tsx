'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { upcomingEvents } from '@/data/events';

const DISMISSED_KEY = 'tsa-announcement-dismissed';

function setBarHeight(height: number) {
  document.documentElement.style.setProperty('--announcement-bar-h', `${height}px`);
}

export function AnnouncementBar() {
  const featured = upcomingEvents.filter((e) => e.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(DISMISSED_KEY) === 'true';
    setDismissed(wasDismissed);
  }, []);

  useEffect(() => {
    if (dismissed || featured.length === 0) {
      setBarHeight(0);
    } else if (barRef.current) {
      setBarHeight(barRef.current.offsetHeight);
    }
  }, [dismissed, featured.length]);

  const rotate = useCallback(() => {
    if (featured.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  }, [featured.length]);

  useEffect(() => {
    if (featured.length <= 1) return;
    const interval = setInterval(rotate, 5000);
    return () => clearInterval(interval);
  }, [rotate, featured.length]);

  if (featured.length === 0 || dismissed) return null;

  const event = featured[currentIndex];

  const handleDismiss = () => {
    setDismissed(true);
    setBarHeight(0);
    sessionStorage.setItem(DISMISSED_KEY, 'true');
  };

  return (
    <div ref={barRef} className="announcement-bar fixed top-0 left-0 right-0 z-[60] bg-tsa-red">
      <div className="relative flex items-center justify-center px-12 py-2.5 sm:py-2">
        <AnimatePresence mode="wait">
          <motion.button
            key={event.id}
            onClick={() => {
              const section = document.querySelector('#events');
              if (section) {
                const offset = section.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-white font-mono text-xs sm:text-sm tracking-wide group cursor-pointer"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
            <span className="font-bold uppercase">{event.title}</span>
            <span className="hidden sm:inline text-white/70">—</span>
            <span className="hidden sm:inline text-white/80">{event.date}</span>
            <span className="font-bold border-b border-white/50 group-hover:border-white transition-colors">
              {event.announcementLabel || event.ctaLabel} →
            </span>
          </motion.button>
        </AnimatePresence>

        {featured.length > 1 && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-1">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Show event ${i + 1}`}
              />
            ))}
          </div>
        )}

        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss announcement"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
