'use client';
import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  { title: 'Modern Patio Design', location: 'Mansfield, TX', category: 'Hardscaping', image: '/images/services/hardscaping/DSC04265-2048x1152-1.jpg' },
  { title: 'Complete Landscape Renovation', location: 'Arlington, TX', category: 'Landscaping', image: '/images/services/landscape-design/images.jpeg' },
  { title: 'Paver Patio Installation', location: 'Grand Prairie, TX', category: 'Hardscaping', image: '/images/services/pavers/images.jpeg' },
  { title: 'Flagstone Pathway', location: 'Burleson, TX', category: 'Hardscaping', image: '/images/services/flagstone/images.jpeg' },
  { title: 'Outdoor Lighting', location: 'Midlothian, TX', category: 'Outdoor Living', image: '/images/services/outdoor-lighting/images.jpeg' },
  { title: 'Sod Installation', location: 'Cedar Hill, TX', category: 'Landscaping', image: '/images/services/sod-installation/images.jpeg' },
  { title: 'Retaining Wall', location: 'Mansfield, TX', category: 'Hardscaping', image: '/images/services/retaining-walls/images.jpeg' },
  { title: 'French Drain System', location: 'Arlington, TX', category: 'Custom Design', image: '/images/services/french-drain/Unknown.jpeg' },
  { title: 'Mulch & Flower Beds', location: 'Grand Prairie, TX', category: 'Landscaping', image: '/images/services/mulch/images.jpeg' },
];

const categories = ['All', 'Landscaping', 'Hardscaping', 'Custom Design', 'Outdoor Living'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-stone-100" id="projects">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">Featured Projects</h2>
          <p className="text-lg text-stone-600">Browse our recent landscaping and hardscaping projects in Mansfield and surrounding areas.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === category ? 'bg-forest-700 text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-forest-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-forest-300 text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />{project.location}
                  </div>
                </div>
              </div>
              <div className="p-5 group-hover:opacity-0 transition-opacity">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-forest-600 text-sm font-medium">{project.category}</span>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />{project.location}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
