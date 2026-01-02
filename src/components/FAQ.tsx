'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/data/faq';

function FAQItem({ item, isOpen, onToggle, index }: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b-2 border-white/10"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-tsa-red text-sm">0{index + 1}</span>
          <span className="font-display font-bold text-lg md:text-xl text-white group-hover:text-tsa-red transition-colors">
            {item.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-10 h-10 border-2 border-white flex items-center justify-center text-white group-hover:bg-tsa-red group-hover:border-tsa-red transition-colors"
        >
          <span className="text-2xl leading-none">+</span>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12">
              <p className="font-mono text-gray-400 leading-relaxed max-w-2xl">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-32 bg-tsa-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 border-4 border-tsa-red/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border-4 border-white/10 rotate-45" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-tsa-red text-sm uppercase tracking-widest mb-4"
          >
            [004] GOT QUESTIONS?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-huge font-display font-black leading-none"
          >
            <span className="text-outline">FAQ</span>
            <span className="text-tsa-red">_</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="y2k-border p-8 bg-tsa-dark">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-gray-400 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-tsa-red font-display font-bold text-lg hover:text-white transition-colors"
          >
            CONTACT US →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
