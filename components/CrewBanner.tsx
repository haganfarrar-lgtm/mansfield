import Link from 'next/link';
import { Phone } from 'lucide-react';
import { businessInfo } from '@/lib/seo';

interface CrewBannerProps {
  variant?: 'full' | 'compact';
}

export default function CrewBanner({ variant = 'compact' }: CrewBannerProps) {
  if (variant === 'full') {
    return (
      <section className="py-16 bg-forest-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet Your Local Landscaping Team
              </h2>
              <p className="text-forest-200 text-lg mb-6">
                Our experienced crew has been serving Mansfield and the DFW area for over 15 years. 
                We take pride in every project and treat your property like our own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="btn-primary bg-white !text-forest-900 hover:!bg-stone-100">
                  Get Free Quote
                </Link>
                <a href={`tel:${businessInfo.phone}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-900 flex items-center justify-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/hardscaping/DSC04265-2048x1152-1.jpg" 
                  alt="Mansfield Landscaping hardscaping project"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/pavers/images.jpeg" 
                  alt="Mansfield Landscaping paver installation"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Compact version
  return (
    <section className="py-8 bg-stone-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img 
                  src="/images/services/hardscaping/Unknown-1.jpeg" 
                  alt="Hardscaping project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img 
                  src="/images/services/pavers/images.jpeg" 
                  alt="Paver project"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-forest-900">Your Local Mansfield Team</p>
              <p className="text-stone-600 text-sm">15+ Years Experience • 1000+ Projects</p>
            </div>
          </div>
          <a href={`tel:${businessInfo.phone}`} className="btn-primary flex items-center gap-2">
            <Phone size={18} /> {businessInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

