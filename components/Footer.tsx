import Link from 'next/link';
import { Phone, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      {/* Hero Banner */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="/images/services/hardscaping/DSC04265-2048x1152-1.jpg" 
          alt="Mansfield Landscaping - Beautiful Hardscaping"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/50 to-forest-950" />
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-white text-xl font-semibold">Trusted by Mansfield Homeowners</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-forest-800 to-forest-700">
        <div className="container-custom py-12 px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-forest-100 text-lg mb-8 max-w-2xl mx-auto">Get a free consultation and estimate for your landscaping project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary bg-white !text-forest-800 hover:!bg-stone-100">Get Your Free Quote</Link>
            <a href={`tel:${businessInfo.phone}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-800">
              <Phone size={18} className="inline mr-2" />{businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo className="h-14" darkMode />
            </div>
            <p className="text-stone-400 mb-6">Premier landscaping and hardscaping services in Mansfield, Texas and surrounding communities.</p>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              <span className="text-stone-400 text-sm ml-2">5.0 Rating</span>
            </div>
            <div className="flex gap-3">
              <a href={businessInfo.social.facebook} className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"><Facebook size={20} /></a>
              <a href={businessInfo.social.instagram} className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 10).map((service) => (
                <li key={service.slug}><Link href={`/cities/mansfield/services/${service.slug}`} className="text-stone-400 hover:text-white text-sm transition-colors">{service.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {cities.slice(0, 10).map((city) => (
                <li key={city.slug}><Link href={`/cities/${city.slug}`} className="text-stone-400 hover:text-white text-sm transition-colors">{city.name}, TX</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li><a href={`tel:${businessInfo.phone}`} className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"><div className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center"><Phone size={18} className="text-forest-400" /></div>{businessInfo.phone}</a></li>
              <li className="flex items-start gap-3 text-stone-400"><div className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center flex-shrink-0"><Clock size={18} className="text-forest-400" /></div><div className="text-sm"><p>{businessInfo.hours.weekday}</p></div></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="container-custom py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-stone-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
