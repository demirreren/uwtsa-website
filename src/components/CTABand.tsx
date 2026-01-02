'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WHATSAPP_COMMUNITY_URL, COMMUNITY_SIZE } from '@/config';

export function CTABand() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-tsa-red overflow-hidden"
    >
      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Animated background text */}
      <motion.div
        style={{ x: x1 }}
        className="absolute top-0 left-0 whitespace-nowrap text-[150px] font-display font-black text-white/10 leading-none"
      >
        JOIN JOIN JOIN JOIN JOIN JOIN JOIN
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="absolute bottom-0 right-0 whitespace-nowrap text-[150px] font-display font-black text-black/10 leading-none"
      >
        TSA TSA TSA TSA TSA TSA TSA TSA
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Big headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-none">
            JOIN {COMMUNITY_SIZE}
            <br />
            <span className="text-outline">MEMBERS</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 font-mono max-w-2xl mx-auto">
            Event drops. Meetups. Collab invites.
            <br />
            <span className="text-white font-bold">Be part of the family.</span>
          </p>

          {/* CTA */}
          <motion.a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-tsa-red font-display font-bold text-xl uppercase tracking-wider border-4 border-white hover:bg-tsa-dark hover:text-white hover:border-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            JOIN WHATSAPP
          </motion.a>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {['Free to join', 'No spam', 'Weekly updates'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/60 font-mono text-sm">
                <span className="text-white">✓</span> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white" />
    </section>
  );
}
