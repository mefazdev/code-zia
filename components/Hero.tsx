import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col  overflow-hidden bg-brand-blue">
      {/* Background Wave */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right glow or decorative shape if needed */}
      </div>

      <div className="  mx-auto px-6 pt-12 pb-32 flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-brand-yellow leading-tight tracking-tight">
              Digital<br />
              Marketing<br />
              Course In<br />
              Kerala
            </h1>
            <p className="text-xl font-medium text-white/90 border-l-2 border-brand-yellow pl-4">
              Best Digital Marketing Training Calicut |<br />
              Kochi
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 border border-white/40 hover:bg-white hover:text-brand-blue px-6 py-3 rounded-2xl font-bold transition-all group">
              Enquire now
              <div className="bg-white/20 group-hover:bg-brand-blue/10 rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            <button className="flex items-center gap-2 border border-white/40 hover:bg-white hover:text-brand-blue px-6 py-3 rounded-2xl font-bold transition-all group">
              Call now
              <div className="bg-white/20 group-hover:bg-brand-blue/10 rounded-full p-1">
                <Phone className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-2 pt-8">
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
            <div className="w-6 h-2 rounded-full bg-white"></div>
            <div className="w-6 h-2 rounded-full bg-brand-yellow"></div>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          {/* Placed Students Badge */}
          <div className="absolute top-0 right-0 z-20 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 flex flex-col items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                  {/* Placeholder for student avatars */}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center border-2 border-white">300+</div>
            </div>
            <span className="text-white text-[10px] font-bold mt-1">Placed Students</span>
          </div>

          {/* Floating Paper Planes (Simple SVG representation) */}
          <div className="absolute top-1/4 left-0 animate-bounce opacity-40 scale-75">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
          </div>
          <div className="absolute bottom-1/4 right-0 animate-pulse opacity-40">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
          </div>

          {/* Student Images Grid */}
          <div className="flex gap-4 relative">
            {/* Student 1 (Green) */}
            <div className="relative w-48 h-64 sm:w-64 sm:h-80 bg-brand-green rounded-[40px] overflow-hidden transform -rotate-3 mt-12 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image
                src="/hero-3.jpg"
                alt="Student training"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Student 2 (Orange) */}
            <div className="relative w-48 h-64 sm:w-64 sm:h-96 bg-brand-orange rounded-[40px] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image
                src="/hero-4.jpg"
                alt="Software professional training"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#" className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform border border-zinc-100">
          <MessageCircle className="w-10 h-10 fill-current" />
        </a>
      </div>

      {/* Background Decor - Abstract wavy bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-32 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
