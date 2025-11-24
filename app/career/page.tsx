'use client';

import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { JobPosition } from '@/types';
import FadeIn from '@/components/FadeIn';

const Career: React.FC = () => {
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

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Build the future with us. We are always looking for talented individuals who are passionate about technology and innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
              <span className="text-sm font-medium text-slate-500">{jobs.length} jobs available</span>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <FadeIn key={job.id} delay={index * 100} direction="left">
                <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-primary-300 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-full text-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      Apply Now
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why Work With Us?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeIn delay={100}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Flexible Work</h3>
                <p className="text-slate-600">Remote-first culture with flexible hours to maintain work-life balance.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Growth & Learning</h3>
                <p className="text-slate-600">Annual budget for courses, conferences, and books to keep you growing.</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Health & Wellness</h3>
                <p className="text-slate-600">Comprehensive health insurance and wellness programs for you and your family.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
