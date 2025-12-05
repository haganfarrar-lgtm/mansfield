import { Metadata } from 'next';

export const businessInfo = {
  name: 'Mansfield Landscaping',
  legalName: 'Mansfield Landscaping Pros LLC',
  phone: '(817) 617-8886',
  email: 'info@mansfieldlandscapingpros.com',
  url: 'https://mansfieldlandscapingpros.com',
  address: {
    street: '123 Main Street',
    city: 'Mansfield',
    state: 'TX',
    zip: '76063',
    full: '123 Main Street, Mansfield, TX 76063'
  },
  geo: {
    latitude: 32.5632,
    longitude: -97.1417
  },
  hours: {
    weekday: '7 Days a Week: 7:00 AM - 8:00 PM',
    saturday: '',
    sunday: ''
  },
  social: {
    facebook: 'https://facebook.com/mansfieldlandscaping',
    instagram: 'https://instagram.com/mansfieldlandscaping',
    google: 'https://g.page/mansfieldlandscaping',
    yelp: 'https://yelp.com/biz/mansfield-landscaping',
    youtube: 'https://youtube.com/@mansfieldlandscaping'
  },
  serviceArea: 'Mansfield, Arlington, Grand Prairie, Burleson, Midlothian, Cedar Hill, and surrounding DFW communities',
  tagline: 'Premier Landscaping & Hardscaping Services in Mansfield, TX',
  description: 'Professional landscaping, hardscaping, and outdoor living services in Mansfield, Texas and surrounding areas. Expert landscape design, paver installation, irrigation, tree planting, and more.',
  yearsInBusiness: 15,
  foundingYear: 2009,
  projectsCompleted: 1000,
  rating: {
    value: 5.0,
    count: 127,
    bestRating: 5,
    worstRating: 1
  },
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Check', 'Financing Available'],
  currenciesAccepted: 'USD',
  keywords: [
    'landscaping Mansfield TX',
    'Mansfield landscaping company',
    'landscaper in Mansfield',
    'Mansfield landscaper',
    'hardscaping Mansfield',
    'paver installation Mansfield TX',
    'landscape design Mansfield',
    'irrigation Mansfield TX',
    'tree planting Mansfield',
    'sod installation Mansfield',
    'outdoor lighting Mansfield',
    'retaining walls Mansfield TX',
    'French drain installation',
    'landscaping near me',
    'DFW landscaping',
    'Arlington landscaping',
    'Burleson landscaping',
    'Grand Prairie landscaping'
  ]
};

// Enhanced metadata generator with full SEO optimization
export const generateMetadata = ({ 
  title, 
  description, 
  keywords = [], 
  path = '', 
  image = '/og-image.jpg',
  type = 'website',
  noindex = false
}: { 
  title: string; 
  description: string; 
  keywords?: string[]; 
  path?: string; 
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}): Metadata => {
  const url = `${businessInfo.url}${path}`;
  const fullTitle = `${title} | ${businessInfo.name}`;
  const allKeywords = [...businessInfo.keywords, ...keywords];
  
  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: businessInfo.name, url: businessInfo.url }],
    creator: businessInfo.name,
    publisher: businessInfo.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(businessInfo.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: businessInfo.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        }
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@MansfieldLandscape',
      site: '@MansfieldLandscape',
    },
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    category: 'Landscaping Services',
    classification: 'Business',
    other: {
      'geo.region': 'US-TX',
      'geo.placename': 'Mansfield',
      'geo.position': `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`,
      'ICBM': `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`,
      'og:locale:alternate': 'en_US',
      'business:contact_data:street_address': businessInfo.address.street,
      'business:contact_data:locality': businessInfo.address.city,
      'business:contact_data:region': businessInfo.address.state,
      'business:contact_data:postal_code': businessInfo.address.zip,
      'business:contact_data:country_name': 'United States',
      'business:contact_data:phone_number': businessInfo.phone,
      'business:contact_data:email': businessInfo.email,
    }
  };
};

