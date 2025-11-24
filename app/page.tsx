'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Cloud, Database, ShieldCheck, Users, Globe } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <style>{`
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
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            ref={parallaxRef}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <h2 className="animate-slide-in-left delay-100 text-2xl md:text-3xl font-semibold text-primary-400 mb-2">
                We are Innovative people
              </h2>
              <h1 className="animate-slide-in-left delay-200 text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Expert IT Outsourced
              </h1>
              <h1 className="animate-slide-in-left delay-300 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-2">
                <span className="text-white">for your </span>
                <span className="text-primary-500 animate-glow">business</span>
              </h1>
            </div>
            <p className="animate-fade-in-up delay-500 text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Delivering cost-effective managed services with advanced technology.
            </p>
            <div className="animate-fade-in-up delay-700 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center justify-center">
                Let's Talk
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">200+</h3>
                <p className="text-slate-600 font-medium">Expert Developers</p>
              </div>
            </FadeIn>
            <FadeIn delay={150} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Globe size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">15+</h3>
                <p className="text-slate-600 font-medium">Countries Served</p>
              </div>
            </FadeIn>
            <FadeIn delay={300} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                <p className="text-slate-600 font-medium">Client Retention</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brief Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive IT Solutions</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Software",
                desc: "Tailor-made software solutions designed to meet your specific business requirements and challenges."
              },
              {
                icon: Cloud,
                title: "Cloud Services",
                desc: "Scalable cloud infrastructure planning, migration, and management for AWS, Azure, and Google Cloud."
              },
              {
                icon: Database,
                title: "Data Analytics",
                desc: "Transform raw data into actionable insights with our advanced analytics and business intelligence services."
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 150} className="h-full">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-primary-600 group-hover:text-white transition-colors mb-6">
                    <service.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/services" className="text-primary-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-slate-900 rounded-3xl p-12 md:p-16 text-center md:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                  <p className="text-slate-300 text-lg">
                    Join hundreds of successful companies who trust Cerventech with their digital future.
                  </p>
                </div>
                <Link href="/contact" className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
                  Get a Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
