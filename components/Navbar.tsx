import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image 
          src='/logo-1.png' 
          alt='Futura Labs Logo' 
          width={180} 
          height={50} 
          className="object-contain"
          priority 
        />
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm">
        <Link href="/coming-soon" className="hover:text-white transition-colors">About</Link>
        <Link href="/coming-soon" className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>Courses</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="/coming-soon" className="hover:text-white transition-colors">Placements</Link>
        <Link href="/coming-soon" className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>Internship</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="/coming-soon" className="hover:text-white transition-colors">Careers</Link>
        <Link href="/coming-soon" className="hover:text-white transition-colors">Coding Club</Link>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="bg-brand-yellow text-black px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-brand-yellow/90 transition-all group"
      >
        Contact us
        <div className="bg-white rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-3 h-3" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
