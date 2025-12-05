import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { generateMetadata as genMeta, generateBreadcrumbSchema, businessInfo } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Landscaping Blog | Tips, Trends & Expert Advice',
  description: `Expert landscaping tips, trends, and advice from Mansfield's top landscaping company. Learn about lawn care, hardscaping, irrigation, tree planting & more. ${businessInfo.name} Blog.`,
  path: '/blog',
  keywords: [
    'landscaping tips',
    'landscaping blog',
    'lawn care tips Texas',
    'hardscaping ideas',
    'Mansfield landscaping tips',
    'DFW landscaping blog',
    'outdoor living ideas',
    'garden design tips',
  ],
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  // Calculate reading time helper
  const getReadingTime = (content: string) => {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  // Group posts by category for better organization
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      
      {/* Blog CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Mansfield Landscaping Blog',
            description: 'Expert landscaping tips, trends, and advice from Mansfield\'s top landscaping company.',
            url: `${businessInfo.url}/blog`,
            isPartOf: {
              '@type': 'WebSite',
              name: businessInfo.name,
              url: businessInfo.url,
            },
            about: {
              '@type': 'Thing',
              name: 'Landscaping',
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: blogPosts.slice(0, 10).map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${businessInfo.url}/blog/${post.slug}`,
                name: post.title,
              })),
            },
          }),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-forest-950 text-white py-20">
        <div className="container-custom px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-forest-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><span className="text-white">Blog</span></li>
            </ol>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Landscaping Tips & Expert Advice
            </h1>
            <p className="text-xl text-forest-200">
              Expert insights on lawn care, hardscaping, landscape design, and outdoor living 
              from Mansfield&apos;s trusted landscaping professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-stone-200 sticky top-[72px] z-40">
        <div className="container-custom px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 bg-forest-700 text-white rounded-full text-sm font-medium">
              All Posts
            </span>
            {categories.slice(0, 6).map((category) => (
              <span 
                key={category}
                className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium hover:bg-forest-100 hover:text-forest-700 cursor-pointer transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-stone-100"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      itemProp="image"
                      loading={index < 6 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        <time itemProp="datePublished" dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {getReadingTime(post.content)} min read
                      </span>
                    </div>
                    <h2 
                      className="font-display text-xl font-semibold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors line-clamp-2"
                      itemProp="headline"
                    >
                      {post.title}
                    </h2>
                    <p 
                      className="text-stone-600 mb-4 line-clamp-2"
                      itemProp="description"
                    >
                      {post.excerpt}
                    </p>
                    <span className="text-forest-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-950 text-white">
        <div className="container-custom px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-forest-200 text-lg mb-8 max-w-2xl mx-auto">
            Put our expert advice into action! Contact Mansfield Landscaping for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary bg-white !text-forest-800 hover:!bg-stone-100">
              Get Free Quote
            </Link>
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-800"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
