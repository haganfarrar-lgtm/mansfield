import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import CrewBanner from '@/components/CrewBanner';
import { getCityBySlug, getAllCitySlugs, getNearbyCities } from '@/data/cities';
import { generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema, businessInfo } from '@/lib/seo';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface PageProps { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  if (!city) return {};
  
  return genMeta({
    title: `#1 Landscaping Company in ${city.name}, TX | Professional Landscapers`,
    description: `Professional landscaping services in ${city.name}, Texas. Expert hardscaping, landscape design, paver installation, sod, irrigation & more. ⭐ 5-Star Rated. Serving ${city.name} & surrounding areas. Call ${businessInfo.phone} for FREE estimate!`,
    keywords: [
      `landscaping ${city.name} TX`,
      `${city.name} landscaping company`,
      `landscaper in ${city.name}`,
      `${city.name} landscaper`,
      `hardscaping ${city.name}`,
      `lawn care ${city.name} TX`,
      `landscape design ${city.name}`,
      `paver installation ${city.name}`,
    ],
    path: `/cities/${city.slug}`,
  });
}

export default async function CityPage(props: PageProps) {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const nearbyCities = getNearbyCities(city.slug);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: city.name, url: `/cities/${city.slug}` },
  ];

  // City-specific FAQs
  const cityFaqs = [
    { 
      question: `What landscaping services do you offer in ${city.name}?`, 
      answer: `We offer comprehensive landscaping services in ${city.name} including landscape design, hardscaping, paver installation, sod installation, tree planting, mulching, irrigation systems, outdoor lighting, retaining walls, and French drain installation.` 
    },
    { 
      question: `How much does landscaping cost in ${city.name}, TX?`, 
      answer: `Landscaping costs in ${city.name} vary by project scope. Small projects start around $500, while comprehensive landscape renovations range from $5,000-$50,000+. Contact us for a free estimate tailored to your ${city.name} property.` 
    },
    { 
      question: `Do you serve the ${city.name} area?`, 
      answer: `Yes! ${city.name} is one of our primary service areas. We proudly serve ${city.name} and surrounding communities including ${nearbyCities.slice(0, 3).map(c => c.name).join(', ')}, and more.` 
    },
    { 
      question: `How do I get a landscaping quote in ${city.name}?`, 
      answer: `Getting a quote is easy! Call us at ${businessInfo.phone} or fill out our online form. We offer free, no-obligation estimates for all ${city.name} properties.` 
    },
    { 
      question: `Are you licensed to do landscaping in ${city.name}?`, 
      answer: `Yes, we are fully licensed and insured to perform landscaping and hardscaping work in ${city.name}, TX and throughout Tarrant County and the DFW metroplex.` 
    },
  ];

  return (
    <>
      {/* LocalBusiness Schema for this city */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(city.name)) }} 
      />
      
      {/* Breadcrumb Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} 
      />
      
      {/* FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(cityFaqs)) }} 
      />
      
      <Hero 
        cityName={city.name} 
        backgroundImage="/images/services/landscape-design/images.jpeg"
        title={`Professional Landscaping in ${city.name}, TX`}
        subtitle={`Transform your outdoor space with ${city.name}'s trusted landscaping company. 15+ years experience, 5-star rated.`}
      />
      
      {/* City Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-stone-500">
              <li><Link href="/" className="hover:text-forest-700">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><span className="text-forest-700">{city.name}</span></li>
            </ol>
          </nav>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-950 mb-6">
              Professional Landscaping Services in {city.name}, Texas
            </h1>
            <p className="text-lg text-stone-600 mb-8">{city.description}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-forest-50 rounded-xl p-6 text-center border border-forest-100">
                <div className="text-3xl font-bold text-forest-700 mb-2">15+</div>
                <div className="text-stone-600">Years Serving {city.name}</div>
              </div>
              <div className="bg-forest-50 rounded-xl p-6 text-center border border-forest-100">
                <div className="text-3xl font-bold text-forest-700 mb-2">⭐ 5.0</div>
                <div className="text-stone-600">Star Rating</div>
              </div>
              <div className="bg-forest-50 rounded-xl p-6 text-center border border-forest-100">
                <div className="text-3xl font-bold text-forest-700 mb-2">100%</div>
                <div className="text-stone-600">Satisfaction Guaranteed</div>
              </div>
            </div>
            
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-100">
                <h2 className="font-display text-xl font-semibold text-forest-900 mb-4">
                  Neighborhoods We Serve in {city.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {city.neighborhoods.map((neighborhood) => (
                    <span 
                      key={neighborhood} 
                      className="bg-white px-4 py-2 rounded-full text-forest-700 text-sm border border-forest-200"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Services citySlug={city.slug} showAll />
      <CrewBanner variant="compact" />
      <Testimonials />
      <FAQ faqs={cityFaqs} cityName={city.name} />
      
      {/* Nearby Cities Section */}
      <section className="section-padding bg-stone-100">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-forest-950 mb-4">
            Also Serving Cities Near {city.name}
          </h2>
          <p className="text-stone-600 mb-8">
            In addition to {city.name}, we provide professional landscaping services throughout the DFW metroplex.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyCities.map((nearbyCity) => (
              <Link 
                key={nearbyCity.slug} 
                href={`/cities/${nearbyCity.slug}`} 
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all group border border-stone-200"
              >
                <MapPin className="w-6 h-6 text-forest-600 mx-auto mb-2" />
                <p className="font-semibold text-forest-900 group-hover:text-forest-700">{nearbyCity.name}</p>
                <p className="text-stone-500 text-sm">{nearbyCity.distance} mi away</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection cityName={city.name} />
      <ContactForm cityName={city.name} />
    </>
  );
}
