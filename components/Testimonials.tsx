'use client';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Mitchell', location: 'Mansfield, TX', rating: 5, text: 'Absolutely transformed our backyard! The paver patio exceeded our expectations.', project: 'Paver Patio' },
  { name: 'Michael Thompson', location: 'Arlington, TX', rating: 5, text: 'Complete landscape renovation. The results are stunning and our property value increased.', project: 'Landscape Design' },
  { name: 'Jennifer Rodriguez', location: 'Grand Prairie, TX', rating: 5, text: 'Best landscaping company in the area! Great communication and fair pricing.', project: 'Irrigation' },
  { name: 'David Chen', location: 'Burleson, TX', rating: 5, text: 'The outdoor fireplace is the centerpiece of our backyard. Quality workmanship.', project: 'Outdoor Fireplace' },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-forest-950 text-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-400 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-forest-900/50 rounded-2xl p-8 md:p-12 border border-forest-800 relative">
            <Quote className="absolute top-8 left-8 text-forest-700 w-16 h-16 opacity-50" />
            <div className="relative">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => <Star key={i} size={24} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 italic">"{testimonials[activeIndex].text}"</p>
              <div>
                <p className="font-semibold text-white text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-forest-400">{testimonials[activeIndex].location}</p>
                <p className="text-stone-500 text-sm mt-1">{testimonials[activeIndex].project}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-forest-800">
              <button onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center"><ChevronLeft size={24} /></button>
              <div className="flex-1 flex justify-center gap-2">
                {testimonials.map((_, i) => <button key={i} onClick={() => setActiveIndex(i)} className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-forest-400 w-8' : 'bg-forest-700'}`} />)}
              </div>
              <button onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)} className="w-12 h-12 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-forest-800">
          <div className="text-center"><p className="font-display text-4xl md:text-5xl font-bold text-forest-400">500+</p><p className="text-stone-400 mt-2">Happy Clients</p></div>
          <div className="text-center"><p className="font-display text-4xl md:text-5xl font-bold text-forest-400">15+</p><p className="text-stone-400 mt-2">Years Experience</p></div>
          <div className="text-center"><p className="font-display text-4xl md:text-5xl font-bold text-forest-400">1000+</p><p className="text-stone-400 mt-2">Projects</p></div>
          <div className="text-center"><p className="font-display text-4xl md:text-5xl font-bold text-forest-400">5.0</p><p className="text-stone-400 mt-2">Star Rating</p></div>
        </div>
      </div>
    </section>
  );
}
