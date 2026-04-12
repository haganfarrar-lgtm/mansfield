'use client';

export default function ContactForm({ cityName = '' }: { cityName?: string; serviceName?: string }) {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-6">Get Your Free Estimate</h2>
          <p className="text-lg text-stone-600">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/form/V9QMkt1feBt2gDK2gXPy"
            style={{ width: '100%', height: '700px', border: 'none', borderRadius: '12px' }}
            scrolling="yes"
            title="Get Free Estimate"
          />
        </div>
      </div>
    </section>
  );
}