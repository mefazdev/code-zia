import React from 'react';
import Link from 'next/link';
import {
  Camera as Instagram,
  Globe as Linkedin,
  Users as Facebook,
  MessageSquare as Twitter,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src='/logo-1.png'
                alt='Futura Labs Logo'
                width={150}
                height={40}
                className="object-contain invert brightness-0"
              />
            </Link>
            <p className="text-white/60 leading-relaxed">
              Leading software training institute in Kerala, transforming students into skilled IT professionals since 2016.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">Our Courses</Link></li>
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">Placements</Link></li>
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">Internship</Link></li>
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">Careers</Link></li>
              <li><Link href="/coming-soon" className="hover:text-brand-yellow transition-colors">Coding Club</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-4 text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <p>Wandoor</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <p>+91 91234 56789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <p>info@thefuturalabs.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-white/60">Subscribe to get the latest updates and course news.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-brand-yellow transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-yellow text-black px-4 rounded-xl hover:bg-brand-yellow/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Futura Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
