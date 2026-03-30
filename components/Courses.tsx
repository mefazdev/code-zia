'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Layers, 
  Database, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  PieChart, 
  Globe, 
  Blocks,
  ArrowRight
} from 'lucide-react';

const courses = [
  { name: 'Flutter', category: 'Coding', icon: <Blocks className="w-8 h-8 text-blue-500" /> },
  { name: 'Data Analytics', category: 'Coding', icon: <BarChart3 className="w-8 h-8 text-green-500" /> },
  { name: 'React JS', category: 'Coding', icon: <Layers className="w-8 h-8 text-cyan-500" /> },
  { name: 'Data Science', category: 'Coding', icon: <Database className="w-8 h-8 text-purple-500" /> },
  { name: 'Dot NET', category: 'Coding', icon: <Terminal className="w-8 h-8 text-blue-700" /> },
  { name: 'Python– Django Fullstack', category: 'Coding', icon: <Cpu className="w-8 h-8 text-yellow-600" /> },
  { name: 'Software Testing & QA', category: 'Coding', icon: <ShieldCheck className="w-8 h-8 text-red-500" /> },
  { name: 'Power BI', category: 'Coding', icon: <PieChart className="w-8 h-8 text-yellow-500" /> },
  { name: 'PHP-Laravel Full Stack Development', category: 'Coding', icon: <Globe className="w-8 h-8 text-indigo-500" /> },
  { name: 'MERN Fullstack', category: 'Coding', icon: <Code2 className="w-8 h-8 text-green-600" /> },
];

const categories = ['Coding', 'Design', 'Digital marketing'];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('Coding');

  const filteredCourses = courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h4 className="text-brand-purple font-bold text-lg uppercase tracking-wider">Our Courses</h4>
          <h2 className="text-4xl lg:text-5xl font-black text-brand-purple">Trainings We Offer</h2>
          <p className="max-w-3xl mx-auto text-zinc-600 text-lg leading-relaxed pt-2">
            Explore our carefully curated courses that blend academic excellence with practical skills, 
            preparing you for success in your chosen field. We train you to upgrade your skills and 
            practical knowledge, with the broadly designed syllabus and state-of-the-art facility. 
            Choose among various software training programs we are offering and get the mentorship of 
            industry experts to stand sturdy in the industry.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-xl font-bold transition-all border-2 ${
                activeCategory === category
                  ? 'bg-brand-purple text-white border-brand-purple shadow-lg scale-105'
                  : 'bg-white text-brand-purple border-zinc-100 hover:border-brand-purple/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div 
                key={course.name}
                className="group p-8 rounded-3xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-center text-center gap-4 cursor-pointer hover:-translate-y-2"
              >
                <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:bg-brand-purple/5 transition-colors">
                  {course.icon}
                </div>
                <h3 className="font-bold text-brand-purple leading-tight">{course.name}</h3>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-zinc-400 font-medium italic">
              Courses for this category will be added soon.
            </div>
          )}
        </div>

        {/* Footer Button */}
        <button className="inline-flex items-center gap-3 bg-brand-yellow text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-brand-yellow/90 transition-all hover:scale-105 shadow-xl shadow-brand-yellow/20">
          View all courses
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Courses;
