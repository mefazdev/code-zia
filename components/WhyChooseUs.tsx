import React from 'react';
import { Users, BookOpen, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Well Experienced Trainers',
    description: 'Dedicated educators fostering a legacy of knowledge and inspiration for all.',
    icon: <Users className="w-10 h-10 text-brand-purple" />,
  },
  {
    title: 'More than 40+ Courses',
    description: 'Elevate your expertise with our curated selection of courses tailored for you.',
    icon: <BookOpen className="w-10 h-10 text-brand-purple" />,
  },
  {
    title: 'We are accredited by',
    description: 'Proudly accredited, ensuring the highest standards of education and training.',
    icon: <Award className="w-10 h-10 text-brand-purple" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h4 className="text-brand-purple font-bold text-lg uppercase tracking-wider">Why choose us</h4>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-purple leading-tight">
                What Makes Us Special
              </h2>
            </div>
            
            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
              At Futura Labs, we understand that choosing the right training courses can 
              significantly impact your future success. Our commitment to excellence shines 
              through in every aspect of our programs. Whether you're looking to enhance 
              your skills, explore new passions, or prepare for a competitive job market, 
              Futura Labs provides the perfect environment for growth and achievement.
            </p>

            <button className="inline-flex items-center gap-3 bg-brand-yellow text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-brand-yellow/90 transition-all hover:scale-105 shadow-xl shadow-brand-yellow/10">
              Know More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start gap-6 p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 group"
              >
                <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:bg-brand-purple/5 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-brand-purple">{feature.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
