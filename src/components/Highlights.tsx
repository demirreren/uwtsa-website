'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { Badge } from './Badge';
import { Button } from './Button';
import { highlights } from '@/data/highlights';
import { INSTAGRAM_URL } from '@/config';

const tagColors: Record<string, string> = {
  Food: 'bg-orange-100 text-orange-700',
  Dance: 'bg-purple-100 text-purple-700',
  Social: 'bg-blue-100 text-blue-700',
  Sports: 'bg-green-100 text-green-700',
  Culture: 'bg-tsa-red/10 text-tsa-red',
  Collab: 'bg-pink-100 text-pink-700',
};

export function Highlights() {
  return (
    <Section id="highlights" className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-tsa-red font-semibold text-sm uppercase tracking-wider mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-tsa-charcoal mb-4"
          >
            Highlight Reel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            From food nights to dance performances, here&apos;s a glimpse of the memories we create together.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
        >
          {highlights.slice(0, 8).map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
            >
              <Image
                src={highlight.photoPath}
                alt={highlight.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`inline-block w-fit px-2 py-1 rounded-full text-xs font-medium mb-2 ${tagColors[highlight.tag] || 'bg-gray-100 text-gray-700'}`}>
                  {highlight.tag}
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                  {highlight.title}
                </h3>
                {highlight.dateLabel && (
                  <p className="text-white/70 text-xs mt-1">{highlight.dateLabel}</p>
                )}
              </div>
              {/* Default state - show tag */}
              <div className="absolute top-3 left-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${tagColors[highlight.tag] || 'bg-gray-100 text-gray-700'} bg-white/90 backdrop-blur-sm`}>
                  {highlight.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-tsa-cream to-tsa-warm rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-bold text-tsa-charcoal">From our Instagram</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-tsa-charcoal mb-4">
                Follow the journey
              </h3>
              <p className="text-gray-600 mb-6">
                Event photos, behind-the-scenes moments, and announcements. 
                Stay connected with the TSA family.
              </p>
              <Button href={INSTAGRAM_URL} external variant="outline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                See more on Instagram
              </Button>
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src="/photos/instagram.png"
                  alt="TSA Instagram"
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

