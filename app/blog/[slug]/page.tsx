import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag, User, Clock } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/data/blog-posts';
import { generateMetadata as genMeta, generateArticleSchema, generateBreadcrumbSchema, businessInfo } from '@/lib/seo';
import CTASection from '@/components/CTASection';

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  
  return genMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image.startsWith('/') ? post.image : `/images/services/landscape-design/images.jpeg`,
    type: 'article',
    keywords: post.tags,
  });
}

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Calculate reading time
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(post)) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      
      <article itemScope itemType="https://schema.org/Article">
        <meta itemProp="author" content={businessInfo.name} />
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="dateModified" content={post.date} />
        
        <header className="bg-forest-950 text-white py-16">
          <div className="container-custom px-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-forest-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={18} />Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-sm text-forest-300 mb-4">
                <span className="bg-forest-800 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  <time itemProp="datePublished" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {readingTime} min read
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  <span itemProp="author">{post.author}</span>
                </span>
              </div>
              <h1 
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                itemProp="headline"
              >
                {post.title}
              </h1>
              <p className="text-xl text-forest-200" itemProp="description">{post.excerpt}</p>
            </div>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container-custom">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-stone-500">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {index > 0 && <span>/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-forest-700">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.url} className="hover:text-forest-700 transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <figure className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="eager"
                  />
                </figure>
                
                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-forest-900 prose-p:text-stone-600 prose-a:text-forest-700 prose-strong:text-forest-800 prose-ul:text-stone-600 prose-li:text-stone-600"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                
                {/* Tags */}
                <footer className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-stone-200">
                  <span className="text-stone-500 text-sm mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="flex items-center gap-1 bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm hover:bg-forest-100 hover:text-forest-700 transition-colors"
                      itemProp="keywords"
                    >
                      <Tag size={12} />{tag}
                    </span>
                  ))}
                </footer>
                
                {/* Call to Action */}
                <div className="mt-8 p-6 bg-forest-50 rounded-xl border border-forest-100">
                  <h3 className="font-display text-xl font-semibold text-forest-900 mb-2">
                    Need Professional Landscaping Help?
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Contact Mansfield Landscaping for a free consultation. We serve Mansfield and surrounding DFW communities.
                  </p>
                  <Link href="/#contact" className="btn-primary inline-block">
                    Get Free Quote
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <aside className="space-y-8">
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 sticky top-32">
                  <h3 className="font-display text-lg font-semibold text-forest-900 mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((related) => (
                      <li key={related.slug}>
                        <Link href={`/blog/${related.slug}`} className="group block">
                          <p className="font-medium text-stone-800 group-hover:text-forest-700 transition-colors mb-1 line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-sm text-stone-500">
                            {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <Link 
                      href="/blog" 
                      className="text-forest-700 font-medium hover:text-forest-600 transition-colors"
                    >
                      View All Articles →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
      
      <CTASection 
        title="Ready to Start Your Project?" 
        subtitle="Get a free consultation and bring your landscaping vision to life." 
      />
    </>
  );
}