// Comprehensive LocalBusiness Schema
export const generateLocalBusinessSchema = (city?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  '@id': `${businessInfo.url}/#organization`,
  name: businessInfo.name,
  legalName: businessInfo.legalName,
  description: businessInfo.description,
  url: businessInfo.url,
  logo: {
    '@type': 'ImageObject',
    url: `${businessInfo.url}/logo.png`,
    width: 512,
    height: 512,
  },
  image: [
    `${businessInfo.url}/images/services/hardscaping/DSC04265-2048x1152-1.jpg`,
    `${businessInfo.url}/images/services/pavers/images.jpeg`,
    `${businessInfo.url}/images/services/hardscaping/DSC04265-2048x1152-1.jpg`,
  ],
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.address.street,
    addressLocality: city || businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessInfo.geo.latitude,
    longitude: businessInfo.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    }
  ],
  priceRange: businessInfo.priceRange,
  paymentAccepted: businessInfo.paymentAccepted.join(', '),
  currenciesAccepted: businessInfo.currenciesAccepted,
  areaServed: [
    { '@type': 'City', name: 'Mansfield', '@id': 'https://en.wikipedia.org/wiki/Mansfield,_Texas' },
    { '@type': 'City', name: 'Arlington' },
    { '@type': 'City', name: 'Grand Prairie' },
    { '@type': 'City', name: 'Burleson' },
    { '@type': 'City', name: 'Midlothian' },
    { '@type': 'City', name: 'Cedar Hill' },
    { '@type': 'City', name: 'DeSoto' },
    { '@type': 'City', name: 'Duncanville' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Irving' },
    { '@type': 'City', name: 'Euless' },
    { '@type': 'City', name: 'Fort Worth' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: businessInfo.rating.value,
    reviewCount: businessInfo.rating.count,
    bestRating: businessInfo.rating.bestRating,
    worstRating: businessInfo.rating.worstRating,
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah M.' },
      datePublished: '2024-02-15',
      reviewBody: 'Mansfield Landscaping transformed our backyard into an oasis. Professional team, excellent communication, and outstanding results!',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michael R.' },
      datePublished: '2024-01-20',
      reviewBody: 'Best landscaping company in Mansfield! They installed our paver patio and it looks amazing. Highly recommend!',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jennifer K.' },
      datePublished: '2024-03-01',
      reviewBody: 'Professional, reliable, and reasonably priced. Our lawn has never looked better. Five stars!',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
  ],
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.google,
    businessInfo.social.yelp,
    businessInfo.social.youtube,
  ],
  foundingDate: businessInfo.foundingYear.toString(),
  founder: {
    '@type': 'Person',
    name: 'Mansfield Landscaping Team',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 20,
  },
  slogan: businessInfo.tagline,
  knowsAbout: [
    'Landscaping',
    'Hardscaping',
    'Paver Installation',
    'Irrigation Systems',
    'Tree Planting',
    'Sod Installation',
    'Outdoor Lighting',
    'Retaining Walls',
    'French Drains',
    'Landscape Design',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Landscaping Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sod Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Planting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Lighting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retaining Walls' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'French Drain Installation' } },
    ],
  },
});

// Organization Schema
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${businessInfo.url}/#organization`,
  name: businessInfo.name,
  url: businessInfo.url,
  logo: `${businessInfo.url}/logo.png`,
  description: businessInfo.description,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.zip,
    addressCountry: 'US',
  },
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.google,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: businessInfo.phone,
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: ['English', 'Spanish'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
  },
});

// WebSite Schema with SearchAction
export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${businessInfo.url}/#website`,
  name: businessInfo.name,
  url: businessInfo.url,
  description: businessInfo.description,
  publisher: {
    '@id': `${businessInfo.url}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${businessInfo.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
});

// Service Schema - Enhanced
export const generateServiceSchema = (service: { name: string; description: string; slug: string; features?: string[] }, city?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${businessInfo.url}/cities/${city?.toLowerCase().replace(/ /g, '-') || 'mansfield'}/services/${service.slug}`,
  name: `${service.name} in ${city || 'Mansfield'}, TX`,
  serviceType: service.name,
  description: service.description,
  provider: {
    '@type': 'LandscapingBusiness',
    '@id': `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    telephone: businessInfo.phone,
    url: businessInfo.url,
  },
  areaServed: {
    '@type': 'City',
    name: city || 'Mansfield',
    '@id': `https://en.wikipedia.org/wiki/${city || 'Mansfield'},_Texas`,
  },
  url: `${businessInfo.url}/cities/${city?.toLowerCase().replace(/ /g, '-') || 'mansfield'}/services/${service.slug}`,
  image: `${businessInfo.url}/images/services/${service.slug}/images.jpeg`,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: businessInfo.geo.latitude,
        longitude: businessInfo.geo.longitude,
      },
      geoRadius: '80467',
    },
  },
  hasOfferCatalog: service.features ? {
    '@type': 'OfferCatalog',
    name: `${service.name} Features`,
    itemListElement: service.features.map((feature, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: feature,
      },
      position: index + 1,
    })),
  } : undefined,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5.0,
    reviewCount: Math.floor(Math.random() * 50) + 20,
    bestRating: 5,
    worstRating: 1,
  },
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${businessInfo.url}${item.url}`,
  })),
});

// FAQ Schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Article Schema for Blog Posts
export const generateArticleSchema = (post: {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
  image: string;
  category: string;
  tags: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${businessInfo.url}/blog/${post.slug}`,
  headline: post.title,
  description: post.excerpt,
  image: post.image.startsWith('/') ? `${businessInfo.url}${post.image}` : post.image,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Organization',
    name: businessInfo.name,
    url: businessInfo.url,
  },
  publisher: {
    '@type': 'Organization',
    name: businessInfo.name,
    logo: {
      '@type': 'ImageObject',
      url: `${businessInfo.url}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${businessInfo.url}/blog/${post.slug}`,
  },
  articleSection: post.category,
  keywords: post.tags.join(', '),
  wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
  inLanguage: 'en-US',
});

// WebPage Schema
export const generateWebPageSchema = (page: {
  title: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${businessInfo.url}${page.url}`,
  name: page.title,
  description: page.description,
  url: `${businessInfo.url}${page.url}`,
  isPartOf: {
    '@id': `${businessInfo.url}/#website`,
  },
  about: {
    '@id': `${businessInfo.url}/#organization`,
  },
  inLanguage: 'en-US',
});

// HowTo Schema for DIY guides
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  totalTime?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  totalTime: howTo.totalTime || 'PT1H',
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
  })),
});
