import Link from 'next/link';
import { Phone, ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import { businessInfo } from '@/lib/seo';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cityName?: string;
  serviceName?: string;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, cityName = 'Mansfield', serviceName, backgroundImage }: HeroProps) {
  const defaultTitle = serviceName 
    ? `Professional ${serviceName} in ${cityName}`
    : `Architectural Landscape Design in ${cityName}`;
  
  const defaultSubtitle = serviceName
    ? `Expert ${serviceName.toLowerCase()} services for ${cityName} properties. Quality craftsmanship guaranteed.`
    : `Transforming ${cityName} properties with modern hardscaping, sustainable design, and precision maintenance.`;

  // Default to a hardscaping image if no background specified
  const bgImage = backgroundImage || '/images/services/hardscaping/DSC04265-2048x1152-1.jpg';

  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row">
      {/* Text Content - Left Side */}
      <div className="lg:w-1/2 flex items-center bg-stone-50 relative z-10">
        <div className="px-6 py-20 lg:px-16 xl:px-24 w-full">
          <div className="inline-block mb-6">
            <span className="text-earth-600 font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-earth-600 pb-1">
              Est. 2009 • {cityName}, Texas
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-forest-900 mb-8 leading-[1.1] tracking-tight">
            {title || defaultTitle}
          </h1>

          <p className="text-lg lg:text-xl text-forest-600 mb-10 leading-relaxed max-w-xl border-l-4 border-earth-400 pl-6">
            {subtitle || defaultSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Link href="#contact" className="btn-primary flex items-center justify-center gap-3 group">
              Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${businessInfo.phone}`} className="btn-outline flex items-center justify-center gap-3">
              <Phone size={18} /> {businessInfo.phone}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div>
              <p className="font-display text-3xl font-bold text-forest-900 mb-1">15+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Years Exp.</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-forest-900 mb-1">500+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Projects</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-forest-900 mb-1">5.0</p>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-stone-50 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-full bg-forest-900 rounded-tl-[100px] opacity-0" /> 
          {/* Cut corner effect */}
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="text-forest-900 fill-current hidden">
             <path d="M0 100 L100 100 L100 0 Q 0 0 0 100 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
