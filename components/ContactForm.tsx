'use client';

import { Phone, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { useState, FormEvent } from 'react';

interface ContactFormProps { cityName?: string; serviceName?: string; }

export default function ContactForm({ cityName = 'Mansfield' }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://app.lowkly.com/api/webhooks/leads/q3fp5i6sogd', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, address: formData.address, budget: formData.budget, message: formData.message, source: window.location.hostname, sourceUrl: window.location.href }),
      });
      if (res.ok) { setStatus('success'); setFormData({ name: '', phone: '', address: '', budget: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };


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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition text-stone-800" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition text-stone-800" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">Address *</label>
                  <input type="text" id="address" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition text-stone-800" placeholder="123 Main St, City, TX" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-stone-700 mb-1">Budget *</label>
                  <select id="budget" required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition text-stone-800 bg-white">
                    <option value="">Select Your Budget</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                    <option value="$2,000 - $3,000">$2,000 - $3,000</option>
                    <option value="$3,000 - $4,000">$3,000 - $4,000</option>
                    <option value="$4,000 - $5,000">$4,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition text-stone-800 resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-ocean-600 hover:bg-ocean-700 text-white font-bold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                  {status === 'sending' ? 'Sending...' : 'Get My Free Estimate'}
                </button>
                {status === 'error' && <p className="text-red-500 text-sm mt-3 text-center">Something went wrong. Please call us directly.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
