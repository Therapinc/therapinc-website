'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

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
    <section className="relative w-full overflow-hidden bg-[#F4F3ED] py-24 sm:py-32">
      <div className="mx-auto w-full whitespace-normal break-normal px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '768px' }}>

        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              FAQ
            </h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Questions, answered
          </p>
        </div>

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
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'mb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
