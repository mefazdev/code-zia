import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  { id: '01', text: 'Understanding & Creating a Customised Training Plan for each student' },
  { id: '02', text: 'Enabling the student for the Industry' },
  { id: '03', text: 'Transforming the Student as a Professional' },
  { id: '04', text: 'Accelerating the Skills' },
  { id: '05', text: 'Providing Placement Opportunities' },
];

const highlights = [
  'Expert Training Team',
  'Courses For Freshers And Professionals',
  'Leading Software Training Institute In Kerala',
];

const Process = () => {
  return (
    <section className="py-24 bg-brand-purple text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h4 className="text-brand-yellow font-bold text-lg uppercase tracking-wider">Our process</h4>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight text-pretty">
                Take Off On A Fabulous Career Journey
              </h2>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Navigating the admissions process at our institution is a straightforward and
              transparent experience. Our process is more than a curriculum; it's a transformative
              experience crafted to elevate your skills, mindset, and career prospects.
              Join us at Futura Labs and embrace the journey to excellence.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Process Steps */}
          <div className="flex-1 w-full space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/10 border border-white/10 hover:bg-white hover:text-brand-purple transition-all duration-500 cursor-default"
              >
                <span className="text-3xl font-black opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.id}
                </span>
                <p className="text-lg font-bold leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
