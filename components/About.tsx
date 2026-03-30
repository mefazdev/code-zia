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
    <section className="py-24 bg-[#f7f1ff]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h4 className="text-brand-purple font-bold text-lg uppercase tracking-wider">About us</h4>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-purple leading-tight text-pretty">
              Accelerate Your Career: Leading Software Training Institute In Kerala
            </h2>
          </div>
          
          <p className="text-zinc-600 text-lg leading-relaxed">
            Futura Labs is an IT training institute located in Kozhikode city and Kochi, offering 
            skill development services to enhance and upgrade one’s skills with contemporary 
            career trends. We have been a member of Cafit- Calicut Forum for IT since its 
            inception in 2016. Be a part of FUTURA LABS, the best learning platform to transform 
            you into a skilled and trained IT professional. We are one of Kerala's most trusted 
            software training institutes, with the highest placement records.
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
                className="bg-white p-8 rounded-[32px] shadow-2xl shadow-purple-500/5 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 border border-purple-100/50"
              >
                <span className="text-4xl lg:text-5xl font-black text-brand-purple mb-2 group-hover:scale-110 transition-transform">
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
