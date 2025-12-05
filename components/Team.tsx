import { Shield, Award, Clock, Users } from 'lucide-react';

export default function Team() {
  const stats = [
    { icon: Users, value: '15+', label: 'Expert Team Members' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '1000+', label: 'Projects Completed' },
    { icon: Shield, value: '100%', label: 'Satisfaction Guaranteed' },
  ];

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Meet Our Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
            The Mansfield Landscaping Crew
          </h2>
          <p className="text-lg text-stone-600">
            Our experienced team of landscaping professionals brings dedication, skill, and attention to detail to every project. 
            We take pride in transforming outdoor spaces across Mansfield and the DFW area.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-stone-200">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-forest-700" />
              </div>
              <div className="font-display text-3xl font-bold text-forest-900">{stat.value}</div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Work */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hardscaping Photo */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/services/hardscaping/DSC04265-2048x1152-1.jpg"
              alt="Mansfield Landscaping hardscaping project"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-xl font-semibold">Professional Service</p>
              <p className="text-forest-200">Quality craftsmanship on every project</p>
            </div>
          </div>
          
          {/* Pavers Photo */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/services/pavers/images.jpeg"
              alt="Mansfield Landscaping paver installation"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-xl font-semibold">Expert Installation</p>
              <p className="text-forest-200">Experienced professionals serving Mansfield</p>
            </div>
          </div>
        </div>

        {/* Team Description */}
        <div className="mt-12 bg-forest-950 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Why Choose Our Team?
              </h3>
              <p className="text-forest-200 mb-6">
                Every member of the Mansfield Landscaping crew is trained, experienced, and committed to excellence. 
                We treat your property like our own, ensuring every detail is perfect.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-forest-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Background-checked & insured professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-forest-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Ongoing training in latest techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-forest-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Respectful of your property & time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-forest-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Local Mansfield area experts</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/images/services/landscape-design/images.jpeg"
                alt="Mansfield Landscaping work"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-forest-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold">Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
