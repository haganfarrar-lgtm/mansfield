import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import LeadPopup from '@/components/LeadPopup';
import Footer from '@/components/Footer';
import { businessInfo, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#166534' },
    { media: '(prefers-color-scheme: dark)', color: '#14532d' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | #1 Landscaping Company in Mansfield, TX`,
    template: `%s | ${businessInfo.name}`,
  },
  description: 'Mansfield\'s premier landscaping company. Professional hardscaping, landscape design, paver installation, irrigation, tree planting, sod installation & more. Serving Mansfield, Arlington, Grand Prairie, Burleson & DFW. ⭐ 5-Star Rated. Call (682) 397-8603 for free estimate!',
  keywords: businessInfo.keywords.join(', '),
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
    canonical: businessInfo.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: businessInfo.url,
    siteName: businessInfo.name,
    title: `${businessInfo.name} | #1 Landscaping Company in Mansfield, TX`,
    description: 'Transform your outdoor space with Mansfield\'s top-rated landscaping company. Expert hardscaping, landscape design, pavers, irrigation & more. Free estimates!',
    images: [
      {
        url: '/images/services/hardscaping/DSC04265-2048x1152-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mansfield Landscaping - Professional Hardscaping Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | #1 Landscaping in Mansfield, TX`,
    description: 'Transform your outdoor space with Mansfield\'s top-rated landscaping company. Free estimates! Call (682) 397-8603',
    images: ['/images/services/hardscaping/DSC04265-2048x1152-1.jpg'],
    creator: '@MansfieldLandscape',
    site: '@MansfieldLandscape',
  },
  robots: {
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#166534' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Landscaping Services',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Mansfield',
    'geo.position': `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`,
    'ICBM': `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`,
    'rating': 'General',
    'distribution': 'Global',
    'revisit-after': '7 days',
    'msapplication-TileColor': '#166534',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow" id="main-content" role="main">
          {children}
        </main>
        <Footer />
          <LeadPopup />
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest-700 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
