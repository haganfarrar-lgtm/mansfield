import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { generateFAQSchema, generateWebPageSchema, businessInfo } from '@/lib/seo';

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: '#1 Landscaping Company in Mansfield, TX | Professional Landscapers',
  description: `Mansfield's premier landscaping company with 15+ years experience. Expert hardscaping, landscape design, paver installation, sod, irrigation, tree planting & more. ⭐ 5-Star Rated | 1000+ Projects. Serving Mansfield, Arlington, Grand Prairie, Burleson & DFW. Call ${businessInfo.phone} for FREE estimate!`,
  keywords: [
    'landscaping Mansfield TX',
    'Mansfield landscaping company',
    'landscaper in Mansfield',
    'Mansfield landscaper',
    'hardscaping Mansfield',
    'landscape design Mansfield TX',
    'paver installation Mansfield',
    'best landscaper Mansfield',
    'landscaping near me Mansfield',
    'lawn care Mansfield TX',
    'outdoor living Mansfield',
    'sod installation Mansfield',
    'tree planting Mansfield TX',
    'irrigation Mansfield',
    'retaining walls Mansfield',
    'Arlington landscaping',
    'Burleson landscaping',
    'Grand Prairie landscaping',
  ].join(', '),
  openGraph: {
    title: 'Mansfield Landscaping | #1 Rated Landscaping Company in Mansfield, TX',
    description: 'Transform your outdoor space with Mansfield\'s top-rated landscaping company. 15+ years experience, 1000+ projects completed. Free estimates!',
    url: businessInfo.url,
    images: [
      {
        url: '/images/services/hardscaping/DSC04265-2048x1152-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mansfield Landscaping Professional Hardscaping',
      },
    ],
  },
  alternates: {
    canonical: businessInfo.url,
  },
};

// Comprehensive FAQ for SEO
const faqs = [
  {
    question: 'What landscaping services do you offer in Mansfield?',
    answer: 'We offer comprehensive landscaping services including landscape design, hardscaping, paver installation, sod installation, tree planting, mulching, irrigation systems, outdoor lighting, retaining walls, French drains, and seasonal maintenance. We are a full-service Mansfield landscaping company.'
  },
  {
    question: 'What areas do you serve near Mansfield, TX?',
    answer: 'We proudly serve Mansfield, Arlington, Grand Prairie, Burleson, Midlothian, Cedar Hill, DeSoto, Duncanville, Fort Worth, Dallas, and surrounding DFW communities within 50 miles of Mansfield.'
  },
  {
    question: 'Do you offer free landscaping estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all landscaping and hardscaping projects. Contact us to schedule a consultation with our Mansfield landscaping experts.'
  },
  {
    question: 'How long does a typical landscaping project take?',
    answer: 'Project timelines vary based on scope. Small projects like mulching or sod installation take 1-2 days. Medium projects like paver patios take 1-2 weeks. Large landscape renovations may take 2-4 weeks. We provide detailed timelines during your estimate.'
  },
  {
    question: 'Are you a licensed and insured landscaping company?',
    answer: 'Yes, Mansfield Landscaping is fully licensed and insured. We carry comprehensive liability insurance and workers\' compensation to protect your property and our team.'
  },
  {
    question: 'Do you offer warranties on landscaping work?',
    answer: 'Yes, we provide warranties on both materials and labor. Plant materials come with a 1-year warranty, and hardscaping work is backed by our workmanship guarantee. We stand behind our work.'
  },
  {
    question: 'What makes Mansfield Landscaping different from other landscapers?',
    answer: 'With 15+ years of experience, 1000+ completed projects, and a 5-star rating, we combine expertise with exceptional customer service. Our team consists of trained professionals who treat your property like their own. We are locally owned and operated in Mansfield.'
  },
  {
    question: 'How do I get started with a landscaping project?',
    answer: 'Getting started is easy! Call us at (682) 397-8603 or fill out our online contact form. We\'ll schedule a free on-site consultation to discuss your vision, provide recommendations, and deliver a detailed estimate.'
  },
  {
    question: 'What is the best time of year for landscaping in Texas?',
    answer: 'In North Texas, fall (September-November) and spring (March-May) are ideal for most landscaping projects. These seasons offer moderate temperatures that help plants establish roots. However, we work year-round and can advise on the best timing for your specific project.'
  },
  {
    question: 'Do you offer financing for landscaping projects?',
    answer: 'Yes, we offer flexible financing options for larger landscaping and hardscaping projects. Ask about our payment plans during your free consultation. We accept cash, checks, and all major credit cards.'
  },
];

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    title: 'Mansfield Landscaping - Premier Landscaping Services in Mansfield, TX',
    description: businessInfo.description,
    url: '/',
  });

  return (
    <>
      {/* FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} 
      />
      
      {/* WebPage Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} 
      />
      
      {/* Hero Section */}
      <Hero backgroundImage="/images/services/hardscaping/DSC04265-2048x1152-1.jpg" />
      
      {/* Services Section */}
      <Services limit={4} />
      
      {/* Meet the Team Section */}
      <Team />
      
      {/* Projects Gallery */}
      <Projects />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section - Important for SEO */}
      <FAQ faqs={faqs} />
      
      {/* Call to Action */}
      <CTASection />
      
      {/* Contact Form - Lead Generation */}
      <ContactForm />
    </>
  );
}
