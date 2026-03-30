import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Hammer, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Reusing Navbar for consistency */}
      <div className="bg-brand-purple text-white">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl -z-10" />
        
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-purple px-4 py-2 rounded-full font-bold text-sm">
            <Hammer className="w-4 h-4" />
            Under Construction
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-brand-purple leading-tight">
            Something Great is <br />
            <span className="text-brand-yellow bg-brand-purple px-4 py-2 inline-block -rotate-1">
              Coming Soon
            </span>
          </h1>

          <p className="text-zinc-600 text-xl leading-relaxed">
            We're working hard to bring you the best experience. This page is currently 
            under development and will be available shortly. Stay tuned!
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-brand-purple/90 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Brand Logo Watermark */}
        <div className="absolute bottom-12 opacity-5 scale-150 -z-20 border-4 border-brand-purple rounded-full p-20 animate-pulse">
           <Image src="/logo-1.png" alt="" width={300} height={200} className="grayscale" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
