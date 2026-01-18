'use client';

import { motion } from 'framer-motion';
import { sponsors } from '@/data/sponsors';

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 bg-tsa-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 retro-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            ✦ OUR SUPPORTERS ✦
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white"
          >
            POWERED BY
          </motion.h3>
        </div>

        {/* Sponsors grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website}
              target={sponsor.website ? "_blank" : undefined}
              rel={sponsor.website ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className={`y2k-border-thin px-8 py-6 bg-tsa-dark flex items-center gap-4 ${sponsor.website ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {sponsor.logoPath ? (
                <div className="relative w-20 h-20 flex items-center justify-center p-2">
                  <div className="absolute inset-0 border border-white/10 rounded-sm"></div>
                  <img
                    src={sponsor.logoPath}
                    alt={sponsor.name}
                    className="relative max-w-full max-h-full object-contain z-10"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tsa-red to-white/20 flex items-center justify-center text-white font-display font-bold">
                  {sponsor.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
              )}
              <div>
                <p className="font-display font-bold text-white">{sponsor.name}</p>
                <p className="font-mono text-xs text-tsa-red uppercase">{sponsor.role}</p>
              </div>
            </motion.a>
          ))}

          {/* Become a sponsor */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: sponsors.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="y2k-border-glow px-8 py-6 bg-tsa-dark flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-tsa-red flex items-center justify-center text-tsa-red text-2xl">
              +
            </div>
            <div>
              <p className="font-display font-bold text-white">YOUR BRAND</p>
              <p className="font-mono text-xs text-gray-400 uppercase">Become a sponsor</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Thank you */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-mono text-gray-500 text-sm"
        >
          ❤️ We appreciate every contribution to our community
        </motion.p>
      </div>
    </section>
  );
}
