export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  // Grass/Sod related
  {
    slug: 'best-grass-types-north-texas',
    title: 'The Best Grass Types for North Texas Lawns',
    excerpt: 'Discover which grass varieties thrive in the North Texas climate and how to maintain a lush, green lawn year-round.',
    content: `<p>Choosing the right grass type for your North Texas lawn is crucial for a thriving, beautiful yard. The intense summer heat and occasional drought conditions make it essential to select varieties that can withstand our unique climate.</p>
    <h2>Top Grass Choices for Mansfield</h2>
    <p><strong>Bermuda Grass</strong> is the most popular choice for North Texas lawns. It thrives in full sun, handles heat well, and recovers quickly from wear and tear.</p>
    <p><strong>St. Augustine</strong> is ideal for shaded areas and provides a lush, carpet-like appearance. It requires more water but rewards you with thick, green coverage.</p>
    <p><strong>Zoysia Grass</strong> offers a balance between drought tolerance and shade performance, making it versatile for various yard conditions.</p>
    <h2>Professional Sod Installation</h2>
    <p>At Mansfield Landscaping, we provide expert sod installation services to give you an instant, beautiful lawn. Our team prepares the soil properly and ensures your new grass gets the best start possible.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-03-15',
    category: 'Lawn Care',
    image: '/images/services/sod-installation/images.jpeg',
    tags: ['lawn care', 'grass', 'sod', 'Mansfield landscaping']
  },
  {
    slug: 'sod-installation-guide-mansfield',
    title: 'Complete Guide to Sod Installation in Mansfield',
    excerpt: 'Everything you need to know about professional sod installation for your Mansfield property.',
    content: `<p>A professional sod installation can transform your yard overnight, giving you an instant lush lawn that would take months to grow from seed.</p>
    <h2>Benefits of Professional Sod Installation</h2>
    <p>When you choose a professional Mansfield landscaping company for sod installation, you get expert soil preparation, proper grading, and premium sod varieties suited for our climate.</p>
    <h2>The Installation Process</h2>
    <p>Our team at Mansfield Landscaping follows a proven process: soil testing, ground preparation, irrigation system check, and careful sod laying with proper seam alignment.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-03-10',
    category: 'Lawn Care',
    image: '/images/services/sod-installation/images-1.jpeg',
    tags: ['sod installation', 'lawn', 'Mansfield landscaper']
  },

  // Tree related
  {
    slug: 'best-trees-for-texas-landscapes',
    title: 'Best Trees for Texas Landscapes',
    excerpt: 'Discover the top tree species that thrive in the North Texas climate and add beauty and value to your property.',
    content: `<p>Selecting the right trees for your Mansfield property is an investment that pays dividends for decades. The right tree provides shade, increases property value, and enhances curb appeal.</p>
    <h2>Top Trees for North Texas</h2>
    <p><strong>Live Oak</strong> - The quintessential Texas tree, known for its spreading canopy and longevity.</p>
    <p><strong>Cedar Elm</strong> - A native Texas tree that's drought-tolerant and provides excellent shade.</p>
    <p><strong>Red Oak</strong> - Fast-growing with beautiful fall color.</p>
    <h2>Professional Tree Planting</h2>
    <p>Our Mansfield landscaping team ensures proper planting depth, root ball handling, and aftercare instructions for every tree we install.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-03-05',
    category: 'Tree Care',
    image: '/images/services/tree-planting/images.jpeg',
    tags: ['trees', 'tree planting', 'landscaping Mansfield TX']
  },
  {
    slug: 'tree-planting-tips-fall',
    title: 'Why Fall is the Best Time to Plant Trees in Texas',
    excerpt: 'Learn why autumn is the ideal season for tree planting in the DFW area.',
    content: `<p>Fall is actually the best time to plant trees in North Texas, not spring as many people think. The cooler temperatures and fall rains help trees establish strong root systems before summer heat arrives.</p>
    <h2>Benefits of Fall Planting</h2>
    <p>Trees planted in fall have months to develop roots before the stress of summer. A Mansfield landscaper can help you select and plant trees at the optimal time.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-02-28',
    category: 'Tree Care',
    image: '/images/services/tree-planting/Unknown.jpeg',
    tags: ['tree planting', 'fall landscaping', 'landscaper in Mansfield']
  },

  // Hardscaping/Pavers
  {
    slug: 'paver-patio-design-ideas',
    title: 'Stunning Paver Patio Design Ideas for Your Backyard',
    excerpt: 'Transform your outdoor living space with beautiful paver patio designs.',
    content: `<p>A well-designed paver patio extends your living space outdoors and creates the perfect setting for entertaining or relaxing with family.</p>
    <h2>Popular Paver Patterns</h2>
    <p>From herringbone to running bond, the pattern you choose can dramatically change the look of your outdoor space.</p>
    <h2>Professional Installation Matters</h2>
    <p>A professional Mansfield landscaping company ensures proper base preparation, drainage, and paver installation for a patio that lasts decades.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-02-20',
    category: 'Hardscaping',
    image: '/images/services/pavers/images.jpeg',
    tags: ['pavers', 'patio', 'hardscaping', 'Mansfield landscaping company']
  },
  {
    slug: 'outdoor-living-trends-2024',
    title: 'Top Outdoor Living Trends for 2024',
    excerpt: 'Discover the hottest outdoor living trends that Mansfield homeowners are embracing.',
    content: `<p>Outdoor living continues to evolve with homeowners seeking to create functional, beautiful spaces that extend their homes into nature.</p>
    <h2>2024 Trends</h2>
    <p>From outdoor kitchens to fire features, pergolas to water features, the options for transforming your backyard are endless.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-02-15',
    category: 'Design Trends',
    image: '/images/services/hardscaping/DSC04265-2048x1152-1.jpg',
    tags: ['outdoor living', 'trends', 'hardscaping']
  },

  // Drainage
  {
    slug: 'french-drain-benefits',
    title: 'How French Drains Protect Your Mansfield Home',
    excerpt: 'Learn how proper drainage solutions can prevent costly water damage to your property.',
    content: `<p>Water pooling in your yard isn't just unsightly—it can cause serious damage to your foundation, landscaping, and outdoor living areas.</p>
    <h2>What is a French Drain?</h2>
    <p>A French drain is a gravel-filled trench with a perforated pipe that redirects water away from problem areas.</p>
    <h2>Signs You Need Drainage Help</h2>
    <p>Standing water, soggy areas, or water in your basement are all signs you need professional drainage solutions from a Mansfield landscaper.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-02-10',
    category: 'Drainage',
    image: '/images/services/french-drain/Unknown.jpeg',
    tags: ['french drain', 'drainage', 'landscapers in Mansfield TX']
  },
  {
    slug: 'drainage-solutions-clay-soil',
    title: 'Drainage Solutions for North Texas Clay Soil',
    excerpt: 'Combat the unique drainage challenges of North Texas clay soil.',
    content: `<p>North Texas is known for its heavy clay soil, which creates unique drainage challenges for homeowners.</p>
    <h2>Why Clay Soil is Problematic</h2>
    <p>Clay soil doesn't absorb water well, leading to pooling, erosion, and foundation issues.</p>
    <h2>Professional Solutions</h2>
    <p>Our Mansfield landscaping team offers comprehensive drainage solutions including French drains, catch basins, and grading.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-02-05',
    category: 'Drainage',
    image: '/images/services/drainage/images.jpeg',
    tags: ['drainage', 'clay soil', 'Mansfield landscaper']
  },

  // Irrigation
  {
    slug: 'smart-irrigation-systems',
    title: 'Smart Irrigation Systems: Save Water and Money',
    excerpt: 'Discover how modern irrigation technology can reduce water waste while keeping your lawn healthy.',
    content: `<p>Smart irrigation systems use weather data and soil moisture sensors to water your lawn only when needed, saving up to 50% on water bills.</p>
    <h2>Benefits of Smart Irrigation</h2>
    <p>Automated scheduling, rain sensors, and zone control ensure your landscape gets exactly the water it needs.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-30',
    category: 'Irrigation',
    image: '/images/services/irrigation/images.jpeg',
    tags: ['irrigation', 'water conservation', 'smart home']
  },
  {
    slug: 'water-conservation-landscaping',
    title: 'Water-Smart Landscaping for North Texas',
    excerpt: 'Learn how to create a beautiful landscape while conserving water in our hot Texas climate.',
    content: `<p>With Texas summers bringing extreme heat and occasional drought conditions, water-smart landscaping is more important than ever.</p>
    <h2>Xeriscaping Principles</h2>
    <p>Using drought-tolerant plants, efficient irrigation, and proper mulching can dramatically reduce water usage.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-25',
    category: 'Water Conservation',
    image: '/images/services/irrigation/Unknown.jpeg',
    tags: ['water conservation', 'irrigation', 'landscaping']
  },

  // Mulch
  {
    slug: 'mulching-benefits-guide',
    title: 'The Ultimate Guide to Mulching Your Landscape',
    excerpt: 'Learn how proper mulching protects your plants and reduces maintenance.',
    content: `<p>Mulch is one of the most beneficial things you can add to your landscape beds. It conserves moisture, suppresses weeds, and improves soil health.</p>
    <h2>Types of Mulch</h2>
    <p>From hardwood to cedar to colored mulch, each type has its benefits. Our Mansfield landscaping team can recommend the best option for your property.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-20',
    category: 'Maintenance',
    image: '/images/services/mulch/images.jpeg',
    tags: ['mulch', 'maintenance', 'landscaping company in Mansfield']
  },

  // Outdoor Lighting
  {
    slug: 'outdoor-lighting-design-tips',
    title: 'Outdoor Lighting Design Tips for Stunning Curb Appeal',
    excerpt: 'Transform your landscape at night with professional outdoor lighting.',
    content: `<p>Professional outdoor lighting extends the enjoyment of your landscape into the evening hours while improving safety and security.</p>
    <h2>Lighting Techniques</h2>
    <p>Uplighting, path lighting, and accent lighting each serve different purposes in creating a cohesive nighttime landscape.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-15',
    category: 'Outdoor Lighting',
    image: '/images/services/outdoor-lighting/images.jpeg',
    tags: ['outdoor lighting', 'curb appeal', 'landscaper in Mansfield']
  },

  // Retaining Walls
  {
    slug: 'retaining-wall-benefits',
    title: 'How Retaining Walls Add Value and Function to Your Property',
    excerpt: 'Discover the many benefits of professional retaining wall installation.',
    content: `<p>Retaining walls do more than just hold back soil—they create usable space, prevent erosion, and add architectural interest to your landscape.</p>
    <h2>When You Need a Retaining Wall</h2>
    <p>Sloped yards, erosion issues, or the desire for tiered planting beds are all great reasons to consider a retaining wall.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-10',
    category: 'Hardscaping',
    image: '/images/services/retaining-walls/images.jpeg',
    tags: ['retaining walls', 'hardscaping', 'Mansfield landscaping']
  },

  // Landscape Design
  {
    slug: 'spring-landscaping-checklist',
    title: 'Spring Landscaping Checklist for Texas Homeowners',
    excerpt: 'Get your landscape ready for the growing season with this comprehensive checklist.',
    content: `<p>Spring is the perfect time to rejuvenate your landscape after winter dormancy.</p>
    <h2>Spring Tasks</h2>
    <p>Pruning, mulching, fertilizing, and irrigation system checks are all essential spring tasks.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-05',
    category: 'Seasonal Tips',
    image: '/images/services/landscape-design/images.jpeg',
    tags: ['spring', 'maintenance', 'landscaping Mansfield TX']
  },
  {
    slug: 'landscape-design-process',
    title: 'What to Expect from Professional Landscape Design',
    excerpt: 'Learn about the landscape design process and how to work with a professional designer.',
    content: `<p>Professional landscape design transforms your outdoor vision into a detailed plan that guides every aspect of your project.</p>
    <h2>The Design Process</h2>
    <p>From initial consultation to 3D renderings, our Mansfield landscaping company walks you through every step.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2024-01-01',
    category: 'Design',
    image: '/images/services/landscape-design/images-1.jpeg',
    tags: ['landscape design', 'planning', 'Mansfield landscaping company']
  },

  // Flagstone
  {
    slug: 'flagstone-vs-pavers',
    title: 'Flagstone vs Pavers: Which is Right for Your Patio?',
    excerpt: 'Compare the pros and cons of flagstone and pavers for your outdoor living space.',
    content: `<p>Both flagstone and pavers create beautiful outdoor surfaces, but each has distinct characteristics that may make one better suited for your project.</p>
    <h2>Flagstone Benefits</h2>
    <p>Natural beauty, unique patterns, and timeless appeal make flagstone a popular choice for patios and walkways.</p>
    <h2>Paver Benefits</h2>
    <p>Uniform sizing, pattern options, and easier repairs make pavers versatile for many applications.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2023-12-20',
    category: 'Hardscaping',
    image: '/images/services/flagstone/images.jpeg',
    tags: ['flagstone', 'pavers', 'patio', 'landscapers in Mansfield TX']
  },

  // Concrete
  {
    slug: 'stamped-concrete-ideas',
    title: 'Stamped Concrete Ideas for Your Outdoor Space',
    excerpt: 'Explore creative stamped concrete options for patios, driveways, and walkways.',
    content: `<p>Stamped concrete offers the look of natural stone or brick at a fraction of the cost, making it a popular choice for outdoor surfaces.</p>
    <h2>Popular Patterns</h2>
    <p>From slate to cobblestone to wood plank patterns, stamped concrete can mimic almost any material.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2023-12-15',
    category: 'Hardscaping',
    image: '/images/services/concrete/images.jpeg',
    tags: ['concrete', 'stamped concrete', 'patio']
  },

  // River Rock
  {
    slug: 'river-rock-landscaping-ideas',
    title: 'Creative River Rock Landscaping Ideas',
    excerpt: 'Discover beautiful ways to incorporate river rock into your landscape design.',
    content: `<p>River rock adds texture, drainage, and low-maintenance beauty to any landscape.</p>
    <h2>Uses for River Rock</h2>
    <p>Dry creek beds, mulch alternatives, drainage solutions, and decorative accents are just a few applications.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2023-12-10',
    category: 'Landscaping',
    image: '/images/services/river-rock/images.jpeg',
    tags: ['river rock', 'landscaping', 'low maintenance']
  },

  // Leaf Cleanup
  {
    slug: 'fall-leaf-cleanup-importance',
    title: 'Why Fall Leaf Cleanup is Essential for Your Lawn',
    excerpt: 'Learn why removing fallen leaves is crucial for lawn health.',
    content: `<p>While fallen leaves may look picturesque, leaving them on your lawn can cause serious damage.</p>
    <h2>Problems Caused by Leaf Buildup</h2>
    <p>Smothered grass, fungal diseases, and pest habitat are all consequences of neglecting leaf cleanup.</p>`,
    author: 'Mansfield Landscaping Team',
    date: '2023-12-05',
    category: 'Maintenance',
    image: '/images/services/leaf-cleanup/images.jpeg',
    tags: ['leaf cleanup', 'fall maintenance', 'lawn care']
  },
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
export const getAllBlogSlugs = () => blogPosts.map(p => p.slug);
export const getRecentPosts = (limit = 3) => blogPosts.slice(0, limit);
