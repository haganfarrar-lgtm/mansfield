'use client';
import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem { question: string; answer: string; }
interface FAQProps { cityName?: string; faqs?: FAQItem[]; }

const defaultFaqs: FAQItem[] = [
  { question: 'What areas do you serve?', answer: 'We serve Mansfield, Arlington, Grand Prairie, Burleson, Midlothian, Cedar Hill, and other cities within 50 miles.' },
  { question: 'Do you offer free estimates?', answer: 'Yes! We provide free, no-obligation estimates for all projects.' },
  { question: 'How long does a typical project take?', answer: 'Timelines vary by scope. Simple projects take 1-2 days, larger renovations 2-4 weeks.' },
  { question: 'Are you licensed and insured?', answer: 'Yes, we are fully licensed and carry comprehensive liability insurance.' },
  { question: 'Do you offer warranties?', answer: 'Yes, we offer warranties on materials and labor for all our work.' },
];

export default function FAQ({ cityName = 'Mansfield', faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-stone-50" id="faq">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600 mb-8">Have questions about our landscaping services in {cityName}?</p>
            <div className="bg-forest-50 rounded-xl p-6 border border-forest-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center"><MessageCircle className="w-6 h-6 text-forest-700" /></div>
                <div>
                  <h3 className="font-display font-semibold text-forest-900 mb-2">Still have questions?</h3>
                  <p className="text-stone-600 text-sm mb-4">Our team is here to help.</p>
                  <Link href="#contact" className="text-forest-700 font-medium hover:text-forest-600">Contact Us →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-all">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                  <span className="font-semibold text-forest-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-forest-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-stone-600 border-t border-stone-100 pt-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
