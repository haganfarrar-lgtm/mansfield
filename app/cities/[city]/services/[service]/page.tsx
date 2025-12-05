import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import CrewBanner from '@/components/CrewBanner';
import { getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getServiceBySlug, getAllServiceSlugs, services } from '@/data/services';
import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, businessInfo } from '@/lib/seo';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Star, Shield, Clock } from 'lucide-react';

interface PageProps { params: Promise<{ city: string; service: string }> }

export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  const serviceSlugs = getAllServiceSlugs();
  return citySlugs.flatMap((city) => serviceSlugs.map((service) => ({ city, service })));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  if (!city || !service) return {};
  
  return genMeta({
    title: `${service.name} in ${city.name}, TX | Professional ${service.name} Services`,
    description: `Expert ${service.name.toLowerCase()} services in ${city.name}, Texas. ${service.shortDescription} ⭐ 5-Star Rated | Free Estimates. Serving ${city.name} & DFW. Call ${businessInfo.phone}!`,
    keywords: [
      `${service.name} ${city.name} TX`,
      `${service.name.toLowerCase()} ${city.name}`,
      `${service.slug} services ${city.name}`,
      `best ${service.name.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} company ${city.name}`,
      `${service.name.toLowerCase()} near me`,
      `${city.name} ${service.name.toLowerCase()}`,
    ],
    path: `/cities/${city.slug}/services/${service.slug}`,
    image: service.images[0] || '/images/services/hardscaping/DSC04265-2048x1152-1.jpg',
  });
}

export default async function ServicePage(props: PageProps) {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  if (!city || !service) notFound();

  const relatedServices = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 4);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: city.name, url: `/cities/${city.slug}` },
    { name: service.name, url: `/cities/${city.slug}/services/${service.slug}` },
  ];

  // Service-specific FAQs
  const serviceFaqs = [
    { 
      question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`, 
      answer: `${service.name} costs in ${city.name} vary based on project size and complexity. Contact us for a free, no-obligation estimate tailored to your specific needs. We offer competitive pricing and financing options.` 
    },
    { 
      question: `How long does ${service.name.toLowerCase()} take in ${city.name}?`, 
      answer: `${service.name} project timelines depend on the scope of work. Small projects may take 1-2 days, while larger projects can take 1-2 weeks. We'll provide a detailed timeline during your free consultation.` 
    },
    { 
      question: `Do you offer free ${service.name.toLowerCase()} estimates in ${city.name}?`, 
      answer: `Yes! We provide free, no-obligation estimates for all ${service.name.toLowerCase()} projects in ${city.name}. Call ${businessInfo.phone} or fill out our online form to schedule your consultation.` 
    },
    { 
      question: `Why choose your company for ${service.name.toLowerCase()} in ${city.name}?`, 
      answer: `With 15+ years of experience, 1000+ completed projects, and a 5-star rating, we're ${city.name}'s trusted choice for ${service.name.toLowerCase()}. We use quality materials, employ skilled professionals, and back our work with warranties.` 
    },
    { 
      question: `What areas do you serve for ${service.name.toLowerCase()} near ${city.name}?`, 
      answer: `We provide ${service.name.toLowerCase()} services throughout ${city.name} and surrounding areas including Mansfield, Arlington, Grand Prairie, Burleson, Midlothian, and the greater DFW metroplex.` 
    },
  ];

  return (
    <>
      {/* Service Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service, city.name)) }} 
      />
      
      {/* Breadcrumb Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} 
      />
      
      {/* FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(serviceFaqs)) }} 
      />
      
      <Hero 
        cityName={city.name} 
        serviceName={service.name} 
        backgroundImage={service.images[0]}
        title={`Professional ${service.name} in ${city.name}, TX`}
        subtitle={`${service.shortDescription} Expert service from ${city.name}'s trusted landscaping company.`}
      />
      
      {/* Photo Gallery Section */}
      {service.images && service.images.length > 0 && (
        <section className="py-12 bg-stone-100">
          <div className="container-custom">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest-950 mb-8 text-center">
              Our {service.name} Work in {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.images.slice(0, 8).map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg group"
                >
                  <img
                    src={image}
                    alt={`${service.name} project ${index + 1} in ${city.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
            {service.images.length > 8 && (
              <p className="text-center text-stone-600 mt-6">
                And {service.images.length - 8} more {city.name} projects completed...
              </p>
            )}
          </div>
        </section>
      )}
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-stone-500">
              <li><Link href="/" className="hover:text-forest-700">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href={`/cities/${city.slug}`} className="hover:text-forest-700">{city.name}</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><span className="text-forest-700">{service.name}</span></li>
            </ol>
          </nav>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-950 mb-6">
                {service.name} Services in {city.name}, Texas
              </h1>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-forest-50 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium text-forest-800">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-forest-50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-forest-600" />
                  <span className="text-sm font-medium text-forest-800">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-forest-50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-forest-600" />
                  <span className="text-sm font-medium text-forest-800">15+ Years Experience</span>
                </div>
              </div>
              
              <p className="text-lg text-stone-600 mb-8">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-forest-50 rounded-xl p-6 border border-forest-100">
                  <h3 className="font-display text-xl font-semibold text-forest-900 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-earth-50 rounded-xl p-6 border border-earth-100">
                  <h3 className="font-display text-xl font-semibold text-earth-900 mb-4">
                    Benefits for {city.name} Homeowners
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* More Photos Section */}
              {service.images && service.images.length > 8 && (
                <div className="mb-12">
                  <h3 className="font-display text-2xl font-bold text-forest-950 mb-6">
                    More {service.name} Projects in {city.name}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.images.slice(8).map((image, index) => (
                      <div 
                        key={index} 
                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group"
                      >
                        <img
                          src={image}
                          alt={`${service.name} project ${index + 9} in ${city.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-forest-950 text-white rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Get a Free {service.name} Quote in {city.name}
                </h3>
                <p className="text-forest-200 mb-6">
                  Contact us today for a free, no-obligation estimate for your {city.name} property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="btn-primary bg-white !text-forest-900 hover:!bg-stone-100">
                    Request Free Quote
                  </Link>
                  <a 
                    href={`tel:${businessInfo.phone}`} 
                    className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-900 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />{businessInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Featured Image */}
              {service.images && service.images.length > 0 && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={service.images[0]}
                    alt={`${service.name} featured project in ${city.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 sticky top-32">
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-4">
                  Related Services in {city.name}
                </h3>
                <ul className="space-y-3">
                  {relatedServices.map((related) => (
                    <li key={related.slug}>
                      <Link 
                        href={`/cities/${city.slug}/services/${related.slug}`} 
                        className="flex items-center justify-between py-2 text-stone-700 hover:text-forest-700 group transition-colors"
                      >
                        <span>{related.name}</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <h4 className="font-semibold text-forest-900 mb-3">Call Us Today</h4>
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center gap-2 text-forest-700 hover:text-forest-600 font-medium text-lg"
                  >
                    <Phone size={20} />
                    {businessInfo.phone}
                  </a>
                  <p className="text-sm text-stone-500 mt-2">
                    Free estimates • {businessInfo.hours.weekday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CrewBanner variant="full" />
      <FAQ faqs={serviceFaqs} cityName={city.name} />
      <CTASection cityName={city.name} />
      <ContactForm cityName={city.name} serviceName={service.name} />
    </>
  );
}
