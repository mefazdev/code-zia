import React from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Students', value: '3000+' },
  { label: 'Placements', value: '2000+' },
  { label: 'Trainers', value: '40+' },
  { label: 'Years of Experience', value: '10+' },
];

const About = () => {
  return (
    <section className="py-24 bg-[#e8f2ff]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h4 className="text-brand-blue font-bold text-lg uppercase tracking-wider">About us</h4>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-blue leading-tight text-pretty">
              CodeZia is your gateway to mastering modern technology and building a career with practical, future-ready skills.
            </h2>
          </div>

          <p className="text-zinc-600 text-lg leading-relaxed">
            CodeZia is a modern tech learning hub with a presence in Kozhikode and Kochi, focused on helping individuals stay ahead in today’s fast-evolving digital landscape. Our programs are designed to build practical skills that match current industry needs, ensuring learners are well-prepared for real-world opportunities. As an active part of CAFIT (Calicut Forum for IT) since 2016, we are deeply connected to the region’s growing technology ecosystem. With a strong emphasis on hands-on training and career readiness, CodeZia has earned a reputation as a reliable choice for software education in Kerala, backed by consistently strong placement outcomes.
          </p>

          <button className="inline-flex items-center gap-3 bg-brand-yellow text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-brand-yellow/90 transition-all hover:scale-105 shadow-xl shadow-brand-yellow/10">
            Know More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Stats Grid */}
        <div className="flex-1 w-full max-w-xl">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white p-8 rounded-[32px] shadow-2xl shadow-blue-500/5 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 border border-blue-100/50"
              >
                <span className="text-4xl lg:text-5xl font-black text-brand-blue mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
