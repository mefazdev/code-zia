import React from 'react';
import { Users, BookOpen, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Expert-Led Mentorship',
    description: 'Skilled professionals committed to guiding learners with practical insights and inspiring continuous growth.',
    icon: <Users className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: 'Diverse Learning Programs',
    description: 'Explore a wide range of carefully designed courses crafted to strengthen your skills and support your career growth.',
    icon: <BookOpen className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: 'Recognized & Certified',
    description: 'Aligned with trusted standards, reflecting our commitment to quality learning and professional excellence.',
    icon: <Award className="w-10 h-10 text-brand-blue" />,
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
              <h4 className="text-brand-blue font-bold text-lg uppercase tracking-wider">What Sets Us Apart
              </h4>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-blue leading-tight">
                What Defines Us

              </h2>
            </div>

            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
              Choosing the right place to learn can shape the direction of your entire career, and that’s where CodeZia makes a difference. We focus on creating meaningful learning experiences that go beyond traditional training, helping individuals build confidence and real-world capabilities. Whether you're starting fresh, switching paths, or aiming to stay relevant in a competitive industry, CodeZia provides the guidance, resources, and environment needed to grow and move toward your goals.

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
                className="flex items-start gap-6 p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:bg-brand-blue/5 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-brand-blue">{feature.title}</h3>
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
