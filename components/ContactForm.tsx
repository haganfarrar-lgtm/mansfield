'use client'

import { useState, FormEvent } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://app.lowkly.com/api/webhooks/leads/q3fp5i6sogd', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, address: formData.address, budget: formData.budget, message: formData.message, source: window.location.hostname, sourceUrl: window.location.href }),
      })
      if (res.ok) { setStatus('success'); setFormData({ name: '', phone: '', address: '', budget: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[400px] border border-stone-100 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-stone-800 mb-2">Thank You!</h3>
        <p className="text-stone-600">We&apos;ve received your request and will be in touch shortly.</p>
      </div>
    </div>
  )

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-stone-800 mb-1">Get Your Free Estimate</h3>
        <p className="text-stone-500 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
            <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition text-stone-800" placeholder="John Smith" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
            <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition text-stone-800" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">Address *</label>
            <input type="text" id="address" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition text-stone-800" placeholder="123 Main St, City, TX" />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-stone-700 mb-1">Budget *</label>
            <select id="budget" required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition text-stone-800 bg-white">
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
            <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition text-stone-800 resize-none" placeholder="Tell us about your project..." />
          </div>
          <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-lg">
            {status === 'sending' ? 'Sending...' : 'Get My Free Estimate'}
          </button>
        </form>
        {status === 'error' && <p className="text-red-500 text-sm mt-3 text-center">Something went wrong. Please call us directly.</p>}
      </div>
    </div>
  )
}

export default ContactForm
