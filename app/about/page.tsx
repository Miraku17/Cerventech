'use client';

import React from 'react';
import { Target, Heart, Zap, CheckCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-primary-600 font-semibold text-lg mb-4">We are Innovative people</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Cerventech</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We are a collective of dreamers, doers, and creators passionate about technology and its power to change the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn direction="right">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                />
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn direction="left" delay={200}>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Founded in 2015, Cerventech started with a simple mission: to bridge the gap between complex technology and business needs. We believe that technology should be an enabler, not a barrier.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Over the years, we have grown into a global team of experts, delivering high-impact solutions to startups and Fortune 500 companies alike. Our culture is built on transparency, excellence, and a relentless drive for innovation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-slate-900">Client-Centric Approach</h4>
                      <p className="text-slate-600">Your success is our success. We prioritize your goals above all else.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-slate-900">Agile Methodology</h4>
                      <p className="text-slate-600">We adapt quickly to changes and deliver value in iterative cycles.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={100}>
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 text-primary-500">
                  <Target size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-slate-400">We don't settle for "good enough". We strive for perfection in every line of code.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 text-primary-500">
                  <Heart size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-slate-400">Honesty and transparency are the foundations of our long-term partnerships.</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 text-primary-500">
                  <Zap size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-slate-400">We constantly explore new technologies to keep our clients ahead of the curve.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
