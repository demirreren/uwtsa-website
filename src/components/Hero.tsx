'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { WHATSAPP_COMMUNITY_URL, COMMUNITY_SIZE } from '@/config';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-tsa-warm via-white to-tsa-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crescent & Star motif - subtle */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-tsa-red">
            <circle cx="40" cy="50" r="35" />
            <circle cx="48" cy="50" r="28" className="fill-tsa-warm" />
            <polygon points="75,50 80,40 85,50 80,60" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-96 h-96 opacity-[0.02]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-tsa-red">
            <circle cx="40" cy="50" r="35" />
            <circle cx="48" cy="50" r="28" className="fill-tsa-warm" />
            <polygon points="75,50 80,40 85,50 80,60" />
          </svg>
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tsa-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tsa-red/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-tsa-red/10 rounded-full text-tsa-red text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-tsa-red animate-pulse" />
              Open to all students at UW
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tsa-charcoal leading-tight mb-6"
            >
              Culture, community,{' '}
              <span className="text-tsa-red">new friends</span>{' '}
              at Waterloo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              TSA brings people together through Turkish culture, food, dance, and community. 
              <span className="font-semibold text-tsa-charcoal"> Everyone is welcome.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href={WHATSAPP_COMMUNITY_URL} external size="lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join our {COMMUNITY_SIZE} community
              </Button>
              <Button onClick={scrollToContact} variant="secondary" size="lg">
                Collaborate with us
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <motion.div
                className="absolute top-0 right-0 w-3/4 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photos/dance.jpg"
                  alt="TSA community event"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                className="absolute bottom-8 left-0 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photos/food.jpg"
                  alt="TSA food event"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-1/4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 z-30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇹🇷</span>
                  <div>
                    <p className="text-sm font-bold text-tsa-charcoal">{COMMUNITY_SIZE}</p>
                    <p className="text-xs text-gray-500">Members</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tsa-red/10 rounded-full blur-xl" />
              <div className="absolute -top-4 left-1/4 w-16 h-16 bg-tsa-red/10 rounded-full blur-lg" />
            </div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:hidden relative w-full max-w-sm mx-auto"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/photos/dance.jpg"
                alt="TSA community event"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇹🇷</span>
                  <span className="text-sm font-bold text-tsa-charcoal">{COMMUNITY_SIZE} Members</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

