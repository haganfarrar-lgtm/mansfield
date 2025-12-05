'use client';

import { Phone, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { useEffect } from 'react';

interface ContactFormProps { cityName?: string; serviceName?: string; }

export default function ContactForm({ cityName = 'Mansfield' }: ContactFormProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { const s = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]'); if (s) s.remove(); };
  }, []);

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">Get Your Free Quote</h2>
          <p className="text-lg text-stone-600">Ready to transform your outdoor space? Fill out the form below for your {cityName} property.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-100">
              <h3 className="font-display text-xl font-semibold text-forest-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`tel:${businessInfo.phone}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center group-hover:bg-forest-200"><Phone className="w-5 h-5 text-forest-700" /></div>
                  <div><p className="text-sm text-stone-500 mb-1">Phone</p><p className="font-semibold text-forest-900">{businessInfo.phone}</p></div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5 text-forest-700" /></div>
                  <div><p className="text-sm text-stone-500 mb-1">Business Hours</p><div className="text-forest-900 text-sm"><p>{businessInfo.hours.weekday}</p></div></div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4"><p className="font-display text-2xl font-bold text-forest-700">15+</p><p className="text-sm text-stone-600">Years</p></div>
                <div className="p-4"><p className="font-display text-2xl font-bold text-forest-700">500+</p><p className="text-sm text-stone-600">Clients</p></div>
                <div className="p-4"><p className="font-display text-2xl font-bold text-forest-700">5.0</p><p className="text-sm text-stone-600">Rating</p></div>
                <div className="p-4"><p className="font-display text-2xl font-bold text-forest-700">100%</p><p className="text-sm text-stone-600">Satisfaction</p></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <iframe src="https://api.leadconnectorhq.com/widget/form/RyQqEas8KXaIt0svSmog?notrack=true" style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }} id="inline-RyQqEas8KXaIt0svSmog" title="Contact Form" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
