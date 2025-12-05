import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '@/lib/seo';

interface CTASectionProps { title?: string; subtitle?: string; cityName?: string; }

export default function CTASection({ title = "Ready to Transform Your Outdoor Space?", subtitle = "Get a free consultation and estimate for your landscaping project.", cityName = "Mansfield" }: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/services/hardscaping/DSC04265-2048x1152-1.jpg)' }}>
        <div className="absolute inset-0 bg-forest-950/90" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#contact" className="btn-primary bg-white !text-forest-800 hover:!bg-stone-100 flex items-center justify-center gap-2 text-lg">
              <Calendar size={20} /> Schedule Consultation
            </Link>
            <a href={`tel:${businessInfo.phone}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-800 flex items-center justify-center gap-2 text-lg">
              <Phone size={20} /> {businessInfo.phone}
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-xl p-5 border border-white/10"><p className="text-forest-300 text-sm mb-1">Response Time</p><p className="text-white font-semibold">Within 24 Hours</p></div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10"><p className="text-forest-300 text-sm mb-1">Estimates</p><p className="text-white font-semibold">100% Free</p></div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10"><p className="text-forest-300 text-sm mb-1">Serving</p><p className="text-white font-semibold">{cityName} & Area</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
