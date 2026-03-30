import React from 'react';
import { X, Star } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-brand-yellow py-2 px-4 flex items-center justify-between relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center gap-4 text-black font-semibold text-sm sm:text-base">
        <Star className="w-5 h-5 fill-current text-[#7C3AED]" />
        <span>Admission open for March 2026 Batch</span>
        <Star className="w-5 h-5 fill-current text-[#7C3AED]" />
      </div>
      <button className="text-black/60 hover:text-black transition-colors">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Banner;
