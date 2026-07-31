'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'We already have years of paper records — is that a problem?',
    answer: "Not at all. Our image-to-text tool digitizes your existing records so you don't start from zero.",
  },
  {
    question: "Our reports don't follow a standard format — can Therapinc handle that?",
    answer: 'Yes, our platform is highly customizable. We map your existing unstructured formats into our structured data models seamlessly.',
  },
  {
    question: 'Do parents need to download an app?',
    answer: 'No app download is required. Parents can securely access the Parent Portal via any web browser on their phone, tablet, or computer.',
  },
  {
    question: 'Is our student data secure?',
    answer: 'Absolutely. We employ end-to-end encryption, strict role-based access controls, and comply with major regional standards including HIPAA and FERPA.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[#F4F3ED] py-24 sm:py-32">
      <div className="mx-auto w-full whitespace-normal break-normal px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '768px' }}>

        {/* Section Header */}
        <motion.div 
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              FAQ
            </h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Questions, answered
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--color-primary)]"
                >
                  <h3 className="font-heading pr-8 text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-400">
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mb-6"
                    >
                      <p className="text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
