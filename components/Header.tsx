'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { getServicesByCategory } from '@/data/services';
import { cities } from '@/data/cities';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const serviceCategories = [
    { name: 'Landscaping', category: 'landscaping' as const },
    { name: 'Hardscaping', category: 'hardscaping' as const },
    { name: 'Specialty', category: 'specialty' as const },
    { name: 'Maintenance', category: 'maintenance' as const },
  ];

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCitiesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setServicesOpen(false);
      if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) setCitiesOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white text-forest-900 sticky top-0 z-50 border-b border-stone-200">
      <nav className="container-custom py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <Logo className="h-16" />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm uppercase tracking-widest font-bold hover:text-earth-600 transition-colors">Home</Link>
            
            <div className="relative" ref={servicesRef}>
              <button className="flex items-center gap-1 text-sm uppercase tracking-widest font-bold hover:text-earth-600 transition-colors" onClick={() => { setServicesOpen(!servicesOpen); setCitiesOpen(false); }}>
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50">
                  <div className="w-[800px] bg-white text-forest-900 shadow-sharp p-8 grid grid-cols-2 gap-8 border-2 border-forest-900">
                    {serviceCategories.map((cat) => (
                      <div key={cat.category}>
                        <h3 className="font-display text-lg font-bold text-earth-600 mb-4 uppercase tracking-widest border-b-2 border-earth-100 pb-2">{cat.name}</h3>
                        <ul className="space-y-3">
                          {getServicesByCategory(cat.category).slice(0, 6).map((service) => (
                            <li key={service.slug}>
                              <Link href={`/cities/mansfield/services/${service.slug}`} className="text-sm font-medium text-stone-600 hover:text-forest-900 hover:translate-x-1 block transition-all">{service.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={citiesRef}>
              <button className="flex items-center gap-1 text-sm uppercase tracking-widest font-bold hover:text-earth-600 transition-colors" onClick={() => { setCitiesOpen(!citiesOpen); setServicesOpen(false); }}>
                Areas <ChevronDown size={14} className={`transition-transform ${citiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50">
                  <div className="w-[500px] bg-white text-forest-900 shadow-sharp p-8 border-2 border-forest-900">
                    <h3 className="font-display text-lg font-bold text-earth-600 mb-4 uppercase tracking-widest border-b-2 border-earth-100 pb-2">Cities We Serve</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {cities.slice(0, 16).map((city) => (
                        <Link key={city.slug} href={`/cities/${city.slug}`} className="text-sm font-medium text-stone-600 hover:text-forest-900 hover:translate-x-1 block transition-all">{city.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-sm uppercase tracking-widest font-bold hover:text-earth-600 transition-colors">Journal</Link>
            <Link href="/#contact" className="btn-primary text-xs">Get Quote</Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`} className="p-2 bg-earth-500 text-white hover:bg-earth-600 transition-colors"><Phone size={20} /></a>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-stone-200 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link href="/" className="py-2 font-bold uppercase tracking-widest hover:text-earth-600">Home</Link>
              <Link href="/cities/mansfield" className="py-2 font-bold uppercase tracking-widest hover:text-earth-600">Services</Link>
              <Link href="/blog" className="py-2 font-bold uppercase tracking-widest hover:text-earth-600">Journal</Link>
              <a href={`tel:${businessInfo.phone}`} className="btn-primary text-center">Call {businessInfo.phone}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
