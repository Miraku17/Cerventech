'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, MapPin, Clock, ArrowRight, Users, TrendingUp, Heart } from 'lucide-react';
import { JobPosition } from '@/types';
import FadeIn from '@/components/FadeIn';

const Career: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const jobs: JobPosition[] = [
    {
      id: 'fe-dev',
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / Manila',
      type: 'Full-time'
    },
    {
      id: 'be-dev',
      title: 'Backend Developer (Node.js)',
      department: 'Engineering',
      location: 'Manila',
      type: 'Full-time'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract'
    },
    {
      id: 'pm',
      title: 'Product Manager',
      department: 'Product',
      location: 'Cebu',
      type: 'Full-time'
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
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-slate-600">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                          <Briefcase size={18} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Department</div>
                          <div className="font-semibold">{job.department}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                          <MapPin size={18} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Location</div>
                          <div className="font-semibold">{job.location}</div>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      hoveredJob === job.id
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      Apply Now
                      <ArrowRight size={18} className={`transition-transform ${
                        hoveredJob === job.id ? 'translate-x-1' : ''
                      }`} />
                    </button>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We invest in our people with benefits that matter
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-primary-300 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Flexible Work</h3>
                <p className="text-slate-600 leading-relaxed">Remote-first culture with flexible hours to maintain work-life balance and productivity.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-primary-300 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Growth & Learning</h3>
                <p className="text-slate-600 leading-relaxed">Annual budget for courses, conferences, and books to accelerate your professional development.</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100 hover:border-primary-300 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Health & Wellness</h3>
                <p className="text-slate-600 leading-relaxed">Comprehensive health insurance and wellness programs for you and your family's wellbeing.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
