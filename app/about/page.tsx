'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Heart, Zap, CheckCircle, Eye, Rocket, Shield, Users, Award, TrendingUp } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Hero Header with Gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 py-32 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-block px-6 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/50 mb-6">
              <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Since 2004</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-slide-in-left">
                Shaping the Future of
              </span>
              <span className="block bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up delay-300">
                IT Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge technology and innovative IT managed services for over two decades.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Workspace"
                    width={600}
                    height={600}
                    className="object-cover w-full h-[600px]"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold text-primary-600 mb-1">20+</div>
                        <div className="text-sm text-slate-600">Years of Excellence</div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-xl flex items-center justify-center animate-float">
                        <Award className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Content Side */}
            <div>
              <FadeIn direction="right" delay={100}>
                <div className="inline-block px-4 py-2 rounded-full bg-primary-50 mb-6">
                  <span className="text-primary-600 font-semibold text-sm">WHO WE ARE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Your Trusted Partner in Digital Transformation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  <strong className="text-slate-900">Cerventech Inc.</strong> (formerly AREMAY Enterprise) was established in <strong className="text-slate-900">2004</strong>. We specialize in delivering cost-effective IT Managed Services that drive real business value.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Our commitment to quality, customer relationships, and continuous improvement has made us a leading provider of IT solutions across the Philippines. We align our services with your evolving business needs.
                </p>

                {/* Feature Cards */}
                <div className="space-y-4">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-transparent transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Cost-Effective Solutions</h4>
                        <p className="text-slate-600 text-sm">Delivering exceptional value through efficient and reliable IT solutions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-transparent transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Customer-Centric Approach</h4>
                        <p className="text-slate-600 text-sm">Building lasting relationships through quality service and support.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-transparent transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Continuous Innovation</h4>
                        <p className="text-slate-600 text-sm">Adapting and evolving with your changing business requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mission & Vision</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Guiding principles that drive our commitment to excellence
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <FadeIn delay={100}>
              <div className="group relative h-full">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 animate-glow"></div>

                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100 hover:border-transparent transition-all">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl mb-6 animate-float">
                    <Rocket className="text-white" size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    To empower businesses with innovative IT solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional service quality while maintaining cost-effectiveness and building lasting partnerships.
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Deliver value through innovation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Ensure cost-effective solutions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Build strong partnerships</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Vision Card */}
            <FadeIn delay={200}>
              <div className="group relative h-full">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 animate-glow"></div>

                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100 hover:border-transparent transition-all">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 animate-float" style={{ animationDelay: '1s' }}>
                    <Eye className="text-white" size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    To be the Philippines' most trusted and innovative IT services provider, recognized for transforming businesses through technology excellence and unwavering commitment to customer success.
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Lead through innovation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Excellence in service delivery</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">Trusted partner for growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values - Futuristic Dark Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/50 mb-4">
                <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                The principles that guide every decision we make and every solution we deliver.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-xl mb-6">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We don't settle for "good enough". We strive for perfection in every project, ensuring the highest quality standards.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6">
                    <Heart size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Honesty and transparency are the foundations of our long-term partnerships and business relationships.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We constantly explore new technologies and methodologies to keep our clients ahead of the curve.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
