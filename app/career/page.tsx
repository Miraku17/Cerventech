'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, ArrowRight, DollarSign, Heart, Clock3, Home, TrendingUp, Calendar } from 'lucide-react';
import { JobPosition } from '@/types';
import FadeIn from '@/components/FadeIn';

const Career: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const jobs: JobPosition[] = [
    {
      id: 'field-engineer',
      title: 'Field Engineer',
      department: 'Technical Support',
      location: 'Makati, PH',
      type: 'Full-time',
      salary: '25,000 / month',
      description: 'Provides on-site technical support, installation, maintenance, and troubleshooting for systems and equipment in various industries.'
    },
    {
      id: 'service-desk',
      title: 'Service Desk',
      department: 'IT Support',
      location: 'Makati, PH',
      type: 'Full-time',
      salary: '25,000 / month',
      description: 'IT professional who provides first-line technical support to users, acting as a point of contact for resolving IT-related issues.'
    }
  ];

  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];
  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-40 md:pt-20">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
      {/* Hero Section with Full Width Image */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="animate-fade-in">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Team Collaboration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 animate-fade-in"></div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in-left delay-200">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed animate-slide-in-left delay-400">
                Build the future with us. We're looking for talented individuals who are passionate about technology and innovation.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-700">
                <button
                  onClick={() => {
                    document.getElementById('open-positions')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                >
                  View Open Positions
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section - Improved UI */}
      <section id="open-positions" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Open Positions</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover opportunities to grow your career and make an impact
              </p>
            </div>
          </FadeIn>

          {/* Filter Tabs */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  {dept}
                  {dept === 'All' && (
                    <span className="ml-2 text-sm opacity-75">({jobs.length})</span>
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <FadeIn key={job.id} delay={index * 50}>
                <div
                  onMouseEnter={() => setHoveredJob(job.id)}
                  onMouseLeave={() => setHoveredJob(null)}
                  className={`group relative bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    hoveredJob === job.id
                      ? 'border-primary-600 shadow-2xl -translate-y-2'
                      : 'border-slate-200 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 transition-opacity ${
                    hoveredJob === job.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  <div className="p-8">
                    {/* Job Title & Type Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors pr-4">
                        {job.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        job.type === 'Full-time'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-slate-600">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                          <MapPin size={18} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Location</div>
                          <div className="font-semibold">{job.location}</div>
                        </div>
                      </div>
                      {job.salary && (
                        <div className="flex items-center text-slate-600">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                            <Clock size={18} className="text-primary-600" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-500">Salary</div>
                            <div className="font-semibold">{job.salary}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Job Description */}
                    {job.description && (
                      <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                        {job.description}
                      </p>
                    )}

                    {/* Apply Button */}
                    <a
                      href={`mailto:support@cerventech.com?subject=Application for ${encodeURIComponent(job.title)}&body=Dear Hiring Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.`}
                      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        hoveredJob === job.id
                          ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Apply Now
                      <ArrowRight size={18} className={`transition-transform ${
                        hoveredJob === job.id ? 'translate-x-1' : ''
                      }`} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No positions found in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Benefits</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Supporting the growth and well-being of our employees. We believe that by investing in our team's personal and professional development, we build a stronger, more motivated workforce. By empowering our employees with the tools, resources, and care they need, we ensure both individual success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Competitive Salary */}
            <FadeIn delay={50}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <DollarSign className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Competitive Salary</h3>
                <p className="text-slate-600 leading-relaxed">Attractive compensation packages that recognize your skills and contributions.</p>
              </div>
            </FadeIn>

            {/* Health Insurance */}
            <FadeIn delay={100}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Health Insurance</h3>
                <p className="text-slate-600 leading-relaxed">Comprehensive health coverage for you and your family's well-being.</p>
              </div>
            </FadeIn>

            {/* Flexible Work Hours */}
            <FadeIn delay={150}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock3 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Flexible Work Hours</h3>
                <p className="text-slate-600 leading-relaxed">Work-life balance with flexible scheduling to fit your lifestyle.</p>
              </div>
            </FadeIn>

            {/* Remote Work Options */}
            <FadeIn delay={200}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Home className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Remote Work Options</h3>
                <p className="text-slate-600 leading-relaxed">Flexibility to work from home or anywhere that suits you best.</p>
              </div>
            </FadeIn>

            {/* Career Growth */}
            <FadeIn delay={250}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Career Growth</h3>
                <p className="text-slate-600 leading-relaxed">Opportunities for professional development and career advancement.</p>
              </div>
            </FadeIn>

            {/* Paid Time Off */}
            <FadeIn delay={300}>
              <div className="group bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Paid Time Off</h3>
                <p className="text-slate-600 leading-relaxed">Generous vacation days and holidays to recharge and spend time with loved ones.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
